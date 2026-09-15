// generate-list-widget.js — injects the shopping-list script + an "Add to list" button
// onto every recipe and shelf page. Idempotent (markers <!--LISTW--> ... <!--/LISTW-->).
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
const SCRIPT = '<script src="/list.js" defer></script>';
const BTNSTYLE = 'display:inline-flex;align-items:center;gap:7px;font-family:var(--fm);font-size:15px;font-weight:700;letter-spacing:.4px;color:#10203a;background:var(--gold);border:none;border-radius:6px;padding:11px 18px;cursor:pointer;';

function ensureScript(h) {
  if (h.indexOf('/list.js') !== -1) return h;
  return h.replace(/(<\/body>)/i, '  ' + SCRIPT + '\n$1');
}
function stripWidget(h) { return h.replace(/\s*<!--LISTW-->[\s\S]*?<!--\/LISTW-->/g, ''); }

let recipes = 0, shelves = 0;

// ---- recipes: button before "The Method" ----
const rdirs = fs.readdirSync(path.join(ROOT, 'recipes')).filter(d => fs.existsSync(path.join(ROOT, 'recipes', d, 'index.html')));
for (const d of rdirs) {
  const p = path.join(ROOT, 'recipes', d, 'index.html');
  let h = fs.readFileSync(p, 'utf8');
  h = stripWidget(h);
  const block = `<!--LISTW-->
  <div style="border-top:1px solid var(--line);margin-top:30px;padding-top:22px;">
    <button data-add-recipe style="${BTNSTYLE}">🛒 Add all ingredients to my list</button>
    <span style="font-family:var(--fm);font-size:15px;color:var(--meta);margin-left:12px;">One list, with a link to where to buy each one.</span>
  </div>
  <!--/LISTW-->\n  `;
  if (/<div class="sechead">Part Two<\/div>/.test(h)) h = h.replace(/(<div class="sechead">Part Two<\/div>)/, block + '$1');
  else if (/<div class="sectitle">The Method<\/div>/.test(h)) h = h.replace(/(<div class="sechead">[\s\S]{0,40}?<\/div>\s*<div class="sectitle">The Method<\/div>)/, block + '$1');
  else if (/<div class="xlink">/.test(h)) h = h.replace(/(<div class="xlink">)/, block + '$1');
  else if (/<p class="disclosure">/.test(h)) h = h.replace(/(<p class="disclosure">)/, block + '$1');
  h = ensureScript(h);
  fs.writeFileSync(p, h); recipes++;
}

// ---- shelves: button before the first maker card ----
const sdirs = fs.readdirSync(path.join(ROOT, 'hunt')).filter(d => fs.existsSync(path.join(ROOT, 'hunt', d, 'index.html')));
for (const d of sdirs) {
  const p = path.join(ROOT, 'hunt', d, 'index.html');
  let h = fs.readFileSync(p, 'utf8');
  h = stripWidget(h);
  const hm = h.match(/<h1>([\s\S]*?)<\/h1>/);
  let name = hm ? hm[1].replace(/<[^>]+>/g, '').replace(/^best\s+/i, '').replace(/\s+worth the hunt.*$/i, '').trim() : d;
  const block = `<!--LISTW-->
  <div style="margin:0 0 26px;">
    <button data-add-shelf data-name="${name.replace(/"/g, '&quot;')}" style="${BTNSTYLE}">🛒 Add to my shopping list</button>
  </div>
  <!--/LISTW-->\n  `;
  if (/<div class="find/.test(h)) h = h.replace(/(<div class="find)/, block + '$1');
  h = ensureScript(h);
  fs.writeFileSync(p, h); shelves++;
}

console.log('list widget on recipes:', recipes, '| shelves:', shelves);
