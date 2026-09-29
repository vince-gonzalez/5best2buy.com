// add-runner-up.js — Homestead Gristmill as a runner-up on the flour shelf.
//
// Phinehas Adams asked to be added. The five on that shelf all earned it and
// there is no weak link to displace, so a sixth "best" would quietly make the
// number in the site's name mean less. A runner-up block says the true thing:
// worth knowing, didn't make the five.
//
// baking-flour is one of the static shelves, so this writes the markup directly.
// build-shelves.js now renders the same block from a `runnersUp` array for the
// 463 generated shelves, so the two stay visually identical.
//
// Everything on the card is verified: water-powered and Waco confirmed on their
// own About page, the rest from the existing card we already run on atta-flour.
const fs = require('fs');
const FILE = 'C:/tmp/5b2b-live/hunt/baking-flour/index.html';

const CARD = `
  <h2 class="ru-head" style="font-family:var(--fd);font-size:22px;color:var(--soft);margin:38px 0 4px;">Runner-up</h2>
  <p style="color:var(--soft);max-width:62ch;margin:0 0 16px;font-size:15px;">Didn&rsquo;t make the five, worth knowing about anyway.</p>

  <div class="find runner-up" style="border-left:3px solid var(--line);opacity:.92;" id="ru-homestead-gristmill">
    <div class="rank" style="color:var(--soft);">The Water-Powered One</div>
    <h2>Homestead Gristmill</h2>
    <div class="maker">Waco, TX &middot; water-powered, stone-ground on granite</div>
    <p>A working water-powered gristmill in central Texas &mdash; the water wheel is the drive, not the decoration, which is rare enough in commercial milling to be the reason to know about them. They grind hard red and hard white wheat on granite millstones, mill weekly rather than to stock, and ship nationwide. Cornmeal, grits and heritage grains alongside the flour. Chemical-free and non-GMO.</p>
    <a class="hunt" href="https://homesteadgristmill.com/" rel="sponsored nofollow" target="_blank">See it at Homestead Gristmill &rarr;</a>
  </div>
`;

const raw = fs.readFileSync(FILE, 'utf8');
const wasCRLF = raw.includes('\r\n');
let src = raw.replace(/\r\n/g, '\n');

if (src.includes('ru-homestead-gristmill')) { console.log('  already present — nothing to do'); process.exit(0); }

// The static shelves have no Open Spot block, so anchor on the FAQ section,
// which is what actually follows the last maker card here.
const anchor = '<div class="faq">';
const n = src.split(anchor).length - 1;
if (n !== 1) { console.log(`  FAILED — found ${n} Open Spot anchors, expected exactly 1`); process.exit(1); }

src = src.replace(anchor, CARD + '\n' + anchor);
fs.writeFileSync(FILE, wasCRLF ? src.replace(/\n/g, '\r\n') : src);

const after = fs.readFileSync(FILE, 'utf8');
console.log('  runner-up added');
console.log('  maker cards (the five)   : ' + ((after.match(/<div class="find" /g) || []).length + (after.match(/<div class="find"\n/g) || []).length));
console.log('  runner-up blocks         : ' + (after.match(/class="find runner-up"/g) || []).length);
console.log('  Open Spot blocks         : ' + (after.match(/class="find open"/g) || []).length);
