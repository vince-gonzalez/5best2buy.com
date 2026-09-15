// inject-itemlist.js — give every shelf an ItemList.
//
//   node inject-itemlist.js            dry run
//   node inject-itemlist.js --apply
//
// 523 of 572 shelves emit ItemList; 49 older hand-built ones emit only
// Article + BreadcrumbList + FAQPage. A "5 best X" page without an ItemList is
// the most obvious structured-data miss there is, and it matters more here than
// usual: GPTBot hit this domain 2,702 times in eight days and cites nothing.
// The crawlers are not missing the site, they are reading prose where a machine
// wants a list.
//
// The existing shape carries only name and position, so this matches it exactly
// rather than inventing a richer one -- two different ItemList shapes across one
// site is worse than one plain shape everywhere. It also adds `url` per maker,
// which the good shelves omit and which is the one field that makes an entry
// resolvable.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const APPLY = process.argv.includes('--apply');

const deent = s => String(s || '').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'")
  .replace(/&quot;/g, '"').replace(/&mdash;/g, '\u2014').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

let scanned = 0, already = 0, fixed = 0, refreshed = 0, noMakers = 0;
const sample = [];

for (const slug of fs.readdirSync(path.join(ROOT, 'hunt'))) {
  const p = path.join(ROOT, 'hunt', slug, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  scanned++;

  const m = h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) continue;
  let graph;
  try { graph = JSON.parse(m[1]); } catch (e) { continue; }

  // REBUILD rather than skip. This used to `continue` whenever an ItemList was
  // already present, which meant a shelf's structured data froze at whatever it
  // said the day it was first generated. Swapping two makers off goat-feed left
  // JSON-LD advertising Manna Pro and Purina with numberOfItems:3 while the page
  // showed five different makers — the page and the machine-readable data
  // disagreeing is worse than the data being absent.
  const nodes = graph['@graph'] || [graph];
  const hadOne = nodes.some(n => n['@type'] === 'ItemList');

  // build it from the maker cards actually on the page
  const makers = [];
  for (const c of h.split(/<div class="find"/).slice(1)) {
    const name = deent((c.match(/<h2>([^<]+)<\/h2>/) || [])[1]);
    const url = (c.match(/class="hunt"[^>]*href="(https?:\/\/[^"]+)"/) || [])[1];
    if (!name) continue;
    makers.push({ name, url: url ? url.replace(/&amp;/g, '&') : null });
  }
  if (!makers.length) { noMakers++; continue; }

  const title = deent((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || slug);
  const itemList = {
    '@type': 'ItemList',
    name: title,
    numberOfItems: makers.length,
    itemListElement: makers.map((mk, i) => {
      const li = { '@type': 'ListItem', position: i + 1, name: mk.name };
      if (mk.url) li.url = mk.url;
      return li;
    }),
  };

  if (graph['@graph']) {
    // drop any previous ItemList before adding the current one
    graph['@graph'] = graph['@graph'].filter(n => n['@type'] !== 'ItemList');
    graph['@graph'].push(itemList);
  } else if (graph['@type'] === 'ItemList') {
    graph = itemList;
  } else {
    graph = { '@context': 'https://schema.org', '@graph': [graph, itemList] };
  }

  const out = h.replace(m[0], '<script type="application/ld+json">' + JSON.stringify(graph) + '</script>');
  if (out === h) { already++; continue; }          // already correct, nothing to write
  if (hadOne) refreshed++; else fixed++;
  if (sample.length < 10) sample.push(`${slug.padEnd(26)} ${makers.length} maker(s)${hadOne ? '  (refreshed)' : ''}`);
  if (APPLY) fs.writeFileSync(p, out);
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}  shelves ${scanned} | unchanged ${already} | ADDED ${fixed} | REFRESHED ${refreshed} | no maker cards ${noMakers}`);
console.log('\n  sample:');
sample.forEach(s => console.log('    ' + s));
if (!APPLY) console.log('\n  re-run with --apply to write.');
