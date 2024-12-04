import os
import re
import requests
from bs4 import BeautifulSoup
from datetime import datetime

def extract_arxiv_metadata(url):
    """Extract metadata from an arXiv link."""
    arxiv_id = url.split("/")[-1]
    api_url = f"http://export.arxiv.org/api/query?id_list={arxiv_id}"
    response = requests.get(api_url)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "xml")  # Use 'xml' parser for arXiv API response
        entry = soup.find("entry")
        
        if entry:
            metadata = {
                "title": entry.find("title").text.strip(),
                "authors": [author.find("name").text for author in entry.find_all("author")],
                "year": entry.find("published").text[:4] if entry.find("published") else None,
                "doi": entry.find("arxiv:doi").text if entry.find("arxiv:doi") else None,
                "abstract": entry.find("summary").text.strip() if entry.find("summary") else None,
                "date": entry.find("published").text[:10] if entry.find("published") else None,
            }
            return metadata
    return {}

def format_authors(authors):
    """Format authors and short authors list."""
    full_names = authors
    short_names = []
    for author in authors:
        names = author.split()
        initials = []
        for name in names[:-1]:
            initials.append(name[0] + ".")
        initials.append(names[-1])
        short_names.append(" ".join(initials))
    return full_names, short_names

def abbreviate_title(title):
    """Abbreviate the title by taking the first word of each main word."""
    words = re.findall(r'\b\w+', title)
    abbreviations = [word[:4].lower() for word in words[:4]]  # Limit to the first 4 words
    return "-".join(abbreviations)

def generate_markdown(metadata, journal):
    """Generate the markdown based on extracted metadata."""
    full_authors, short_authors = format_authors(metadata.get("authors", []))
    
    # Build the markdown content
    markdown = (
        "---\n"
        "layout: publication\n"
        f"title: \"{metadata.get('title', '')}\"\n"
        f"image: /images/publications/{abbreviate_title(metadata.get('title', ''))}.png\n"
        "authors:\n"
        + "".join(f" - {author}\n" for author in full_authors) +
        "authors-short:\n"
        + "".join(f" - {author}\n" for author in short_authors) +
        f"year: {metadata.get('year', '')}\n"
        f"journal: \"{journal}\"\n"
        f"ref: \"{metadata.get('ref', '')}\"\n"
        f"doi: {metadata.get('doi', '')}\n"
        "---\n\n"
        f"{metadata.get('abstract', '')}\n"
    )
    return markdown.strip()

def save_markdown_file(directory, date, title, markdown):
    """Save the markdown file to the specified directory with the correct filename."""
    title_abbr = abbreviate_title(title)
    filename = f"{date}-{title_abbr}.md"
    filepath = os.path.join(directory, filename)
    
    # Ensure the directory exists
    os.makedirs(directory, exist_ok=True)
    
    # Write the markdown content to the file
    with open(filepath, "w", encoding="utf-8") as file:
        file.write(markdown)
    
    print(f"Markdown file saved to: {filepath}")

def main():
    url = input("Enter the arXiv link: ")
    journal = input("Enter the journal name: ")
    target_directory = input("Enter the target directory to save the file: ")
    
    if "arxiv.org" in url:
        metadata = extract_arxiv_metadata(url)
        if metadata:
            markdown = generate_markdown(metadata, journal)
            save_markdown_file(target_directory, metadata["date"], metadata["title"], markdown)
        else:
            print("Failed to retrieve metadata from the provided URL.")
    else:
        print("Unsupported URL. Please provide a valid arXiv link.")

if __name__ == "__main__":
    main()
