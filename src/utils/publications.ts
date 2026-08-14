import fs from "fs";
import path from "path";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
}

type VenueOverride = { venue: string; year: string };

/** Jeffrey Ichnowski joined CMU's Robotics Institute in January 2023. */
const CMU_START_YEAR = 2023;

const KNOWN_VENUE_NAMES = [
  "NeurIPS",
  "CoRL",
  "IROS",
  "ICRA",
  "RSS",
  "HRI",
  "ACC",
  "CASE",
  "WAFR",
  "Humanoids",
  "IEEE RA-L",
  "IJRR",
  "IEEE T-RO",
  "IEEE T-ASE",
  "Science Robotics",
  "ISRR",
  "ICLR",
];

/**
 * Confirmed accepted venues (proceedings, project pages, or arXiv comments).
 * Do not add 2026 conference names from Google Scholar alone — Scholar often
 * stores the submission target before acceptance.
 */
const VENUE_OVERRIDES: { match: RegExp; venue: string; year: string }[] = [
  { match: /2505\.05517|web2grasp/, venue: "IROS", year: "2026" },
  { match: /rayst3r/, venue: "NeurIPS", year: "2025" },
  { match: /2501\.01715|cloth[\s-]?splatting/, venue: "CoRL", year: "2024" },
  { match: /2503\.01078|kinesoft/, venue: "CoRL", year: "2025" },
  { match: /2407\.00548|korol/, venue: "CoRL", year: "2024" },
  { match: /2311\.05600|fogros2-config|fogros2-sky/, venue: "ICRA", year: "2024" },
  { match: /2510\.06199|dymo-hair/, venue: "ICRA", year: "2026" },
  { match: /2511\.06202|expres-vla/, venue: "ICRA", year: "2026" },
  { match: /2608\.09127/, venue: "RSS", year: "2026" },
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

const arxivVenueCache = new Map<string, VenueOverride>();
const arxivFetchedIds = new Set<string>();

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
  const pubs = await finalizePublications(memberPubs, catalog);
  if (memberName === "Jeffrey Ichnowski") {
    return pubs.filter(isCmuEra);
  }
  return pubs;
}

export async function getLabPublications(): Promise<Publication[]> {
  const publications = await loadPublications();
  const jeff = publications["Jeffrey Ichnowski"] || [];
  const catalog = Object.values(publications).flat();
  const pubs = await finalizePublications(jeff, catalog);
  return pubs.filter(isCmuEra);
}

export async function getRecentLabPublications(limit = 12) {
  const pubs = await getLabPublications();
  return pubs.slice(0, limit);
}

async function finalizePublications(
  pubs: Publication[],
  catalog: Publication[],
): Promise<Publication[]> {
  await loadArxivVenues(pubs);
  const enriched = pubs.map((pub) =>
    formatPublication(enrichVenue(pub, catalog)),
  );
  return dedupePublications(enriched).sort((a, b) => {
    const yearDiff = Number(b.year || 0) - Number(a.year || 0);
    if (yearDiff) return yearDiff;
    return arxivSortKey(b) - arxivSortKey(a) || a.title.localeCompare(b.title);
  });
}

function publicationArxiv(pub: Publication) {
  return extractArxiv(`${pub.title} ${pub.venue} ${pub.url}`);
}

function arxivSortKey(pub: Publication) {
  const id = publicationArxiv(pub);
  if (!id) return 0;
  const [yy, num] = id.split(".").map(Number);
  return (yy || 0) * 100000 + (num || 0);
}

function arxivYear(id: string) {
  const yy = Number(id.slice(0, 2));
  if (Number.isNaN(yy)) return 0;
  return yy >= 90 ? 1900 + yy : 2000 + yy;
}

function resolvedYear(pub: Publication) {
  const fromField = Number(pub.year);
  if (fromField > 1900) return fromField;
  const fromVenue = Number((pub.venue || "").match(/(19|20)\d{2}/g)?.at(-1) || 0);
  if (fromVenue > 1900) return fromVenue;
  const id = publicationArxiv(pub);
  return id ? arxivYear(id) : 0;
}

