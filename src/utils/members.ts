export function memberSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function memberPhotoAlt(name: string, role: string) {
  return `${name}, ${role} at CMU Momentum Lab`;
}

export function memberMetaDescription(
  member: {
    name: string;
    title?: string;
    research?: string;
    degree?: string;
  },
  role: string,
) {
  const focus = member.research || member.title || member.degree;
  const base = `${member.name} is a ${role} at Carnegie Mellon University's Momentum Lab`;
  const text = focus ? `${base} researching ${focus}.` : `${base}.`;
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

export function memberSameAs(member: {
  website?: string;
  googleScholar?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}) {
  return [
    member.website,
    member.googleScholar,
    member.linkedin,
    member.twitter,
    member.github,
  ].filter((url): url is string => Boolean(url));
}
