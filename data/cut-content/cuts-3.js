// cuts-3.js — rounding the section off.
//
// Closes the last real cut gaps: turkey and duck beyond one page each, the beef
// steaks cut from seams rather than primals (flat iron, denver, picanha), the
// two beef offal cuts people actually cook, the pork extremities, lamb loin and
// neck, chicken liver and tender, and the two missing seafood.
//
// Shorter entries than the earlier files where the cut genuinely warrants less
// — a chicken tender does not need eight hundred words of anatomy — and full
// length where there is something to say.
module.exports = [

// ------------------------------------------------------------------ POULTRY
{
  slug: "chicken-liver",
  name: "Chicken Liver",
  animal: "chicken",
  shelf: "organ-meats",
  aka: ["chicken livers", "foie de volaille", "liver pâté base"],
  match: ["chicken liver", "chicken livers"],
  dek: "The cheapest luxury in the shop. Seared for ninety seconds and left pink they are creamy and mild; cooked through they turn to grainy paste, and that is the entire difference between the two things people mean when they say liver.",
  anatomy: "Each liver comes as two lobes joined by a thin connective strand, with occasional green-tinged patches where bile from the gallbladder has stained the tissue — those taste genuinely bitter and should be cut away. Chicken liver is much smaller, softer and milder than beef or calf liver, with a fine-grained, almost custardy texture when handled properly. There is a thin membrane and a few small vessels worth trimming. They vary in colour from pale tan to deep red-brown, and paler is generally milder.",
  science: "Liver has no muscle fibers and no collagen — the texture comes from densely packed cells in a fine membrane, so there is no braising route and no recovery past overcooking. The cells rupture around 145-150°F, releasing iron-rich compounds that taste bitter and metallic while the texture collapses from creamy to chalky. Chicken liver is smaller and thinner than beef liver, so it passes through that range in seconds rather than minutes, which is why it is easier to ruin and faster to get right. Soaking in milk for thirty minutes draws out residual blood and binds some of the bitter compounds.",
  methods: [
    { m: "Hard sear, pink inside",
      why: "The window is measured in seconds, so high heat builds a crust before the interior passes the point of collapse.",
      how: "Trim, soak in milk thirty minutes, dry thoroughly. Very hot pan with butter and oil, ninety seconds a side, no crowding. Deglaze with sherry or brandy. Serve immediately." },
    { m: "Pâté or parfait",
      why: "Blending removes the texture question, and the butter and acid buffer the mineral flavour better than anything else.",
      how: "Sear briefly still pink, then blend hot with an equal weight of soft butter, shallots softened in brandy, and salt. Pass through a fine sieve. Chill under a butter seal." },
    { m: "Yakitori on skewers",
      why: "Small pieces over very high heat cook through in the time it takes the surface to char, which is exactly the window liver wants.",
      how: "Threaded on skewers, salted, grilled over very hot binchotan or coals ninety seconds a side, brushed with tare at the end." },
    { m: "Dirty rice or ragù",
      why: "Finely chopped and cooked into a base, the liver dissolves and adds depth without any of the texture people object to.",
      how: "Minced fine, browned with the aromatics at the start, then the dish built on top. A few ounces flavours a large pot." }
  ],
  avoid: {
    m: "Cooking them through, and leaving the green patches on",
    why: "Chicken livers are thin, so they pass from creamy to grainy in about thirty seconds of extra pan time, and once through there is no collagen to convert and no way back — the cells have ruptured and released the iron compounds that read as bitter and metallic. Ninety seconds a side in a properly hot pan, browned outside and clearly pink within, is the target. The second error is cosmetic-looking and isn't: green or yellow-tinged patches are bile staining from a nicked gallbladder during processing, and bile is genuinely, aggressively bitter. One stained lobe can make a whole pâté inedible. Cut those parts away before cooking rather than trusting that they'll cook out."
  },
  buying: "Among the cheapest things in any shop, usually a couple of dollars a pound. Look for glossy, plump livers with no dry edges and no grey patches, and check for green bile staining. They should smell clean and faintly metallic. Chicken livers degrade faster than muscle meat, so buy them fresh and cook within a day, or buy frozen and thaw in the fridge. Livers from pasture-raised birds are firmer and milder and still cost very little. Half a pound feeds two as a starter, or makes a generous amount of pâté.",
  temps: "130-140°F, which on a small liver means ninety seconds a side in a hot pan. Browned outside, clearly pink inside. Past 145°F the texture is gone and does not come back.",
  faq: [
    { q: "Why do mine taste bitter?",
      a: "Two likely causes. Bile staining — the green patches — which is intensely bitter and must be trimmed away rather than cooked out. Or overcooking, which ruptures the cells and releases iron compounds that read as metallic and bitter. If they were pink inside and had no green on them, the bitterness came from the pan being too cool and the livers steaming rather than searing." },
    { q: "Do I have to soak them in milk?",
      a: "It helps and it isn't essential. Thirty minutes to an hour draws out residual blood and the casein binds some of the compounds behind the mineral edge. It makes a modest improvement. Not overcooking makes a much larger one, so if you only do one, do that." },
    { q: "Can I use them where a recipe says calf liver?",
      a: "For pâté, yes, and they're milder and far cheaper. For a pan dish like liver and onions, they're a different proposition — much smaller and thinner, so the timing drops from two minutes a side to ninety seconds, and they'll fall apart if handled like slices. Adjust the timing rather than the method." }
  ]
},

{
  slug: "chicken-tenderloin",
  name: "Chicken Tenderloin",
  animal: "chicken",
  shelf: "chicken",
  aka: ["chicken tender", "chicken fillet", "inner fillet", "goujon"],
  match: ["chicken tender", "tenderloin chicken", "chicken tenders"],
  dek: "A small separate muscle on the underside of the breast, not a strip cut from it. More tender than the breast proper, with a tough white tendon running down its length that has to come out.",
  anatomy: "The tenderloin is the pectoralis minor, lying against the breastbone underneath the main breast muscle. It's a distinct muscle with its own membrane, not a piece cut off the breast, and it's noticeably finer-grained and more tender because it does less work. Each bird yields two, about two ounces each. A white tendon runs from one end nearly through the whole length; it's elastin, it does not soften at any temperature, and left in it makes the tender chewy and pulls it into a curve as it heats. Most commercially sold tenders still have it.",
  science: "The same lean white muscle as the breast, with the same problems in a smaller package — under 2% fat, no collagen, and water loss accelerating past 155°F. The difference is size: a tender is thin enough to cook through in three or four minutes, which means the margin between done and dry is smaller in time even though the temperature target is identical. A brief brine helps more here than on a breast, because there's so little thermal mass to buffer anything. The fine grain also means it takes on marinade and breading well and shreds cleanly for salads.",
  methods: [
    { m: "Breaded and fried",
      why: "The classic use, and the coating insulates a very lean thin muscle from the oil while adding the texture it lacks.",
      how: "Brine thirty minutes, dry, then flour, egg, panko. Fry at 350°F for three to four minutes until golden and 155°F inside. Rest two minutes." },
    { m: "Quick sear",
      why: "Small and thin enough to cook through in a hot pan before the outside dries, provided they're not crowded.",
      how: "Dry, salt, hot pan with oil, two minutes a side. Pull at 155°F, rest. Crowding drops the pan temperature and steams them grey." },
    { m: "Skewered and grilled",
      why: "Their shape suits a skewer, and direct heat is fast enough to beat the drying curve.",
      how: "Marinate thirty minutes to two hours, thread lengthwise, grill over high direct heat two minutes a side." },
    { m: "Poach for salads and sandwiches",
      why: "Gentle moist heat is the most reliable way to keep a lean muscle moist when it's going to be eaten cold.",
      how: "Barely simmering seasoned water or stock, eight to ten minutes off the heat with the lid on, to 155°F. Cool in the liquid and shred." }
  ],
  avoid: {
    m: "Leaving the tendon in",
    why: "The white tendon running the length of a chicken tender is elastin, which unlike collagen does not convert to anything at any temperature you can reach in a kitchen — it stays a tough cord, and worse, it contracts as it heats and curls the tender into a bow so it cooks unevenly. It's the reason breaded tenders sometimes have one chewy strand through the middle. Removal takes seconds: grip the exposed end with a paper towel, lay a fork over the tender with the tendon through the tines, and pull. It comes out whole. Almost all commercially packed tenders still have it, and almost no recipe mentions it."
  },
  buying: "Sold separately as tenders or tenderloins, usually at a premium over breast despite being trim from the same bird. Buying whole breasts and pulling the tenders off yourself is cheaper and gives you both. Look for pale pink, firm meat with no liquid pooling. Check whether the tendon is present — it almost always is. Avoid anything labelled tenders that's actually breast cut into strips, which is a different and less tender product sold under the same word. Air-chilled birds give firmer meat. Four to six tenders per person.",
  temps: "155-157°F, pulled and rested to about 160°F. They're small, so total cooking time is three to four minutes by any method. Past 165°F they're noticeably dry.",
  faq: [
    { q: "Are tenders just breast cut into strips?",
      a: "No, though a lot of what's sold as tenders is exactly that. The real tenderloin is a separate muscle — the pectoralis minor — lying underneath the breast, finer-grained and more tender, with its own membrane and tendon. Breast cut into strips is a fine product but it's a different, slightly tougher one. The tell is the tendon: real tenders have it, strips don't." },
    { q: "How do I get the tendon out?",
      a: "Hold the exposed white end with a paper towel for grip. Slide a fork so the tendon sits between two tines with the meat on the other side, press the fork down against the board, and pull the tendon through. It comes out in one piece in about two seconds. A knife works too but wastes meat." },
    { q: "Why do mine come out dry?",
      a: "Almost always crowding or overshooting. A tender has very little thermal mass, so a crowded pan drops below searing temperature and they steam, and even correctly seared they pass 165°F within thirty seconds of hitting 155°F. Cook in batches, and pull them earlier than feels right — they carry over several degrees." }
  ]
},

{
  slug: "turkey-thigh",
  name: "Turkey Thigh",
  animal: "turkey",
  shelf: "turkey",
  aka: ["turkey leg", "dark meat turkey", "boneless turkey thigh"],
  match: ["turkey thigh", "turkey leg", "turkey dark meat"],
  dek: "Dark, fatty, collagen-rich and almost impossible to dry out — the exact opposite of the breast it's attached to, and the reason cooking a whole bird is always a compromise. Cooked separately to 180°F it's the best thing on the turkey.",
  anatomy: "The thigh runs from the hip to the knee, built around the femur, with the drumstick below it. Turkey legs work hard on a heavy bird, so the muscle is dark with high myoglobin and threaded with substantial connective tissue. The drumstick carries the same tendons chicken has but far larger and tougher — on a mature bird they're almost woody and worth removing. Thigh meat is flatter and more even than the drumstick and boned out gives a rectangular piece that rolls and ties well. A whole leg from a fourteen-pound bird weighs two to three pounds.",
  science: "Where the breast is under 2% fat with no collagen, the thigh has real intramuscular fat and a heavy collagen load, and both mean it behaves like a braising cut. Connective tissue starts converting above 160°F and needs time, so a thigh at the breast's 157°F target is tough and undercooked, while at 180-185°F it's tender and the fat has rendered through it. That twenty-five degree gap is the whole argument for cooking the two separately: no single oven temperature and pull time serves both, and the traditional solution — cook until the legs are done and accept a dry breast — sacrifices the more expensive meat.",
  methods: [
    { m: "Roast separately from the breast",
      why: "Removes the fundamental conflict, and legs can take a hotter oven than a breast can.",
      how: "375-400°F on a rack, sixty to eighty minutes to 180-185°F. Salt a day ahead uncovered in the fridge. The skin crisps far better than it does on a whole bird." },
    { m: "Braise",
      why: "The high collagen content makes it a genuine braising cut, and the result pulls like pork shoulder.",
      how: "Brown hard, then 325°F covered with liquid two-thirds up, two to two and a half hours to fork-tender. The braising liquid becomes gravy with real body." },
    { m: "Confit",
      why: "Submerged in fat the collagen converts fully while the meat can't dry, and it keeps for weeks under its own fat.",
      how: "Salt overnight, rinse, submerge in duck fat or lard at 200-215°F for three hours. Cool in the fat, then crisp the skin hard before serving." },
    { m: "Bone, roll and tie as a roulade",
      why: "Boning removes the tendon problem and the uneven shape, and a tied cylinder cooks evenly and slices cleanly.",
      how: "Bone out, pound to even thickness, season or stuff, roll skin-out and tie at intervals. 350°F to 175°F internal, about an hour. Rest twenty minutes." }
  ],
  avoid: {
    m: "Cooking it to the breast's temperature",
    why: "This is the whole-bird problem stated precisely. A turkey breast is lean enough that it should come out at 157°F, and a turkey thigh has enough collagen that at 157°F the connective tissue is entirely intact and the meat is tough and slightly rubbery — it wants 180-185°F, where that tissue has converted to gelatin and the intramuscular fat has rendered. Cooked as one bird you pick a compromise, and the compromise is usually to keep going until the legs are safe and acceptable, by which point the breast has been past 165°F for half an hour. Separating the two, or spatchcocking so the legs sit at the hot edges, is the only real fix. Nothing about basting or tenting addresses it."
  },
  buying: "Whole legs and separated thighs are sold year-round and are dramatically cheaper than breast, often a third of the price. Bone-in has more flavour and the bone is a useful doneness cue; boneless thighs are easier to roll and cook faster. Look for intact skin. Heritage birds have proportionally more leg and it's better meat. Buying legs and a breast separately rather than a whole bird costs about the same, cooks far better and takes up less oven space — for anything other than a table centrepiece it's the sensible purchase. One whole leg feeds two to three.",
  temps: "180-185°F in the thigh, measured near but not touching the bone. That is well above the safety threshold and it is where the connective tissue has converted. Braises to 195-205°F. Never 157°F.",
  faq: [
    { q: "Why is dark meat cooked so much hotter?",
      a: "It's a texture requirement, not a safety one — both are safe at 165°F, and the breast is safe at 157°F held briefly. The thigh has a large amount of collagen that only converts to gelatin above roughly 160°F and over time, so stopping at the safety threshold leaves it tough. Its fat content means the extra twenty-five degrees costs nothing in moisture, which is exactly why the same treatment would ruin a breast." },
    { q: "Should I just cook the bird in pieces?",
      a: "For eating, almost always yes. Roast the legs at 400°F to 180°F and the breast at 325°F to 157°F, and both come out right. The only argument for a whole bird is presentation. Spatchcocking is the compromise that works reasonably well while keeping the bird whole — the legs sit at the hotter outer edges and the breast in the middle." },
    { q: "What are the tendons in the drumstick?",
      a: "The same tendons chicken drumsticks have, but on a mature turkey they're far larger and genuinely woody — five or six hard cords running from the leg into the foot. They don't soften at any temperature. On a thigh they're not an issue; on a drumstick they're worth pulling out with pliers before cooking, or boning the leg entirely." }
  ]
},

{
  slug: "whole-turkey",
  name: "Whole Turkey",
  animal: "turkey",
  shelf: "turkey",
  aka: ["roast turkey", "Thanksgiving turkey", "spatchcocked turkey", "heritage turkey"],
  match: ["whole turkey", "roast turkey", "thanksgiving turkey"],
  dek: "Two birds in one carcass with targets twenty-five degrees apart, which is why the annual result is a dry breast next to legs that were only just done. Every real fix is structural — spatchcock it, part it, or ice the breast — rather than a matter of basting.",
  anatomy: "A commercial broad-breasted turkey has been selected so hard for breast yield that the proportions are unlike any wild bird: the breast can be forty percent of the carcass, thick and domed, while the legs are comparatively small. That geometry is the problem. The breast is the thickest part and the slowest to heat, yet it needs the lowest final temperature; the legs are thinner and sit at the outside of the bird where heat arrives first, yet they need the highest. Heritage breeds are the opposite proportion — smaller breast, more leg — and roast far more evenly, which is a large part of why people who try one don't go back.",
  science: "Breast is lean white muscle, under 2% fat, no collagen, drying sharply past 155°F. Legs are dark, fatty and collagen-heavy, tough below 175°F. Pasteurization is time-and-temperature rather than a single number — 157°F held about a minute achieves the same lethality as 165°F instantly, and a roast this size spends far longer than that passing through the range. So the honest targets are 157°F breast and 180°F leg, twenty-three degrees apart, in one object. No oven setting resolves that; only changing the geometry or the starting temperature does.",
  methods: [
    { m: "Spatchcock",
      why: "Flattening puts the legs at the hot outer edges and the breast in the shielded centre, which narrows the gap more than any other single change and cuts the time roughly in half.",
      how: "Cut out the backbone with shears, press flat, dry-brine a day ahead uncovered. 425°F on a rack over a tray of vegetables, seventy to ninety minutes for a fourteen-pounder, pulling when the breast reads 157°F." },
    { m: "Part it and cook the pieces separately",
      why: "The only approach that gets both right with no compromise at all.",
      how: "Legs at 400°F to 180-185°F, breast at 325°F to 157°F. Roast the carcass separately for gravy. Reassemble on a platter if presentation matters." },
    { m: "Ice the breast before roasting",
      why: "Starting the breast twenty degrees colder than the legs buys back most of the gap without cutting the bird at all.",
      how: "Bags of ice laid over the breast for an hour before it goes in, while the legs come to room temperature. Then roast whole at 325°F." },
    { m: "Dry-brine, always",
      why: "Salt dissolves myosin so the muscle holds water it would otherwise expel, and drying the skin uncovered is the only reliable route to crisp skin.",
      how: "1% of the bird's weight in salt, rubbed all over including under the skin, uncovered in the fridge one to three days. Do not rinse. Do not also wet-brine." }
  ],
  avoid: {
    m: "Stuffing the cavity, and basting",
    why: "Stuffing is the more serious of the two. The cavity is the last place in the bird to heat, and stuffing must reach 165°F to be safe — which means the bird stays in the oven long after the breast is done, routinely pushing it to 175-180°F. A dry breast is the guaranteed price of safe stuffing, so cook the dressing in a separate dish where it browns better anyway. Basting is merely useless: it does nothing for the interior, since the meat is not absorbing anything through the skin, and it actively works against crisp skin by wetting it. What it definitely does is open the oven door repeatedly, dropping the temperature by fifty degrees or more each time and extending the cook — which is exactly the thing making the breast dry."
  },
  buying: "Figure a pound to a pound and a half per person for a commercial bird. Check the label for a salt solution — many are pre-injected at 8-15%, which means you shouldn't brine again and you're paying meat prices for water. Fresh versus frozen matters less than people think; a properly thawed frozen bird is fine, and thawing takes about twenty-four hours per four pounds in the fridge. Heritage breeds cost roughly double, have far more leg relative to breast, roast more evenly and taste considerably more of something. Anything over eighteen pounds cooks so unevenly that two smaller birds is the better decision.",
  temps: "Breast 157°F, legs 180-185°F, measured separately. 157°F is safe — pasteurization at that temperature takes under a minute and a roast passes through the range far more slowly than that. Rest thirty to forty minutes; carryover on a whole bird is substantial.",
  faq: [
    { q: "Is 157°F really safe for the breast?",
      a: "Yes. 165°F is the instantaneous-kill figure, which is convenient for a single-number guideline. Lethality is a function of time and temperature together — 157°F for about a minute achieves the same seven-log reduction, and 150°F for roughly three minutes does too. A whole roast takes many minutes to climb through that range, so the breast is pasteurized well before it reaches the target. The USDA publishes the equivalency tables." },
    { q: "Does spatchcocking really help that much?",
      a: "It's the single biggest improvement available short of parting the bird. Flattening exposes the legs to more direct heat at the pan edges while the breast sits lower and more shielded, which narrows the twenty-five degree gap substantially. It also cuts roasting time roughly in half and gives far better skin, since the whole surface faces up. The cost is that it doesn't look like the picture." },
    { q: "Should I brine or dry-brine?",
      a: "Dry-brine. Salting the surface and leaving the bird uncovered in the fridge for one to three days seasons the meat throughout, improves water retention by the same protein mechanism as a wet brine, and dries the skin so it crisps. Wet brining adds water that has to evaporate, which gives flabby skin, and it requires a container and fridge space nobody has in November. Check the bird isn't pre-injected first." }
  ]
},

{
  slug: "duck-leg",
  name: "Duck Leg",
  animal: "duck",
  shelf: "duck-meat",
  aka: ["duck confit", "duck maryland", "leg quarter", "cuisse de canard"],
  match: ["duck leg", "duck confit", "duck legs"],
  dek: "The opposite of the breast on the same bird — dark, tough, collagen-heavy, and wanting 175-185°F where the breast wants 130°F. Confit is the traditional answer and still the best one.",
  anatomy: "The leg quarter includes thigh and drumstick with a piece of the back, running six to ten ounces on a Pekin duck and considerably more on a Moulard. Ducks walk and swim constantly, so the leg muscles are dark, dense and threaded with connective tissue, and the skin carries a heavy fat layer as it does over the breast. Unlike the breast, the fat here is distributed around and through the muscle as well as under the skin, which is why the leg tolerates and rewards long cooking that would destroy the breast.",
  science: "High collagen and high fat means the leg follows the braising curve: nothing good happens until the connective tissue starts converting above 160°F, and the target is 175-185°F where it has become gelatin and the fat has fully rendered. Confit exploits this precisely — submerged in fat at 200-215°F, the meat sits in the conversion band for hours while being physically unable to dry out, since fat conducts heat gently and there's no evaporation. The salt cure beforehand does two things: it seasons through and it lowers water activity, which is what historically made confit a preservation method rather than just a cooking one.",
  methods: [
    { m: "Confit",
      why: "The definitive treatment. Full collagen conversion with no possibility of drying, and the legs keep for weeks under their own fat.",
      how: "Salt with garlic, thyme and bay for twenty-four hours, rinse and dry. Submerge in duck fat at 200-215°F for two and a half to three hours until the meat pulls from the bone. Cool in the fat. Crisp the skin hard in a dry pan before serving." },
    { m: "Slow roast",
      why: "The fat renders and bastes the meat while the collagen converts, and the skin crisps without any added fat at all.",
      how: "Score the skin, salt overnight uncovered. 300°F on a rack, two to two and a half hours, then 425°F for fifteen minutes to crisp. Save every drop of the rendered fat." },
    { m: "Braise",
      why: "Wet heat converts the collagen and the braising liquid picks up a great deal of rendered fat and gelatin.",
      how: "Brown skin-side first to render, pour off the fat, then braise in wine and stock at 325°F covered for ninety minutes to two hours." },
    { m: "Sous vide then crisp",
      why: "Holds the leg exactly in the conversion band and produces confit texture without a litre of fat.",
      how: "Salt-cure overnight, then 167-175°F for eighteen to twenty-four hours with a spoonful of fat in the bag. Chill, then crisp the skin in a hot dry pan." }
  ],
  avoid: {
    m: "Cooking it to the breast's temperature",
    why: "Duck breast is cooked like a steak to 130-135°F, and the two cuts come off the same bird, so the instruction gets carried across. It shouldn't be. The leg is a hard-working limb packed with connective tissue, and at 135°F none of that has converted — the meat is chewy, the fat is unrendered and greasy, and it eats like an undercooked braise, which is what it is. The leg wants 175-185°F and hours, at which point the collagen has turned to gelatin and the abundant fat has rendered through the meat. This is the same breast-versus-leg split as chicken and turkey, exaggerated: on a duck the two cuts are forty-five degrees apart and there is no version of cooking them together that serves both."
  },
  buying: "Pekin or Long Island legs are what most shops carry, six to ten ounces each — one per person, two for a large appetite. Moulard legs are much larger and richer. Look for intact skin with a thick even fat layer. Frozen is common and completely fine given the long cook. Pre-made confit legs are sold vacuum-packed and are a legitimate shortcut, though they're usually oversalted; rinse and crisp them rather than reheating in the liquid. If you cook duck breast regularly, save the rendered fat and you'll have enough for confit without buying any.",
  temps: "175-185°F internal, or fork-tender with the meat pulling from the bone. Confit at 200-215°F ambient for two and a half to three hours. Sous vide 167-175°F for eighteen to twenty-four hours. Never 135°F.",
  faq: [
    { q: "Do I need a litre of duck fat for confit?",
      a: "Traditionally the legs are fully submerged, which takes a lot. Two workarounds: cook them in a narrow, deep dish so less fat covers more, or vacuum-seal each leg with two tablespoons of fat and cook sous vide, where full submersion is unnecessary because the bag holds the fat against the meat. The fat is also reusable indefinitely — strain it after each use and it improves." },
    { q: "How long does confit actually keep?",
      a: "Properly made and fully submerged under a sealed layer of its own fat, several weeks to a few months refrigerated — that was the entire point of the technique before refrigeration. The seal has to be complete, with no meat breaking the surface, and the container has to be clean. Once you break the seal, treat it as ordinary cooked meat and use it within a few days." },
    { q: "Can I use the fat from the breast?",
      a: "Yes, and you should — it's the same fat. A single magret renders a quarter to a third of a cup, so a few breast dinners accumulate enough for a batch of confit. Strain it through cloth and keep it in a jar in the fridge, where it lasts months. It's also the best roasting fat there is for potatoes." }
  ]
},

// --------------------------------------------------------------------- LAMB
{
  slug: "lamb-loin-chop",
  name: "Lamb Loin Chop",
  animal: "lamb",
  shelf: "lamb",
  aka: ["lamb T-bone", "English chop", "double loin chop", "barnsley chop"],
  match: ["lamb loin chop", "lamb chop", "barnsley chop"],
  dek: "A miniature T-bone — loin on one side of the bone, tenderloin on the other — which means two muscles of different thickness that finish several degrees apart. Thick-cut, seared hard and pulled at 130°F, it's the best value chop on the animal.",
  anatomy: "The loin sits behind the ribs and ahead of the leg, and a chop cut across it carries the loin eye on one side of the T-shaped vertebra and the much smaller tenderloin on the other. A Barnsley or double chop is cut across the whole saddle, giving both loins joined by the spine — a substantial single portion. Loin chops are thicker and meatier than rib chops from the rack and cost less, because they lack the presentation of a frenched bone. There's a fat cap along the outer edge that should be scored and rendered rather than trimmed.",
  science: "The loin is a postural muscle, lean and tender with very little intramuscular fat and almost no collagen, so it behaves like beef strip loin — fast cooking, narrow window, nothing to give back past medium. The tenderloin on the far side of the bone is smaller and even leaner, so it reaches temperature first and is usually a few degrees ahead. The bone itself conducts slowly and shields the meat immediately around it, which means the area next to the bone is always the last to arrive. Between the two muscles and the bone, a loin chop has a genuine gradient across a two-inch piece of meat.",
  methods: [
    { m: "Sear and baste",
      why: "Thick chops need a hard crust and a gentle finish, and basting cooks the top surface through the fat without repeated flipping.",
      how: "Score the fat cap. Salt an hour ahead. Hot pan, fat edge down first for two minutes to render, then flat for three minutes, flip, drop the heat, add butter, garlic and rosemary and baste three minutes. Pull at 128°F." },
    { m: "Reverse sear",
      why: "Evens out the gradient between loin, tenderloin and bone, which a hot-and-fast sear exaggerates.",
      how: "250°F oven to 118°F, twenty to thirty minutes, then a hard sear ninety seconds a side." },
    { m: "Grill over direct heat",
      why: "The fat cap flares if it's over the coals the whole time, but a short direct sear gives char the pan can't.",
      how: "Fat edge over the coals first to render, then two to three minutes a side over direct, finishing on the cool side if needed." },
    { m: "Marinate and grill, Mediterranean style",
      why: "Lamb loin takes garlic, lemon, oregano and oil well, and the acid helps a lean cut hold water.",
      how: "Two to four hours in oil, lemon, garlic and oregano. Dry the surface completely before grilling or it steams." }
  ],
  avoid: {
    m: "Buying them thin, and trimming the fat cap off",
    why: "Thin loin chops — under an inch — are the most common way this cut disappoints, because there's no thickness for a gradient to live in. The outside overshoots to well done while the centre is barely warm, and with a lean muscle carrying almost no marbling there's nothing to disguise it. Buy them an inch and a half to two inches and the same sear produces a proper crust over a pink centre. The fat cap is the other error, and it's usually made by people who think they dislike lamb. That fat is insulating the meat from direct heat, basting it as it renders, and carrying most of the flavour — the branched-chain fatty acids that give lamb its character are in the fat, not the muscle. Score it and render it. Removing it gives you a lean, dry chop that still tastes faintly of lamb and has nothing else going for it."
  },
  buying: "Ask for them cut thick — an inch and a half minimum, two is better — which most butchers will do and supermarkets rarely offer. They cost meaningfully less than rib chops from a rack for more meat. Look for firm white fat and fine-grained pink meat; yellow fat means an older animal and a stronger flavour. American lamb is larger and milder, New Zealand smaller and more pronounced. A Barnsley chop, cut across the whole saddle, is one large portion and worth asking for. Two chops per person at normal thickness, one if they're double-cut.",
  temps: "128-130°F pulled, resting to 130-135°F for medium-rare. The tenderloin side will run a few degrees ahead of the loin, which is unavoidable. Past 140°F it's dry.",
  faq: [
    { q: "Loin chop or rib chop?",
      a: "Rib chops come from the rack — a single muscle, a long clean bone, more elegant and more expensive. Loin chops are a T-bone with two muscles, more meat per chop and less money. For flavour and value the loin chop wins; for presentation the rib chop does. The loin chop is slightly harder to cook evenly because of the two muscles." },
    { q: "What's a Barnsley chop?",
      a: "A chop cut across the entire saddle rather than one side of it, so it has both loins and both tenderloins joined by the spine — a butterfly-shaped double chop, usually eight to twelve ounces, and a full portion on its own. It's a traditional Yorkshire cut and most butchers will cut one if asked. It cooks more evenly than a single loin chop because of the greater thermal mass." },
    { q: "Why does my lamb taste too strong?",
      a: "The flavour compounds concentrate in the fat rather than the muscle, and grass-fed animals have more of them. So it's a fat question: trim the cap thinner rather than removing it, or choose American grain-finished lamb over New Zealand grass-fed. Serving temperature matters too — lamb fat has a high melting point and congeals on a cool plate, which makes the flavour much more assertive. Warm the plates." }
  ]
},

{
  slug: "lamb-neck",
  name: "Lamb Neck",
  animal: "lamb",
  shelf: "lamb",
  aka: ["neck fillet", "scrag end", "lamb neck rounds", "middle neck"],
  match: ["lamb neck", "neck fillet", "scrag end"],
  dek: "The cheapest cut on the animal and among the best braised — a hard-working muscle laced with fat and connective tissue that turns to gelatin in two hours. The boneless neck fillet is a different proposition entirely and cooks in ten minutes.",
  anatomy: "The neck runs from the head to the shoulder, and it's sold three ways that behave differently. Bone-in neck cut into rounds gives cross-sections with a vertebra at the centre, which is the classic scrag end for stews. Whole bone-in neck is the same thing uncut. Neck fillet is the boneless eye of muscle running along the neck — a long cylinder about the thickness of a wrist, which is tender enough to grill or roast quickly and is often mislabelled or misunderstood. The bone-in versions carry a lot of connective tissue and a good deal of fat between the muscle groups.",
  science: "The neck supports the head continuously and turns it constantly, which builds exactly the collagen-heavy, fat-laced muscle that braises well — closer to beef chuck than to anything else on a lamb. Two hours above 160°F converts the connective tissue and renders the fat, and the bone-in rounds contribute marrow and gelatin to the liquid. The neck fillet is the exception because it's the single continuous eye muscle with the surrounding connective tissue removed, so it has neither the collagen that needs converting nor the fat that protects a long cook — it behaves like a small loin and wants fast heat to 130°F.",
  methods: [
    { m: "Braise the bone-in rounds",
      why: "Heavy collagen and good fat make this a braising cut in the same class as beef shin, and the bones enrich the liquid.",
      how: "Brown hard, then 300-325°F covered with liquid two-thirds up for two to two and a half hours until the meat falls from the bone. Chill overnight and lift the fat before reheating." },
    { m: "Slow roast whole, bone-in",
      why: "Long dry heat renders the fat and converts the collagen while the exterior builds a crust, giving something between a roast and a braise.",
      how: "Salt overnight, then 275-300°F covered for two and a half hours, uncovered for the final thirty minutes to colour. Pulls apart with a fork." },
    { m: "Sear the neck fillet hot and fast",
      why: "The boneless fillet is a lean tender eye muscle and follows loin rules, not braising rules.",
      how: "Whole, seared hard on all sides in a hot pan, four to five minutes total, then rested five and sliced thick. Pull at 130°F." },
    { m: "Curry or tagine",
      why: "The fat and gelatin suit a heavily spiced sauce and the long cook lets the two exchange completely.",
      how: "Bone-in pieces browned, then simmered in the spice base for two hours. This is the cut most Middle Eastern and South Asian lamb stews actually use." }
  ],
  avoid: {
    m: "Confusing the two forms — braising the fillet, or grilling the rounds",
    why: "Neck is sold under one word as two cuts that want opposite treatments, and both substitutions fail badly. Bone-in neck rounds are collagen-heavy and need two hours above 160°F; put them on a grill and the outside chars while the connective tissue stays fully intact, giving something tough and chewy that no further grilling improves. The boneless neck fillet is the reverse — the eye muscle stripped of its surrounding tissue, lean and tender with almost no collagen — so braising it for two hours takes it well past the point where the fibers hold water, and with nothing converting to gelatin it goes stringy and dry. Look at what you bought: bones and visible seams of connective tissue means the pot, a clean boneless cylinder means the pan."
  },
  buying: "One of the cheapest cuts in any butcher's case and consistently overlooked, which keeps it cheap. Ask for bone-in neck cut into rounds an inch and a half thick for stews, or a whole neck for slow roasting. Neck fillet is sold separately and costs more; make sure you know which you're getting, because the names are used loosely. Look for good fat between the muscle seams — a lean-looking neck was trimmed too hard and will disappoint. Halal butchers and traditional shops carry it reliably; supermarkets often don't. Two pounds bone-in feeds three to four.",
  temps: "Bone-in: 195-205°F over two to two and a half hours, judged by the meat falling from the bone. Neck fillet: 130°F, seared four to five minutes total. There is no overlap between the two.",
  faq: [
    { q: "Is neck fillet the same as neck?",
      a: "No, and the shops use both words loosely enough that it causes real problems. Neck fillet is the boneless eye muscle stripped out of the neck — lean, tender, cooks in minutes like a small loin. Bone-in neck or scrag end is the whole thing with vertebrae, connective tissue and fat, and it needs two hours in a pot. Check for bone before you decide how to cook it." },
    { q: "Why is it so cheap?",
      a: "Unfamiliarity, and the fact that it's awkward to portion. It's a small cut on a small animal that requires long cooking, so it doesn't suit modern retail, and most supermarkets simply don't stock it. Butchers who break whole lambs always have it. That combination — genuinely excellent, requires knowledge, low demand — is what keeps the price down." },
    { q: "Can I use it instead of shoulder?",
      a: "Yes, in any braise or stew, and many people prefer it — the neck has a higher proportion of connective tissue than the shoulder, so the finished sauce has more body. Timing is similar, maybe slightly shorter since the pieces are smaller. It's the standard cut for lamb stews across much of the Mediterranean and Middle East for exactly this reason." }
  ]
},

// --------------------------------------------------------------------- BEEF
{
  slug: "flat-iron",
  name: "Flat Iron Steak",
  animal: "beef",
  shelf: "beef",
  aka: ["top blade steak", "butler's steak", "oyster blade", "infraspinatus"],
  match: ["flat iron", "top blade steak", "oyster blade"],
  dek: "The second most tender muscle on the animal after the tenderloin, hidden inside the chuck and only isolated as a retail cut since the early 2000s. A sheet of gristle runs through its centre, which is why it went into stew meat for a century.",
  anatomy: "The flat iron is the infraspinatus, sitting on the outside of the shoulder blade. It's a broad flat muscle that stabilises rather than drives, so despite being in the chuck — a braising primal — it stays remarkably tender and well marbled. Running down its middle lengthwise is a thick band of connective tissue, and that seam is the entire reason it was never sold as a steak: cut across the whole muscle you get a piece with an inedible strip through it. Cut along either side of the seam you get two clean, uniform steaks. University meat scientists formalised the cut in 2002 and it went from grind to a menu item within a few years.",
  science: "Good intramuscular marbling and fine grain give it steak behaviour despite its chuck origin, and it's consistently ranked just behind tenderloin on tenderness measures while having far more flavour, since the tenderloin is famously bland. The central seam is elastin-heavy connective tissue that doesn't convert at steak temperatures, so it has to be removed mechanically rather than cooked out. Even thickness across the muscle is the other advantage — unlike a ribeye or a tri-tip, a flat iron is close to uniform, so it cooks evenly with almost no gradient.",
  methods: [
    { m: "Hot sear",
      why: "Uniform thickness and good marbling make it one of the easiest steaks to cook — high heat, short time, no thermal gradient to manage.",
      how: "Salt an hour ahead, dry thoroughly. Screaming hot cast iron, three minutes a side for a one-inch steak, butter-basted for the last minute. Pull at 125-130°F. Rest ten, slice across the grain." },
    { m: "Grill over direct heat",
      why: "Its even thickness suits direct fire, and the marbling drips enough to give flame contact without flaring badly.",
      how: "Very hot grate, three minutes a side, turned once. Move off direct if it's thick." },
    { m: "Marinate and grill",
      why: "It takes marinade well and it's cheap enough that a marinated flat iron is a weeknight steak rather than an occasion.",
      how: "Two to eight hours in soy, garlic and oil, dried thoroughly before grilling." },
    { m: "Sous vide then sear",
      why: "The even thickness means a bath produces edge-to-edge doneness with no gradient at all.",
      how: "130°F for two to four hours, dried and seared sixty seconds a side." }
  ],
  avoid: {
    m: "Cooking it with the centre seam still in",
    why: "This is the cut's defining problem and the reason it spent a century in the grinder. Running lengthwise through the middle of the muscle is a thick band of elastin-heavy connective tissue that does not convert to gelatin at any steak temperature — it stays a tough, rubbery sheet. A steak cut across the whole muscle has that band running through it, so every slice contains a strip nobody can chew, and the meat either side can be perfect and it still eats badly. Many butchers sell it already split into two clean steaks, but plenty sell the whole top blade with the seam intact. Look at the cut face: a pale line down the centre means take a knife and separate the two halves along it before cooking."
  },
  buying: "Ask for flat iron rather than top blade if you want it already trimmed — top blade usually means the whole muscle with the seam still in, and flat iron generally means split. Inspect it anyway. It should be well marbled with fine grain and even thickness. It's consistently one of the best value steaks in the case, priced closer to chuck than to ribeye despite being nearly as tender as tenderloin. Each animal yields two, around two pounds each before trimming. One-inch steaks are the sweet spot. Sold as oyster blade in Australia and butler's steak in parts of Britain.",
  temps: "125-130°F pulled for medium-rare, resting to 130-135°F. It has enough marbling to be forgiving up to medium, but past 140°F the advantage over cheaper chuck steaks disappears.",
  faq: [
    { q: "Why is it so cheap if it's that tender?",
      a: "Because it's only been a retail cut for about twenty years. Before university meat scientists worked out how to split the muscle around its central seam in 2002, the whole top blade went into ground beef or stew meat, since a steak with a band of gristle through it is unsellable. It's still priced as a chuck cut in most shops even though it tests just behind tenderloin on tenderness, which makes it arguably the best value steak available." },
    { q: "Is it the same as a chuck eye steak?",
      a: "No. Chuck eye is the continuation of the ribeye muscle into the shoulder — very good, richly marbled, sometimes called the poor man's ribeye. Flat iron is the infraspinatus, a flat muscle on the outside of the shoulder blade, and it's leaner, more uniform and finer grained. Both come from the chuck and both are excellent value; they're different muscles." },
    { q: "How do I find the seam?",
      a: "Look at the cut end of the muscle. There's a visible pale line running lengthwise through the middle, and if you press the muscle flat you can usually feel it. Lay the muscle flat, slide a thin knife along the top of the seam to free the upper half, then flip and repeat underneath. You end up with two steaks of slightly different thickness and a strip of gristle to discard." }
  ]
},

{
  slug: "picanha",
  name: "Picanha",
  animal: "beef",
  shelf: "beef",
  aka: ["top sirloin cap", "coulotte", "rump cap", "culotte steak"],
  match: ["picanha", "top sirloin cap", "coulotte", "rump cap"],
  dek: "The cap of the top sirloin with its fat layer intact — the centrepiece of Brazilian churrasco and almost always sold in America with the one thing that makes it worth buying already trimmed off.",
  anatomy: "Picanha is the biceps femoris cap sitting on top of the sirloin, a triangular muscle of two to three pounds with a thick fat cap on one side. That fat cap is the cut: it renders during cooking and bastes the meat continuously, and Brazilian butchers leave it a good half-inch thick. American processors routinely trim it to a quarter inch or remove it entirely, which is why the cut sold as top sirloin cap in a US supermarket is a different and much less interesting product. The grain runs consistently in one direction across the triangle, which makes slicing straightforward — unlike tri-tip, where it changes.",
  science: "Moderate marbling in the muscle, and a substantial external fat layer doing the work marbling would otherwise do. As the fat renders it runs over the surface and keeps it from drying, and it also carries a large part of the flavour, so the cut is noticeably better with the cap than without. The muscle itself is lean enough to want medium-rare and no further. The traditional churrasco method — folded onto a skewer with the fat facing out, rotated over coals, with the outer layer sliced off as it cooks and the rest returned to the fire — is a way of continuously exposing new surface to heat while the fat bastes everything behind it.",
  methods: [
    { m: "Whole roast, fat cap up, then sear",
      why: "Rendering the cap slowly bastes the muscle, and a final blast crisps it into the best part of the cut.",
      how: "Score the fat in a crosshatch without cutting into the meat, salt heavily an hour ahead. 250°F fat-side up to 120°F internal, forty-five minutes to an hour. Rest, then sear fat-side down in a hot pan or over coals for three to four minutes." },
    { m: "Churrasco on skewers",
      why: "The traditional method, and it works because rotation keeps the rendering fat running back over the meat rather than dripping away.",
      how: "Cut into three or four thick steaks across the grain, fold each into a C with the fat outward, thread onto a skewer. Rotate over medium coals, slicing off the cooked outer layer as it browns and returning the rest to the fire." },
    { m: "Cut into steaks and sear",
      why: "The simplest approach, and each steak keeps a strip of the fat cap along one edge.",
      how: "Slice across the grain into inch-and-a-half steaks, sear fat edge down first for two minutes to render, then flat sides three minutes each. Pull at 128°F." },
    { m: "Reverse sear whole",
      why: "A thick triangular roast benefits from an even climb, and the sear at the end handles both crust and fat cap.",
      how: "225°F to 118°F, then hard sear fat-side down. Rest fifteen minutes before slicing." }
  ],
  avoid: {
    m: "Buying it trimmed, and slicing it the wrong way",
    why: "The fat cap is the entire cut. It renders throughout cooking and bastes a muscle that has only moderate marbling of its own, and it carries a large share of the flavour — a picanha trimmed to a quarter inch or bare is just a lean sirloin roast and will eat like one. Most American supermarkets trim it as a matter of course, and the label top sirloin cap usually means trimmed. Ask specifically for it with a half-inch cap and ask them not to trim it. The second error is slicing: the grain runs consistently across the triangle, and cutting steaks the long way rather than across it leaves the fibers full length and makes an otherwise tender cut chew like rope. Slice across the short axis of the triangle."
  },
  buying: "Brazilian and Latin butchers, and increasingly Costco and better shops, carry it with the cap on. Ask by name and specify you want the fat cap left at half an inch — if the counter says top sirloin cap, confirm the trim. Two to three pounds is a whole picanha; anything much larger came off an unusually big animal and may be tough. Look for a thick, even white cap and good colour in the muscle. It's usually priced between sirloin and ribeye, which for what it is makes it good value. Feeds four to six whole.",
  temps: "125-130°F pulled for medium-rare, resting to 130-135°F. The fat cap needs a final high-heat stage to crisp regardless of how the meat was cooked. Past 140°F the lean muscle dries.",
  faq: [
    { q: "Why is the fat cap such a big deal?",
      a: "Because the muscle underneath has only moderate marbling, so unlike a ribeye it isn't self-basting from within. The cap renders continuously during cooking and runs over the meat, and it's where a large part of the flavour is concentrated. A picanha with a half-inch cap and one that's been trimmed bare are genuinely different eating. It's the single thing to check when buying." },
    { q: "Picanha or tri-tip?",
      a: "Both are triangular sirloin-area roasts, and they get compared constantly. Picanha comes from the top sirloin with a fat cap; tri-tip from the bottom sirloin, leaner and usually trimmed. Tri-tip has the grain-direction change that makes carving tricky; picanha's grain runs consistently. Picanha is richer thanks to the cap, tri-tip is beefier and takes smoke better." },
    { q: "How do I slice it?",
      a: "Across the grain, which on a picanha means cutting across the short axis of the triangle — the fibers run roughly parallel to the long edge. If you're cutting it into steaks before cooking, cut them the same way, so each steak has a strip of fat cap along one edge and the grain running across it. Then after cooking, slice each steak thin across the same direction." }
  ]
},

{
  slug: "beef-cheek",
  name: "Beef Cheek",
  animal: "beef",
  shelf: "beef",
  aka: ["ox cheek", "cachete", "beef head meat", "barbacoa cheek"],
  match: ["beef cheek", "ox cheek", "cachete"],
  dek: "The masseter — a muscle that chews all day, every day — which makes it the most collagen-dense thing on the animal and the richest braise available. Three hours and it turns to something between meat and gelatin.",
  anatomy: "Each cheek is a flat, roughly oval muscle of eight to twelve ounces, wrapped in a heavy silverskin membrane that has to be trimmed or it stays as a tough sheet. The muscle fibers are dense and fine, arranged in a distinctive interlocking pattern from constant chewing, and the whole thing is threaded with collagen at a higher concentration than shin, oxtail or short rib. There's very little external fat and almost no marbling. Two per animal, which combined with growing demand from restaurants has pushed the price well above what it was a decade ago.",
  science: "The highest collagen-to-muscle ratio of any commonly sold beef cut, which points at one treatment and no others. Over three hours between 160 and 200°F that collagen hydrolyzes almost completely into gelatin, and because there's so much of it the result is unusually unctuous — the meat holds together in a way that's closer to a terrine than to a shredded braise, and the liquid sets solid when chilled. The absence of fat means the braising liquid is doing all the protective work, so the cheeks must stay submerged; any part exposed above the liquid dries into leather while the rest converts.",
  methods: [
    { m: "Braise, fully submerged",
      why: "The definitive treatment, and submersion matters more here than on fattier cuts because there's no internal fat protecting exposed surfaces.",
      how: "Trim the silverskin, brown hard, then 300-325°F covered with liquid completely covering the cheeks, three to three and a half hours until a fork twists with no resistance. Chill overnight in the liquid and reheat." },
    { m: "Barbacoa",
      why: "The Mexican treatment, steamed rather than simmered, which keeps the flavour concentrated in the meat rather than leaching into a large volume of liquid.",
      how: "Marinate in a chile and spice paste, wrap in banana or maguey leaves, and steam over a small amount of liquid at 300°F for four hours. Shred and serve with the drippings." },
    { m: "Pressure cook",
      why: "Cuts the collagen conversion time by two thirds on a cut where the conversion is the entire job.",
      how: "Brown, then fifty to fifty-five minutes at high pressure, natural release. Reduce the liquid hard afterwards." },
    { m: "Sous vide",
      why: "Holds the cheek precisely in the conversion band for a long time, producing a sliceable texture no braise achieves.",
      how: "165°F for twenty-four to thirty-six hours, or 176°F for twelve. Chill, then sear or glaze in the reduced bag liquid." }
  ],
  avoid: {
    m: "Leaving the silverskin on, and stopping early",
    why: "Two failures that compound. The membrane wrapping each cheek is elastin-heavy silverskin, and unlike the collagen inside the muscle it does not convert to gelatin at any temperature — three hours of braising leaves it as a tough sheet around otherwise perfect meat, and it also contracts as it heats and squeezes the cheek into a tight ball. It has to come off with a thin knife before cooking. The second error is the same one oxtail invites: cheeks look done at two hours, having softened and coloured, and they aren't. The collagen load here is the highest on the animal and the conversion is a rate, not a threshold — three to three and a half hours above 160°F is what it takes, and pulling early gives meat that is simultaneously soft on the outside and rubbery through the middle."
  },
  buying: "Ask the butcher; they're rarely in the case but most shops that break carcasses have them or can get them. Two per animal, eight to twelve ounces each, and one is a generous portion. They should be deep red with the silverskin visible on one side — ask whether it's been trimmed, and if not, plan ten minutes with a boning knife. No longer a cheap cut in most cities thanks to restaurant demand, though still well below steak prices. Frozen is completely fine given the cook time. Latin and halal butchers often carry them more reliably and cheaper than conventional shops.",
  temps: "195-205°F internal over three to three and a half hours at 300-325°F, judged by a fork twisting freely. Pressure cook fifty to fifty-five minutes. Sous vide 165°F for twenty-four hours. Two hours is not enough.",
  faq: [
    { q: "How is this different from other braising cuts?",
      a: "Concentration. Shin, oxtail and short rib are all collagen-rich, but the cheek is the densest of them, because the masseter works continuously and never rests. The result is unusually gelatinous — the meat has a texture closer to a terrine than to pulled beef, and the liquid sets to a firm jelly. It's also leaner than short rib, so the sauce is less greasy." },
    { q: "Do I have to trim the silverskin?",
      a: "Yes. It's elastin rather than collagen, so it doesn't convert at any temperature, and it contracts as it heats and pulls the cheek into a tight ball. Slide a thin flexible knife under one edge and work it off at a shallow angle. Some butchers trim it; most don't. It takes a few minutes and it's the difference between a good result and a chewy one." },
    { q: "Can I substitute shin or short rib?",
      a: "Yes, and both are good — shin is the closest in character and cheaper, short rib is fattier and richer. Neither has quite the same gelatinous density, so the sauce will be slightly less unctuous. Shin needs about the same time; short rib slightly less. If a recipe specifically wants that terrine-like texture, the cheek is doing something the others don't." }
  ]
},

{
  slug: "beef-tongue",
  name: "Beef Tongue",
  animal: "beef",
  shelf: "organ-meats",
  aka: ["lengua", "ox tongue", "gyutan", "pickled tongue"],
  match: ["beef tongue", "lengua", "ox tongue", "gyutan"],
  dek: "A muscle rather than an organ, and one of the richest on the animal — but it comes wrapped in a thick papery skin that has to be peeled off after cooking, which is the step that puts people off and takes ninety seconds.",
  anatomy: "The tongue is a muscular hydrostat like an octopus arm, with fibers running in several directions and no bone, which is why it has no grain to slice against and stays uniformly tender. It's covered by a thick, rough outer skin — the same texture as the surface of a cat's tongue, scaled up — that is inedible and cannot be removed raw. The base end is fattier and richer; the tip is leaner and firmer. A whole beef tongue weighs two to four pounds. Japanese gyutan uses thin slices from the base, grilled; Mexican lengua uses the whole thing, simmered and chopped.",
  science: "High fat content distributed through the muscle plus a substantial collagen load, which makes it one of the few cuts that's both rich and requires long cooking. Three hours of simmering converts the collagen and renders the fat through the meat, giving a texture people consistently describe as closer to a very tender brisket than to anything organ-like. The skin separates only after cooking, because the heat breaks down the connective layer beneath it — attempting to peel a raw tongue is essentially impossible, while a cooked one peels in one piece if done while still hot. Let it cool and the skin adheres again.",
  methods: [
    { m: "Simmer, peel, then chop or slice",
      why: "The base method for lengua and for nearly everything else — long wet heat converts the collagen and loosens the skin.",
      how: "Simmer whole with onion, garlic, bay and peppercorns for two and a half to three hours until a knife slides in easily. Lift out and peel immediately while hot. Chop for tacos or slice for sandwiches." },
    { m: "Braise then sear",
      why: "Once peeled and cooled the meat slices cleanly and takes a hard sear, giving crisp edges against the rich interior.",
      how: "Simmer and peel, chill under weight so it holds shape, slice half an inch thick, then sear hard in a very hot pan. This is the best taco filling on the animal." },
    { m: "Gyutan — sliced thin and grilled",
      why: "The Japanese treatment uses thin slices from the fatty base cooked fast over charcoal, which needs no long simmer at all.",
      how: "Peel a raw tongue is impractical, so buy pre-peeled or simmer briefly and peel, then freeze slightly and slice paper-thin. Salt, grill over very hot coals ninety seconds a side, serve with lemon." },
    { m: "Cure and press",
      why: "The traditional European preparation — brined then simmered and pressed into a terrine, sliced cold for sandwiches.",
      how: "Brine five to seven days with pink salt, then simmer three hours, peel, and press in a mould overnight. Slices like a good ham." }
  ],
  avoid: {
    m: "Trying to peel it raw, or letting it cool before peeling",
    why: "The outer skin is thick, rough and completely inedible, and it's the reason most people who buy a tongue once don't buy a second. It cannot be removed from a raw tongue — it's bonded to the muscle and no knife gets under it cleanly. It also cannot be removed easily from a cold one, because the connective layer that heat loosens re-sets as it cools and the skin grips again. The window is while it's hot: lift the tongue from the simmering liquid, let it sit two minutes so it's handleable, then cut a shallow slit at the thick end and pull. It comes away in one or two large pieces in under a minute. Miss that window and you're reheating it to try again."
  },
  buying: "Latin, halal and Asian butchers stock it reliably; conventional supermarkets rarely do. Two to four pounds whole, and it loses roughly a third of its weight to skin and trimming, so plan accordingly. It should be firm, pale pink-grey and smell clean. Some are sold already peeled and partially cooked, which is convenient and costs more. It's inexpensive relative to muscle cuts, though less so than it was. Frozen is fine. Ask for the whole tongue rather than pieces — the base and tip are different textures and it's worth having both.",
  temps: "Simmered two and a half to three hours until a knife slides into the thickest part with no resistance, around 195-205°F internal. Peel immediately while hot. Grilled slices need ninety seconds a side over high heat.",
  faq: [
    { q: "Does it taste like organ meat?",
      a: "No, and this surprises people. It's a muscle, not an organ, with no liver or kidney character at all — the flavour is straightforwardly beefy and the texture is rich and tender, closest to a very good brisket point or the fatty end of a pot roast. Most people served it without being told what it is guess brisket." },
    { q: "How much do I lose to the skin?",
      a: "Roughly a third of the raw weight between skin, the fatty gristle at the base and trimming. A three-pound tongue yields about two pounds of meat. That's worth factoring into the price comparison, though it's usually still cheaper per edible pound than most muscle cuts." },
    { q: "Base or tip?",
      a: "The base is fattier, richer and more tender — it's what Japanese gyutan uses and it's the better eating. The tip is leaner and firmer, good chopped for tacos or in a stew where texture matters less. A whole tongue gives you both, and it's worth separating them and using each accordingly rather than treating the whole thing as one ingredient." }
  ]
},

// --------------------------------------------------------------------- PORK
{
  slug: "pork-cheek",
  name: "Pork Cheek",
  animal: "pork",
  shelf: "pork",
  aka: ["pork jowl meat", "carrillada", "guanciale muscle", "pig cheek"],
  match: ["pork cheek", "carrillada", "pig cheek"],
  dek: "Small, dense and heavily collagenated — the same masseter as a beef cheek on a smaller animal, so it converts in ninety minutes rather than three hours. Cheap, and among the best braises in the shop.",
  anatomy: "Each cheek is a compact oval muscle of three to five ounces, taken from inside the jowl after the surrounding fat has been removed for guanciale. Constant chewing builds dense, fine-grained muscle bound by heavy connective tissue, with some intramuscular fat but far less than the jowl fat that surrounded it. There's a silverskin membrane on one side that should be trimmed. Two per animal. Because they're small, they cook considerably faster than any other collagen-heavy cut, which is the practical argument for them.",
  science: "Very high collagen relative to size, so the same conversion applies as a beef cheek, but the small mass means heat reaches the centre quickly and the whole thing converts in ninety minutes to two hours rather than three-plus. There's enough intramuscular fat to keep them from drying, unlike beef cheeks, so they're a little more forgiving. The result is unusually gelatinous for pork — the braising liquid sets firmly when chilled — and the meat holds together in whole pieces rather than shredding, which makes them good for a plated dish rather than just a filling.",
  methods: [
    { m: "Braise in wine or sherry",
      why: "The Spanish carrillada treatment, and the classic — enough time for full collagen conversion with the liquid becoming a glossy sauce.",
      how: "Trim silverskin, brown hard, then 300°F covered in red wine or oloroso sherry with aromatics, ninety minutes to two hours until a fork twists freely. Reduce the liquid hard into a glaze." },
    { m: "Braise then glaze",
      why: "Their small even size means each cheek can be glazed whole and plated, which larger braising cuts can't.",
      how: "Braise, then remove and reduce the liquid to a syrup, returning the cheeks to coat. Serve two or three per person on a purée." },
    { m: "Pressure cook",
      why: "Small pieces with high collagen convert very fast under pressure, making this a genuinely quick braise.",
      how: "Brown, then twenty-five to thirty minutes at high pressure, natural release. Reduce afterwards." },
    { m: "Confit",
      why: "Submerged in fat the collagen converts with no water leaching flavour out, and they keep for weeks.",
      how: "Salt overnight, rinse, submerge in lard at 200-215°F for two hours. Cool in the fat. Crisp before serving." }
  ],
  avoid: {
    m: "Cooking them like beef cheeks",
    why: "The instinct is right about the method and wrong about the duration. A pork cheek is three to five ounces against a beef cheek's eight to twelve, on a much smaller and younger animal — the collagen concentration is comparable but the total mass is a fraction, so heat reaches the centre far faster and the conversion completes in ninety minutes to two hours. Give them a beef cheek's three and a half hours and the connective tissue has long since converted, and then the muscle fibers keep breaking down with nothing left to protect them: what comes out is stringy and falling to shreds rather than holding together in tender whole pieces, which is the whole appeal of the cut. Check at ninety minutes and stop as soon as a fork twists with no resistance."
  },
  buying: "Butchers who break whole hogs have them, though they're rarely in the case — ask. Spanish and Latin butchers carry them as carrillada. They should be trimmed of the surrounding jowl fat, deep pink and firm, with the silverskin visible on one side. Very cheap, since demand is low outside Spain and Latin America. Three to five ounces each, so figure two or three per person. Frozen is fine. If the shop only has whole jowls, the cheek is the compact muscle inside and can be cut out, with the fat kept for guanciale.",
  temps: "195-205°F internal over ninety minutes to two hours at 300°F, or twenty-five to thirty minutes under pressure. Judged by a fork twisting freely. Past two and a half hours they go stringy.",
  faq: [
    { q: "Is this the same as jowl?",
      a: "No, though they come from the same place. The jowl is the whole fatty pouch along the jaw, mostly fat, and it's what becomes guanciale. The cheek is the compact muscle inside it, trimmed of that fat. They're used completely differently — jowl is cured and rendered, cheek is braised. A butcher selling jowl may or may not have separated the cheek out." },
    { q: "Why are they so cheap?",
      a: "Low demand outside Spain and Latin America, and the fact that they're small and fiddly to separate from the jowl. There are only two per animal, and where there's no established market they often go into sausage. Spanish butchers price them properly because carrillada is a standard dish; most others don't." },
    { q: "How many per person?",
      a: "Two or three, depending on size and what else is on the plate. Each cheek is three to five ounces raw and loses some in cooking, so a portion is somewhere around six to ten ounces raw. They're rich enough that three is plenty with a purée and a sauce." }
  ]
},

// ------------------------------------------------------------------ SEAFOOD
{
  slug: "squid",
  name: "Squid",
  animal: "seafood",
  shelf: "dried-seafood",
  aka: ["calamari", "calamares", "ika", "baby squid"],
  match: ["squid", "calamari", "calamares"],
  dek: "Ninety seconds or thirty minutes, and nothing in between — the two-minute mark is where it turns to rubber and stays there until the collagen finally converts. Almost every rubbery calamari came from someone stopping in the middle.",
  anatomy: "A squid is sold as tubes and tentacles. The tube is the mantle, a muscular tube that propels the animal by jetting water, with a transparent quill running inside it that must be pulled out, and a thin purple-grey membrane on the outside that peels off. The tentacles come attached to the head, with a hard beak at the centre that gets cut away. The mantle muscle is arranged in circular and longitudinal fibers with collagen sheets between, and it's thin — usually a few millimetres — which is why the cooking window is so short. Baby squid are tender enough to cook whole; larger ones are usually scored or cut into rings.",
  science: "The curve is genuinely bimodal, which is unusual. Squid muscle fibers contract and toughen within about two minutes of heat, and the collagen between them needs roughly thirty to forty-five minutes above 160°F to hydrolyze into gelatin and release them again. So there are two good windows: under two minutes, where the fibers haven't seized, and past thirty minutes, where the connective tissue has gone. Between those the meat is tough and there is no way to shorten the wait. This is why fried calamari works at ninety seconds and a squid stew works at forty-five minutes, and why a fifteen-minute simmer produces rubber bands.",
  methods: [
    { m: "Fry, ninety seconds",
      why: "The classic, and it works because the batter insulates while the very short time keeps the muscle inside the first window.",
      how: "Rings and tentacles, dried thoroughly, dredged in seasoned flour or semolina. 375°F oil, ninety seconds to two minutes until pale gold. Any longer and no batter saves it. Salt immediately, lemon at the table." },
    { m: "Grill hot and fast",
      why: "High direct heat chars the surface within the window, which is the whole point of grilled squid.",
      how: "Tubes scored in a crosshatch on the inside so they curl, brushed with oil, on a screaming grill ninety seconds a side. Dress with lemon, oil and parsley off the heat." },
    { m: "Braise or stew, forty-five minutes",
      why: "The second window — long enough for the collagen to convert, giving a completely different and very tender texture.",
      how: "In tomato, wine and garlic at a bare simmer for forty-five minutes to an hour. Squid releases a lot of liquid at first and reabsorbs it. Add the tentacles at the same time as the tubes." },
    { m: "Stuff and bake",
      why: "The tube is a natural container, and a slow bake puts it firmly in the long window.",
      how: "Stuffed with rice, chopped tentacle and herbs, secured with a toothpick, baked in tomato sauce at 325°F for forty-five minutes." }
  ],
  avoid: {
    m: "Cooking it for anything between two and thirty minutes",
    why: "Squid has two good windows and a long bad one in between, and almost all disappointing calamari lands in the middle. The muscle fibers seize within about two minutes of heat and stay contracted until the collagen sheets between them hydrolyze, which takes thirty to forty-five minutes above 160°F. There's no technique that shortens that gap — no marinade, no tenderiser, no milk soak makes a ten-minute squid tender, because the connective tissue simply hasn't had time. So decide which side you're on before you start. Fry or grill for ninety seconds, or stew for forty-five minutes. A five-minute sauté, which is what most home recipes suggest, produces exactly the texture squid is unfairly famous for."
  },
  buying: "Frozen is generally as good as fresh and often better, since freezing damages the cell structure slightly and helps tenderness — most squid is frozen at sea anyway. Look for tubes that are white with a clean purple-grey membrane and no yellowing or strong smell. Buying whole and cleaning it yourself is cheaper and takes two minutes per squid: pull the head and guts out, pull the quill, peel the membrane, cut the tentacles free above the eyes and squeeze out the beak. Cleaned tubes and tentacles cost more and are fine. Smaller squid are more tender. A pound serves two to three.",
  temps: "Not a temperature cut — it's a time question. Ninety seconds to two minutes over high heat, or forty-five minutes to an hour at a bare simmer. Nothing in between works.",
  faq: [
    { q: "Does soaking in milk tenderise it?",
      a: "Not meaningfully. The milk soak is a real practice, and it does mildly mellow the flavour and helps batter adhere, but tenderness in squid is a function of time — either under two minutes or over thirty. No soak changes the collagen. If your calamari was tough, it was cooked for five minutes, and milk would not have saved it." },
    { q: "Fresh or frozen?",
      a: "Frozen is fine and frequently better. Nearly all squid is frozen at sea shortly after catch, so what's sold as fresh at most counters has been thawed anyway. Freezing also slightly disrupts the muscle structure, which marginally helps. Buy frozen, thaw in the fridge, and dry it thoroughly before cooking — surface water is what stops it browning." },
    { q: "Why does mine release so much water?",
      a: "Squid holds a lot of water and expels it when heated, which is normal and is why a pan of squid appears to boil rather than sear. In a stew that's fine — it reabsorbs it. For frying or grilling, dry the pieces thoroughly on paper towel first, cook in small batches, and make sure the pan or oil is genuinely hot, or the released water drops the temperature and it steams." }
  ]
}

];
