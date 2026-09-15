// inject-header.js — a sticky TOP header with global search on EVERY page. Idempotent (marker <!--THEAD-->).
// This is the seamless-flow backbone: home + primary sections + one search box, reachable from anywhere.
// Run in the inject chain (order among injectors doesn't matter — distinct marker/position). Re-run after regen.
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

const HEADER = `<!--THEAD--><style>
#thead{position:sticky;top:0;z-index:9000;display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;padding:9px 14px;background:rgba(13,20,33,.97);border-bottom:1px solid rgba(120,150,190,.28);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
#thead .brand{font-family:'Rajdhani','Arial Narrow',sans-serif;font-weight:700;font-size:19px;letter-spacing:.4px;color:#eef2f8;text-decoration:none;white-space:nowrap;}
#thead .brand b{color:#f0c560;}
#thead .tn{display:flex;gap:13px;align-items:center;}
#thead .tn a{color:#c8d3e6;text-decoration:none;font-size:15px;font-weight:600;white-space:nowrap;}
#thead .tn a:hover{color:#f0c560;}
#thead form{display:flex;flex:1;min-width:150px;margin-left:auto;max-width:330px;}
#thead input{flex:1;min-width:0;font-size:15px;padding:8px 12px;border:1px solid rgba(120,150,190,.3);border-right:none;border-radius:8px 0 0 8px;background:#121e30;color:#eef2f8;font-family:inherit;}
#thead input:focus{outline:none;border-color:#5fe39a;}
#thead button{border:1px solid #5fe39a;background:#5fe39a;color:#08160d;font-weight:700;font-size:15px;padding:0 14px;border-radius:0 8px 8px 0;cursor:pointer;}
@media(max-width:600px){#thead{gap:7px 10px;}#thead .tn{order:3;gap:11px;}#thead form{order:2;max-width:none;margin-left:0;}}
</style>
<header id="thead">
  <a class="brand" href="/">5best<b>2buy</b></a>
  <nav class="tn" aria-label="Primary"><a href="/recipes/">Recipes</a><a href="/cuts/">Cuts</a><a href="/swap/">Swaps</a><a href="/shelves/">Shelves</a><a href="/states/">States</a><a href="/soda/">Soda</a><a href="/mocktails/">Mocktails</a><a href="/who-owns/">Who Owns</a></nav>
  <form action="/search/" method="get" role="search"><input type="search" name="q" placeholder="Search recipes, shelves, makers…" aria-label="Search the site" /><button type="submit">Go</button></form>
</header>`;

let n = 0, skip = 0;
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name === '.git' || e.name === '.well-known') continue; walk(p); }
    else if (e.name.endsWith('.html')) {
      let h = fs.readFileSync(p, 'utf8');
      if (h.includes('<!--THEAD-->')) { skip++; continue; }
      const m = h.match(/<body[^>]*>/i);
      if (!m) { skip++; continue; }
      h = h.replace(m[0], m[0] + '\n' + HEADER);
      fs.writeFileSync(p, h); n++;
    }
  }
}
walk(ROOT);
console.log('top header injected into', n, 'pages;', skip, 'skipped (already had it / no body)');
