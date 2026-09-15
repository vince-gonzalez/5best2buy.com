// resolver.js — one ingredient-to-shelf resolver, shared by every linker.
//
// This logic was duplicated across the single-name and combo linkers and had
// already drifted. It is the piece that decides what a cook is told to buy, so
// it lives in one file with the reasoning attached.
//
// Rules, each earned by a specific wrong link:
//   DIETARY       halal-/kosher- shelves are reached through their hubs, never as
//                 the default source. "extra-virgin olive oil" -> kosher-oil, 170x.
//   FINISHED      /hunt/juice/ sells cold-pressed juice DRINKS. "lemon juice" in a
//                 recipe is not that. No structural rule sees it, so it's a list.
//   CONTAINMENT   every word of the shelf slug must appear in the ingredient.
//                 Without it: tomato -> tomato-JAM, bay leaves -> GRAPE-leaves,
//                 cooked rice -> MORTADELLA-cooked.
//   ALTERNATIVES  a slug like onions-shallots comes from the shelf name
//                 "Onions & Shallots" -- those words are alternatives, not a
//                 compound, so ANY of them satisfies containment. Otherwise
//                 plain "onion" matches nothing.
//   AMBIGUITY     an ingredient carrying another shelf's keyword is a compound
//                 product; the generic shelf is wrong. "lemon juice", 50x.
//   EXACT         if the ingredient IS the shelf's keywords, fire regardless of
//                 how common the word is. "ginger" has df=3 and was being
//                 rejected as insufficiently rare while pointing at /hunt/ginger/.
const fs = require('fs');

const IDX = JSON.parse(fs.readFileSync('C:/tmp/5b2b-extension/index.json', 'utf8'));

const STOP = new Set(('the and for with from that this pack size oz ounce ounces lb lbs pound pounds free new ' +
  'original premium natural organic best value each box bag case fresh dried ground whole large small ' +
  'medium plus your our about into over under more most some such than then there these those cup cups ' +
  'tbsp tsp teaspoon tablespoon plain good hot cold warm room temperature optional taste finely thinly ' +
  'chopped sliced minced grated shredded beaten softened melted divided crushed peeled seeded').split(' '));

const tokens = s => {
  const out = [], seen = {};
  for (const w of String(s || '').toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/)) {
    if (w.length < 3 || STOP.has(w) || seen[w]) continue;
    seen[w] = 1; out.push(w);
  }
  return out;
};

const DF = {};
for (const s of IDX.shelves) for (const k of s.k) DF[k] = (DF[k] || 0) + 1;

// A shelf is a list of ALTERNATIVES only when its own slug words are joined to
// EACH OTHER by & / and in the shelf name: "Onions & Shallots" -> onions-shallots.
//
// Testing for & anywhere in the name was tried and was a disaster: 233 shelves
// qualified because titles like "Truffle Salt & Seasoning" contain one, so bare
// "Salt" resolved to truffle-salt, "Garlic" to pickled-garlic and "Ginger" to
// ginger-beer. The ampersand has to sit between the two words of the slug.
const ALTERNATIVES = new Set();
for (const sh of IDX.shelves) {
  const words = sh.s.split('-');
  if (words.length !== 2) continue;
  const n = sh.n.toLowerCase();
  const [a, b] = words;
  const joined = new RegExp(`\\b${a}s?\\s*(?:&|and|&amp;)\\s*${b}s?\\b`, 'i');
  if (joined.test(n)) ALTERNATIVES.add(sh.s);
}

const RARE_DF = 2, RARE_LEN = 4;
const isDietary = slug => /^(halal|kosher)-/.test(slug);
const NEVER = new Set(['juice', 'lemonade', 'ice']);
const stem = w => w.replace(/(ies)$/, 'y').replace(/([^s])s$/, '$1');

function score(keys, toks) {
  let s = 0, hits = 0, rare = 0;
  for (const k of keys) {
    if (!toks.includes(k)) continue;
    const df = DF[k] || 1;
    hits++;
    if (df <= RARE_DF && k.length >= RARE_LEN) rare++;
    s += 1 / Math.log(2 + df);
  }
  if (!hits) return 0;
  if (hits < 2 && !rare) return 0;
  return s * (1 + hits * 0.35) * (1 + rare * 1.6);
}

function resolve(name) {
  const toks = tokens(name);
  if (!toks.length) return null;
  const nameSlug = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const ingStems = new Set(toks.map(stem));
  const covered = w => ingStems.has(stem(w)) || nameSlug.includes(w);
  const isShelfWord = w => (DF[w] || 0) > 0;

  let best = null;
  for (const sh of IDX.shelves) {
    if (isDietary(sh.s) || NEVER.has(sh.s)) continue;
    const words = sh.s.split('-');

    const ok = ALTERNATIVES.has(sh.s) ? words.some(covered) : words.every(covered);
    if (!ok) continue;

    // compare on stems: "onion" is not a foreign word to a shelf keyed "onions",
    // but a raw string test says it is, and the ambiguity rule then rejected it
    const keyStems = new Set([...sh.k, ...words].map(stem));
    if (toks.some(t => !keyStems.has(stem(t)) && isShelfWord(t))) continue;

    // the ingredient is nothing but this shelf's own words: definitive
    const exact = toks.every(t => keyStems.has(stem(t)));
    let sc = exact ? 5 : score(sh.k, toks);
    if (!sc) continue;
    sc *= 1 + words.length * 0.4;
    if (!best || sc > best.sc) best = { sc, slug: sh.s, name: sh.n };
  }
  return best && best.sc >= 1.0 ? best : null;
}

const isCombo = n => /,|&| and /i.test(String(n));

function resolveCombo(name) {
  const parts = String(name).replace(/&amp;/g, '&').split(/\s*(?:,|&|\band\b)\s*/i)
    .map(p => p.trim()).filter(p => p.length > 2);
  if (parts.length < 2) return null;
  const seen = new Set(), hits = [];
  for (const p of parts) {
    const r = resolve(p);
    if (!r || seen.has(r.slug)) continue;
    seen.add(r.slug);
    hits.push({ slug: r.slug, label: p.trim().replace(/^./, c => c.toUpperCase()) });
  }
  return hits.length ? hits : null;
}

module.exports = { IDX, DF, tokens, resolve, resolveCombo, isCombo, ALTERNATIVES };
