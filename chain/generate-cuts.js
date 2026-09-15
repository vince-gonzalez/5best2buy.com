// generate-cuts.js — /cuts/<slug>/ butcher-grade cut guides.
// Anatomy -> food science -> method -> what ruins it -> where to buy -> every dish we have.
// Reads C:/tmp/cut-content/*.js + data-ingredients.json + data-methods.json.
// Run AFTER generate-aisles.js, BEFORE the inject chain.
const fs = require('fs'), path = require('path');

// ---- paths resolve from this file, not from the working directory -------
// Every path here used to be the literal string 'C:/tmp/...'. That made the
// chain unmovable and made the restore procedure depend on cloning to one
// exact directory. __site is the site being written; __work is the folder
// holding the chain and the corpus. A script sitting inside the site finds
// 'hunt' beside it; one sitting in the workspace does not. SITE_ROOT wins
// over both when it is set.
const __path_ = require('path'), __fs_ = require('fs');
const __work = __fs_.existsSync(__path_.join(__dirname, 'recipe-batches'))
  ? __dirname : __path_.resolve(__dirname, '..');
const __site = process.env.SITE_ROOT
  || (__fs_.existsSync(__path_.join(__dirname, 'hunt'))
        ? __dirname : __path_.join(__work, '5b2b-live'));
// ------------------------------------------------------------------------
const ROOT = __site;
const SRC = __path_.join(__work,'cut-content');
const AD_CLIENT = 'ca-pub-8826956454892311';
const AD_SLOT = '6318594352';   // in-article unit, wired 2026-08-12
const DATE = new Date().toISOString().slice(0, 10);

const ING = JSON.parse(fs.readFileSync(ROOT + '/data-ingredients.json', 'utf8'));
const M   = JSON.parse(fs.readFileSync(ROOT + '/data-methods.json', 'utf8'));
const metaBy = Object.fromEntries(M.map(r => [r.slug, r]));
const SHELVES = new Set(fs.readdirSync(ROOT + '/hunt'));

let CUTS = [];
if (fs.existsSync(SRC)) for (const f of fs.readdirSync(SRC).filter(f => f.endsWith('.js'))) {
  try { const a = require(path.join(SRC, f)); if (Array.isArray(a)) CUTS = CUTS.concat(a); }
  catch (e) { console.log('SKIP', f, '-', e.message.slice(0, 80)); }
}
CUTS = CUTS.filter(c => c && c.slug && c.name && Array.isArray(c.match));

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// join: which recipes use this cut
function recipesFor(cut) {
  const terms = cut.match.map(t => t.toLowerCase());
  const hits = [];
  for (const r of ING) {
    const names = (r.c || []).map(x => String(x).toLowerCase());
    if (names.some(n => terms.some(t => n.includes(t)))) {
      const m = metaBy[r.s] || {};
      hits.push({ slug: r.s, title: r.n || m.title || r.s, cuisine: m.cuisine || 'Other', category: m.category || '' });
    }
  }
  const seen = new Set();
  return hits.filter(h => !seen.has(h.slug) && seen.add(h.slug))
             .sort((a, b) => a.title.localeCompare(b.title));
}

