// inject-adsense.js — the ad loader, only where an ad can actually appear.
//
// This used to add the loader to every page. 2,127 of 2,549 pages ended up
// requesting Google's ad JavaScript with no <ins> unit anywhere on them, so
// they carried the whole cost of AdSense — the request, the latency, the data
// going to Google, the disclosure obligation — and could never earn a cent.
// Recipes (1,441) and shelves (572) were the two largest sections in that group.
//
// Recipe and shelf pages are now deliberately ad-free. That is the thing people
// actually notice about the site, it costs nothing to keep since those pages
// earned zero either way, and it makes the claim true by design rather than by
// an injector's oversight. Ads stay on cuts, swap, soda and states, which is
// where the units already are.
//
// Runs in both directions: adds the loader where it belongs, strips it where it
// does not, so a rebuild cannot quietly reintroduce it.
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
const ADS = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>';
const MARK = "gtag('config','G-GG5QF6LH0D');</script>";

// sections that stay clean
const ADFREE = /[\\/](recipes|hunt|cuisine)[\\/]/;

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === '.git') continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) files.push(p);
  }
})(ROOT);

let added = 0, stripped = 0, kept = 0, noAnchor = 0;
for (const f of files) {
  let h = fs.readFileSync(f, 'utf8');
  const has = h.includes('pagead2.googlesyndication.com');
  const before = h;

  if (ADFREE.test(f)) {
    if (has) {
      // remove the loader script wherever it sits, and any stray blank line
      h = h.replace(/\s*<script async src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js[^"]*"[^>]*><\/script>/g, '');
      if (h !== before) { fs.writeFileSync(f, h); stripped++; }
    }
    continue;
  }

  if (has) { kept++; continue; }
  if (h.includes(MARK)) { fs.writeFileSync(f, h.replace(MARK, MARK + '\n' + ADS)); added++; }
  else noAnchor++;
}
console.log(`AdSense loader: ${added} added, ${kept} already present, ${stripped} STRIPPED from ad-free sections, ${noAnchor} had no GA anchor`);
