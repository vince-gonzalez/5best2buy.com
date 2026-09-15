// inject-affiliate-marks.js — the standard affiliate disclosure, on every shelf.
//
// ONE line, identical everywhere, TRUE IN EVERY STATE. It does not count links,
// does not name which maker converts, and does not care whether a link was wired
// by hand or rewritten at runtime by Awin's Convert-a-Link. That matters: a
// disclosure that depends on a hand-maintained list goes stale the moment the
// affiliate roster changes, and a stale disclosure is worse than none.
//
// What is being disclosed is the commission. What is being PROMISED is that
// money never buys a spot or a rank. Those are separate claims and only the
// second one is the site's integrity position.
//
// Idempotent via <!--AFFM-->. Also strips the retired <!--AFFC--> per-card marks.
// Run with the other injectors, after build-shelves.
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

const NOTE = `<!--AFFM--><p style="font-size:15px;line-height:1.6;color:#8496ae;margin:14px 0 0;padding:9px 13px;background:rgba(18,30,48,.55);border-left:2px solid #f0c560;border-radius:0 7px 7px 0;">Some links on this page earn us a commission. It never affects who makes a list or what order they're in &mdash; <a href="/how-we-hunt/" style="color:#8496ae;">placement is not for sale</a>, and no maker has ever been asked for money.</p><!--/AFFM-->`;

const SHELF_RE = /<!--AFFM-->[\s\S]*?<!--\/AFFM-->/;
const OLD_CARD_RE = /<!--AFFC-->[\s\S]*?<!--\/AFFC-->/g;

let touched = 0, stripped = 0;
for (const slug of fs.readdirSync(path.join(ROOT, 'hunt'))) {
  const p = path.join(ROOT, 'hunt', slug, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  const before = h;

  const hadCards = OLD_CARD_RE.test(h);
  OLD_CARD_RE.lastIndex = 0;
  if (hadCards) { h = h.replace(OLD_CARD_RE, ''); stripped++; }

  if (SHELF_RE.test(h)) h = h.replace(SHELF_RE, NOTE);
  else if (h.includes('<p class="disclosure">')) h = h.replace('<p class="disclosure">', NOTE + '\n  <p class="disclosure">');
  else if (h.includes('</body>')) h = h.replace('</body>', NOTE + '\n</body>');

  if (h !== before) { fs.writeFileSync(p, h); touched++; }
}
console.log(`affiliate disclosure: ${touched} shelf/shelves updated; ${stripped} had retired per-card marks removed`);
