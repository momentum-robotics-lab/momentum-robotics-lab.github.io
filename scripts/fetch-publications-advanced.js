#!/usr/bin/env node

/**
 * Advanced Publications Fetcher Script
 *
 * This script uses Puppeteer to scrape Google Scholar pages for publications.
 * Requires puppeteer to be installed: npm install puppeteer
 *
 * Usage: node scripts/fetch-publications-advanced.js
 */

import { siteConfig } from './config.js';
import fs from 'fs';
import path from 'path';

// Import puppeteer (you'll need to install it first)
// npm install puppeteer
let puppeteer;
try {
  puppeteer = await import('puppeteer');
} catch (error) {
  console.log('Puppeteer not installed. Please run: npm install puppeteer');
  console.log('Falling back to mock data...');
}

// Rate limiting helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to extract Google Scholar user ID from URL
function extractScholarId(url) {
  const match = url.match(/user=([^&]+)/);
  return match ? match[1] : null;
}

// Function to scrape Google Scholar publications
async function fetchPublicationsFromScholar(scholarId, memberName) {
  if (!puppeteer) {
    console.log(`Mocking publications for ${memberName} (puppeteer not available)`);
    return [];
  }

  console.log(`Fetching publications for ${memberName} (${scholarId})...`);

  const browser = await puppeteer.default.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set user agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Navigate to Google Scholar page
    const url = `https://scholar.google.com/citations?user=${scholarId}&hl=en&oi=ao`;
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for publications to load
    await page.waitForSelector('.gsc_a_tr', { timeout: 10000 });

    // Keep clicking "Show more" to load all publications
    const moreSelector = '#gsc_bpf_more';
    for (let i = 0; i < 50; i++) { // hard cap to avoid infinite loops
      const hasMoreButton = await page.$(moreSelector);
      if (!hasMoreButton) break;
      const isDisabled = await page.$eval(
        moreSelector,
        el => el.hasAttribute('disabled') || el.classList.contains('gs_dis') || (window.getComputedStyle(el).display === 'none')
      ).catch(() => true);
      if (isDisabled) break;
      await page.click(moreSelector);
      // Wait for additional rows to append
      await (async (ms) => new Promise(res => setTimeout(res, ms)))(1200);
    }

    // Extract publication data (all loaded rows)
    const publications = await page.evaluate(() => {
      const pubElements = document.querySelectorAll('.gsc_a_tr');
      const results = [];

      pubElements.forEach((element, index) => {
        try {
          const titleElement = element.querySelector('.gsc_a_at');
          const authorsElement = element.querySelector('.gs_gray');
          const venueElement = element.querySelector('.gs_gray:last-child');
          const yearElement = element.querySelector('.gsc_a_y span');

          if (titleElement) {
            const title = titleElement.textContent.trim();
            const url = titleElement.href || '#';
            const authors = authorsElement ? authorsElement.textContent.trim() : '';
            const venue = venueElement ? venueElement.textContent.trim() : '';
            const year = yearElement ? yearElement.textContent.trim() : '';

            results.push({
              title,
              authors,
              venue,
              year,
              url
            });
          }
        } catch (error) {
          console.log(`Error parsing publication ${index}:`, error.message);
        }
      });

      return results;
    });

    // Sort by year descending (newest first)
    publications.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));

    console.log(`Found ${publications.length} publications for ${memberName}`);
    return publications;

  } catch (error) {
    console.error(`Error scraping publications for ${memberName}:`, error.message);
    return [];
  } finally {
    await browser.close();
  }
}

// Main function to fetch all publications
async function fetchAllPublications() {
  console.log('Starting advanced publications fetch...');

  const allMembers = [
    siteConfig.members.principalInvestigator,
    ...siteConfig.members.phdStudents,
    ...siteConfig.members.mastersStudents,
    ...siteConfig.members.undergraduateStudents,
    ...siteConfig.members.alumni
  ];

  const outputPath = path.join(process.cwd(), 'public', 'publications.json');
  let existing = {};
  try {
    existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
  } catch {
    existing = {};
  }

  const publicationsData = {};

  for (const member of allMembers) {
    if (member.googleScholar) {
      const scholarId = extractScholarId(member.googleScholar);
      if (scholarId) {
        try {
          const publications = await fetchPublicationsFromScholar(scholarId, member.name);
          if (publications.length > 0) {
            publicationsData[member.name] = publications;
          } else if (existing[member.name]?.length) {
            console.log(`Keeping previous ${existing[member.name].length} publications for ${member.name}`);
            publicationsData[member.name] = existing[member.name];
          } else {
            publicationsData[member.name] = [];
          }
        } catch (error) {
          console.error(`Error fetching publications for ${member.name}:`, error.message);
          publicationsData[member.name] = existing[member.name] || [];
        }

        // Rate limiting - wait between requests
        await delay(3000);
      }
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(publicationsData, null, 2));

  console.log(`Publications data saved to ${outputPath}`);
  console.log('Advanced publications fetch complete!');
}

// Run the script
fetchAllPublications().catch(console.error);
