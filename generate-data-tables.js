// generate-data-tables.js — /data/, the citable datasets.
//
// Three tables a journalist, researcher or developer can actually use and cite:
//   /data/independent-makers/  every maker on the site, with city, state and category
//   /data/halal-certified/     US independent makers WITH THE CERTIFYING BODY NAMED
//   /data/kosher-certified/    same, for kosher
//
// The halal and kosher tables are the genuinely scarce ones. Plenty of places
// list "halal" products. Almost nobody publishes WHO certifies each maker, which
// is the only part that answers the question a practising buyer is actually asking.
//
// Each dataset ships HTML + CSV + JSON, carries schema.org/Dataset markup so it is
// eligible for Google Dataset Search, and is licensed CC BY 4.0 -- reuse is free
// and attribution is required, so every use returns a citation.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const AD_CLIENT = 'ca-pub-8826956454892311';
const VERSION = '1.0';
const PUBLISHED = '2026-08-12';

// Escape an ampersand only when it does not already begin an entity.
// Escaping unconditionally turned a dek's &mdash; into &amp;mdash; --
// which a browser shows as the literal text "&mdash;" -- and turned an
// affiliate URL's &amp; into &amp;amp;, so awinaffid arrived named
// "amp;awinaffid" and the click was not credited.
const esc = s => String(s == null ? '' : s).replace(/&(?!(?:[a-zA-Z][a-zA-Z0-9]{1,31}|#[0-9]{1,7}|#[xX][0-9a-fA-F]{1,6});)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const deent = s => String(s || '').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&mdash;/g, '\u2014').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const ST = { AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'District of Columbia' };

// Only bodies that actually issue certificates. Order matters: longest first so
// "Orthodox Union" is not swallowed by a shorter alternative.
const HALAL_BODIES = ['American Halal Foundation','Halal Advocates of America','Halal Advocates','Halal Transactions of Omaha','Islamic Services of America','IFANCA','HFSAA','HMS Halal','ISWA','ISA','AHF'];
const KOSHER_BODIES = ['Vaad Hakashrus of the Five Towns','New Square Kashrus Council','Kehilah Kashrus','Orthodox Rabbinical Board','Scroll-K','EarthKosher','Earth Kosher','Orthodox Union','Chicago Rabbinical Council','Kosher Supervision of America','Star-K','OK Kosher','Kof-K','cRc','CRC','KSA','Vaad','OU'];

// One body, one value. "OU" and "Orthodox Union" are the same agency, and a
// dataset that reports both as distinct is broken for anyone who tries to
// group by certifier -- which is the first thing a researcher will do.
const CANON = {
  'OU': 'Orthodox Union (OU)', 'Orthodox Union': 'Orthodox Union (OU)',
  'cRc': 'Chicago Rabbinical Council (cRc)', 'CRC': 'Chicago Rabbinical Council (cRc)',
  'Chicago Rabbinical Council': 'Chicago Rabbinical Council (cRc)',
  'KSA': 'Kosher Supervision of America (KSA)',
  'Kosher Supervision of America': 'Kosher Supervision of America (KSA)',
  'Star-K': 'Star-K', 'OK Kosher': 'OK Kosher', 'Kof-K': 'Kof-K', 'Vaad': 'Local Vaad', 'Scroll-K': 'Scroll-K (Vaad HaKashrus of Denver)',
  'EarthKosher': 'EarthKosher', 'Earth Kosher': 'EarthKosher',
  'Vaad Hakashrus of the Five Towns': 'Vaad Hakashrus of the Five Towns and Far Rockaway',
  'New Square Kashrus Council': 'New Square Kashrus Council',
  'Kehilah Kashrus': 'Kehilah Kashrus of Flatbush',
  'Orthodox Rabbinical Board': 'Orthodox Rabbinical Board (ORB)',
  'IFANCA': 'IFANCA', 'HFSAA': 'HFSAA', 'HMS Halal': 'HMS Halal',
  'ISA': 'Islamic Services of America (ISA)',
  'Islamic Services of America': 'Islamic Services of America (ISA)',
  'ISWA': 'ISWA Halal Certification Department',
  'AHF': 'American Halal Foundation (AHF)',
  'American Halal Foundation': 'American Halal Foundation (AHF)',
  'Halal Advocates': 'Halal Advocates of America',
  'Halal Advocates of America': 'Halal Advocates of America',
  'Halal Transactions of Omaha': 'Halal Transactions of Omaha',
};

function findBody(text, bodies) {
  for (const b of bodies) {
    const re = new RegExp('(^|[^A-Za-z])' + b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '($|[^A-Za-z])');
    if (re.test(text)) return CANON[b] || b;
  }
  return null;
}

// ---------- harvest ----------
const makers = new Map();   // key: lowercased name
const HUNT = path.join(ROOT, 'hunt');
for (const slug of fs.readdirSync(HUNT)) {
  const p = path.join(HUNT, slug, 'index.html');
  if (!fs.existsSync(p)) continue;
  const h = fs.readFileSync(p, 'utf8');
  const shelfName = deent((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || slug);

  for (const c of h.split(/<div class="find"/).slice(1)) {
    const name = deent((c.match(/<h2>([^<]+)<\/h2>/) || [])[1]);
    const url = (c.match(/class="hunt"[^>]*href="(https?:\/\/[^"]+)"/) || [])[1];
    if (!name || !url) continue;
    const line = deent((c.match(/<div class="maker">([\s\S]*?)<\/div>/) || [])[1]);
    const prose = deent(c);

    const key = name.toLowerCase();
    if (!makers.has(key)) {
      const mm = line.match(/\b([A-Z][a-zA-Z.'\-\u2019 ]+),\s*([A-Z]{2})\b/);
      makers.set(key, {
        name, url,
        city: mm && ST[mm[2]] ? mm[1].trim() : '',
        state: mm && ST[mm[2]] ? ST[mm[2]] : '',
        stateCode: mm && ST[mm[2]] ? mm[2] : '',
        shelves: [], halalBody: '', kosherBody: ''
      });
    }
    const rec = makers.get(key);
    if (!rec.shelves.some(s => s.slug === slug)) rec.shelves.push({ slug, name: shelfName });
    if (/^halal-/.test(slug) && !rec.halalBody) rec.halalBody = findBody(prose, HALAL_BODIES) || '';
    if (/^kosher-/.test(slug) && !rec.kosherBody) rec.kosherBody = findBody(prose, KOSHER_BODIES) || '';
  }
}
const all = [...makers.values()].sort((a, b) => a.name.localeCompare(b.name));
const halal = all.filter(m => m.halalBody);
const kosher = all.filter(m => m.kosherBody);

// ---------- shared chrome ----------
const STYLE = `<style>
:root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}
*{box-sizing:border-box}
body{margin:0;background:var(--navy);color:var(--text);font-family:var(--fm);font-size:16px;line-height:1.7}
.wrap{max-width:1040px;margin:0 auto;padding:26px 20px 64px}
h1{font-family:var(--fd);font-size:clamp(29px,5vw,44px);line-height:1.14;margin:6px 0 10px}
h2{font-family:var(--fd);font-size:23px;margin:32px 0 10px;color:var(--gold)}
.dek{color:var(--soft);font-size:17px;margin:0 0 20px;max-width:66ch}
.crumb{font-size:15px;color:var(--meta);margin-bottom:8px}
.crumb a,footer a{color:var(--meta);text-decoration:none}
.cite{background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:0 9px 9px 0;padding:13px 16px;margin:18px 0;font-size:15px;color:var(--soft)}
.cite code{display:block;background:#08101c;border-radius:6px;padding:9px 11px;margin-top:7px;font:13px/1.6 ui-monospace,Consolas,monospace;color:#9fd0f5;white-space:pre-wrap;word-break:break-word}
.dl a{display:inline-block;background:var(--gold);color:#10192a;font-weight:700;font-size:15px;border-radius:7px;padding:8px 15px;margin:0 8px 8px 0;text-decoration:none}
.dl a.alt{background:transparent;color:var(--gold);border:1px solid var(--gold)}
.tblwrap{overflow-x:auto;border:1px solid var(--line);border-radius:10px;margin:16px 0}
table{border-collapse:collapse;width:100%;font-size:15px;min-width:640px}
th{background:var(--surface);color:var(--gold);text-align:left;padding:10px 13px;font-family:var(--fd);font-size:15px;letter-spacing:.4px;position:sticky;top:0}
td{padding:9px 13px;border-top:1px solid var(--line);color:var(--soft);vertical-align:top}
td a{color:var(--blue);text-decoration:none}
tr:hover td{background:rgba(95,176,239,.05)}
.note{font-size:15px;color:var(--meta);background:var(--surface);border-left:2px solid var(--green);border-radius:0 7px 7px 0;padding:10px 14px;margin:16px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin:16px 0}
.grid a{display:block;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px;text-decoration:none;color:var(--text)}
.grid a:hover{border-color:var(--gold)}
.grid .n{font-weight:700;font-size:17px}
.grid .c{font-size:15px;color:var(--meta);margin-top:3px;line-height:1.6}
footer{border-top:1px solid var(--line);padding-top:18px;margin-top:40px;font-size:15px;color:var(--meta);line-height:1.8}
</style>`;

const FOOTER = `<footer><a href="/data/">Datasets</a> &middot; <a href="/states/">States</a> &middot; <a href="/shelves/">All shelves</a> &middot; <a href="/how-we-hunt/">How We Hunt</a> &middot; <a href="/contact/">Contact</a><br>&copy; 2026 5best2buy.com</footer>`;

function head(title, desc, canon, graph) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="google-adsense-account" content="${AD_CLIENT}" />
<link rel="icon" type="image/png" href="/logo.png" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${canon}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${canon}" />
<meta property="og:image" content="https://www.5best2buy.com/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">${JSON.stringify(graph)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
${STYLE}
</head>`;
}

const csvCell = s => /[",\n]/.test(String(s)) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s);
const toCsv = (cols, rows) => [cols.join(',')].concat(rows.map(r => cols.map(c => csvCell(r[c] ?? '')).join(','))).join('\r\n') + '\r\n';

function datasetGraph(slug, name, desc, n, canon) {
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: '5best2buy.com', item: 'https://www.5best2buy.com/' },
      { '@type': 'ListItem', position: 2, name: 'Datasets', item: 'https://www.5best2buy.com/data/' },
      { '@type': 'ListItem', position: 3, name, item: canon } ] },
    { '@type': 'Dataset', name, description: desc, url: canon, version: VERSION,
      datePublished: PUBLISHED, dateModified: PUBLISHED,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      isAccessibleForFree: true, creditText: '5best2buy.com',
      keywords: ['independent food makers','small-batch food','United States','direct-to-consumer','food producers'],
      creator: { '@type': 'Organization', name: '5best2buy.com', url: 'https://www.5best2buy.com/' },
      publisher: { '@type': 'Organization', name: '5best2buy.com', url: 'https://www.5best2buy.com/' },
      spatialCoverage: { '@type': 'Place', name: 'United States' },
      variableMeasured: 'independent food maker, location, product category' + (slug !== 'independent-makers' ? ', certifying authority' : ''),
      distribution: [
        { '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${canon}${slug}.csv` },
        { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${canon}${slug}.json` } ] } ] };
}

function citeBlock(name, canon, n) {
  return `<div class="cite"><b>How to cite this dataset</b><br>Free to reuse, including commercially, under <a href="https://creativecommons.org/licenses/by/4.0/" style="color:var(--blue)">CC BY 4.0</a>. Attribution is the only condition.
<code>5best2buy.com (${PUBLISHED.slice(0, 4)}). ${esc(name)} (Version ${VERSION}) [Data set]. ${n} records. Retrieved from ${canon}</code></div>`;
}

function tablePage(slug, name, h1, dek, desc, cols, headers, rows, extraNote) {
  const canon = `https://www.5best2buy.com/data/${slug}/`;
  const dir = path.join(ROOT, 'data', slug);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, slug + '.csv'), toCsv(cols, rows));
  fs.writeFileSync(path.join(dir, slug + '.json'), JSON.stringify({
    name, version: VERSION, published: PUBLISHED, license: 'CC BY 4.0',
    source: canon, records: rows.length, data: rows }, null, 1));

  const html = `${head(`${h1} \u2014 Free Dataset (${rows.length} Records) | 5best2buy.com`, desc, canon, datasetGraph(slug, name, desc, rows.length, canon))}
<body>
<div class="wrap">
  <div class="crumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/data/">Datasets</a> &rsaquo; ${esc(h1)}</div>
  <h1>${esc(h1)}</h1>
  <p class="dek">${dek}</p>
  <div class="dl"><a href="/data/${slug}/${slug}.csv" download>Download CSV</a><a class="alt" href="/data/${slug}/${slug}.json" download>Download JSON</a></div>
  ${citeBlock(name, canon, rows.length)}
  ${extraNote || ''}
  <h2>${rows.length} records</h2>
  <div class="tblwrap"><table>
  <thead><tr>${headers.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead>
  <tbody>
${rows.map(r => `  <tr>${cols.map(c => c === 'maker'
    ? `<td><a href="${esc(r.url)}" rel="nofollow noopener" target="_blank">${esc(r[c])}</a></td>`
    : `<td>${esc(r[c] ?? '')}</td>`).join('')}</tr>`).join('\n')}
  </tbody></table></div>
  ${FOOTER}
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  // desc is carried out so the hub's Dataset nodes can reuse the same
  // description rather than emitting undefined into the JSON-LD
  return { slug, name, h1, desc, n: rows.length, canon };
}

// ---------- the three tables ----------
const built = [];

built.push(tablePage('independent-makers', 'Independent US Food Makers',
  'Independent US Food Makers',
  `Every independent, non-conglomerate food maker we have verified as currently operating and shipping direct to consumers in the United States. Each one was researched individually and earned a place on a category list before appearing here.`,
  `A free, citable dataset of ${all.length} independent US food makers that ship direct to consumers, with city, state and product category. CC BY 4.0.`,
  ['maker', 'city', 'state', 'categories', 'url'],
  ['Maker', 'City', 'State', 'Categories', 'Website'],
  all.map(m => ({ maker: m.name, city: m.city, state: m.state, categories: m.shelves.map(s => s.name).join('; '), url: m.url })),
  `<p class="note">Inclusion means the maker is independently owned and was verified as operating and shipping at the time of publication. Brands owned by a food conglomerate are deliberately excluded, which is what makes this different from a general product directory.</p>`));

built.push(tablePage('halal-certified', 'Halal-Certified Independent US Food Makers',
  'Halal-Certified Independent US Food Makers',
  `Independent US food makers that hold halal certification <b>and publish which authority issued it</b>. That second half is the scarce part: plenty of directories list halal products, very few record the certifying body, which is the only thing that answers the question an observant buyer is actually asking.`,
  `A free, citable dataset of ${halal.length} independent US halal-certified food makers, each recorded with its named certifying authority (IFANCA, HFSAA, ISA and others). CC BY 4.0.`,
  ['maker', 'certifier', 'city', 'state', 'categories', 'url'],
  ['Maker', 'Certifying authority', 'City', 'State', 'Categories', 'Website'],
  halal.map(m => ({ maker: m.name, certifier: m.halalBody, city: m.city, state: m.state, categories: m.shelves.filter(s => /^halal-/.test(s.slug)).map(s => s.name).join('; '), url: m.url })),
  `<p class="note">A maker appears here only when the certifying authority is identifiable. "Halal" on a label with no named body does not qualify, because it cannot be checked. Certification status changes; verify with the maker or the authority before relying on it.</p>`));

built.push(tablePage('kosher-certified', 'Kosher-Certified Independent US Food Makers',
  'Kosher-Certified Independent US Food Makers',
  `Independent US food makers that hold kosher certification <b>and publish the hechsher</b> &mdash; OU, Star-K, OK, Kof-K, cRc or a named Vaad. Recorded per maker so the supervision can be checked rather than assumed.`,
  `A free, citable dataset of ${kosher.length} independent US kosher-certified food makers, each recorded with its named certifying agency. CC BY 4.0.`,
  ['maker', 'certifier', 'city', 'state', 'categories', 'url'],
  ['Maker', 'Certifying agency', 'City', 'State', 'Categories', 'Website'],
  kosher.map(m => ({ maker: m.name, certifier: m.kosherBody, city: m.city, state: m.state, categories: m.shelves.filter(s => /^kosher-/.test(s.slug)).map(s => s.name).join('; '), url: m.url })),
  `<p class="note">A maker appears here only when the agency is identifiable. Certification is often per-product rather than company-wide, and it changes; check the current hechsher on the package before relying on it.</p>`));

// ---------- the deposited release ----------
//
// Every value here was read out of the deposit itself, not from the live site:
// the record at zenodo.org/api/records/22037150 and the ZIP it serves, whose
// md5 (9f5f15421aa56668c9a1642446c69f08) was checked against Zenodo's own
// checksum before any of these figures were taken. The three CSVs inside that
// ZIP are byte-identical to the ones this script writes, so the counts below
// describe both.
//
// Google Dataset Search is a separate index from web search and it runs on
// schema.org/Dataset. The page already emitted three Dataset nodes but none
// carried an identifier, description, datePublished, keywords or distribution,
// which is most of what that index reads.
const DEPOSIT = {
  doi:        '10.5281/zenodo.22037150',   // this version
  conceptDoi: '10.5281/zenodo.22037149',   // all versions
  record:     'https://zenodo.org/records/22037150',
  title:      'Independent US Food Makers: direct-to-consumer producers, with named halal and kosher certifying authorities',
  version:    '1.0.0',
  published:  '2026-08-21',
  file:       'independent-us-food-makers-1.0.0.zip',
  fileUrl:    'https://zenodo.org/api/records/22037150/files/independent-us-food-makers-1.0.0.zip/content',
  fileBytes:  117976,
  // counts read from the deposited files
  makers:     1467,
  halalRows:  33,
  halalBodies: 5,
  kosherRows: 58,
  kosherValues: 12,          // 11 named agencies + a generic "Local Vaad" on 2 records
  kosherNamed: 11,
  kosherGenericRows: 2,
  certifiedMakers: 91,       // 33 + 58, verified as zero overlap
  states:     47,
  keywords: ['food producers', 'direct-to-consumer', 'independent business', 'small-batch food',
             'halal certification', 'kosher certification', 'certifying authority',
             'United States', 'open data', 'Frictionless Data'],
};

const CREATOR = { '@type': 'Person', name: 'Vincent Gonzalez', '@id': 'https://orcid.org/0009-0005-3640-014X', identifier: 'https://orcid.org/0009-0005-3640-014X' };
const CCBY = 'https://creativecommons.org/licenses/by/4.0/';

// ---------- hub ----------
const hubCanon = 'https://www.5best2buy.com/data/';
const hubDesc = `Open dataset of ${DEPOSIT.makers} independent US food producers that ship direct to consumers, including ${DEPOSIT.certifiedMakers} halal- and kosher-certified makers recorded with the certifying authority named. DOI ${DEPOSIT.doi}. CC BY 4.0.`;

const subDatasets = built.map(b => ({
  '@type': 'Dataset',
  name: b.name,
  description: b.desc,
  url: b.canon,
  license: CCBY,
  isAccessibleForFree: true,
  creator: CREATOR,
  datePublished: DEPOSIT.published,
  distribution: [
    { '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${b.canon}${b.slug}.csv` },
    { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${b.canon}${b.slug}.json` },
  ],
}));

const mainDataset = {
  '@type': 'Dataset',
  name: DEPOSIT.title,
  alternateName: 'Independent US Food Makers',
  description: `${DEPOSIT.makers} independent United States food producers that sell direct to consumers, recorded individually with city, state, product category and website. Two companion tables record the ${DEPOSIT.halalRows} halal-certified and ${DEPOSIT.kosherRows} kosher-certified producers together with the name of the body that certified them — ${DEPOSIT.halalBodies} halal agencies and ${DEPOSIT.kosherValues} distinct kosher certifier values. A producer is included in those tables only where the certifying authority is identifiable from the producer's own certification page or the certifier's published directory; a halal or kosher claim on packaging alone does not qualify.`,
  identifier: [`https://doi.org/${DEPOSIT.doi}`, `https://doi.org/${DEPOSIT.conceptDoi}`],
  url: hubCanon,
  sameAs: DEPOSIT.record,
  license: CCBY,
  creator: CREATOR,
  publisher: { '@type': 'Organization', name: '5best2buy.com', url: 'https://www.5best2buy.com/' },
  datePublished: DEPOSIT.published,
  dateModified: DEPOSIT.published,
  version: DEPOSIT.version,
  keywords: DEPOSIT.keywords,
  isAccessibleForFree: true,
  spatialCoverage: { '@type': 'Place', name: 'United States' },
  measurementTechnique: 'Manual verification of each producer against its own website and, for certified producers, against the certifying authority’s published directory',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'certifier', description: 'The named halal or kosher certifying authority for a producer' },
    { '@type': 'PropertyValue', name: 'maker', description: 'Producer name' },
    { '@type': 'PropertyValue', name: 'city' }, { '@type': 'PropertyValue', name: 'state' },
    { '@type': 'PropertyValue', name: 'categories' }, { '@type': 'PropertyValue', name: 'url' },
  ],
  includedInDataCatalog: { '@type': 'DataCatalog', name: 'Zenodo', url: 'https://zenodo.org/' },
  distribution: [
    { '@type': 'DataDownload', name: DEPOSIT.file, encodingFormat: 'application/zip', contentUrl: DEPOSIT.fileUrl, contentSize: String(DEPOSIT.fileBytes) },
    ...built.map(b => ({ '@type': 'DataDownload', name: `${b.slug}.csv`, encodingFormat: 'text/csv', contentUrl: `${b.canon}${b.slug}.csv` })),
  ],
  hasPart: subDatasets,
};

const hubGraph = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: '5best2buy.com', item: 'https://www.5best2buy.com/' },
    { '@type': 'ListItem', position: 2, name: 'Datasets', item: hubCanon } ] },
  { '@type': 'CollectionPage', name: 'Open datasets on independent US food makers', url: hubCanon, description: hubDesc, mainEntity: { '@id': `https://doi.org/${DEPOSIT.doi}` } },
  mainDataset ] };

