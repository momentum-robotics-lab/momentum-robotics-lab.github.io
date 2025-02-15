import os
import re
import time
import markdown
from scholarly import scholarly
from jinja2 import Template


# Function to read and parse member files
def read_member_files(directory):
    member_files = []
    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            with open(os.path.join(directory, filename), 'r') as file:
                content = file.read()
                metadata = {}
                # Extracting key details using regex
                metadata['name'] = re.search(r'title:\s*(.*)', content).group(1)
                profile_name = re.search(r'profile_name:\s*(.*)', content)
                if not profile_name:
                    raise ValueError(f"Profile name not found in {filename}")
                metadata['profile_name'] = profile_name.group(1)
                metadata['scholar'] = re.search(r'scholar:\s*(.*)', content).group(1)
                member_files.append(metadata)
    return member_files


# Function to retrieve publications from Google Scholar
def get_publications(scholar_id):
    author = scholarly.search_author_id(scholar_id)
    publications = scholarly.fill(author)['publications']
    return [scholarly.fill(publication) for publication in publications]


# Function to generate markdown content for publications
def generate_markdown(publication):
    template = Template("""---
layout: publication
title: "{{ title }}"
authors:
{% for author in authors %}
    - {{ author }}
{% endfor %}
authors-short:
{% for author in authors_short %}
    - {{ author }}
{% endfor %}
year: {{ year }}
journal: "{{ journal }}"
ref: "{{ ref }}"
doi: {{ doi }}
---

{{ abstract }}
    """)
    if 'title' not in publication['bib']:
        raise ValueError(f'No title found for "{publication["bib"]}"')
    if 'author' not in publication['bib']:
        raise ValueError(f'No author found for "{publication["bib"]}"')
    
    authors = publication['bib']['author'].split(' and ')
    authors_short = []
    for author in authors:
        author_parts = author.split(' ')
        author_name = ''
        for index, author_part in enumerate(author_parts):
            if index == len(author_parts) - 1:
                author_name += author_part
            else:
                author_name += author_part[0] + '. '
        authors_short.append(author_name)
    if 'conference' in publication['bib']:
        medium = publication['bib']['conference']
    elif 'journal' in publication['bib']:
        medium = publication['bib']['journal']
    else:
        medium = None

    if 'pub_year' not in publication['bib']:
        print(f'No year found for "{publication["bib"]["title"]}"')
        year = None
    else:
        year = publication['bib']['pub_year']

    if 'abstract' not in publication['bib']:
        print(f'No abstract found for "{publication["bib"]["title"]}"')
        abstract = None
    else:
        abstract = publication['bib']['abstract']
    
    if 'pub_url' not in publication['bib']:
        print(f'No URL found for "{publication["bib"]["title"]}"')
        doi = None
    else:
        doi = publication['bib']['pub_url']

    # Set the context for the markdown
    context = {
        'title': publication['bib']['title'],
        'authors': authors,
        'authors_short': authors_short,
        'year': year,
        'journal': medium,
        'ref': '',
        'doi': doi,
        'abstract': abstract
    }
    
    return template.render(context)


# Function to save publications as markdown files
def save_publications_as_markdown(publications, directory):
    for pub in publications:
        markdown_content = generate_markdown(pub)
        # Create a valid filename from the title
        pubyear = pub['bib']['pub_year'] if 'pub_year' in pub['bib'] else 1990
        filename = f"{pubyear}-01-01-" + re.sub(r'[^a-zA-Z0-9]', '-', pub['bib']['title'].lower()) + '.md'
        with open(os.path.join(directory, filename), 'w') as file:
            file.write(markdown_content)


# Main script to iterate through members, retrieve publications, and generate markdown files
def main():
    directory = 'members/_posts/'  # Directory with the member files
    output_directory = 'publications/_posts/'  # Output directory for publication markdowns
    
    # Ensure the output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    
    # Read member files
    members = read_member_files(directory)
    
    for member in members:
        print(f"Processing publications for {member['profile_name']}...")
        if member['name'] != 'Jan Oberst':
            continue
        
        # Get publications from Google Scholar
        try:
            publications = get_publications(member['scholar'])
        except Exception as e:
            print(f"Failed to retrieve publications for {member['profile_name']}: {e}")
            continue
        
        # Save the publications to markdown files
        save_publications_as_markdown(publications, output_directory)
        
        # Respectful delay to avoid overloading Scholar
        time.sleep(0.5)


if __name__ == '__main__':
    main()
