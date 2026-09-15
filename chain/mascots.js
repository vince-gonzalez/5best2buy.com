// mascots.js — the 5best2buy cast + auto-composer.
// One shared face() kit, but each character gets its OWN eye preset (glossy/dot/big/small) so they read as
// a family of individuals, not identical clones. Bodies normalized: center x=60, feet ~y=150, face ~cy 96.
// matchCast(recipe) -> ordered hero cast; groupPhoto(keys,title,sub) -> branded 1200x630 hero (= og/pin image).
// Finite cast, infinite combinations: 50 chars -> ~900 dish photos. Scales to 285 (one per shelf) unchanged.

// --- shared face kit; eye STYLE varies per character via presets ---
function face(cx, cy, o = {}) {
  const { sp = 9, eye = 6.5, pup = 3.3, mw = 16, dark = '#1b1b1b', blush = '#ff9a8f', ring = '#d8b3aa', eyes = 'sclera' } = o;
  const lx = cx - sp, rx = cx + sp, my = cy + 11;
  const eyeSVG = eyes === 'dot'
    ? `<circle cx="${lx}" cy="${cy}" r="${pup + 2.4}" fill="${dark}"/><circle cx="${rx}" cy="${cy}" r="${pup + 2.4}" fill="${dark}"/>`
      + `<circle cx="${lx + 1.7}" cy="${cy - 1.7}" r="1.6" fill="#fff"/><circle cx="${rx + 1.7}" cy="${cy - 1.7}" r="1.6" fill="#fff"/>`
    : `<circle cx="${lx}" cy="${cy}" r="${eye}" fill="#fff" stroke="${ring}" stroke-width="0.7"/><circle cx="${rx}" cy="${cy}" r="${eye}" fill="#fff" stroke="${ring}" stroke-width="0.7"/>`
      + `<circle cx="${lx + 1}" cy="${cy + 1}" r="${pup}" fill="${dark}"/><circle cx="${rx + 1}" cy="${cy + 1}" r="${pup}" fill="${dark}"/>`
      + `<circle cx="${lx + 2}" cy="${cy - 0.3}" r="1.2" fill="#fff"/><circle cx="${rx + 2}" cy="${cy - 0.3}" r="1.2" fill="#fff"/>`;
  return eyeSVG
    + `<path d="M${cx - mw / 2} ${my} q${mw / 2} ${(mw * 0.45).toFixed(1)} ${mw} 0" stroke="${dark}" stroke-width="2.3" fill="none" stroke-linecap="round"/>`
    + `<circle cx="${cx - sp - 8}" cy="${my - 2}" r="4.3" fill="${blush}" opacity="0.7"/><circle cx="${cx + sp + 8}" cy="${my - 2}" r="4.3" fill="${blush}" opacity="0.7"/>`;
}
const arms = (col, cy, sp = 42, w = 4.5) =>
  `<path d="M${60 - sp} ${cy} q-10 -2 -12 6" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`
  + `<path d="M${60 + sp} ${cy} q10 3 10 12" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
const shine = (cx, cy, rx, ry, c = '#ffffff') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}" opacity="0.4"/>`;

// eye presets (style only — spacing stays put so eyes never drift off a body)
const PRESETS = { a: {}, a2: { eye: 7.6 }, b: { eyes: 'dot' }, b2: { eyes: 'dot', pup: 2.5 }, b3: { eyes: 'dot', pup: 4.2 } };
// per-character eye assignment (hand-tuned so neighbors differ)
const EYE = {
  tomato: 'b', onion: 'a', garlic: 'a2', chili: 'b2', egg: 'a', cheese: 'b3', herb: 'a2', mushroom: 'b',
  carrot: 'a2', potato: 'b', lemon: 'a', lime: 'b2', avocado: 'a', broccoli: 'b3', corn: 'a', pasta: 'b',
  bread: 'a2', walnut: 'b', honey: 'a', 'bell-pepper': 'b2', 'bell-pepper-green': 'a', 'bell-pepper-yellow': 'b',
  chicken: 'a', beef: 'b', fish: 'a2', shrimp: 'b', bacon: 'a', tofu: 'b2', sausage: 'a2', spinach: 'b', cabbage: 'a',
  cauliflower: 'b3', zucchini: 'a', eggplant: 'b', cucumber: 'a2', ginger: 'b', 'sweet-potato': 'a', pumpkin: 'b3',
  apple: 'a', banana: 'b2', strawberry: 'a', orange: 'b', coconut: 'a', rice: 'a2', bean: 'b', chocolate: 'a',
  milk: 'a2', almond: 'b', olive: 'a', tortilla: 'b3', butter: 'a', ketchup: 'b', salt: 'a2', pepper: 'a', spice: 'a',
};
const ev = k => PRESETS[EYE[k] || 'a'];

