// inject-maker-cta.js — put a self-serve "you're featured here" CTA on every shelf page.
// Reaches the ~430 makers we have no email for, plus anyone who finds their own page later.
// Idempotent via <!--MCTA--> marker. Run in the inject chain (before header/navbar is fine).
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

const block = slug => `<!--MCTA--><div style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;font-size:15px;line-height:1.7;color:#c8d3e6;background:#121e30;border:1px solid rgba(120,150,190,.18);border-left:3px solid #f0c560;border-radius:9px;padding:13px 16px;margin:22px 0 0;">
<b style="color:#f0c560;">Is this your business?</b> You're on this list because we think you're worth the hunt — nobody paid for the spot and nobody can. If you'd like a small mark for your own site, <a href="/badge/?shelf=${slug}" style="color:#5fb0ef;">yours is here</a>, already linking back to this page. Free, and nothing changes either way. Something wrong in your write-up? <a href="/contact/" style="color:#5fb0ef;">Tell us</a> and we'll fix it.
</div><!--/MCTA-->`;

let done = 0, skipped = 0;
for (const slug of fs.readdirSync(path.join(ROOT, 'hunt'))) {
  const p = path.join(ROOT, 'hunt', slug, 'index.html');
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  if (h.includes('<!--MCTA-->')) { skipped++; continue; }

  const b = block(slug);
  // anchor: just before the affiliate disclosure, else before the recruit line, else before </body>
  if (h.includes('<p class="disclosure">')) h = h.replace('<p class="disclosure">', b + '\n  <p class="disclosure">');
  else if (h.includes('<p class="recruit">')) h = h.replace('<p class="recruit">', b + '\n  <p class="recruit">');
  else if (h.includes('</body>')) h = h.replace('</body>', b + '\n</body>');
  else { skipped++; continue; }

  fs.writeFileSync(p, h); done++;
}
console.log('maker CTA injected on', done, 'shelves;', skipped, 'skipped (already had it)');
