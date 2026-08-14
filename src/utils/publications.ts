import fs from "fs";
import path from "path";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
}

export async function loadPublications(): Promise<Record<string, Publication[]>> {
  try {
    const publicationsPath = path.join(
      process.cwd(),
      "public",
      "publications.json",
    );
    const publicationsData = fs.readFileSync(publicationsPath, "utf-8");
    return JSON.parse(publicationsData);
  } catch (error) {
    console.error("Error loading publications:", error);
    return {};
  }
}

export async function getPublicationsForMember(memberName: string) {
  const publications = await loadPublications();
  return publications[memberName] || [];
}

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export async function getLabPublications(): Promise<Publication[]> {
  const publications = await loadPublications();
  const seen = new Set<string>();
  const unique: Publication[] = [];

  for (const pub of publications["Jeffrey Ichnowski"] || []) {
    const key = normalizeTitle(pub.title);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(pub);
  }

  return unique.sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));
}

export async function getRecentLabPublications(limit = 12) {
  const publications = await getLabPublications();
  return publications.slice(0, limit);
}
