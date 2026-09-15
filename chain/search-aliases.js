// search-aliases.js — the words people actually type.
//
// Searching "hamburger" on this site returned one result: hamburger-steak, a
// gravy dish with no bun. The cheeseburger, smash burger, juicy lucy, patty melt
// and diner burger were all invisible, because the index matched on title plus
// cuisine-and-category and nothing else, and not one of those titles contains
// the string "hamburger".
//
// It generalises badly. Against the live index: barbecue 0 (bbq 8), catsup 0
// (ketchup 3), green onion 0 (scallion 1), and prawn, aubergine, courgette,
// hoagie, grinder and sub sandwich all 0.
//
// Each group is a set of terms that should find each other. Entries are matched
// on the canonical terms already present in a title, and the rest of the group
// is written to a hidden `a` field — never to `x`, which is rendered under every
// result and would look like keyword spam.
//
// Deliberately conservative. "biscuit" is NOT mapped to "cookie": this site has
// a real Southern biscuit recipe, and an American searching biscuits wants that,
// not shortbread. A wrong alias is worse than a missing one, because it puts the
// wrong dish in front of someone who typed the right word.
module.exports = [
  // ---- the one that started this ----
  ['hamburger', 'burger', 'cheeseburger', 'beef patty'],

  // ---- US / UK, unambiguous both ways ----
  ['eggplant', 'aubergine'],
  ['zucchini', 'courgette'],
  ['arugula', 'rocket'],
  ['shrimp', 'prawn', 'prawns'],
  ['scallion', 'scallions', 'green onion', 'green onions', 'spring onion', 'spring onions'],
  ['cilantro', 'fresh coriander', 'coriander leaf'],   // NOT bare "coriander" — that is the seed, and a spice shelf
  ['chickpea', 'chickpeas', 'garbanzo', 'garbanzo beans'],
  ['bell pepper', 'capsicum', 'sweet pepper'],
  ['rutabaga', 'swede'],
  ['powdered sugar', 'confectioners sugar', 'icing sugar'],
  ['heavy cream', 'double cream', 'whipping cream'],
  ['ground beef', 'beef mince', 'minced beef'],
  ['ground pork', 'pork mince', 'minced pork'],
  ['french fries', 'fries', 'chips'],
  ['potato chips', 'crisps'],
  ['molasses', 'treacle', 'black treacle'],
  ['corn', 'maize', 'sweetcorn'],
  ['oatmeal', 'porridge'],
  ['skillet', 'frying pan'],
  ['broil', 'grill under heat'],

  // ---- spelling and shorthand ----
  ['barbecue', 'bbq', 'barbeque', 'bar-b-q'],
  ['ketchup', 'catsup', 'tomato sauce'],
  ['soda', 'pop', 'soft drink', 'fizzy drink'],
  ['popsicle', 'ice lolly', 'freezer pop'],
  ['jelly', 'jam', 'preserves'],
  ['confectionery', 'candy', 'sweets'],
  ['aluminum foil', 'aluminium foil', 'tin foil'],
  ['stovetop', 'stove top', 'hob'],

  // ---- sandwich names ----
  // "sub" is safe here ONLY because assignment matches whole words: \bsub\b does
  // not fire inside "substitutes" or "musubi". Substring matching tagged both as
  // hoagies. Do not loosen that regex.
  ['sub', 'submarine sandwich', 'hoagie', 'grinder', 'hero sandwich', 'sub sandwich'],
  ['grilled cheese', 'toasted cheese', 'cheese toastie'],
  ['sloppy joe', 'sloppy joes'],

  // ---- dish shorthand people type ----
  ['macaroni and cheese', 'mac and cheese', 'mac n cheese', 'macaroni cheese'],
  ['peanut butter and jelly', 'pb and j', 'pbj'],
  ['rotisserie chicken', 'roast chicken'],
  ['pulled pork', 'shredded pork'],
  ['deviled eggs', 'devilled eggs'],
  ['sheet pan', 'tray bake', 'traybake'],
  ['slow cooker', 'crockpot', 'crock pot'],
  ['pressure cooker', 'instant pot'],
  ['air fryer', 'airfryer'],

  // ---- proteins and cuts ----
  ['ground turkey', 'turkey mince'],
  ['chicken thigh', 'chicken thighs', 'dark meat chicken'],
  ['pork belly', 'side pork'],
  ['beef shin', 'beef shank', 'osso buco'],
  ['flank steak', 'bavette'],
  ['skirt steak', 'onglet'],
  ['ribeye', 'rib eye', 'scotch fillet'],
  ['tenderloin', 'filet mignon', 'fillet steak'],
];
