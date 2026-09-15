// Cut profiles: poultry + lamb shoulder
// Worth The Hunt — /cuts/<slug>/

module.exports = [

  {
    slug: "chicken-thigh",
    name: "Chicken Thigh",
    animal: "chicken",
    shelf: "chicken",
    aka: ["bone-in skin-on thigh", "boneless skinless thigh", "dark meat", "leg quarter"],
    match: ["chicken thigh", "chicken thighs"],
    dek: "The upper leg, hip to knee, around the femur. It's dark meat with fat and collagen in it, which means it keeps improving 20 degrees past the point where a breast is finished. Cook it to 175-190F, not 165F — that extra stretch is the whole cut.",
    anatomy: "The thigh is the segment between hip and knee, wrapped around the femur, and its main mass is the biceps femoris with several smaller muscles alongside it. A chicken stands, walks, and scratches all day and essentially never flies, so the leg is load-bearing muscle that's under tension for most of the bird's waking hours. That kind of continuous work is done by slow-twitch fibers, which are dense with mitochondria and myoglobin — that's where the dark color comes from, and it means the muscle runs an oxygen-burning metabolism with fat stored nearby as fuel. Constant loading also builds connective tissue where the muscle anchors to the femur and where the muscle groups slide against each other. Skinless thigh meat runs roughly 8-10% fat against 1-2% for breast, and with the skin left on the whole piece lands closer to 15%.",
    science: "Two things make the thigh forgiving: rendered fat and dissolved collagen. Every cut loses water as it cooks — actin denatures somewhere around 150-163F and the fiber contracts and squeezes — but in a thigh, melted fat and gelatin move into the space that opens up. That gelatin does not exist at 165F. Collagen converts as a function of time and temperature: it begins moving near 160F and runs quickly at 175-190F, which is why a thigh pulled at 165F is springy and one held 10-15 minutes at 185F goes soft. Safety was settled long before that point — a 7-log Salmonella reduction happens instantly at 165F, in about 45 seconds at 155F, and in roughly 3 minutes at 150F. You're not taking a thigh to 185F for safety, you're taking it there for texture.",
    methods: [
      {
        m: "Roast bone-in, skin-on",
        why: "Dry heat above 400F drives water out of the skin and renders the fat under it, while the femur slows conduction into the meat nearest the bone so nothing overshoots badly.",
        how: "425F, skin up on a rack or a preheated sheet pan, 35-40 minutes, pulled at 180-190F measured at the thickest point away from the bone. Don't baste — putting liquid back on the skin undoes the drying you're paying for."
      },
      {
        m: "Pan-sear skin-down, then finish",
        why: "Chicken skin is about 40% fat over a collagen dermis; it needs long, unbroken contact with metal above 300F to render that fat out and dehydrate what's left.",
        how: "Dry the skin, salt it, lay it in a cold or barely warm heavy pan skin-down, medium heat, 10-12 minutes without touching it. Flip and go 4-6 more minutes to 180F. Leave an inch between pieces so steam can leave."
      },
      {
        m: "Braise",
        why: "A covered pot parks the meat at 180-200F for as long as you want, converting collagen without letting the exterior dry out, and the gelatin ends up in the liquid.",
        how: "Brown the pieces first, add liquid halfway up (not over the top), 325F covered, 45-60 minutes bone-in. Done is 195F and meat retreating from the bone end."
      },
      {
        m: "Two-zone grill",
        why: "Thigh fat renders straight into the fire and flares, so the meat has to spend most of its time away from flame and only a short window over it.",
        how: "Indirect side, lid down, 20-25 minutes to about 170F, then 2-3 minutes skin-down over direct heat to finish at 180-185F."
      }
    ],
    avoid: {
      m: "Pulling it at 165F because that's the number on the chart",
      why: "165F is a food-safety threshold, not a doneness target, and a thigh at 165F has done all of its water loss and none of its collagen conversion. The fibers have already contracted and expelled moisture, but the connective tissue sheets around them are still intact and elastic — that's the rubbery, slightly bouncy thigh people blame on the bird. It can't be walked back on the plate, because resting doesn't convert collagen; only sustained time above 170F does, and by then the meat is cooling. The same mistake in a different form is a covered pan or a crowded sheet tray: trapped steam holds the skin surface at 212F, water never leaves it, and skin that has been steamed will not crisp later — the dermal collagen has already gelatinized and gone slack, and there's nothing left to tighten."
    },
    buying: "Bone-in skin-on thighs run 5-7 oz each; boneless skinless are 3.5-4.5 oz, so budget two boneless per one bone-in for a portion. Ask for thighs rather than leg quarters unless you want the drumstick still attached. The skin should cover the whole top of the thigh and be unbroken — a torn skin flap shrinks back during cooking and leaves bare meat that dries out. Air-chilled birds have drier skin and brown noticeably better than water-chilled ones, which pick up water in the chiller tank. Check the label for 'contains up to X% solution': that's injected brine, it's already salted, and it will foam and steam in a pan instead of searing.",
    temps: "Safe at 165F. Right at 175-190F. Roasted bone-in: pull at 185F. Braised: 195F and up, meat letting go of the bone. Boneless in a pan: 175-180F.",
    faq: [
      {
        q: "Why are my chicken thighs rubbery?",
        a: "You almost certainly stopped at 165F. Collagen in dark meat doesn't begin converting to gelatin until about 160F and doesn't get far until 175-190F, so a thigh pulled at 165F has lost its water without gaining any softness in exchange. Put them back in and take them to 185F. It is very hard to overcook a thigh the way you can overcook a breast."
      },
      {
        q: "Bone-in or boneless chicken thighs?",
        a: "Bone-in skin-on for anything roasted, grilled, or braised: the bone slows heat transfer near the center, the skin renders and shields the top, and the joint gives up gelatin into the pan. Boneless for anything that gets cut up and stirred — curry, stir-fry, tacos, rice dishes — where you want 12-15 minutes instead of 35-40 and the skin would go soft in the sauce anyway. Boneless thighs cook roughly twice as fast, so don't reuse a bone-in recipe's timing."
      },
      {
        q: "Can I use chicken thighs instead of chicken breast?",
        a: "In anything cooked wet or cooked long, yes, and it will hold up better. Thighs survive stews, braises, and slow cookers where breast goes stringy, because they have fat and gelatin filling in for the water that's lost. Going the other direction is where people get burned: breast dropped into a recipe written for thighs will be past its point of no return by the time the recipe says it's done, so cut the time and pull at 150-155F."
      },
      {
        q: "Why won't my chicken thigh skin get crispy?",
        a: "Wet skin, a crowded pan, or not enough time in contact with heat — usually all three. Salt the skin and leave it uncovered in the fridge at least 40 minutes, overnight if you can, because the surface has to drop below roughly 30% moisture before it can crisp. Give each piece an inch of clearance so steam escapes rather than sitting on top of the pan. And skin-down in a pan takes a full 10-12 minutes on medium heat; if you flip at 4 minutes, the fat under the skin hasn't rendered yet."
      }
    ]
  },

  {
    slug: "chicken-breast",
    name: "Chicken Breast",
    animal: "chicken",
    shelf: "chicken",
    aka: ["boneless skinless breast", "split breast", "airline breast", "supreme", "chicken tenderloin"],
    match: ["chicken breast", "chicken breasts"],
    dek: "The pectoralis major, one on each side of the keel bone. There's no fat to melt and no collagen to turn to gelatin, so the only thing you control is how much water the muscle keeps. That makes it the least forgiving cut on the bird and the one where a thermometer matters most.",
    anatomy: "The breast sits high on the sternum and is the muscle a chicken uses to flap — a few seconds of hard work to clear a fence, then it's done. That's fast-twitch glycolytic muscle: it runs on stored glycogen rather than oxygen, so it carries very little myoglobin, which is why it's white, and it stores almost no fat inside the fibers. It also does no postural work, so there's barely any connective tissue in it — no seams worth speaking of, one grain running head to tail, and a separate strip underneath (the pectoralis minor, sold as the tender). Modern broiler breasts are much larger than they were a few decades ago: 8-12 oz each, 1.5 to 2 inches thick at the wide end and tapering under half an inch at the point. That wedge shape, not the cook's attention span, is what causes most dry chicken.",
    science: "With no fat and no collagen, the entire outcome is water retention. Myosin denatures around 120-140F, which is when the meat firms up and goes opaque; actin denatures around 150-163F, and when actin goes the fiber contracts hard and wrings water out. That's the cliff, and it's one-way. A breast taken to 150F loses on the order of 12-15% of its weight; taken to 170F it loses 20-25%, roughly an extra ounce per breast, and that water is on the pan, not in the meat. Pasteurization is time at a temperature rather than one number: a 7-log Salmonella reduction takes an instant at 165F, about 45 seconds at 155F, about 3 minutes at 150F, and roughly 9 minutes at 145F. Holding a breast at 150-155F for a minute or two is as safe as hitting 165F and keeps the water.",
    methods: [
      {
        m: "Make it one thickness, then sear hard",
        why: "The wedge is the problem, so remove the wedge — a uniform slab reaches its target everywhere at once instead of overcooking the thin end while you wait on the thick one.",
        how: "Butterfly it or pound it between two sheets of plastic to an even half inch, dry the surface, salt it, then 2-3 minutes per side in a pan around 400F. Pull at 150F."
      },
      {
        m: "Dry-brine, then low oven and a finishing sear",
        why: "Salt dissolves myofibrillar proteins so they hold more water under heat, and a gentle oven narrows the gap between surface and center so less of the outside overshoots.",
        how: "Salt at 0.75-1% of the meat's weight (about 1 tsp Diamond kosher per pound), uncovered in the fridge 4-24 hours, no rinse. 275-300F oven to 145F internal — 20-30 minutes for a 10 oz breast — then 60-90 seconds a side in a hot pan. Final 150-155F."
      },
      {
        m: "Poach at 150-155F",
        why: "Water held below the top of actin's denaturation range cannot push the meat past that range no matter how long it sits, so the doneness stops being a timing problem.",
        how: "Hold the water at 150-155F with a thermometer and low heat, 45-60 minutes for whole breasts. Sear afterward if you want color, or shred straight out of the pot."
      },
      {
        m: "Roast bone-in, skin-on (split breast)",
        why: "The rib bones slow heat into the underside and the skin shields and bastes the top, so the same muscle cooks more evenly than it does naked.",
        how: "425F, skin up, 30-35 minutes for a 12-14 oz split breast, pulled at 155F at the thickest point clear of the bone. Rest 8-10 minutes."
      }
    ],
    avoid: {
      m: "Grilling a whole thick breast over direct high heat",
      why: "The breast is a wedge, so over a 600F fire the thin end sails past 165F before the thick end reaches 140F, and the outer quarter inch of the entire piece runs past 180F and turns to chalk. The damage is water expelled by denatured actin, and it is permanent — a contracted muscle fiber does not reabsorb the liquid it squeezed out. Sauce, gravy, resting, and slicing thin all operate on the surface; none of them put water back inside the meat, they just make the dryness easier to swallow. The same unrecoverable mistake in another costume is boiling breast for shredded chicken: 212F water drives the interior well past 175F, and what you pull out is dry threads that only seem moist because they're sitting in liquid. If you want shredded breast, hold the water at 150-155F instead and it will pull apart just as easily."
    },
    buying: "Boneless skinless breasts commonly run 8-12 oz, which is too big to cook evenly — buy them and butterfly, or ask for split breasts (bone-in, skin-on), which are the same muscle left on the ribs and cook far more forgivingly. Air-chilled birds carry less added water and brown better. Look hard at the surface: meat that feels firm and ridged, with pale stripes of fat running with the grain, is woody breast and white striping, growth-related defects in fast-grown broilers where fibrous tissue has replaced muscle. That meat stays chewy no matter how it's cooked, and no technique fixes it. Check for 'contains up to X% solution' on the label — that's injected brine, and it steams before it sears.",
    temps: "Pull at 150-155F and let it coast 3-5F. 145F is safe if it's held there about 9 minutes, which a water bath can do and a hot pan cannot. 165F is instantly safe and costs roughly 10% of the weight in water.",
    faq: [
      {
        q: "Why is my chicken breast always dry?",
        a: "Because it went past about 160F. Breast has almost no intramuscular fat and almost no collagen, so there's nothing to compensate when actin denatures and the fibers squeeze water out. Cook to 150-155F and check with an instant-read at the thickest point, not by time or by cutting into it. If it's still coming out dry at that temperature, the piece is uneven — butterfly it flat before it goes near heat."
      },
      {
        q: "Do you really have to cook chicken to 165F?",
        a: "165F is the instant-kill number, but pasteurization is a curve of time against temperature, not a single point. The same 7-log Salmonella reduction happens in about 45 seconds at 155F, about 3 minutes at 150F, and roughly 9 minutes at 145F. A breast that reaches 155F and rests for a couple of minutes has been pasteurized. The catch is that you need a real thermometer and you need to know the meat stays there, which is why 165F is the number given to the general public."
      },
      {
        q: "Should I brine chicken breast, and for how long?",
        a: "Yes, and dry-brining is simpler than wet. Use 0.75-1% salt by weight — about 1 teaspoon of Diamond Crystal kosher per pound — rub it on, and leave it uncovered in the fridge anywhere from 4 to 24 hours. Salt dissolves the myofibrillar proteins so they hold onto more water when they contract, cutting cooking losses by several percent, and it seasons the interior instead of just the surface. A wet brine at 5-6% salt for 30-60 minutes does much the same thing but leaves the surface wet, which costs you browning."
      },
      {
        q: "Chicken breast or chicken thigh for grilling?",
        a: "Thigh, unless you're pounding the breast flat first. A grill runs 500-700F at the grate, which is a huge gap between surface and center, and breast has a 5-degree window between done and ruined. Thigh has fat and collagen that keep improving up to 185F, so the same fire that destroys breast is doing something useful to thigh. If you want breast on a grill, butterfly it to half an inch, use a two-zone setup, and pull it at 150F."
      }
    ]
  },

  {
    slug: "whole-chicken",
    name: "Whole Chicken",
    animal: "chicken",
    shelf: "chicken",
    aka: ["roaster", "broiler-fryer", "roasting chicken", "fryer"],
    match: ["whole chicken", "roasting chicken", "roaster chicken", "broiler chicken"],
    dek: "One animal carrying two kinds of muscle with doneness targets 25-30F apart. Breast is finished at 155F, thigh isn't finished until 175F or better, and in a normal roasting position the breast is the part closest to the heat. Every technique for roasting a whole bird is some way of dealing with that.",
    anatomy: "A supermarket bird is a broiler slaughtered at 7-9 weeks, 3.5-5 lb dressed, bred so the breast is the largest single thing on it — around a quarter of the carcass weight. That breast sits high on the keel, exposed, fast-twitch and nearly fatless. The legs hang low and to the sides, dark and worked, with the heaviest connective tissue at the hip and knee. Set the bird breast-up in an oven and the muscle that needs the least heat is the highest point in the box while the muscles that need the most are shielded by the body cavity. Over all of it is skin, roughly 40% fat over a collagen dermis, and skin is the one component that wants hard, dry, sustained heat from the start.",
    science: "Three clocks run at once and they don't agree. The breast passes its point of no return at 155-160F, when actin denatures and the fibers expel water. The thigh needs 175-190F sustained long enough for collagen to convert to gelatin, and at 165F that conversion has barely started. The skin needs its surface water driven off and its fat rendered, which requires surface temperatures well over 212F — a low, gentle oven is the enemy of skin. Carryover in a 4 lb bird runs 5-10F after it leaves the oven, so the breast comes out at 150-155F. The two fixes that actually work are both geometric: spatchcocking (cut out the backbone, press the bird flat) moves the legs to the hot outer edge and drops the breast into the shielded middle, and it cuts roast time from 60-75 minutes to 40-45; starting breast-down uses the bird's own body as a shield until the legs catch up.",
    methods: [
      {
        m: "Spatchcock and roast hot",
        why: "Flattening puts the legs at the outside where heat is highest and the breast in the middle where it's lowest, which is the only move that reverses the built-in geometry instead of compensating for it.",
        how: "Kitchen shears down both sides of the backbone, press the breastbone flat, skin up on a rack over a rimmed sheet. 450F, 40-45 minutes for a 4 lb bird. Breast 155F, thigh 175F+ at the joint."
      },
      {
        m: "Butcher it into eight pieces and cook the parts separately",
        why: "The two-temperature problem disappears entirely if the two kinds of meat aren't attached to each other — legs get their long time at 185F and breasts come out at 155F.",
        how: "Two breasts, two thighs, two drumsticks, two wings. Legs and wings in at 425F for 35-40 minutes; breasts join for the last 25. The back and neck go straight into a stockpot."
      },
      {
        m: "Roast breast-down, then flip",
        why: "For the first two-thirds the breast is shielded by the body and sitting in the cooler bottom of the pan while the legs take the direct heat, so the gap narrows before the skin gets its turn.",
        how: "425F breast-down for 30 minutes, flip with wads of paper towel, 25-30 minutes more skin-up. Breast 150-155F, thigh 175F."
      },
      {
        m: "Dry-brine 12-24 hours first, whichever way you roast",
        why: "Salt dissolves myofibrillar proteins so the meat holds more water under heat, and open air in the fridge pulls moisture out of the skin, which is the prerequisite for crisping.",
        how: "0.75-1% salt by weight, about 1 tsp Diamond Crystal kosher per pound, inside and out. Uncovered on a rack in the fridge 12-24 hours. Do not rinse it off."
      }
    ],
    avoid: {
      m: "Stuffing the cavity",
      why: "Stuffing is a heat sink packed into the coldest, slowest part of the bird, and because it's soaking in raw poultry juices it has to reach 165F itself. By the time a cavity full of bread gets there, the breast walls around it are 175-185F and the outer half inch is well past that — you've traded the entire breast for the stuffing. The loss is water expelled by denatured actin, so it doesn't come back with gravy or resting or slicing thin. Stuffing also blocks air from moving through the cavity, so the inside of the breast has to cook by conduction from the outside in, which is the slowest heat path available and widens the gap further. Bake the dressing separately with stock and some pan drippings and you get the same result without spending the bird on it."
    },
    buying: "3.5-4.5 lb is the size that cooks evenly; past 5 lb the mass gap between breast and leg widens and the breast overcooks worse no matter what you do. Air-chilled birds have drier skin and crisp better than water-chilled ones, which absorb water in the chiller tank — the label states retained water percentage. Watch for 'contains up to X% solution', which is injected brine; that bird is pre-salted and will steam. Skin should be unbroken over the breast with no dried or gray patches, and the legs should still move at the hip. Take the giblets and neck home: the neck and back are the two most gelatinous parts of the animal and they're what makes stock set. Figure about 1 lb of raw bird per person for a meal with leftovers.",
    temps: "Breast 150-155F when it comes out, coasting to 157-160F. Thigh 175-185F measured at the thickest part beside the joint without touching bone. Rest 15-20 minutes before carving. If the thigh hits 175F while the breast is already at 165F, the bird is still worth eating but you left about an ounce of water per side in the pan.",
    faq: [
      {
        q: "How long does it take to roast a whole chicken?",
        a: "A 4 lb bird at 425F takes 60-70 minutes breast-up, or 40-45 minutes spatchcocked at 450F. Rough rule for a whole bird is 15-18 minutes per pound at 425F, but weight is a poor predictor because shape drives heat transfer more than mass does. Use a thermometer: 150-155F in the breast and 175F+ in the thigh, and start checking 15 minutes before you think it's due."
      },
      {
        q: "Why isn't my chicken skin crispy?",
        a: "Skin is about 40% fat over a water-heavy collagen layer, and it can't crisp until that water is gone and the fat has rendered out. That takes surface temperatures well above the boiling point, which means a hot oven — 425-450F — and dry skin going in. Salt it and leave it uncovered in the fridge overnight, don't cover the pan, don't baste with liquid, and don't crowd anything else onto the sheet. If the bird was water-chilled or brine-injected there's extra water to drive off before you get anywhere."
      },
      {
        q: "Is spatchcocking actually better than roasting a chicken whole?",
        a: "For evenness and for time, yes, and by a wide margin. Flattening the bird puts the legs at the outer edge of the pan where the heat is strongest and the breast in the middle where it's weakest, which is the reverse of how a whole bird sits, and it drops the roast from 60-75 minutes to about 40-45. All the skin also ends up in one plane facing the heat, so it browns evenly instead of shielding the underside. What you give up is the presentation of an intact bird, and the cavity space you'd have used for aromatics."
      },
      {
        q: "Should I truss a chicken before roasting?",
        a: "Truss loosely or not at all. Pulling the legs tight against the body insulates the hip joint, which is the part of the bird that needs the most heat and takes the longest to get there — so a tight truss makes the breast wait even longer and overcook further. Trussing exists mainly to keep the bird compact and photogenic and to stop the wing tips burning. If you want the wings safe, tuck the tips behind the shoulders and leave the legs open."
      }
    ]
  },

  {
    slug: "lamb-shoulder",
    name: "Lamb Shoulder",
    animal: "lamb",
    shelf: "lamb",
    aka: ["square-cut shoulder", "shoulder roast", "blade chop", "arm chop", "lamb shoulder chops", "boneless rolled shoulder"],
    match: ["lamb shoulder", "shoulder of lamb"],
    dek: "The front quarter — shoulder blade, upper arm bone, and half a dozen muscles pulling in different directions with sheets of connective tissue between them. It's the collagen cut of the lamb, so it has no useful medium-rare. Take it to 195-205F and let it fall apart, or cook it thin and fast and accept the chew.",
    anatomy: "The foreleg carries the front of the animal, and unlike the hind leg, which drives, it's a weight-bearing column that gets loaded on every step and has to swing forward too. Sheep have no collarbone — the shoulder blade floats, held to the ribcage by muscle — so the whole assembly is under continuous low-grade tension, and continuous tension builds connective tissue. What you get is a stack of small muscles with different jobs (triceps brachii, infraspinatus, supraspinatus, subscapularis), each in its own collagen wrapper, separated by fat seams. The grain changes direction three or four times across a single shoulder roast, which is why you can't reliably slice it against the grain and why it's almost always pulled or cut into chunks instead.",
    science: "Collagen and lamb fat run this cut. Collagen begins to shrink near 140F — it contracts toward a third of its length and wrings water out of the muscle around it — and only converts to gelatin at 160-180F held for hours; a shoulder needs roughly 3-4 hours at 300F or 6-8 hours at 250F, ending somewhere around 195-205F, before a probe slides in without resistance. Lamb fat melts higher than beef or pork fat, around 104-120F, and it carries the branched-chain fatty acids (4-methyloctanoic and 4-methylnonanoic acid) that produce the specific smell people call lamby — those accumulate with the animal's age, which is why mutton reads far stronger than a six-month lamb. Because that fat sets near body temperature, lamb shoulder turns waxy on the tongue as it cools, so it goes out hot on warm plates or not at all.",
    methods: [
      {
        m: "Slow roast, uncovered",
        why: "Hours in the 275-300F range hold the interior in the collagen conversion window long enough to dissolve every seam, while dry air builds a crust the way a braise never can.",
        how: "Fat cap up on a rack, 275-300F, 4-5 hours for a 4-5 lb bone-in shoulder, to about 200F and probe-tender. A splash of water in the pan below stops the drippings burning. Last 20 minutes at 425F to firm the outside, then rest 30 minutes."
      },
      {
        m: "Braise",
        why: "A covered pot pins the meat at 190-200F regardless of oven swings, and the gelatin that leaves the seams ends up in the liquid where you can serve it.",
        how: "Brown the pieces hard, liquid a third of the way up (never covering the meat), 300-325F covered, 3-3.5 hours. Done when a fork twists with no resistance, not at a clock time. Cool in the liquid if you're making it a day ahead."
      },
      {
        m: "Smoke",
        why: "Same collagen conversion as a slow roast, with the added surface chemistry of smoke on a cut that has enough fat and connective tissue to take 8 hours without drying.",
        how: "250F to about 165F internal (4-5 hours), wrap in foil or butcher paper, back on until 200-205F and probe-tender. Roughly 7-9 hours total for a 5 lb bone-in shoulder. Rest an hour wrapped."
      },
      {
        m: "Grind or cube it",
        why: "Shoulder runs about 20-25% fat, which is the right ratio for kofta, merguez, and lamb burgers, and the fat seams that make it a bad roasting cut make it a good grinding cut.",
        how: "Grind everything cold, meat and grinder parts near freezing, through a 3/16 or 1/4 inch plate. For kebabs, cut 1 to 1.25 inch cubes, trim off the thick silverskin seams because they won't have time to convert, and cook fast to 135-140F."
      }
    ],
    avoid: {
      m: "Cooking it to medium-rare like a loin chop",
      why: "130-140F is the worst place on the curve for this cut. The collagen sheets wrapping every one of those small muscles have already contracted and squeezed water out of the fibers, but nothing has converted to gelatin — conversion needs 160-180F sustained for hours, not minutes. What you get is tough and dry at the same time, which sounds like a contradiction and isn't: it's wrung-out meat inside intact rubber bands. There is no rescue. You can't take a rested, sliced, medium-rare shoulder and cook it back to tenderness in any reasonable time, and reheating it after it has cooled just drives out whatever water is left. Shoulder has exactly two working doneness windows and medium-rare is not one of them. The same error at the other end is pulling a slow roast at 180F because the outside looks done — the surface is finished, the seams aren't, and it will slice into dry slabs instead of shredding."
    },
    buying: "Bone-in square-cut shoulder runs 4-6 lb and feeds 6-8; boneless rolled and tied is 3-4 lb, cooks maybe 45 minutes faster, and gives up the gelatin the blade and arm bones would have contributed. Shoulder chops come two ways: blade chops, cut nearer the neck, with several muscles and a cross-section of the shoulder blade in them, and arm chops, with a round humerus bone and one larger eye of meat. Arm chops are the better one for a pan. Ask for chops 1 to 1.25 inches thick — anything thinner is past medium before the outside browns. Leave about a quarter inch of fat cap on a roast, and trim harder if you want it milder, since the branched-chain acids live in the fat. American lamb is larger and milder from grain finishing; Australian and New Zealand lamb is smaller, grass-finished, and reads stronger. Meat should be firm and pinkish-red; dark purple-red meat with coarse grain and yellow fat is an older animal and will taste like one.",
    temps: "Slow roast or braise: 195-205F, with the probe sliding in like it's going into room-temperature butter. That resistance test beats the number, and some shoulders don't give up until 210F. Chops cooked fast: 135-140F, sliced thin, chew expected. Nothing between 145F and 190F is worth serving.",
    faq: [
      {
        q: "Lamb shoulder or leg of lamb — which one should I roast?",
        a: "They're opposite cuts and they want opposite treatment. The leg is a driving muscle with a fairly uniform grain and much less connective tissue for its size, so it works roasted to 130-135F and carved into slices. The shoulder has far more collagen, more fat, and seams running in several directions, so it wants low and long to about 200F and it comes apart in shreds rather than slices. Cook a leg like a roast and a shoulder like pork butt; swap the temperatures and you'll ruin both."
      },
      {
        q: "Why is my lamb shoulder tough?",
        a: "Almost always undercooked, not overcooked. Collagen conversion is a function of both time and temperature, and if the roast came out at 175-185F, the exterior was done but the connective tissue between the muscles never dissolved. Put it back, covered or wrapped, and push it to 195-205F, checking with a probe rather than a clock — when it's ready, a skewer goes in with no resistance anywhere you test. That can be another hour or more, and it will not hurt the meat."
      },
      {
        q: "Can you grill lamb shoulder chops like loin chops?",
        a: "You can, but know what you're buying. A shoulder chop has connective tissue seams running through it that a loin chop doesn't, so grilled to medium-rare it will be noticeably chewier around those seams. Get them cut at least 1 inch thick, salt them an hour ahead, sear hard over direct heat, and pull at 135-140F, then slice thin across whatever grain you can identify — thin slicing shortens the fibers mechanically and does some of the work the heat didn't. If you want them tender instead, braise them for 90 minutes at 325F."
      },
      {
        q: "How do I make lamb taste less gamey?",
        a: "The compounds responsible — mainly 4-methyloctanoic and 4-methylnonanoic acid — live in the fat, not the lean, so trimming the external fat cap harder is the single most effective move. Beyond that: buy younger lamb (a 5-7 month animal is much milder than mutton), and grain-finished American lamb reads milder than grass-finished imports. Serve it hot, because lamb fat sets around 104-120F and congealing fat is what most people are actually reacting to. Salt, acid, and long cooking all reduce the perception too — a shoulder taken to 200F over five hours tastes far less strong than the same meat at medium-rare."
      }
    ]
  }

];