const STYLE = `<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.72;padding:18px 18px 60px;max-width:760px;margin:0 auto;font-size:17px;}
  a{color:var(--blue);text-decoration:none;}
  .crumb{font-family:var(--fm);font-size:12.5px;letter-spacing:1px;text-transform:uppercase;color:var(--meta);}
  .crumb a{color:var(--meta);}
  .kicker{font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin:20px 0 6px;}
  h1{font-family:var(--fd);font-size:clamp(34px,7vw,54px);font-weight:700;letter-spacing:.5px;line-height:1.02;margin-bottom:6px;}
  .aka{font-family:var(--fm);font-size:15px;color:var(--meta);margin-bottom:14px;}
  .dek{color:var(--soft);font-size:18px;max-width:62ch;margin-bottom:18px;}
  .isguide{font-family:var(--fm);font-size:15px;line-height:1.6;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:8px;padding:11px 14px;margin-bottom:26px;}
  h2{font-family:var(--fd);font-size:27px;font-weight:700;letter-spacing:.4px;color:var(--text);margin:30px 0 8px;border-top:1px solid var(--line);padding-top:22px;}
  h2:first-of-type{border-top:none;}
  p{margin-bottom:12px;}
  .m{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:15px 17px;margin-bottom:11px;}
  .m .mt{font-family:var(--fd);font-size:21px;font-weight:700;letter-spacing:.3px;color:var(--gold);margin-bottom:4px;}
  .m .lbl{font-family:var(--fm);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--meta);display:block;margin-top:8px;}
  .m p{font-size:15.5px;color:var(--soft);margin:2px 0 0;}
  .ruin{background:rgba(200,80,80,.09);border:1px solid rgba(220,110,110,.34);border-radius:11px;padding:15px 17px;}
  .ruin .mt{font-family:var(--fd);font-size:21px;font-weight:700;color:#f09090;margin-bottom:4px;}
  .ruin p{font-size:15.5px;color:var(--soft);margin:0;}
  .buy{display:block;background:linear-gradient(135deg,#1b2a44,#15203a);border:1px solid rgba(240,197,96,.42);border-radius:12px;padding:15px 18px;margin:14px 0 4px;}
  .buy .l{font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);}
  .buy .t{font-family:var(--fd);font-size:22px;font-weight:700;color:var(--text);letter-spacing:.3px;margin-top:2px;}
  .buy .s{font-size:14px;color:var(--soft);margin-top:2px;}
  .cui{font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin:18px 0 6px;}
  .rl{display:flex;flex-wrap:wrap;gap:7px;}
  .rl a{font-family:var(--fm);font-size:13.5px;color:var(--soft);background:var(--card);border:1px solid var(--line);border-radius:7px;padding:7px 12px;}
  .rl a:hover{border-color:rgba(240,197,96,.5);color:var(--gold);}
  .faq details{border-bottom:1px solid var(--line);padding:13px 0;}
  .faq summary{font-family:var(--fd);font-size:20px;font-weight:700;color:var(--text);cursor:pointer;list-style:none;}
  .faq summary::-webkit-details-marker{display:none;}
  .faq summary::before{content:'+';color:var(--gold);font-weight:700;margin-right:9px;}
  .faq details[open] summary::before{content:'\\2013';}
  .faq details p{font-family:var(--fm);font-size:15px;color:var(--soft);margin:9px 0 2px;line-height:1.62;}
  .hubad{margin:26px 0;padding:10px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
  .adlbl{display:block;font-family:var(--fm);font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);margin-bottom:6px;}
  footer{border-top:1px solid var(--line);padding-top:18px;margin-top:38px;font-family:var(--fm);font-size:12.5px;color:var(--meta);line-height:1.7;}
  footer a{color:var(--meta);}
</style>`;

const AD = `<div class="hubad"><span class="adlbl">Advertisement</span>
<ins class="adsbygoogle" style="display:block;text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="${AD_CLIENT}" data-ad-slot="${AD_SLOT}"></ins>
<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>`;