// --- BODIES: each is (E)=>svg, where E is the character's eye preset ---
const BODIES = {
tomato: E => `<g><path d="M60 60 q-4 -16 -18 -20 q5 12 5 22 M60 60 q4 -16 18 -20 q-5 12 -5 22 M60 58 q-13 -11 -27 -8 q11 8 21 15 M60 58 q13 -11 27 -8 q-11 8 -21 15 M60 56 q0 -17 0 -22" fill="#54a84a" stroke="#3c7d34" stroke-width="1.4" stroke-linejoin="round"/><path d="M60 58 q2 -11 -3 -19" stroke="#6b4a2a" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="60" cy="98" r="42" fill="#e5482f" stroke="#b5341f" stroke-width="2.5"/>${shine(45,80,14,9,'#ff8a72')}${arms('#c93b26',102)}${face(60,98,{...E})}</g>`,
onion: E => `<g><path d="M60 42 q-8 -18 -2 -26 M60 42 q8 -16 2 -26 M60 42 q0 -20 0 -26" stroke="#7fae5a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M60 46 q-34 6 -34 52 q0 46 34 50 q34 -4 34 -50 q0 -46 -34 -52z" fill="#efe1cb" stroke="#b98f5f" stroke-width="2.5"/><path d="M60 48 q-16 6 -16 50 q0 40 16 48 M60 48 q16 6 16 50 q0 40 -16 48 M34 74 q26 -8 52 0 M30 104 q30 -8 60 0" stroke="#cbaa7c" stroke-width="1.3" fill="none"/>${face(60,96,{blush:'#f0b6c0',...E})}</g>`,
garlic: E => `<g><path d="M60 46 q7 -8 3 -18 q-9 8 -3 18" fill="none" stroke="#b7a77f" stroke-width="3" stroke-linecap="round"/><path d="M60 50 q-30 6 -26 58 q4 40 26 42 q22 -2 26 -42 q4 -52 -26 -58z" fill="#fbfaf6" stroke="#c9bfa6" stroke-width="2.5"/><path d="M60 50 q-14 6 -14 56 q0 34 14 44 M60 50 q14 6 14 56 q0 34 -14 44 M46 62 q14 -4 28 0" stroke="#e7e0cd" stroke-width="1.3" fill="none"/><path d="M40 142 q-4 8 -2 12 M52 146 q0 8 0 10 M68 146 q0 8 0 10 M80 142 q4 8 2 12" stroke="#d8cdb0" stroke-width="2" stroke-linecap="round"/>${face(60,96,{blush:'#e1bee7',ring:'#d0c6ad',...E})}</g>`,
chili: E => `<g><path d="M60 46 q6 -3 3 8" stroke="#3c7d34" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M60 52 q22 4 24 34 q3 34 -22 46 q-22 -6 -18 -34 q0 -34 16 -46z" fill="#e0392a" stroke="#a82419" stroke-width="2.5"/><path d="M60 60 q14 6 15 28 q1 20 -12 30" fill="none" stroke="#ff6b5a" stroke-width="2" opacity="0.55"/>${face(60,98,{sp:7,eye:6,ring:'#c07a6e',...E})}</g>`,
egg: E => `<g><path d="M26 118 q-6 -46 34 -46 q40 0 34 46 q-4 20 -34 20 q-30 0 -34 -20z" fill="#fbfbf5" stroke="#e6e2cf" stroke-width="2.5"/><circle cx="60" cy="104" r="18" fill="#f7c94b" stroke="#e3ad24" stroke-width="2"/>${shine(54,99,6,4,'#ffe08a')}${face(60,104,{sp:6,eye:6,ring:'#d8bf7a',blush:'#f6b26a',...E})}</g>`,
cheese: E => `<g><path d="M24 132 l30 -74 q6 -4 12 0 l30 74 q-36 14 -72 0z" fill="#efd07d" stroke="#c9a63f" stroke-width="2.5"/><path d="M24 132 q36 14 72 0 l-3 -9 q-33 12 -66 0z" fill="#caa142"/><circle cx="46" cy="106" r="3.4" fill="#d9b455"/><circle cx="72" cy="114" r="2.8" fill="#d9b455"/><circle cx="62" cy="92" r="2.4" fill="#d9b455"/>${face(60,100,{dark:'#3a2c12',ring:'#d8bf7a',blush:'#e9a24f',...E})}</g>`,
herb: E => `<g><path d="M60 54 q-2 46 0 92" stroke="#3c7d34" stroke-width="4" fill="none"/><path d="M60 104 q-32 -6 -42 -32 q28 -4 42 12z" fill="#4fa246" stroke="#3c7d34" stroke-width="1.6"/><path d="M60 90 q32 -8 44 -34 q-30 -2 -44 14z" fill="#5bb350" stroke="#3c7d34" stroke-width="1.6"/><path d="M60 64 q-5 -20 8 -32 q11 15 2 32z" fill="#5bb350" stroke="#3c7d34" stroke-width="1.6"/>${face(60,112,{eye:6,ring:'#bcd3a0',blush:'#a7d68f',...E})}</g>`,
mushroom: E => `<g><path d="M46 108 q-6 26 0 40 q14 6 28 0 q6 -14 0 -40z" fill="#f0e6d2" stroke="#cdbf9f" stroke-width="2.5"/><path d="M18 100 q0 -40 42 -40 q42 0 42 40 q-42 20 -84 0z" fill="#c8503a" stroke="#9c3626" stroke-width="2.5"/><circle cx="38" cy="82" r="5" fill="#f3e6d0"/><circle cx="70" cy="78" r="6" fill="#f3e6d0"/><circle cx="84" cy="92" r="4" fill="#f3e6d0"/>${face(60,124,{eye:6,sp:8,ring:'#cdbf9f',blush:'#e6a07a',...E})}</g>`,
carrot: E => `<g><path d="M48 34 l4 20 M60 30 l0 24 M72 34 l-4 20" stroke="#4c9a3f" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M40 54 q20 -8 40 0 l-14 84 q-6 8 -12 0z" fill="#ef8a2b" stroke="#cf6f1b" stroke-width="2.5"/><path d="M45 74 h30 M48 92 h24 M51 110 h18" stroke="#dd7c22" stroke-width="1.6"/>${face(60,80,{eye:6,sp:8,ring:'#e0a06a',blush:'#ffb27a',...E})}</g>`,
potato: E => `<g><path d="M22 96 q-6 -34 30 -40 q42 -6 46 26 q6 34 -26 44 q-44 12 -50 -30z" fill="#c99a63" stroke="#9c7343" stroke-width="2.5"/><ellipse cx="40" cy="78" rx="3" ry="2" fill="#8a5f35"/><ellipse cx="76" cy="72" rx="3" ry="2" fill="#8a5f35"/><ellipse cx="82" cy="98" rx="2.5" ry="1.8" fill="#8a5f35"/>${face(58,96,{ring:'#b08a5a',blush:'#e0a878',...E})}</g>`,
lemon: E => `<g><path d="M84 58 q8 -4 4 6 q-6 2 -8 -4" fill="#7fae5a" stroke="#4c9a3f" stroke-width="1.4"/><ellipse cx="60" cy="98" rx="40" ry="34" fill="#f4d038" stroke="#d9ab1f" stroke-width="2.5"/><path d="M22 92 q-6 -2 -8 4 M98 92 q6 -2 8 4" stroke="#e0b81f" stroke-width="3" fill="none" stroke-linecap="round"/>${shine(44,82,12,8,'#fff0a0')}${face(60,98,{ring:'#d8bf5a',blush:'#f6c94b',...E})}</g>`,
lime: E => `<g><path d="M84 58 q8 -4 4 6 q-6 2 -8 -4" fill="#3c7d34" stroke="#2f6d33" stroke-width="1.4"/><ellipse cx="60" cy="98" rx="40" ry="34" fill="#8ac53e" stroke="#5f9e2a" stroke-width="2.5"/>${shine(44,82,12,8,'#d6ef9a')}${face(60,98,{ring:'#9ec06a',blush:'#c3e08f',...E})}</g>`,
avocado: E => `<g><path d="M60 46 q-28 4 -30 46 q-2 40 30 52 q32 -12 30 -52 q-2 -42 -30 -46z" fill="#4f7a3a" stroke="#3a5c2b" stroke-width="2.5"/><path d="M60 58 q-18 4 -19 36 q-1 30 19 42 q20 -12 19 -42 q-1 -32 -19 -36z" fill="#b7d98a"/><circle cx="60" cy="104" r="15" fill="#8a5a2e" stroke="#6e451f" stroke-width="1.5"/>${shine(55,100,4,3,'#b98a52')}${face(60,90,{eye:6,sp:8,ring:'#a9c97e',blush:'#cfe0a0',...E})}</g>`,
broccoli: E => `<g><circle cx="34" cy="56" r="15" fill="#3f8f43" stroke="#2f6d33" stroke-width="1.6"/><circle cx="60" cy="46" r="17" fill="#4ca350" stroke="#2f6d33" stroke-width="1.6"/><circle cx="86" cy="56" r="15" fill="#3f8f43" stroke="#2f6d33" stroke-width="1.6"/><circle cx="48" cy="62" r="13" fill="#47993f"/><circle cx="74" cy="62" r="13" fill="#47993f"/><path d="M40 72 q20 8 40 0 l-6 66 q-14 8 -28 0z" fill="#bcd89a" stroke="#9cbb72" stroke-width="2"/>${face(60,102,{eye:6,ring:'#a9c97e',blush:'#cfe0a0',...E})}</g>`,
corn: E => `<g><path d="M40 60 q-18 -14 -30 -6 q10 14 30 20z" fill="#5bb350" stroke="#3c7d34" stroke-width="1.6"/><path d="M80 60 q18 -14 30 -6 q-10 14 -30 20z" fill="#5bb350" stroke="#3c7d34" stroke-width="1.6"/><path d="M60 52 q-24 2 -24 46 q0 44 24 50 q24 -6 24 -50 q0 -44 -24 -46z" fill="#f2c94c" stroke="#d9a92f" stroke-width="2.5"/><path d="M48 62 q24 -6 24 0 M46 80 q28 -6 28 0 M46 98 q28 -6 28 0 M48 116 q24 -6 24 0" stroke="#dfb133" stroke-width="1.4" fill="none"/><path d="M52 60 v72 M60 58 v76 M68 60 v72" stroke="#dfb133" stroke-width="1.2"/>${face(60,96,{eye:6,ring:'#d8bf7a',blush:'#f0c06a',...E})}</g>`,
pasta: E => `<g><g stroke="#d9bd63" stroke-width="1">` + [26,37,48,59,70,81].map(x=>`<rect x="${x}" y="44" width="8" height="106" rx="3" fill="#f0d98a"/><rect x="${x+2}" y="48" width="2" height="96" rx="1" fill="#f9ecb6" opacity="0.7"/>`).join('') + `</g><rect x="22" y="124" width="76" height="13" rx="3" fill="#e3b24a" stroke="#c8991f" stroke-width="1.5"/>${face(60,88,{eye:6,ring:'#d8bf7a',blush:'#e8c07a',...E})}</g>`,
bread: E => `<g><path d="M12 116 q4 24 48 24 q44 0 48 -24 l0 6 q0 22 -48 22 q-48 0 -48 -22z" fill="#c88742" stroke="#a8703a" stroke-width="2.5"/><path d="M14 118 q0 -56 46 -56 q46 0 46 56 q0 16 -12 18 q-34 8 -68 0 q-12 -2 -12 -18z" fill="#d99a52" stroke="#a8703a" stroke-width="2.5"/><path d="M34 84 l16 -18 M53 88 l16 -18 M72 92 l14 -16" stroke="#a8703a" stroke-width="3" fill="none" stroke-linecap="round"/>${face(60,104,{eye:6,ring:'#c9a366',blush:'#e6a878',...E})}</g>`,
walnut: E => `<g><path d="M24 92 q-4 -34 36 -38 q40 4 36 38 q4 34 -36 44 q-40 -10 -36 -44z" fill="#c79a5f" stroke="#966d3c" stroke-width="2.5"/><path d="M60 58 q-2 44 0 76 M40 68 q14 20 4 52 M80 68 q-14 20 -4 52 M30 92 q30 8 60 0" stroke="#9c7343" stroke-width="1.8" fill="none"/>${face(58,94,{eye:6,sp:8,ring:'#b08a5a',blush:'#e0a878',...E})}</g>`,
honey: E => `<g><path d="M40 54 q-20 6 -18 46 q2 38 38 38 q36 0 38 -38 q2 -40 -18 -46z" fill="#f0a638" stroke="#c47e1f" stroke-width="2.5"/><ellipse cx="60" cy="54" rx="21" ry="6.5" fill="#f6bb52" stroke="#c47e1f" stroke-width="2"/><path d="M26 82 q34 10 68 0" stroke="#d98f24" stroke-width="8" fill="none" opacity="0.3"/><path d="M40 68 q-8 10 -6 26" stroke="#ffd27a" stroke-width="4" opacity="0.5" fill="none" stroke-linecap="round"/>${face(60,106,{ring:'#d99f4a',blush:'#f2b45a',...E})}</g>`,
chicken: E => `<g><rect x="53" y="96" width="14" height="40" rx="4" fill="#f2ead4" stroke="#cdbf9f" stroke-width="2"/><circle cx="51" cy="137" r="7" fill="#f6efe0" stroke="#cdbf9f" stroke-width="2"/><circle cx="69" cy="137" r="7" fill="#f6efe0" stroke="#cdbf9f" stroke-width="2"/><path d="M60 38 q-34 2 -36 38 q-2 30 18 44 q18 11 36 0 q20 -14 18 -44 q-2 -36 -36 -38z" fill="#dd8f47" stroke="#a8632c" stroke-width="2.5"/><path d="M38 58 q8 -10 18 -8 M82 64 q-6 -10 -16 -8" stroke="#ecb178" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>${shine(44,64,10,7,'#f0b878')}${face(60,86,{eye:6,ring:'#c98a5a',blush:'#f0b48a',...E})}</g>`,
beef: E => `<g><path d="M20 92 q-6 -36 42 -36 q48 0 42 36 q6 34 -42 40 q-48 -6 -42 -40z" fill="#b3503f" stroke="#7f3325" stroke-width="2.5"/><path d="M20 92 q-6 -36 42 -36 q48 0 42 36 q6 34 -42 40 q-48 -6 -42 -40z" fill="none" stroke="#ecdcc4" stroke-width="4" opacity="0.55"/><path d="M34 78 q28 -6 54 8 M32 100 q30 -4 58 8" stroke="#c9705f" stroke-width="2" fill="none" opacity="0.6"/>${face(58,94,{eye:6,ring:'#c98a7a',blush:'#e88a72',...E})}</g>`,
fish: E => `<g><path d="M16 96 q26 -32 60 -20 q24 8 26 20 q-2 12 -26 20 q-34 12 -60 -20z" fill="#6fb0d6" stroke="#3f7fa0" stroke-width="2.5"/><path d="M98 82 l20 -12 l0 52 l-20 -12z" fill="#6fb0d6" stroke="#3f7fa0" stroke-width="2.5"/>${face(46,94,{eye:6,sp:7,ring:'#7fb8d8',blush:'#a0d0e8',...E})}</g>`,
shrimp: E => `<g><path d="M40 60 q40 -14 44 30 q4 40 -34 46 q-30 4 -30 -22 q0 -18 16 -20 q-14 -4 -12 -18 q2 -12 16 -16z" fill="#f2a48a" stroke="#d9765a" stroke-width="2.5"/><path d="M46 78 q22 -6 30 14 M44 96 q26 -4 34 16" stroke="#e88a6a" stroke-width="2" fill="none" opacity="0.6"/>${face(46,74,{eye:6,sp:7,ring:'#e8a48a',blush:'#f8b8a0',...E})}</g>`,
bacon: E => `<g><path d="M40 46 q-10 12 4 24 q-14 12 0 24 q-14 12 0 24 q-10 10 4 22 l32 0 q-14 -12 -4 -22 q-14 -12 0 -24 q-14 -12 0 -24 q-14 -12 4 -24z" fill="#c85a4a" stroke="#9c3e30" stroke-width="2.5"/><path d="M52 52 q-8 12 4 24 q-12 12 0 24 q-12 12 0 24" fill="none" stroke="#f0d8c8" stroke-width="6" opacity="0.8"/>${face(60,96,{eye:6,ring:'#d98a7a',blush:'#f0a890',...E})}</g>`,
tofu: E => `<g><path d="M28 72 l32 -14 l32 14 l0 50 q0 6 -6 8 l-52 0 q-6 -2 -6 -8z" fill="#fbf6ea" stroke="#ddd2b8" stroke-width="2.5"/><path d="M28 72 l32 14 l32 -14 M60 86 l0 52" stroke="#e6dcc4" stroke-width="1.5" fill="none"/>${face(60,104,{eye:6,ring:'#d8cdb0',blush:'#f0d8c0',...E})}</g>`,
sausage: E => `<g><path d="M34 58 q26 -8 52 0 q10 34 0 68 q-26 8 -52 0 q-10 -34 0 -68z" fill="#a84a3a" stroke="#7c3325" stroke-width="2.5"/><path d="M40 56 q-4 -8 4 -12 M80 56 q4 -8 -4 -12 M40 130 q-4 8 4 12 M80 130 q4 8 -4 12" stroke="#8c3c2c" stroke-width="3" fill="none" stroke-linecap="round"/>${face(60,92,{eye:6,ring:'#c9705f',blush:'#e88a72',...E})}</g>`,
spinach: E => `<g><path d="M60 50 q-2 50 0 98" stroke="#2f6d33" stroke-width="4" fill="none"/><path d="M60 100 q-36 -8 -46 -34 q30 -6 46 12z" fill="#3f8f43" stroke="#2f6d33" stroke-width="1.6"/><path d="M60 84 q36 -8 48 -36 q-32 -4 -48 16z" fill="#4ca350" stroke="#2f6d33" stroke-width="1.6"/><path d="M60 58 q-6 -20 8 -34 q12 16 2 34z" fill="#4ca350" stroke="#2f6d33" stroke-width="1.6"/>${face(60,110,{eye:6,ring:'#8fbf6a',blush:'#9fd07a',...E})}</g>`,
cabbage: E => `<g><circle cx="60" cy="98" r="44" fill="#8fc36a" stroke="#5f9e2a" stroke-width="2.5"/><path d="M60 54 q-24 10 -24 44 q0 30 24 44 M60 54 q24 10 24 44 q0 30 -24 44 M22 84 q38 -10 76 0 M20 108 q40 -10 80 0" stroke="#6faf3a" stroke-width="1.6" fill="none"/>${face(60,98,{eye:6,ring:'#9fc97e',blush:'#bfe090',...E})}</g>`,
cauliflower: E => `<g><circle cx="36" cy="58" r="15" fill="#f2ecda" stroke="#d8cdb0" stroke-width="1.6"/><circle cx="60" cy="48" r="17" fill="#f6f1e2" stroke="#d8cdb0" stroke-width="1.6"/><circle cx="84" cy="58" r="15" fill="#f2ecda" stroke="#d8cdb0" stroke-width="1.6"/><circle cx="48" cy="64" r="13" fill="#f4efe0"/><circle cx="74" cy="64" r="13" fill="#f4efe0"/><path d="M38 74 q22 10 44 0 l-6 62 q-16 8 -32 0z" fill="#bcd89a" stroke="#9cbb72" stroke-width="2"/>${face(60,104,{eye:6,ring:'#d8cdb0',blush:'#cfe0a0',...E})}</g>`,
zucchini: E => `<g><path d="M40 52 q22 -8 40 2 q12 40 4 80 q-22 10 -44 2 q-12 -40 -4 -74z" fill="#4f8f3a" stroke="#3a6b2b" stroke-width="2.5"/><path d="M50 60 q-6 30 2 70 M70 60 q6 30 -2 70" stroke="#6fa84f" stroke-width="1.6" fill="none" opacity="0.6"/>${face(58,92,{eye:6,ring:'#8fbf6a',blush:'#a7d68f',...E})}</g>`,
eggplant: E => `<g><path d="M60 54 q-26 4 -28 44 q-2 40 28 46 q30 -6 28 -46 q-2 -40 -28 -44z" fill="#6a3d7a" stroke="#4a2a56" stroke-width="2.5"/><path d="M52 50 q-8 6 -6 14 q8 -2 12 -10z" fill="#4c9a3f" stroke="#3c7d34" stroke-width="1.5"/>${shine(50,84,7,16,'#9a6aad')}${face(60,102,{eye:6,ring:'#9a6aad',blush:'#c49ad0',...E})}</g>`,
cucumber: E => `<g><path d="M42 50 q22 -8 38 2 q12 42 2 88 q-22 8 -42 -2 q-10 -44 2 -88z" fill="#5fa83f" stroke="#3f7d2c" stroke-width="2.5"/><path d="M50 58 q-6 34 2 74 M70 58 q6 34 -4 74" stroke="#7fbf5a" stroke-width="1.4" fill="none" opacity="0.6"/>${face(60,94,{eye:6,ring:'#8fbf6a',blush:'#bfe090',...E})}</g>`,
ginger: E => `<g><path d="M30 90 q-8 -28 24 -32 q10 -14 26 -6 q18 -2 20 16 q14 6 6 24 q6 16 -14 20 q-10 14 -28 8 q-20 4 -26 -14 q-12 -6 -8 -16z" fill="#d9b98a" stroke="#b0895a" stroke-width="2.5"/><path d="M46 78 q10 6 18 0 M64 96 q10 6 18 0" stroke="#c9a878" stroke-width="1.6" fill="none"/>${face(56,94,{eye:6,ring:'#c9a878',blush:'#e0c09a',...E})}</g>`,
'sweet-potato': E => `<g><path d="M20 98 q-8 -30 30 -38 q46 -10 50 22 q6 32 -30 42 q-42 12 -50 -26z" fill="#b56a3a" stroke="#8a4a24" stroke-width="2.5"/><path d="M40 82 q14 -4 28 2 M46 100 q16 -4 30 2" stroke="#c9824a" stroke-width="1.6" fill="none" opacity="0.6"/>${face(56,96,{eye:6,ring:'#c9824a',blush:'#e0a06a',...E})}</g>`,
pumpkin: E => `<g><path d="M60 52 q4 -12 -4 -16" stroke="#6b4a2a" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="60" cy="100" rx="46" ry="40" fill="#ef8a2b" stroke="#cf6f1b" stroke-width="2.5"/><path d="M44 62 q-8 38 0 76 M76 62 q8 38 0 76" stroke="#dd7c22" stroke-width="2" fill="none"/>${face(60,100,{eye:6,ring:'#e0a06a',blush:'#ffb27a',...E})}</g>`,
apple: E => `<g><path d="M60 56 q3 -12 -3 -18" stroke="#6b4a2a" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M56 54 q-10 -8 -18 -2 q6 8 16 8z" fill="#4c9a3f" stroke="#3c7d34" stroke-width="1.4"/><path d="M60 58 q-24 -2 -32 22 q-8 24 6 44 q10 14 26 14 q16 0 26 -14 q14 -20 6 -44 q-8 -24 -32 -22z" fill="#e0392a" stroke="#a82419" stroke-width="2.5"/>${shine(46,80,10,7,'#ff8a72')}${face(60,98,{eye:6,ring:'#c98a7a',blush:'#ff9a8f',...E})}</g>`,
banana: E => `<g><path d="M32 52 q-8 44 24 74 q34 30 40 18 q4 -8 -6 -10 q-26 -6 -46 -34 q-18 -26 -12 -50 q2 -8 -6 -8 q-8 2 -8 10z" fill="#f2ce3a" stroke="#d9a92f" stroke-width="2.5"/><path d="M40 60 q-4 34 22 60" stroke="#e0b833" stroke-width="1.6" fill="none"/>${face(70,96,{eye:6,sp:7,ring:'#e0c040',blush:'#f0d86a',...E})}</g>`,
strawberry: E => `<g><path d="M42 54 q18 -8 36 0 q-4 8 -18 8 q-14 0 -18 -8z" fill="#4c9a3f" stroke="#3c7d34" stroke-width="1.5"/><path d="M28 66 q32 -12 64 0 q6 30 -32 66 q-38 -36 -32 -66z" fill="#e0392a" stroke="#a82419" stroke-width="2.5"/><circle cx="44" cy="82" r="1.6" fill="#ffd27a"/><circle cx="76" cy="82" r="1.6" fill="#ffd27a"/><circle cx="60" cy="104" r="1.6" fill="#ffd27a"/>${face(60,80,{eye:6,ring:'#e8a48a',blush:'#ff9a8f',...E})}</g>`,
orange: E => `<g><path d="M52 54 q-8 -6 -14 -2 q4 8 14 8z" fill="#4c9a3f" stroke="#3c7d34" stroke-width="1.2"/><circle cx="60" cy="98" r="42" fill="#ef9a2b" stroke="#cf7a1b" stroke-width="2.5"/><circle cx="46" cy="82" r="1.8" fill="#e08a1a"/><circle cx="70" cy="76" r="1.8" fill="#e08a1a"/>${shine(46,82,11,8,'#ffc46a')}${face(60,100,{eye:6,ring:'#e0a05a',blush:'#ffb27a',...E})}</g>`,
coconut: E => `<g><circle cx="60" cy="98" r="42" fill="#8a5a3a" stroke="#5f3d24" stroke-width="2.5"/><circle cx="42" cy="82" r="5" fill="#4a2f1c"/><circle cx="60" cy="76" r="5" fill="#4a2f1c"/><circle cx="78" cy="82" r="5" fill="#4a2f1c"/><path d="M30 90 q10 -6 8 8 M90 90 q-10 -6 -8 8" stroke="#6f462a" stroke-width="1.6" fill="none"/>${face(60,104,{ring:'#a8764a',blush:'#c99a6a',...E,eyes:'dot',dark:'#fbf6ea'})}</g>`,
rice: E => `<g><path d="M30 88 q30 -14 60 0 q-4 12 -30 12 q-26 0 -30 -12z" fill="#fbfbf5" stroke="#e0dcc8" stroke-width="2"/><ellipse cx="60" cy="88" rx="30" ry="6" fill="#fefefb" stroke="#e0dcc8" stroke-width="1.5"/><path d="M28 92 q4 34 32 34 q28 0 32 -34 q-32 12 -64 0z" fill="#e8f0f4" stroke="#b8c4cc" stroke-width="2.5"/>${face(60,108,{eye:6,ring:'#b8c4cc',blush:'#a0d0e8',...E})}</g>`,
bean: E => `<g><path d="M40 60 q34 -12 44 20 q10 34 -20 50 q-30 14 -40 -16 q-8 -28 16 -54z" fill="#8a4a3a" stroke="#5f3025" stroke-width="2.5"/>${shine(54,78,9,6,'#b07a6a')}${face(58,96,{ring:'#a86a5a',blush:'#c98a7a',...E,eyes:'dot',dark:'#f0e0d0'})}</g>`,
chocolate: E => `<g><path d="M30 56 l60 0 l0 84 q0 6 -6 6 l-48 0 q-6 0 -6 -6z" fill="#6b4423" stroke="#4a2d15" stroke-width="2.5"/><path d="M60 56 l0 90 M30 84 l60 0 M30 112 l60 0" stroke="#4a2d15" stroke-width="2"/>${face(45,96,{eye:5,sp:7,ring:'#8a5a30',blush:'#a8764a',...E,eyes:'dot',dark:'#f0e0d0'})}</g>`,
milk: E => `<g><path d="M36 60 l24 -18 l24 18 l0 78 q0 6 -6 6 l-36 0 q-6 0 -6 -6z" fill="#eef4f8" stroke="#c4cfd6" stroke-width="2.5"/><path d="M36 60 l48 0" stroke="#c4cfd6" stroke-width="1.5"/><rect x="44" y="86" width="32" height="22" rx="3" fill="#dbe6ee"/>${face(60,116,{eye:6,ring:'#c4cfd6',blush:'#a0d0e8',...E})}</g>`,
almond: E => `<g><path d="M60 52 q-26 6 -26 46 q0 40 26 50 q26 -10 26 -50 q0 -40 -26 -46z" fill="#e8c79a" stroke="#c49a5f" stroke-width="2.5"/><path d="M60 58 q-16 6 -16 40 q0 34 16 42" fill="none" stroke="#d9b380" stroke-width="1.5"/>${shine(52,80,7,14,'#f6e2c0')}${face(60,98,{eye:6,ring:'#d9b380',blush:'#e8c09a',...E})}</g>`,
olive: E => `<g><ellipse cx="60" cy="98" rx="30" ry="42" fill="#6f8f3a" stroke="#4f6b28" stroke-width="2.5"/><ellipse cx="60" cy="72" rx="8" ry="5" fill="#4f6b28"/>${shine(50,86,7,12,'#9fbf5a')}${face(60,104,{eye:6,ring:'#8faf5a',blush:'#bfd88a',...E})}</g>`,
tortilla: E => `<g><ellipse cx="60" cy="100" rx="48" ry="42" fill="#f0e0b8" stroke="#d9c088" stroke-width="2.5"/><ellipse cx="60" cy="100" rx="40" ry="34" fill="none" stroke="#e0cb98" stroke-width="1.5"/><circle cx="42" cy="84" r="2" fill="#c9a866"/><circle cx="78" cy="90" r="2" fill="#c9a866"/>${face(60,100,{eye:6,ring:'#d9c088',blush:'#e8c8a0',...E})}</g>`,
butter: E => `<g><rect x="26" y="42" width="68" height="60" rx="6" fill="#f6c945" stroke="#d9a521" stroke-width="2.5"/><rect x="22" y="96" width="76" height="46" rx="6" fill="#fdfaf0" stroke="#cbb56a" stroke-width="2.5"/>${face(60,68,{eye:6,ring:'#e0c46a',blush:'#f0d86a',...E})}</g>`,
ketchup: E => `<g><rect x="52" y="34" width="10" height="8" rx="2" fill="#b71c1c"/><path d="M46 46 l24 0 l-4 -8 l-16 0z" fill="#b71c1c" stroke="#8e1414" stroke-width="1.5"/><path d="M40 56 l40 0 q6 4 6 30 l0 46 q0 8 -8 8 l-36 0 q-8 0 -8 -8 l0 -46 q0 -26 6 -30z" fill="#e53935" stroke="#8e1414" stroke-width="2.5"/><rect x="42" y="80" width="36" height="40" rx="5" fill="#fff" stroke="#e0b0b0" stroke-width="1.5"/>${face(60,100,{eye:6,ring:'#e0b0b0',blush:'#ff9a8f',...E})}</g>`,
salt: E => `<g><path d="M40 60 q0 -14 20 -14 q20 0 20 14 l0 76 q0 6 -6 6 l-28 0 q-6 0 -6 -6z" fill="#f7f7f7" stroke="#c4c8cc" stroke-width="2.5"/><path d="M40 60 l40 0 l0 -6 q0 -8 -20 -8 q-20 0 -20 8z" fill="#e0e2e4" stroke="#c4c8cc" stroke-width="1.5"/><circle cx="52" cy="52" r="1.6" fill="#c4c8cc"/><circle cx="60" cy="49" r="1.6" fill="#c4c8cc"/><circle cx="68" cy="52" r="1.6" fill="#c4c8cc"/>${face(60,98,{eye:6,ring:'#c4c8cc',blush:'#ffb6c1',...E})}</g>`,
pepper: E => `<g><path d="M40 60 q0 -14 20 -14 q20 0 20 14 l0 76 q0 6 -6 6 l-28 0 q-6 0 -6 -6z" fill="#4e4034" stroke="#2c231a" stroke-width="2.5"/><path d="M40 60 l40 0 l0 -6 q0 -8 -20 -8 q-20 0 -20 8z" fill="#6e5c48" stroke="#2c231a" stroke-width="1.5"/><circle cx="52" cy="52" r="1.6" fill="#2c231a"/><circle cx="60" cy="49" r="1.6" fill="#2c231a"/><circle cx="68" cy="52" r="1.6" fill="#2c231a"/>${face(60,98,{ring:'#6e5c48',blush:'#c99ab0',...E,eyes:'dot',dark:'#f0f0f0'})}</g>`,
spice: E => `<g><path d="M42 62 q0 -12 18 -12 q18 0 18 12 l0 70 q0 6 -6 6 l-24 0 q-6 0 -6 -6z" fill="#c0392b" stroke="#8c281d" stroke-width="2.5"/><path d="M42 62 l36 0 l0 -6 q0 -8 -18 -8 q-18 0 -18 8z" fill="#7a2018" stroke="#5c160f" stroke-width="1.5"/><circle cx="54" cy="52" r="1.4" fill="#4a120c"/><circle cx="60" cy="49" r="1.4" fill="#4a120c"/><circle cx="66" cy="52" r="1.4" fill="#4a120c"/>${face(60,100,{ring:'#a83224',blush:'#f0a890',...E,eyes:'dot',dark:'#fce8e0'})}</g>`,
};

