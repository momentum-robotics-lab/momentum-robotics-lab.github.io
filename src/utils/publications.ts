import fs from "fs";
import path from "path";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
}

/**
 * Confirmed accepted venues (proceedings or the lab's selected-works page).
 * Do not add 2026 conference names from Google Scholar alone — Scholar often
 * stores the submission target before acceptance.
 */
const VENUE_OVERRIDES: { match: RegExp; venue: string; year: string }[] = [
  { match: /2505\.05517|web2grasp/, venue: "IROS", year: "2026" },
  { match: /rayst3r/, venue: "NeurIPS", year: "2025" },
  { match: /2501\.01715|cloth[\s-]?splatting/, venue: "CoRL", year: "2024" },
  { match: /2503\.01078|kinesoft/, venue: "CoRL", year: "2025" },
  { match: /2407\.00548|korol/, venue: "CoRL", year: "2024" },
];

const STOPWORDS = new Set([
  "a",
  "as",
  "an",
  "the",
  "of",
  "for",
  "and",
  "to",
  "in",
  "on",
  "with",
  "from",
  "via",
  "using",
  "toward",
  "towards",
]);

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
  const memberPubs = publications[memberName] || [];
  const catalog = Object.values(publications).flat();
  return finalizePublications(memberPubs, catalog);
}

export async function getLabPublications(): Promise<Publication[]> {
  const publications = await loadPublications();
  const jeff = publications["Jeffrey Ichnowski"] || [];
  const catalog = Object.values(publications).flat();
  return finalizePublications(jeff, catalog);
}

export async function getRecentLabPublications(limit = 12) {
  const pubs = await getLabPublications();
  return pubs.slice(0, limit);
}

function finalizePublications(
  pubs: Publication[],
  catalog: Publication[],
): Publication[] {
  const enriched = pubs.map((pub) =>
    formatPublication(enrichVenue(pub, catalog)),
  );
  return dedupePublications(enriched).sort((a, b) => {
    const yearDiff = Number(b.year || 0) - Number(a.year || 0);
    if (yearDiff) return yearDiff;
    return arxivSortKey(b) - arxivSortKey(a) || a.title.localeCompare(b.title);
  });
}

function arxivSortKey(pub: Publication) {
  const id = extractArxiv(`${pub.venue} ${pub.url}`);
  if (!id) return 0;
  const [yy, num] = id.split(".").map(Number);
  return (yy || 0) * 100000 + (num || 0);
}

function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/\. in \d{4} ieee$/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function titleTokens(title: string) {
  return normalizeTitle(title)
    .split(" ")
    .filter((token) => token && !STOPWORDS.has(token));
}

function extractArxiv(text: string) {
  const match = text.match(/arxiv[:\s]*(\d{4}\.\d{4,5})/i);
  return match ? match[1] : "";
}

function projectKey(title: string) {
  const head = title.split(/[:–—]/)[0].trim().toLowerCase();
  if (
    head &&
    head.length < 36 &&
    /^[a-z0-9]+(?:[-\s][a-z0-9]+)*$/i.test(head) &&
    /[0-9]|-/.test(head)
  ) {
    return head.replace(/[^a-z0-9]/g, "");
  }
  return "";
}

function isPreprint(venue: string) {
  const value = (venue || "").toLowerCase();
  if (!value.trim()) return true;
  return (
    value.includes("arxiv") ||
    value.includes("preprint") ||
    value.includes("e-prints") ||
    value.includes("techrxiv") ||
    /\bcorr\b/.test(value)
  );
}

function looksPublished(venue: string, year: string) {
  if (isPreprint(venue) || !venue.trim()) return false;
  if (/\d{1,5}\s*[–-]\s*\d{1,5}/.test(venue)) return true;
  if (/\d+\s*\(\d+\)/.test(venue)) return true;
  const parsedYear = Number(
    year || venue.match(/(19|20)\d{2}/g)?.at(-1) || 0,
  );
  // A 2026 conference name with no pages is often the submission target, not an acceptance.
  return parsedYear > 0 && parsedYear < 2026;
}

function jaccard(a: string[], b: string[]) {
  const setA = new Set(a);
  const setB = new Set(b);
  let overlap = 0;
  for (const token of setA) {
    if (setB.has(token)) overlap += 1;
  }
  const union = setA.size + setB.size - overlap;
  return union === 0 ? 0 : overlap / union;
}

function areDuplicates(a: Publication, b: Publication) {
  const arxivA = extractArxiv(`${a.venue} ${a.title}`);
  const arxivB = extractArxiv(`${b.venue} ${b.title}`);
  if (arxivA && arxivB && arxivA === arxivB) return true;

  const keyA = normalizeTitle(a.title);
  const keyB = normalizeTitle(b.title);
  if (keyA && keyA === keyB) return true;

  const projectA = projectKey(a.title);
  const projectB = projectKey(b.title);
  if (projectA && projectB && projectA !== projectB) return false;

  const tokensA = titleTokens(a.title);
  const tokensB = titleTokens(b.title);
  const similarity = jaccard(tokensA, tokensB);

  if (projectA && projectA === projectB && similarity >= 0.38) return true;
  if (similarity >= 0.72) return true;
  if (
    tokensA.length >= 5 &&
    tokensB.length >= 5 &&
    tokensA.slice(0, 5).join(" ") === tokensB.slice(0, 5).join(" ")
  ) {
    return true;
  }
  if (
    similarity >= 0.55 &&
    a.year &&
    a.year === b.year &&
    prettyVenue(a.venue, a.year) === prettyVenue(b.venue, b.year) &&
    !isPreprint(a.venue) &&
    !isPreprint(b.venue)
  ) {
    return true;
  }
  return false;
}