function head(title, desc, canon, graph) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="google-adsense-account" content="${AD_CLIENT}" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${canon}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${canon}" />
<meta property="og:image" content="https://www.5best2buy.com/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">${JSON.stringify(graph)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}" crossorigin="anonymous"></script>
${STYLE}
</head>`;
}

const sitemapUrls = [];
let built = 0;

function renderCut(c) {
  const recs = recipesFor(c);
  const canon = `https://www.5best2buy.com/cuts/${c.slug}/`;
  const title = `${c.name} — What It Is, How to Cook It, and ${recs.length} Dishes That Use It | 5best2buy.com`;
  const desc = String(c.dek || '').replace(/\s+/g, ' ').slice(0, 300);

  // group recipes by cuisine
  const byCui = {};
  recs.forEach(r => (byCui[r.cuisine] = byCui[r.cuisine] || []).push(r));
  const cuiBlocks = Object.keys(byCui).sort((a, b) => byCui[b].length - byCui[a].length || a.localeCompare(b))
    .map(cu => `  <div class="cui">${esc(cu)} · ${byCui[cu].length}</div>
  <div class="rl">${byCui[cu].map(r => `<a href="/recipes/${r.slug}/">${esc(r.title)}</a>`).join('')}</div>`).join('\n');

  const methods = (c.methods || []).map(m => `  <div class="m">
    <div class="mt">${esc(m.m)}</div>
    <span class="lbl">Why it works</span><p>${esc(m.why)}</p>
    <span class="lbl">How</span><p>${esc(m.how)}</p>
  </div>`).join('\n');

  const faqs = (c.faq || []).map(f => `    <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');

  const shelfOk = c.shelf && SHELVES.has(c.shelf);
  const buy = shelfOk ? `  <a class="buy" href="/hunt/${c.shelf}/">
    <div class="l">Where to buy it</div>
    <div class="t">${esc(c.name)} worth cooking</div>
    <div class="s">Independent producers who ship direct — no conglomerates, nobody paid to be listed. See the shelf &rarr;</div>
  </a>` : '';

  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: '5best2buy', item: 'https://www.5best2buy.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cuts', item: 'https://www.5best2buy.com/cuts/' },
      { '@type': 'ListItem', position: 3, name: c.name, item: canon } ] },
    { '@type': 'Article', headline: `${c.name}: what it is and how to cook it`, description: desc,
      datePublished: DATE, dateModified: DATE, mainEntityOfPage: canon,
      author: { '@type': 'Organization', name: '5best2buy', url: 'https://www.5best2buy.com/' },
      publisher: { '@type': 'Organization', name: '5best2buy', logo: { '@type': 'ImageObject', url: 'https://www.5best2buy.com/logo.png' } } },
    { '@type': 'ItemList', name: `Dishes that use ${c.name}`, numberOfItems: recs.length,
      itemListElement: recs.slice(0, 60).map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: r.title, url: `https://www.5best2buy.com/recipes/${r.slug}/` })) },
    ...((c.faq || []).length ? [{ '@type': 'FAQPage', mainEntity: c.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : []),
  ] };

  return `${head(title, desc, canon, graph)}
<body>
  <nav class="crumb" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; <a href="/cuts/">Cuts</a> &rsaquo; ${esc(c.name)}</nav>
  <div class="kicker">The Cut Guide</div>
  <h1>${esc(c.name)}</h1>
  ${(c.aka && c.aka.length) ? `<div class="aka">Also sold as: ${c.aka.map(esc).join(' · ')}</div>` : ''}
  <p class="dek">${esc(c.dek)}</p>
  <div class="isguide">This is a <b>cut guide</b>, not a recipe — what this cut is, why it behaves the way it does, and which of our ${recs.length} dishes use it. Recipes stay ad-free; guides like this one carry a single ad.</div>

  <h2>What it is</h2>
  <p>${esc(c.anatomy)}</p>

  <h2>Why it cooks the way it does</h2>
  <p>${esc(c.science)}</p>

  <h2>How to cook it</h2>
${methods}

  <h2>What ruins it</h2>
  <div class="ruin"><div class="mt">${esc((c.avoid || {}).m)}</div><p>${esc((c.avoid || {}).why)}</p></div>

  <h2>Buying it</h2>
  <p>${esc(c.buying)}</p>
  ${c.temps ? `<p><b style="color:var(--gold);">Doneness:</b> ${esc(c.temps)}</p>` : ''}
${buy}

  ${AD}

  <h2>${recs.length} dishes that use ${esc(c.name).toLowerCase()}</h2>
${cuiBlocks || '  <p>No dishes yet — this cut guide is new.</p>'}

  <div class="faq"><h2>Straight answers</h2>
${faqs}
  </div>

  <footer><nav style="margin-bottom:10px;letter-spacing:1px;text-transform:uppercase;"><a href="/cuts/">All cuts</a> &middot; <a href="/recipes/">Recipes</a> &middot; <a href="/shelves/">Shelves</a> &middot; <a href="/how-we-hunt/">How We Hunt</a></nav>Published ${DATE} &middot; © 2026 5best2buy.com</footer>
</body>
</html>`;
}

