// fix-untagged-amazon.js — every amazon.com link carries EXACTLY ONE associate tag.
//
// Normalises rather than appends: strips every existing tag= parameter, then adds
// one back. That makes the script idempotent and self-healing.
//
// The first version tested for an existing tag with /[?&]tag=/ and appended when
// it saw none. In the built HTML the separator is the ENTITY &amp;, so the
// character before "tag=" is ';', the guard missed, and it double-tagged 4,924
// links that were already correct. Amazon reads the first tag and the second is
// noise, but a URL with two tag params is a broken-looking link on 1,355 pages.
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
const TAG = '5best2buy-20';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

let touched = 0, files = 0;
for (const f of walk(ROOT)) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;

  s = s.replace(/href="(https?:\/\/(?:www\.)?amazon\.com[^"]*)"/g, (m, url) => {
    // split off the query, handling &amp; and & alike
    const qi = url.indexOf('?');
    let base = qi < 0 ? url : url.slice(0, qi);
    let params = qi < 0 ? [] : url.slice(qi + 1).split(/&amp;|&/).filter(Boolean);

    const kept = params.filter(p => !/^tag=/i.test(p));
    kept.push('tag=' + TAG);

    const rebuilt = base + '?' + kept.join('&amp;');
    if (rebuilt !== url) touched++;
    return `href="${rebuilt}"`;
  });

  if (s !== before) { fs.writeFileSync(f, s); files++; }
}
console.log(`normalised ${touched} Amazon link(s) across ${files} file(s)`);