function isCmuEra(pub: Publication) {
  return resolvedYear(pub) >= CMU_START_YEAR;
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
  const match = text.match(
    /(?:arxiv[:\s]+|arxiv\.org\/(?:abs|pdf)\/)(\d{4}\.\d{4,5})/i,
  );
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

function titleSubtitle(title: string) {
  const parts = title.split(/[:–—]/).slice(1);
  const subtitle = normalizeTitle(parts.join(" "));
  return subtitle.length >= 24 ? subtitle : "";
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
  const arxivA = publicationArxiv(a);
  const arxivB = publicationArxiv(b);
  if (arxivA && arxivB && arxivA === arxivB) return true;

  const overrideA = overrideKey(a);
  const overrideB = overrideKey(b);
  if (overrideA && overrideA === overrideB) return true;

  const keyA = normalizeTitle(a.title);
  const keyB = normalizeTitle(b.title);
  if (keyA && keyA === keyB) return true;

  const subtitleA = titleSubtitle(a.title);
  const subtitleB = titleSubtitle(b.title);
  if (subtitleA && subtitleA === subtitleB) return true;

  const projectA = projectKey(a.title);
  const projectB = projectKey(b.title);
  if (projectA && projectB && projectA === projectB) return true;
  if (projectA && projectB && projectA !== projectB) return false;

  const tokensA = titleTokens(a.title);
  const tokensB = titleTokens(b.title);
  const similarity = jaccard(tokensA, tokensB);
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
  if (lookupOverride(pub)) score += 80;
  if (/companion|workshop/i.test(venue)) score -= 45;
  if (/fogros2-sky/i.test(pub.title)) score -= 25;
  if (pub.year && pub.year !== "0") score += Number(pub.year);
  if (/[….]{3}|…/.test(venue) || venue.endsWith(" ")) score -= 8;
  score += (pub.title.match(/[A-Z]/g) || []).length;
  score += Math.min(pub.title.length, 90) / 20;
  return score;
}

function pickBetter(a: Publication, b: Publication) {
  const winner = publicationScore(b) > publicationScore(a) ? b : a;
  const other = winner === a ? b : a;
  const winnerCaps = (winner.title.match(/[A-Z]/g) || []).length;
  const otherCaps = (other.title.match(/[A-Z]/g) || []).length;
  return otherCaps > winnerCaps ? { ...winner, title: other.title } : winner;
}

function lookupOverride(pub: Publication): VenueOverride | undefined {
  const haystack = `${pub.title} ${pub.venue} ${pub.url}`.toLowerCase();
  const manual = VENUE_OVERRIDES.find((entry) => entry.match.test(haystack));
  if (manual) return { venue: manual.venue, year: manual.year };
  const id = publicationArxiv(pub);
  return id ? arxivVenueCache.get(id) : undefined;
}

function overrideKey(pub: Publication) {
  const haystack = `${pub.title} ${pub.venue} ${pub.url}`.toLowerCase();
  const index = VENUE_OVERRIDES.findIndex((entry) => entry.match.test(haystack));
  if (index >= 0) return `manual:${index}`;
  const id = publicationArxiv(pub);
  if (id && arxivVenueCache.has(id)) return `arxiv:${id}`;
  return "";
}

function enrichVenue(pub: Publication, catalog: Publication[]): Publication {
  const override = lookupOverride(pub);
  let result = override
    ? {
        ...pub,
        venue: override.venue,
        year: override.year,
        url: paperUrl(pub, publicationArxiv(pub)),
      }
    : pub;

  const best = catalog.reduce((acc, candidate) => {
    if (candidate === pub || !areDuplicates(acc, candidate)) return acc;
    return pickBetter(acc, candidate);
  }, result);

  if (best === result) return result;

  const keepVenue = Boolean(override) || looksPublished(result.venue, result.year);
  return {
    ...result,
    title: publicationScore(best) >= publicationScore(result) ? best.title : result.title,
    year:
      Number(best.year || 0) > Number(result.year || 0) ? best.year : result.year,
    venue: keepVenue
      ? result.venue
      : looksPublished(best.venue, best.year)
        ? best.venue
        : result.venue,
  };
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
  const arxiv = publicationArxiv(pub);
  if (override) {
    const year =
      override.year && override.year !== "0"
        ? override.year
        : arxiv
          ? String(arxivYear(arxiv))
          : pub.year;
    return {
      ...pub,
      year,
      venue: prettyVenue(override.venue, year),
      url: paperUrl(pub, arxiv),
    };
  }

  const yearFromVenue = (pub.venue || "").match(/(19|20)\d{2}/g)?.at(-1) || "";
  const year =
    pub.year && pub.year !== "0"
      ? pub.year
      : yearFromVenue || (arxiv ? String(arxivYear(arxiv)) : "");

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

function parseArxivVenueNote(
  comment: string,
  journalRef: string,
): VenueOverride | undefined {
  const text = [journalRef, comment].filter(Boolean).join(". ");
  if (!text.trim()) return undefined;

  const submitted = /\bsubmitted\b|\bunder review\b/i.test(text);
  const accepted =
    /\baccepted\b|\bpublished\b|\bto appear\b|\bto be published\b|\bin proceedings\b|\bappeared\b/i.test(
      text,
    );
  if (submitted && !accepted) return undefined;

  const year = text.match(/(19|20)\d{2}/g)?.at(-1) || "";
  if (!year) return undefined;
  if (!journalRef && !accepted && Number(year) >= 2026) return undefined;

  const formatted = prettyVenue(text, year);
  if (!KNOWN_VENUE_NAMES.some((name) => formatted.startsWith(name))) {
    return undefined;
  }

  const venue = formatted.replace(/\s+\d{4}(?=\s+Workshop|$)/, "").trim();
  return { venue: venue || formatted, year };
}

async function loadArxivVenues(pubs: Publication[]) {
  const ids = [
    ...new Set(pubs.map(publicationArxiv).filter((id) => id && !arxivFetchedIds.has(id))),
  ];
  if (!ids.length) return;

  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    try {
      const url = `https://export.arxiv.org/api/query?id_list=${batch.join(",")}&max_results=${batch.length}`;
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "MomentumLabWebsite/1.0 (https://github.com/momentum-robotics-lab/momentum-robotics-lab.github.io)",
        },
      });
      if (!response.ok) continue;
      const xml = await response.text();
      const entries = xml.split("<entry>").slice(1);
      for (const entry of entries) {
        const id = extractArxiv(entry);
        if (!id) continue;
        arxivFetchedIds.add(id);
        const comment =
          entry.match(/<arxiv:comment[^>]*>([\s\S]*?)<\/arxiv:comment>/)?.[1] ||
          "";
        const journalRef =
          entry.match(
            /<arxiv:journal_ref[^>]*>([\s\S]*?)<\/arxiv:journal_ref>/,
          )?.[1] || "";
        const parsed = parseArxivVenueNote(
          decodeXml(comment),
          decodeXml(journalRef),
        );
        if (parsed) arxivVenueCache.set(id, parsed);
      }
      for (const id of batch) arxivFetchedIds.add(id);
    } catch (error) {
      console.warn("Could not load arXiv venue metadata:", error);
    }
  }
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
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
