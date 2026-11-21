// brand-gate.js — keep the masthead and the voice from drifting back.
//
//   node brand-gate.js        exit 1 if any banned string is on the site
//
// 5best2buy.com is the site. "Worth the Hunt" (lowercase the) is the chapter
// name on the 553 independent-maker shelves and is REQUIRED, not banned.
//
// This gate scans ONLY the built site, never C:/tmp/*.js. That is deliberate:
// the one-shot rebrand scripts lived beside the generators and swept their own
// rule tables into no-ops, then reported success. A gate that can rewrite
// itself is not a gate.
const fs = require('fs'), path = require('path');
const ROOT = process.env.SITE_ROOT || 'C:/tmp/5b2b-live';   // SITE_ROOT, like the rest of the chain

// [needle, why it is banned]
const BANNED = [
  ['Worth The Hunt', 'old masthead — the site is 5best2buy.com'],
  ['WORTH THE HUNT', 'old wordmark baked into a hero card'],
  ["Why it isn't on Amazon", 'defines a maker by what it is not'],
  ["won't sell you", 'oppositional voice'],
  ['big stores', 'oppositional voice'],
  ['platforms bury', 'oppositional voice'],
  ['built against', 'the guide is for makers, not against anyone'],
  ["can't get on Amazon", 'oppositional voice'],
];

// things that must still be PRESENT — a rebrand that erases the chapter is also a failure
const REQUIRED = [['Worth the Hunt', 300, 'chapter name on the independent-maker shelves']];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(html|svg|txt)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const found = new Map(), presentIn = new Map();

for (const f of files) {
  let s;
  try { s = fs.readFileSync(f, 'utf8'); } catch (e) { continue; }
  for (const [needle] of BANNED) if (s.includes(needle)) {
    if (!found.has(needle)) found.set(needle, []);
    found.get(needle).push(f);
  }
  for (const [needle] of REQUIRED) if (s.includes(needle)) presentIn.set(needle, (presentIn.get(needle) || 0) + 1);
}

let fail = 0;
console.log(`brand gate: scanned ${files.length} file(s)`);
for (const [needle, why] of BANNED) {
  const hits = found.get(needle) || [];
  if (!hits.length) continue;
  fail++;
  console.log(`  BANNED  "${needle}" on ${hits.length} page(s) — ${why}`);
  hits.slice(0, 3).forEach(h => console.log(`            ${h.replace(ROOT, '')}`));
}
for (const [needle, min, why] of REQUIRED) {
  const n = presentIn.get(needle) || 0;
  if (n >= min) continue;
  fail++;
  console.log(`  MISSING "${needle}" on only ${n} page(s), expected >= ${min} — ${why}`);
}
console.log(fail ? `FAIL: ${fail} rule(s) violated` : 'PASS: masthead is 5best2buy, chapter intact, no oppositional voice');
process.exit(fail ? 1 : 0);