// build resolved CAST (bodies + their assigned eyes)
const CAST = {};
for (const k of Object.keys(BODIES)) CAST[k] = BODIES[k](ev(k));

// bell peppers are color-specific — red/green/yellow are different ingredients
const bell = (fill, stroke, sh, E) => `<g><path d="M60 40 q3 -12 -3 -20" stroke="#3c7d34" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M40 56 q-6 -14 6 -18 q4 8 8 10 q6 -10 12 -8 q4 8 8 8 q10 -6 14 6 q10 8 6 40 q-4 40 -34 40 q-30 0 -34 -40 q-3 -30 8 -38z" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/><ellipse cx="46" cy="78" rx="7" ry="20" fill="${sh}" opacity="0.4"/>${face(60,96,{ring:'#c98a7a',...E})}</g>`;
CAST['bell-pepper'] = bell('#e5452f', '#a82c1c', '#ff7a63', ev('bell-pepper'));
CAST['bell-pepper-green'] = bell('#5fa83f', '#3f7d2c', '#8fd06a', ev('bell-pepper-green'));
CAST['bell-pepper-yellow'] = bell('#f2c31f', '#cf9e15', '#ffe066', ev('bell-pepper-yellow'));

// --- ingredient name -> character key (first match wins; rough hero priority) ---
const MATCH = [
  ['bacon', /bacon|pancetta|guanciale/],
  ['sausage', /sausage|chorizo|kielbasa|bratwurst|salami|pepperoni/],
  ['chicken', /chicken|poultry|drumstick|\bthigh|turkey/],
  ['beef', /beef|\bsteak|brisket|short rib|sirloin|ribeye|ground beef|\bchuck\b|meatball/],
  ['shrimp', /shrimp|prawn/],
  ['fish', /\bfish|salmon|\bcod\b|\btuna|halibut|tilapia|snapper|trout|sea bass|mackerel/],
  ['tofu', /tofu|tempeh/],
  ['tomato', /tomato|pomodoro|marinara|passata|san marzano/],
  ['egg', /\begg(?!plant)/],
  ['eggplant', /eggplant|aubergine/],
  ['spinach', /spinach|kale|chard|arugula|collard|\bgreens\b/],
  ['cauliflower', /cauliflower/],
  ['cabbage', /cabbage|\bnapa\b|bok choy/],
  ['zucchini', /zucchini|courgette/],
  ['cucumber', /cucumber|\bpickle/],
  ['sweet-potato', /sweet potato|\byam\b/],
  ['pumpkin', /pumpkin|butternut|acorn squash|\bsquash\b/],
  ['ginger', /ginger(?!\s?(ale|beer))|galangal/],
  ['strawberry', /strawberr/],
  ['banana', /banana|plantain/],
  ['apple', /\bapple(?!\s?cider)/],
  ['orange', /\borange(?!\s?(blossom|zest of))/],
  ['coconut', /coconut/],
  ['chocolate', /chocolate|cocoa|cacao|nutella/],
  ['almond', /almond|cashew|pecan|hazelnut|pistachio|pine ?nut/],
  ['olive', /\bolives?\b/],
  ['tortilla', /tortilla|\bwrap\b|taco shell/],
  ['rice', /\brice\b(?!\s?(vinegar|wine|flour|noodle))/],
  ['bean', /\bbean|chickpea|lentil|garbanzo|legume/],
  ['milk', /\bmilk\b|buttermilk|evaporated milk|condensed milk/],
  ['ketchup', /ketchup|catsup/],
  ['pepper', /black pepper|peppercorn|white pepper|ground pepper|cracked pepper/],
  ['spice', /paprika|cumin|cinnamon|turmeric|coriander seed|garam|chili powder|\bspice|seasoning|\bza'?atar|berbere|curry powder/],
  ['salt', /\bsalt\b/],
  ['avocado', /avocado|guacamole/],
  ['mushroom', /mushroom|cremini|shiitake|porcini|portobello/],
  ['chili', /chili|chile|chilli|jalape|serrano|cayenne|habanero|thai chili|chipotle|hot pepper/],
  ['bell-pepper-green', /green (bell )?pepper|green capsicum/],
  ['bell-pepper-yellow', /(yellow|orange) (bell )?pepper|yellow capsicum/],
  ['bell-pepper', /bell pepper|capsicum|sweet pepper|red pepper|romano pepper/],
  ['broccoli', /broccoli|broccolini/],
  ['corn', /\bcorn\b|maize|sweetcorn/],
  ['carrot', /carrot/],
  ['potato', /potato(?!\s*starch)|spud|russet|yukon/],
  ['onion', /onion|shallot|scallion|leek/],
  ['garlic', /garlic/],
  ['cheese', /cheese|parmes|parmigiano|pecorino|mozzarella|cheddar|\bfeta|gruy|ricotta|queso|cotija|halloumi|mascarpone/],
  ['butter', /(?<!peanut )(?<!nut )(?<!almond )(?<!cashew )\bbutter\b/],
  ['walnut', /walnut/],
  ['honey', /honey/],
  ['lime', /\blime/],
  ['lemon', /lemon/],
  ['pasta', /pasta|spaghetti|noodle|linguine|penne|fettuccine|macaroni|rigatoni|udon|ramen|orzo/],
  ['bread', /bread|loaf|baguette|sourdough|ciabatta|roll\b|bun\b|toast|brioche/],
  ['herb', /basil|parsley|cilantro|coriander|\bmint\b|oregano|thyme|\bdill|rosemary|sage|fresh herb|scallion/],
];

const FALLBACK = ['ketchup', 'butter', 'salt', 'pepper'];   // top up so a photo is never sparse
function matchCast(recipe) {
  const seen = new Set(), keys = [];
  for (const ing of (recipe.ing || [])) {
    const n = String(ing.n || '').toLowerCase();
    for (const [key, re] of MATCH) { if (re.test(n) && !seen.has(key) && CAST[key]) { seen.add(key); keys.push(key); break; } }
  }
  for (const f of FALLBACK) { if (keys.length >= 3) break; if (!seen.has(f) && CAST[f]) { seen.add(f); keys.push(f); } }
  return keys.slice(0, 5);
}

// --- group photo (1200x630 landscape hero = og/pin image) ---
function groupPhoto(keys, title, sub) {
  const W = 1200, H = 630, cx0 = 600, counterY = 470;
  const cast = keys.filter(k => CAST[k]); const n = cast.length || 1;
  const span = Math.min(920, n * 200), gap = span / n, startX = cx0 - span / 2 + gap / 2;
  const s = n >= 5 ? 1.35 : n === 4 ? 1.5 : n === 3 ? 1.65 : 1.8;
  const figs = cast.map((k, i) => {
    const x = startX + i * gap, tx = x - 60 * s, ty = counterY - 150 * s;
    return `<ellipse cx="${x.toFixed(0)}" cy="${(counterY + 6).toFixed(0)}" rx="${(52 * s).toFixed(0)}" ry="${(13 * s).toFixed(0)}" fill="#000" opacity="0.28"/>`
      + `<g transform="translate(${tx.toFixed(1)},${ty.toFixed(1)}) scale(${s})">${CAST[k]}</g>`;
  }).join('\n');
  const esc = t => String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" xmlns="http://www.w3.org/2000/svg" role="img"><title>${esc(title)} — 5best2buy.com</title>
<rect width="${W}" height="${H}" fill="#0d1421"/>
<radialGradient id="glow" cx="50%" cy="40%" r="62%"><stop offset="0%" stop-color="#2a3c55" stop-opacity="0.55"/><stop offset="100%" stop-color="#0d1421" stop-opacity="0"/></radialGradient>
<ellipse cx="${cx0}" cy="300" rx="640" ry="330" fill="url(#glow)"/>
<rect x="0" y="${counterY + 2}" width="${W}" height="${H - counterY - 2}" fill="#131f34"/><rect x="0" y="${counterY + 2}" width="${W}" height="3" fill="rgba(120,150,190,.3)"/>
<text x="64" y="80" font-family="'Rajdhani','Arial Narrow',sans-serif" font-size="22" letter-spacing="4" fill="#f0c560" font-weight="700">5BEST2BUY.COM</text>
<text x="60" y="150" font-family="'Rajdhani','Arial Narrow',sans-serif" font-size="72" fill="#eef2f8" font-weight="700">${esc(title)}</text>
${sub ? `<text x="64" y="192" font-family="system-ui,sans-serif" font-size="24" fill="#c8d3e6">${esc(sub)}</text>` : ''}
${figs}
<text x="${W - 56}" y="${H - 40}" text-anchor="end" font-family="system-ui,sans-serif" font-size="26" fill="#f0c560" font-weight="600">5best2buy.com</text>
</svg>`;
}

// --- labeled contact-sheet of the whole cast (style review) ---
function castSheet() {
  const keys = Object.keys(CAST), cols = 5, cw = 150, ch = 176, W = cols * cw, rows = Math.ceil(keys.length / cols), H = rows * ch + 30;
  const cells = keys.map((k, i) => {
    const c = i % cols, r = Math.floor(i / cols), x = c * cw, y = r * ch + 10;
    return `<g transform="translate(${x + cw / 2 - 60},${y})">${CAST[k]}</g>`
      + `<text x="${x + cw / 2}" y="${y + 168}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#9aabc4">${k}</text>`;
  }).join('\n');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" xmlns="http://www.w3.org/2000/svg" role="img"><title>5best2buy mascot cast sheet</title>
<rect width="${W}" height="${H}" fill="#0d1421"/>${cells}</svg>`;
}

module.exports = { CAST, MATCH, face, arms, matchCast, groupPhoto, castSheet };
