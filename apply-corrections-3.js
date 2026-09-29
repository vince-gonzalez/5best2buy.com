// apply-corrections-3.js — Homestead Gristmill: the fact we left out.
//
// Phinehas Adams wrote in asking to be added to the craft flour mills shelf. He
// is already on the site, on atta-flour, and his note mentioned something our
// card never said: the mill is water-powered. Confirmed on their own About page
// — water-powered, Waco, Texas, stone-ground flour, cornmeal, grits and
// heritage grains.
//
// A working water-powered commercial gristmill is the single most distinctive
// thing about them and we had "milled weekly" instead. That is a correction
// worth making whatever gets decided about the other shelf, and it is a fact of
// theirs, not a favour.
const fs = require('fs');
const FILE = 'C:/tmp/shelf-content/gap-latin-indian.js';

const EDITS = [
  {
    what: 'line — water-powered',
    from: 'Waco, TX \u00b7 stone-ground whole wheat, weekly',
    to:   'Waco, TX \u00b7 water-powered, stone-ground weekly',
  },
  {
    what: 'body — water-powered on granite',
    from: 'A Central Texas mill grinding whole hard red and hard white wheat on granite millstones, milled weekly and shipped nationwide, chemical-free and non-GMO.',
    to:   'A water-powered Central Texas mill grinding whole hard red and hard white wheat on granite millstones, milled weekly and shipped nationwide, chemical-free and non-GMO.',
  },
];

let ok = 0, bad = 0;
let src = fs.readFileSync(FILE, 'utf8');
for (const e of EDITS) {
  const n = src.split(e.from).length - 1;
  if (n !== 1) { console.log(`  FAILED ${e.what} — found ${n}, expected 1`); bad++; continue; }
  src = src.split(e.from).join(e.to);
  console.log(`  applied ${e.what}`);
  ok++;
}
if (!bad) fs.writeFileSync(FILE, src);
console.log(`\n  ${ok} applied, ${bad} failed`);
process.exit(bad ? 1 : 0);