function renderIndex(list) {
  const canon = 'https://www.5best2buy.com/cuts/';
  const byAnimal = {};
  list.forEach(x => (byAnimal[x.c.animal || 'other'] = byAnimal[x.c.animal || 'other'] || []).push(x));
  const NAME = { beef: 'Beef', pork: 'Pork', chicken: 'Chicken', lamb: 'Lamb', seafood: 'Seafood', other: 'Other' };
  const blocks = Object.keys(byAnimal).sort().map(a => `  <div class="cui">${NAME[a] || a}</div>
  <div class="rl">${byAnimal[a].sort((x, y) => y.n - x.n).map(x => `<a href="/cuts/${x.c.slug}/">${esc(x.c.name)} <span style="color:var(--meta);">· ${x.n}</span></a>`).join('')}</div>`).join('\n');
  const total = list.reduce((n, x) => n + x.n, 0);
  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: '5best2buy', item: 'https://www.5best2buy.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cuts', item: canon } ] },
    { '@type': 'CollectionPage', name: 'Cut Guides', url: canon,
      description: 'What each cut of meat and fish actually is, why it cooks the way it does, and every dish we have that uses it.' } ] };
  return `${head('Cut Guides — What Each Cut Is and How to Cook It | 5best2buy.com',
    'Butcher-grade guides to ' + list.length + ' cuts: where each one sits on the animal, why that dictates how it must be cooked, what ruins it, and every dish we have that uses it.',
    canon, graph)}
<body>
  <nav class="crumb" aria-label="Breadcrumb"><a href="/">5best2buy.com</a> &rsaquo; Cuts</nav>
  <div class="kicker">The Cut Guides</div>
  <h1>Know the cut</h1>
  <p class="dek">Most cooking failures are a cut problem, not a technique problem. These ${list.length} guides explain where each cut sits on the animal, what that muscle did in life, and why that physically decides how it has to be cooked — then link every dish we have that uses it (${total} in all).</p>
${blocks}
  <footer><nav style="margin-bottom:10px;letter-spacing:1px;text-transform:uppercase;"><a href="/recipes/">Recipes</a> &middot; <a href="/shelves/">Shelves</a> &middot; <a href="/how-we-hunt/">How We Hunt</a></nav>© 2026 5best2buy.com</footer>
</body>
</html>`;
}

const list = [];
for (const c of CUTS) {
  const recs = recipesFor(c);
  fs.mkdirSync(path.join(ROOT, 'cuts', c.slug), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'cuts', c.slug, 'index.html'), renderCut(c));
  sitemapUrls.push(`https://www.5best2buy.com/cuts/${c.slug}/`);
  list.push({ c, n: recs.length });
  built++;
}
if (list.length) {
  fs.mkdirSync(path.join(ROOT, 'cuts'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'cuts', 'index.html'), renderIndex(list));
  sitemapUrls.push('https://www.5best2buy.com/cuts/');
}

// append to sitemap
const sp = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(sp) && sitemapUrls.length) {
  let x = fs.readFileSync(sp, 'utf8');
  const add = sitemapUrls.filter(u => !x.includes(`<loc>${u}</loc>`))
    .map(u => `<url><loc>${u}</loc><lastmod>${DATE}</lastmod></url>`).join('\n');
  if (add) { x = x.replace('</urlset>', add + '\n</urlset>'); fs.writeFileSync(sp, x); }
}

console.log('cut guides built:', built, '| recipes linked:', list.reduce((n, x) => n + x.n, 0));
list.sort((a, b) => b.n - a.n).slice(0, 30).forEach(x => console.log('  ' + String(x.n).padStart(3) + '  ' + x.c.slug));
