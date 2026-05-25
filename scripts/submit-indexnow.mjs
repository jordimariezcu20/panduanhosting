/**
 * submit-indexnow.mjs
 * Submits all sitemap URLs to IndexNow (Bing, Yandex, Naver).
 * Run after every production deploy:
 *   node scripts/submit-indexnow.mjs
 *
 * Requires INDEXNOW_KEY env var or uses the key below.
 */

const SITE = 'https://panduanhosting.id';
const KEY = process.env.INDEXNOW_KEY ?? '53085a97cc1ce5ff67c6e250006f11ed';
const SITEMAP_URL = `${SITE}/sitemap-0.xml`;

// IndexNow endpoints (all accept the same payload)
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

async function submitUrls(urls) {
  const payload = {
    host: new URL(SITE).hostname,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`[${endpoint}] → HTTP ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`[${endpoint}] → Error: ${err.message}`);
    }
  }
}

console.log('Fetching sitemap...');
const urls = await fetchSitemapUrls();
console.log(`Found ${urls.length} URLs to submit.`);

if (urls.length === 0) {
  console.error('No URLs found — aborting.');
  process.exit(1);
}

console.log('Submitting to IndexNow...');
await submitUrls(urls);
console.log('Done.');