const hub = `${head('Open Datasets on Independent US Food Makers | 5best2buy.com', hubDesc, hubCanon, hubGraph)}
<body>
<div class="wrap">
  <div class="crumb"><a href="/">5best2buy.com</a> &rsaquo; Datasets</div>
  <h1>Open datasets</h1>
  <p class="dek">${DEPOSIT.makers} independent United States food producers that ship direct to consumers, researched one at a time. Two of the three tables record something almost nothing else does: for every halal- and kosher-certified producer, <b>the name of the authority that certified it</b>.</p>

  <h2>The certifier columns</h2>
  <div class="cite">
    <p class="dek">A great many directories will tell you a product is labelled halal or kosher. Very few record <b>who certified it</b> &mdash; and without that the label cannot be checked, which is the only question an observant buyer is actually asking.</p>
    <p class="dek">A producer appears in those tables only where the certifying body is identifiable from the producer&rsquo;s own certification page or from the certifier&rsquo;s published directory. A claim on the packaging alone does not qualify. That bar is why the halal table holds ${DEPOSIT.halalRows} records rather than several hundred.</p>
    <p class="dek">Across ${DEPOSIT.certifiedMakers} certified producers the tables name <b>${DEPOSIT.halalBodies} halal agencies</b> &mdash; HFSAA, IFANCA, Islamic Services of America, Halal Transactions of Omaha and Halal Advocates of America &mdash; and <b>${DEPOSIT.kosherValues} distinct kosher certifier values</b>, of which ${DEPOSIT.kosherNamed} are named agencies including the Orthodox Union, Star-K, OK Kosher, Kof-K, the Chicago Rabbinical Council, Kosher Supervision of America, EarthKosher and Scroll-K. ${DEPOSIT.kosherGenericRows} records are logged only as a local vaad, without the specific board named. Values are canonicalised, so OU and Orthodox Union are one agency rather than two.</p>
  </div>

  <h2>The three tables</h2>
  <div class="grid">
${built.map(b => `    <a href="/data/${b.slug}/"><span class="n">${esc(b.h1)}</span><span class="c">${b.n} records &middot; CSV, JSON &middot; CC BY 4.0</span></a>`).join('\n')}
  </div>

  <h2>Cite this dataset</h2>
  <div class="cite">
    <p class="dek">Version ${DEPOSIT.version}, deposited ${DEPOSIT.published}, archived at Zenodo with a DOI. CC BY 4.0 &mdash; use it for anything, including commercially, as long as you credit it.</p>
    <p class="dek" style="font-family:var(--fm);font-size:15px;">Gonzalez, V. (2026). <i>${esc(DEPOSIT.title)}</i> (Version ${DEPOSIT.version}) [Data set]. Zenodo. <a href="https://doi.org/${DEPOSIT.doi}" style="color:var(--blue)">https://doi.org/${DEPOSIT.doi}</a></p>
    <p class="dek">This version: <a href="https://doi.org/${DEPOSIT.doi}" style="color:var(--blue)">${DEPOSIT.doi}</a>. All versions: <a href="https://doi.org/${DEPOSIT.conceptDoi}" style="color:var(--blue)">${DEPOSIT.conceptDoi}</a> &mdash; that second one always resolves to the newest release.</p>
  </div>

  <h2>What is in the deposit</h2>
  <div class="cite">
    <p class="dek">One archive, <code>${DEPOSIT.file}</code> (${DEPOSIT.fileBytes.toLocaleString('en-US')} bytes), holding all three tables as both CSV and JSON, a Frictionless <code>datapackage.json</code> descriptor with column schemas, a <code>CITATION.cff</code> and the licence. <a href="${DEPOSIT.record}" style="color:var(--blue)">View the record on Zenodo</a>.</p>
    <p class="dek">At v${DEPOSIT.version} the producers table held ${DEPOSIT.makers} records across ${DEPOSIT.states} states, every one carrying a working website. The deposit is frozen at that; the table on this site has since moved to ${all.length}${all.length === DEPOSIT.makers ? '' : ` as producers are added and, occasionally, removed`}. The halal and kosher tables are byte-identical to the deposited versions. Cite the DOI when you need a fixed, checkable snapshot rather than whatever the site says today.</p>
    <p class="dek">The same three tables also live in a repository if you would rather load them from there: <a href="https://github.com/zengineco/independent-us-food-makers" style="color:var(--blue)">zengineco/independent-us-food-makers</a>.</p>
  </div>

  <h2>Corrections</h2>
  <div class="cite">
    <p class="dek">If a record is wrong &mdash; a certifier changed, a producer closed, an owner sold &mdash; <a href="/contact/" style="color:var(--blue)">tell us</a> and it is fixed in the next version. Corrections from the producers themselves are especially welcome; several records here exist in their current form because a maker wrote in.</p>
    <p class="note">Certification is frequently per-product rather than company-wide, and it lapses. Check the current mark on the package before relying on any row in these tables.</p>
  </div>
  ${FOOTER}
</div>
</body>
</html>`;
fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data', 'index.html'), hub);

console.log(`datasets: ${built.map(b => b.slug + ' ' + b.n).join(' | ')}`);
console.log(`  halal certifiers found: ${[...new Set(halal.map(m => m.halalBody))].join(', ') || 'none'}`);
console.log(`  kosher certifiers found: ${[...new Set(kosher.map(m => m.kosherBody))].join(', ') || 'none'}`);
