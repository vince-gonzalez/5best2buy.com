// inject-navbar.js — add a locked bottom nav bar to EVERY page. Idempotent (marker <!--BNAV-->).
// Run LAST in the build chain (after generators), and re-run after any regen.
const fs = require('fs'), path = require('path');
const ROOT = 'C:/tmp/5b2b-live';

const NAV = `<!--BNAV--><style>
body{padding-bottom:58px!important;}
#bnav{position:fixed;left:0;right:0;bottom:0;z-index:9000;display:flex;background:rgba(13,20,33,.975);border-top:1px solid rgba(120,150,190,.28);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
#bnav a{flex:1;text-align:center;padding:8px 2px 7px;color:#c8d3e6;text-decoration:none;font-size:15px;letter-spacing:.2px;line-height:1.3;min-width:0;}
#bnav a:hover{color:#f0c560;background:rgba(255,255,255,.04);}
#bnav a b{display:block;font-size:18px;line-height:1;margin-bottom:3px;font-weight:400;}
@media(max-width:380px){#bnav a{font-size:15px;}}
.floating-cart,#floatingCart,[data-list-cart]{bottom:70px!important;}
</style><nav id="bnav" aria-label="Site navigation"><a href="/"><b>🏠</b>Home</a><a href="/shelves/"><b>🗂️</b>Shelves</a><a href="/recipes/"><b>🍽️</b>Recipes</a><a href="/what-to-eat/"><b>🎲</b>What to Eat</a><a href="/who-owns/"><b>🐙</b>Who Owns</a><a href="/list/"><b>🛒</b>List</a></nav>`;

let n = 0, skip = 0;
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name === '.git' || e.name === '.well-known') continue; walk(p); }
    else if (e.name.endsWith('.html')) {
      let h = fs.readFileSync(p, 'utf8');
      if (h.includes('<!--BNAV-->')) { skip++; continue; }
      if (!h.includes('</body>')) { skip++; continue; }
      h = h.replace('</body>', NAV + '\n</body>');
      fs.writeFileSync(p, h); n++;
    }
  }
}
walk(ROOT);
console.log('navbar injected into', n, 'pages;', skip, 'skipped (already had it / no body)');
