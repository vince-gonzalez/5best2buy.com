// deli-cooked.js — the last two protein shelves without a page.
//
// I skipped these initially as too generic to write about. That was wrong: the
// whole-muscle versus chopped-and-formed distinction is the single most useful
// thing a person can know at a deli counter and almost nobody knows it, and the
// hot dog is the same meat emulsion as mortadella with a worse reputation and
// identical physics.
module.exports = [

{
  slug: "deli-meat",
  name: "Deli Meat",
  animal: "pork",
  shelf: "deli-meat",
  aka: ["cold cuts", "lunch meat", "sliced meat", "sandwich meat", "charcuterie counter"],
  match: ["deli meat", "cold cuts", "lunch meat", "sliced turkey", "sliced ham"],
  dek: "The counter sells two completely different things at similar prices: whole muscle that was roasted and sliced, and chopped-and-formed product built from trim bound with starch and phosphate. The label tells you which, and almost nobody reads it.",
  anatomy: "Whole-muscle deli meat is exactly that — a turkey breast, a pork leg, a beef round — brined or cured, cooked, and sliced. The slices show grain, vary slightly in outline, and hold together because the muscle is intact. Chopped-and-formed is made from trim and smaller pieces tumbled with salt, phosphate and often starch or soy protein, which extracts myosin so the pieces bind, then pressed into a uniform log and cooked. Those slices are perfectly round, identical to each other, and show no grain. A third category, mechanically separated, is finer still and used in the cheapest products.",
  science: "The binding in formed products is real food science rather than adulteration: salt and phosphate dissolve myofibrillar protein from the surface of each meat piece, and when heated that dissolved protein sets and glues everything into a single mass. Phosphate also raises pH and water-holding capacity, which is why formed products can carry substantially more added water — sometimes 20% or more — and why they feel wetter and slicker in the mouth. Whole-muscle products are also brined and often carry added water, but far less, because there is no protein extraction step and the muscle can only hold so much. The USDA labelling ladder reflects this: ham, then ham with natural juices, then ham water added, then ham and water product, in descending order of meat and ascending order of added water.",
  methods: [
    { m: "Read the label before the price",
      why: "The difference between whole-muscle and formed is invisible on the sticker and obvious in the wording.",
      how: "Look for the qualifier. Ham or turkey breast with no suffix is the highest grade. Water added, and water product mean progressively more water and less meat. Chopped and formed or sectioned and formed means built from pieces. Oven roasted turkey breast beats turkey breast product every time." },
    { m: "Buy it sliced to order",
      why: "Pre-packaged slices are cut in advance and sealed with preservatives, and they oxidise; a counter slices from a whole piece you can look at.",
      how: "Ask to see the log before it's sliced. A whole-muscle piece has visible grain and an irregular outline; a formed one is a perfect cylinder. Thickness is your choice — thin for sandwiches, thicker for eating alone." },
    { m: "Warm it for a hot sandwich",
      why: "Cold cuts firm up in the fridge and gentle warming softens the fat and opens the aromatics, which is why deli hot sandwiches taste better.",
      how: "Steam briefly in a covered pan with a splash of water, or thirty seconds in a hot dry pan. Not until it curls and dries." },
    { m: "Use good ends and offcuts",
      why: "The ends of a whole-muscle log are usually sold cheap and are the same meat.",
      how: "Ask for ends. Diced into a frittata, a fried rice, a chowder, or a pot of beans, where the shape doesn't matter." }
  ],
  avoid: {
    m: "Assuming price signals quality, and buying pre-packaged for a sandwich you care about",
    why: "The counter puts whole-muscle roast turkey breast next to a chopped-and-formed turkey product at prices that often overlap, and there is no visual difference once it's sliced and stacked on paper. The difference is substantial: one is a muscle that was cooked and cut, the other is trim bound with extracted protein, phosphate and starch carrying up to a fifth of its weight in added water — which you pay meat prices for and which makes the texture uniformly soft and slick. The label carries the answer in plain USDA language, and the whole trick is reading it. Pre-packaged slices compound the problem, since you cannot see the log they came from, they were cut days ago, and the surface has oxidised — which is most of why supermarket sandwich meat tastes of the packet."
  },
  buying: "Ask for the least-qualified name on the label: ham beats ham with natural juices beats ham and water product. Look at the log before slicing — irregular outline and visible grain means whole muscle, a perfect cylinder with no grain means formed. Sodium varies enormously between products, and the formed ones are usually higher. Nitrite-free or uncured labels mean celery-powder curing, which is chemically the same. Buy small amounts sliced to order and use within three to five days; sliced meat has a lot of exposed surface and degrades fast. Ends and offcuts are the same product at a discount.",
  temps: "Fully cooked and eaten cold or gently warmed. Keep refrigerated below 40°F and use sliced meat within three to five days. If warming, brief and gentle — sustained heat dries it and makes it curl and toughen.",
  faq: [
    { q: "What does 'water added' actually mean?",
      a: "It's a USDA labelling ladder based on protein content. Ham alone is the highest standard. Ham with natural juices allows a little more added liquid, ham water added more still, and ham and water product the most, with the percentage of added ingredients required on the label. Each step down is more water and less meat for a similar price per pound, which is why reading the qualifier is worth more than comparing prices." },
    { q: "Is chopped-and-formed meat bad for you?",
      a: "It's not a safety question — the binding mechanism is extracted muscle protein, which is meat. The issues are value and texture: you're paying meat prices for added water, and the uniform slick texture is the giveaway. Sodium and phosphate content are usually higher too. It's a lower-quality product at a comparable price, not a dangerous one." },
    { q: "Why does deli meat from a counter taste better than packaged?",
      a: "Surface oxidation and time. Sliced meat has enormous surface area relative to volume, and once cut it starts oxidising immediately — the flavour flattens and takes on the slightly metallic packet taste within a day or two. Pre-packaged slices were cut well before you bought them and sealed with preservatives to compensate. A counter slicing from a whole log gives you meat that was intact five seconds ago." }
  ]
},

{
  slug: "hot-dogs",
  name: "Hot Dogs",
  animal: "pork",
  shelf: "hot-dogs",
  aka: ["frankfurter", "wiener", "natural casing dog", "skinless dog"],
  match: ["hot dog", "frankfurter", "wiener"],
  dek: "A meat emulsion in a casing — the same technique as mortadella, applied at industrial scale and with a much worse reputation. Natural casing versus skinless is the distinction that matters, and it is the one thing the price rarely reflects.",
  anatomy: "Finely ground meat — beef, pork or a mix — is emulsified with ice, salt, cure and seasoning into a smooth batter, then extruded into casings, cooked and usually smoked. Natural casing dogs use sheep intestine, which stays on and gives the snap when bitten. Skinless dogs are extruded into cellulose casings that are peeled off after cooking, so there is no snap at all. All-beef, all-pork and mixed are formulation choices; kosher and halal dogs are all-beef by requirement. Regional styles differ mainly in seasoning and smoke, with garlic prominent in Chicago-style and paprika in some New York recipes.",
  science: "It's the same protein emulsion as mortadella: salt dissolves myosin from the muscle, which forms a matrix suspending fat and water, and temperature control during mixing is what keeps that emulsion intact. Above roughly 55-60°F the fat melts and the emulsion breaks, giving a greasy grainy product with fat pockets, which is why commercial production keeps everything near freezing and adds ice to the batter. The cure — nitrite — provides colour, flavour and botulism protection, since the sealed anaerobic interior would otherwise be a risk. Everything in a hot dog is fully cooked before it's packaged; anything you do to it afterwards is reheating.",
  methods: [
    { m: "Simmer, don't boil",
      why: "Boiling water at 212°F splits casings and leaches flavour into the pot; a gentle simmer heats them through without either.",
      how: "Water at 180-190°F, off the boil, five to six minutes. They're already cooked, so this is warming. Never pierce them." },
    { m: "Griddle or pan",
      why: "Direct contact browns the surface and renders a little fat, which does more for flavour than any liquid method.",
      how: "Medium heat, turned every minute or two for five minutes until browned on all sides. Split lengthwise for more surface — the New Jersey and diner approach." },
    { m: "Grill over medium",
      why: "Char and smoke, but high direct heat splits casings before the middle is warm.",
      how: "Medium heat, turned frequently, six to eight minutes. Score them shallowly in a spiral if you want more surface without splitting." },
    { m: "Steam the bun alongside",
      why: "The bun is half the eating and a cold dry one wastes the dog.",
      how: "Steamed briefly over the simmering water, or wrapped in a damp towel and microwaved fifteen seconds, or split and griddled in butter." }
  ],
  avoid: {
    m: "Boiling them hard, and buying skinless if you want snap",
    why: "A rolling boil is what most people default to and it does two bad things. Water at 212°F expands the interior faster than the casing can stretch, so natural casings split and the emulsion pushes out; and prolonged immersion leaches salt, fat and seasoning into a pot you pour away, which is why boiled dogs taste flat. They are already fully cooked, so all they need is warming — 180-190°F for five minutes, or a griddle. The second point is a buying decision people don't know they're making. That snap when you bite a good hot dog comes from a natural sheep casing; skinless dogs are extruded into cellulose that's peeled off before packing, so there is nothing to snap and no amount of cooking creates it. If you want the texture, the label has to say natural casing."
  },
  buying: "Natural casing is the single distinction worth paying for and it's usually stated on the package; the dogs will look slightly irregular and have a visible seam. All-beef dogs are firmer and beefier, pork and mixed are softer and often more seasoned. Check the ingredient list length — good dogs have meat, water, salt, cure and spices, and little else. Mechanically separated meat and heavy filler content are both on the label. Kosher brands are all-beef by requirement and often among the better mass-market options. Regional producers — Chicago, Detroit, Rhode Island, New Jersey — are frequently far better than national brands at similar prices.",
  temps: "Fully cooked when purchased; heat to 140-160°F internal, which is warming rather than cooking. Simmer at 180-190°F for five to six minutes, or griddle five minutes. Never boil hard, and never pierce.",
  faq: [
    { q: "What's actually in a hot dog?",
      a: "In a good one: meat trim, water, salt, sodium nitrite, sugar and spices, emulsified together. The trim is a real part of the answer — hot dogs exist to use pieces that don't sell as cuts, which is true of most sausage everywhere and isn't a scandal. Cheaper dogs add mechanically separated poultry, starch, corn syrup and more water. The ingredient list is short and legible, and it's a reliable quality signal." },
    { q: "Natural casing or skinless?",
      a: "Natural, if you care about texture. The snap comes from a sheep casing that stays on through cooking and eating. Skinless dogs are extruded into cellulose casings that are stripped off before packaging, leaving a soft uniform surface with no bite. It's the most noticeable quality difference available and it's often only a small price gap." },
    { q: "Why do mine split?",
      a: "Heat that's too high. The interior expands faster than the casing can stretch, and it fails. A gentle simmer at 180-190°F, or a medium griddle with frequent turning, avoids it. Piercing them to prevent splitting works in the sense that a punctured tyre doesn't burst — you've traded the split for leaking fat and juice into the pan." }
  ]
}

];