function publicationScore(pub: Publication) {
  let score = 0;
  const venue = pub.venue || "";
  if (!isPreprint(venue) && venue.trim() && looksPublished(venue, pub.year)) {
    score += 100;
  }
  if (/companion|workshop/i.test(venue)) score -= 45;
  if (pub.year && pub.year !== "0") score += Number(pub.year);
  if (/[….]{3}|…/.test(venue) || venue.endsWith(" ")) score -= 8;
  if (/[A-Z]/.test(pub.title.slice(1))) score += 2;
  score += Math.min(pub.title.length, 90) / 20;
  return score;
}

function pickBetter(a: Publication, b: Publication) {
  return publicationScore(b) > publicationScore(a) ? b : a;
}

function lookupOverride(pub: Publication) {
  const haystack = `${pub.title} ${pub.venue}`.toLowerCase();
  return VENUE_OVERRIDES.find((entry) => entry.match.test(haystack));
}

function enrichVenue(pub: Publication, catalog: Publication[]): Publication {
  const override = lookupOverride(pub);
  if (override) {
    return { ...pub, venue: override.venue, year: override.year };
  }

  if (!isPreprint(pub.venue)) return pub;

  const better = catalog.find(
    (candidate) =>
      candidate !== pub &&
      looksPublished(candidate.venue, candidate.year) &&
      areDuplicates(pub, candidate),
  );
  if (better) {
    return {
      ...pub,
      venue: better.venue,
      year: better.year || pub.year,
      title: publicationScore(better) > publicationScore(pub) ? better.title : pub.title,
    };
  }

  return pub;
}

function prettyVenue(venue: string, year: string) {
  const cleaned = venue
    .replace(/\u00a0/g, " ")
    .replace(/[…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const arxiv = extractArxiv(cleaned);
  const yearFromVenue = cleaned.match(/(19|20)\d{2}/g)?.at(-1) || "";
  const resolvedYear = year && year !== "0" ? year : yearFromVenue;
  const workshop = /workshop/i.test(cleaned);

  if (isPreprint(cleaned)) {
    return arxiv ? `arXiv:${arxiv}` : "arXiv preprint";
  }

  const patterns: [RegExp, string][] = [
    [/neural information processing systems|\bneurips\b|\bnips\b/i, "NeurIPS"],
    [/conference on robot learning|\bcorl\b/i, "CoRL"],
    [/intelligent robots and systems|\biros\b/i, "IROS"],
    [/international conference on robotics and automation|\bicra\b/i, "ICRA"],
    [/robotics:\s*science and systems|\brss\b/i, "RSS"],
    [/human-robot interaction|\bhri\b/i, "HRI"],
    [/american control conference|\bacc\b/i, "ACC"],
    [/automation science(?: and engineering)?|\bcase\b/i, "CASE"],
    [/algorithmic foundations of robotics|\bwafr\b/i, "WAFR"],
    [/humanoid robots|\bhumanoids\b/i, "Humanoids"],
    [/robotics and automation letters/i, "IEEE RA-L"],
    [/international journal of robotics research|\bijrr\b/i, "IJRR"],
    [/ieee transactions on robotics/i, "IEEE T-RO"],
    [/ieee transactions on automation science/i, "IEEE T-ASE"],
    [/science robotics/i, "Science Robotics"],
    [/international symposium of robotics research|\bisrr\b/i, "ISRR"],
    [/international conference on learning representations|\biclr\b/i, "ICLR"],
  ];

  for (const [pattern, name] of patterns) {
    if (pattern.test(cleaned) || pattern.test(venue)) {
      const label = resolvedYear ? `${name} ${resolvedYear}` : name;
      const alreadyWorkshop = name === "WAFR";
      return workshop && !alreadyWorkshop ? `${label} Workshop` : label;
    }
  }

  const withoutYear = cleaned.replace(/,?\s*\d{4}\s*$/, "").replace(/,\s*$/, "");
  if (resolvedYear && !withoutYear.includes(resolvedYear)) {
    return `${withoutYear}, ${resolvedYear}`;
  }
  return withoutYear || cleaned;
}

function paperUrl(pub: Publication, arxiv: string) {
  if (arxiv && /scholar\.google/.test(pub.url || "")) {
    return `https://arxiv.org/abs/${arxiv}`;
  }
  return pub.url;
}

function formatPublication(pub: Publication): Publication {
  const override = lookupOverride(pub);
  const arxiv = extractArxiv(`${pub.venue} ${pub.url}`);
  if (override) {
    return {
      ...pub,
      year: override.year,
      venue: prettyVenue(override.venue, override.year),
      url: paperUrl(pub, arxiv),
    };
  }

  const yearFromVenue = (pub.venue || "").match(/(19|20)\d{2}/g)?.at(-1) || "";
  const year = pub.year && pub.year !== "0" ? pub.year : yearFromVenue;

  // Don't display a 2026 conference name as accepted unless it has proceedings metadata.
  if (!looksPublished(pub.venue, year) && (arxiv || Number(year) >= 2026)) {
    return {
      ...pub,
      year,
      venue: arxiv ? `arXiv:${arxiv}` : "arXiv preprint",
      url: paperUrl(pub, arxiv),
    };
  }

  return {
    ...pub,
    year,
    venue: prettyVenue(pub.venue, year),
    url: paperUrl(pub, arxiv),
  };
}

function dedupePublications(pubs: Publication[]) {
  const unique: Publication[] = [];
  for (const pub of pubs) {
    if (!pub.title?.trim()) continue;
    const index = unique.findIndex((existing) => areDuplicates(existing, pub));
    if (index === -1) {
      unique.push(pub);
    } else {
      unique[index] = pickBetter(unique[index], pub);
    }
  }
  return unique;
}
