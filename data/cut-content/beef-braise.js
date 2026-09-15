module.exports = [
  {
    slug: "chuck",
    name: "Beef Chuck",
    animal: "beef",
    shelf: "beef",
    aka: ["chuck roast", "7-bone roast", "shoulder clod", "chuck eye roll", "blade roast", "pot roast"],
    match: ["chuck"],
    dek: "Chuck is the shoulder and neck — a dozen-plus hard-working muscles separated by sheets of connective tissue. That connective tissue is the entire story: cooked fast it's rubber, held between 160 and 190°F for a few hours it becomes gelatin. Chuck is a cut you commit hours to, or don't buy.",
    anatomy: "Chuck runs from the neck back through the shoulder blade to about the fifth rib, and includes the arm. Cattle carry roughly 60% of their weight on the front end and have no collarbone, so the whole forequarter hangs in a sling of muscle between the shoulder blades — the chuck is holding the animal up every second it's standing, and driving it forward every step it takes. Muscle that works like that builds thick perimysium, the collagen sheath wrapped around every bundle of fibers, and stores fat inside the muscle as fuel. It's also not one muscle: infraspinatus (flat iron), serratus ventralis (under-blade, where Denver steaks come from), triceps, supraspinatus (mock tender), and the front end of the longissimus, which is the same muscle that becomes ribeye two ribs back. They run in different directions and are divided by seams, which is why a chuck roast has no single grain to slice against.",
    science: "Collagen and intramuscular fat, in quantity. The fibers start losing water early — myosin denatures around 105-125°F, actin around 150-160°F, and by 170°F the fibers have wrung out most of what they hold. Collagen has no magic temperature; it has a rate. It begins unwinding around 140°F and converts to gelatin fastest between roughly 160 and 190°F, and that conversion is a function of time at temperature measured in hours, not minutes. Chuck eats moist at 200°F, when it is technically drier than a well-done steak, because dissolved gelatin and rendered fat coat the fibers and register as moisture in the mouth. Take away the collagen and the same treatment produces sawdust — which is exactly what happens to round.",
    methods: [
      {
        m: "Braise",
        why: "Wet heat parks the meat in the 160-190°F band for hours without letting the surface dry out, which is the only condition under which collagen converts to gelatin instead of just shrinking.",
        how: "Brown hard first, then a 275-325°F oven with liquid a third to halfway up the meat and the lid on. Figure 3-3.5 hours for a 3-4 lb roast, longer at the low end of that oven range. Done when a fork twists in the meat with no resistance — usually 200-205°F internal. Chill it overnight in the liquid and lift the solid fat cap off before reheating."
      },
      {
        m: "Smoke",
        why: "Same collagen conversion as a braise, but the moisture comes from inside the meat while the exterior builds bark. Chuck has enough intramuscular fat to survive 7-8 hours of dry heat, which lean cuts do not.",
        how: "225-275°F, unwrapped until the color is set — about 165°F internal, 4-5 hours. Then wrap in foil with a splash of liquid and run to 200-205°F, another 2-3 hours. Rest an hour. It shreds; it won't slice."
      },
      {
        m: "Grind",
        why: "Grinding severs the connective tissue mechanically instead of dissolving it, so you get chuck's fat ratio and flavor in eight minutes instead of four hours.",
        how: "Chuck grinds to about 80/20 fat by weight with no added trim, which is why it's the default burger. Keep the meat, the auger and the plate at 32-35°F so the fat shears clean instead of smearing into paste. Cook store-ground beef to 160°F — grinding spreads surface bacteria through the whole patty. If you ground whole-muscle chuck yourself that day, 130-135°F is the medium-rare target."
      },
      {
        m: "Long-hold sous vide",
        why: "Time substitutes for temperature. Collagen still converts at 135-145°F, just very slowly, so a long hold gets you tenderness at steak doneness instead of pot-roast doneness.",
        how: "Chuck eye or flat iron, 133-140°F for 24-48 hours, then straight into an ice bath and a hard, fast sear in a smoking pan. Under 24 hours at that temperature the collagen hasn't moved and you've made a warm, tough steak."
      }
    ],
    avoid: {
      m: "Cooking it to the middle — a chuck steak grilled to medium-well, or a roast pulled at 160-170°F",
      why: "There are two places chuck works and nowhere in between. Quick and rare, under about 130°F, where the fibers still hold their water and you're chewing through intact collagen. Or long and hot, hours above 160°F, where the collagen is gone and the fibers no longer matter. The middle gets you both failures at once: by 160-170°F the muscle fibers have already squeezed out their water, but the collagen has had nowhere near the hours it needs to convert. That's meat that is dry and rubbery simultaneously. Resting won't fix it, because resting doesn't convert collagen — nothing converts collagen except time above 160°F. Your only move is to put it back in liquid for another two hours, and by then the fibers are so far gone it comes out stringy rather than tender."
    },
    buying: "For braising ask for a whole chuck roast — bone-in 7-bone or boneless chuck eye roll, 3-4 lb, which feeds six. Skip pre-cut 'stew meat': it's trim from wherever the counter had trim that day, so the pieces are different muscles that finish at different times. Buy the roast and cut your own 1.5-2 inch cubes; anything smaller falls apart before the collagen is done. What you want to see is fat inside the muscle and white seams running through the roast, not just a fat cap on the outside — those seams are the connective tissue that turns into gelatin, and a roast without them was cut too far toward the rib. Choice is plenty here. Prime is money spent on marbling a braise doesn't need. For burgers ask for chuck ground coarse, 80/20, ground that morning.",
    temps: "Braised or smoked: 200-210°F internal, though the number is only a proxy — the real cue is a probe or fork sliding in with zero drag. Long-hold sous vide steak-style: 133-140°F for 24-48 hours. Ground chuck patties: 160°F for store-ground, 130-135°F only for whole-muscle you ground yourself that day.",
    faq: [
      {
        q: "Why is chuck better for stew than sirloin?",
        a: "Chuck has several times the connective tissue, and the connective tissue is the point. Over three hours it hydrolyzes into gelatin, which thickens the liquid and coats the fibers so they read as moist. Sirloin is a lean back muscle with very little collagen, so after three hours it has nothing to give the pot and nothing protecting itself — the fibers dry out and it goes stringy. Lean cuts don't get tender with time. They just get drier."
      },
      {
        q: "Do I have to sear chuck before braising it?",
        a: "It won't make the meat more tender and it doesn't 'seal in juices' — that idea's been dead for over a century. What searing does is run the Maillard reaction across the surface, producing hundreds of roasted compounds you can't generate any other way, and those dissolve into the braising liquid. Dry the meat with paper towels first, get the pan smoking, don't crowd it, give each face 2-3 minutes. Then deglaze, because half of what you're after is stuck to the pan."
      },
      {
        q: "Why is my pot roast still tough after 3 hours?",
        a: "Almost always because it isn't done. Undercooked collagen and overcooked meat feel nothing alike, and 'tough at three hours' usually means it needs another 45-90 minutes, especially in an oven under 300°F. Check with a fork, not a clock. The other common cause is a roast that never got hot enough — a slow cooker on low can idle around 190°F, where conversion crawls. If instead it's shredding apart but eats dry and cottony, you went past it, and more time makes that worse, not better."
      },
      {
        q: "Can you cook chuck as a steak?",
        a: "Two of them, if you ask by name. The flat iron (infraspinatus) is the second-most tender muscle on the animal once the tough seam running down its center is cut out — grill it to 130°F and slice thin against the grain. The chuck eye is the front end of the same muscle that becomes ribeye, off ribs 1-5, and eats close to one for a third of the price. Everything else in the chuck — arm steak, blade steak, generic 'chuck steak' — has connective tissue running crosswise through it and needs the long treatment."
      }
    ]
  },

  {
    slug: "brisket",
    name: "Beef Brisket",
    animal: "beef",
    shelf: "beef",
    aka: ["packer brisket", "brisket flat", "first cut", "brisket point", "deckle", "corned beef", "pastrami"],
    match: ["brisket", "corned beef"],
    dek: "Brisket is the chest: the two pectoral muscles holding up the front of an animal that has no collarbone. It carries more cross-linked collagen per pound than anything else you'll cook, which is why it's either the most tender thing on the table or shoe leather, with very little in between. The entire job is keeping it above 175°F long enough.",
    anatomy: "It sits low on the chest between and slightly ahead of the front legs. Cattle have no clavicle — the ribcage hangs in a sling of muscle between the two shoulder blades, and the brisket takes the standing load plus the shock every time a 1,300-pound animal puts a foot down. A whole packer brisket is two muscles stacked with a fat seam between them. The flat (pectoralis profundus, the deep pectoral) is the lean, even slab, and its grain runs one direction end to end. The point (pectoralis superficialis, often called the deckle) sits on the thick end, carries roughly twice the intramuscular fat, and its grain runs about 90 degrees off the flat's. That angle is the whole reason you separate the two before slicing.",
    science: "Brisket collagen isn't just abundant, it's heavily cross-linked — the covalent bonds between collagen strands accumulate with muscle use and with the animal's age, and these muscles never rest. Cross-linked collagen needs more heat and more time than the collagen in chuck. The fibers finish surrendering their water by about 170°F; everything you get back after that is gelatin, and meaningful conversion runs from roughly 175°F to 205°F over hours. The stall — internal temperature parking at 150-170°F for two to five hours — is evaporative cooling, moisture wicking to the surface and evaporating as fast as the cooker delivers heat. It's not a malfunction, it's a wet-bulb thermometer, and it happens to sit exactly in the range where nothing useful has finished yet.",
    methods: [
      {
        m: "Smoke",
        why: "Dry heat at 225-275°F walks the meat through the collagen conversion window over 10-16 hours while building bark, and the fat cap plus the point's marbling render down through the flat as insurance.",
        how: "Trim the cap to 1/4 inch, salt and coarse black pepper. Run 250°F, figure 1 to 1.5 hours per pound. Push through the stall with a butcher-paper wrap once the color is where you want it, usually 165-175°F. Pull when a probe slides into the thickest part of the flat with no resistance — typically 200-205°F, sometimes 210°F. Rest an hour minimum; four hours held at 140-150°F is better. Separate point from flat, then slice each against its own grain at about 1/4 inch."
      },
      {
        m: "Braise",
        why: "Liquid holds the whole muscle in the conversion range evenly with no risk of the surface drying, which protects the flat — the exact part that fails on a smoker.",
        how: "Flat, fat side up, covered pan, liquid a third of the way up, 300-325°F, roughly 1 hour per pound: a 5 lb flat runs 4.5-5.5 hours. Done when a fork twists free. Chill it whole in its liquid overnight, slice it cold against the grain, then reheat the slices in the strained liquid. Hot brisket shreds under the knife; cold brisket slices clean."
      },
      {
        m: "Cure, then simmer or steam",
        why: "Salt and nitrite shift the protein chemistry so the meat holds water through a long cook, which is what lets a lean flat with no fat cap survive hours in a pot.",
        how: "Brine 5-7 days at 38°F with salt, sugar and curing salt #1, turning daily. For corned beef, simmer at 180-190°F for 3-3.5 hours — never a rolling boil, which agitates the meat apart and clouds the liquid. For pastrami, rinse and soak 4-6 hours to pull salt back, coat heavily in cracked pepper and coriander, smoke to 165°F, then steam to 203°F."
      }
    ],
    avoid: {
      m: "Pulling it at 185-190°F because that's already 'well past done'",
      why: "Brisket has no done temperature. It has a rate of collagen conversion, and 190°F is roughly the point where the muscle fibers have finished wringing out their water while the cross-linked collagen has barely started to break down. The meat is already as dry as it will ever get, and none of the gelatin that compensates for that dryness exists yet. It comes out dry and tough at the same time, which is a specific and miserable texture. Nothing after the fact recovers it: resting does not convert collagen, and slicing commits you. If you catch it before it hits the board you can wrap it, put it back on with a splash of liquid, and take it to probe-tender. Once it's sliced, the only honest move left is chopping it and adding sauce."
    },
    buying: "A whole packer runs 12-18 lb untrimmed and includes both muscles — buy it that way for smoking, because the point shields the flat. If the counter only stocks 'first cut' or 'flat cut', check the thin end: it should still be about 1 inch thick. A flat that tapers to half an inch turns to jerky at that end no matter what you do. Pick the packer up by the middle. A good one drapes and folds over your hand; one that stays board-stiff came off an older, harder-worked animal and will fight you for hours. Grade matters more here than on most braising cuts because the flat is lean and has to survive twelve hours — Choice is the floor, and Prime buys real insurance in the form of intramuscular fat. Leave 1/4 inch of fat cap on, and trim the hard waxy deckle fat between the two muscles down but not out.",
    temps: "Smoked: probe-tender, typically 200-205°F in the thickest part of the flat, occasionally 210°F. Braised: fork-tender, roughly 200-205°F. Corned beef: meat to 195-205°F with the water held at 180-190°F. Rest smoked brisket one hour minimum; holding at 140-150°F for up to four hours beats slicing early every time.",
    faq: [
      {
        q: "Why is my brisket tough?",
        a: "Nine times out of ten it wasn't cooked long enough. Tough and wet means the collagen never converted — put it back on, it's salvageable. Tough and dry with a stringy pull means you ran it too hot and the fibers dried before the collagen had time; that one is finished. The third cause has nothing to do with the cook: slicing with the grain leaves inch-long fibers in every bite and eats tough even from a perfect brisket. Remember the point's grain sits about 90 degrees off the flat's, so separate them and slice each on its own."
      },
      {
        q: "Should I wrap my brisket, and in foil or butcher paper?",
        a: "Wrapping shortens the stall and stops moisture loss, at a cost to bark. Butcher paper breathes, so the bark stays firm and you give up maybe an hour or two of stall. Foil traps steam, cuts more time off, and softens the bark toward pot roast. Unwrapped gives the hardest bark and the longest cook and needs a cooker that holds humidity. Wrap when the color is where you want it — usually 165-175°F internal — not at a fixed time on the clock."
      },
      {
        q: "Point or flat — which one should I buy?",
        a: "The flat slices clean and looks like brisket, and it's lean enough to be unforgiving of a bad cook. The point has roughly twice the fat, is close to impossible to dry out, and is what burnt ends are made from, but it won't give you neat slices. If you want slices, buy a whole packer and use both. If you're chopping it or making burnt ends, buy the point on purpose and skip the anxiety."
      },
      {
        q: "Can I use chuck roast instead of brisket?",
        a: "For a braise or a chopped-beef sandwich, yes — chuck has the same collagen-heavy structure and gets there in three or four hours instead of twelve. For sliced barbecue, no. Chuck is a dozen muscles running in different directions with seams between them, so it pulls and shreds rather than slicing into intact strips. You'll end up with the texture of pulled beef, which is a fine thing, but it isn't brisket."
      }
    ]
  },

  {
    slug: "beef-shank",
    name: "Beef Shank",
    animal: "beef",
    shelf: "beef",
    aka: ["osso buco", "beef shin", "cross-cut shank", "foreshank", "hindshank", "soup bone"],
    match: ["beef shank", "osso buco", "osso bucco", "beef shin", "cross-cut shank"],
    dek: "Shank is the lower leg, sawed across the bone into rounds with the marrow left in. It has the highest ratio of connective tissue to muscle of anything on the animal, and it's the one cut where the bone is doing real work in the pot. Cook it in liquid long enough and the braising liquid sets to jelly in the fridge — that's the tell you got it right.",
    anatomy: "The foreshank sits below the shoulder around the radius and ulna; the hindshank sits below the round around the tibia. These are the flexors and extensors that swing the legs of a 1,300-pound animal and lock them rigid while it stands, and they're small, dense muscles wrapped in heavy fascia and tied to the bone by tendon. Almost everything about a shank is anchoring hardware rather than propulsion, which is why a cross-section shows so much white. Running through the middle is a marrow bone, and marrow is mostly fat that melts straight out into the liquid.",
    science: "Shank runs somewhere around 5-7% connective tissue by weight where a strip steak is under 1%, and the collagen dictates everything. Under fast dry heat those sheaths shrink and squeeze — collagen contracts sharply around 140°F, which is exactly what makes an unscored round cup up like a bowl on the grate. Held in liquid between 180 and 200°F for two to three hours, the same sheaths hydrolyze into gelatin dense enough to set the cooking liquid solid at refrigerator temperature and melt it again around 95-100°F, which is why it feels heavy in the mouth. The marrow renders out between about 130 and 150°F and adds fat and body. The muscle fibers are almost incidental here — they're the matrix the gelatin lives in.",
    methods: [
      {
        m: "Braise (osso buco style)",
        why: "Liquid keeps the meat in the 180-200°F band without the exterior drying, which is the only condition under which this much dense collagen converts in a reasonable number of hours.",
        how: "1.5-2 inch cross-cuts, 12-16 oz each, one per person. Score the band of connective tissue around the outside in three or four places or tie each round with butcher's twine, or it'll contract and buckle. Flour, brown hard, then 300-325°F with liquid halfway up and the lid on, 2.5-3.5 hours. Done when the meat has pulled back from the bone and a skewer meets nothing on the way in. Dig the marrow out with the handle end of a teaspoon."
      },
      {
        m: "Stock and long-simmered broth",
        why: "Same collagen, extracted rather than eaten. Dissolved gelatin gives broth a weight and clinging mouthfeel that no amount of reduction will fake.",
        how: "Bone-in rounds covered in cold water, brought up to 190°F and held there. Never boil — boiling churns rendered fat into an emulsion that clouds the broth permanently and no amount of skimming reverses it. 4-6 hours for full extraction; pull the meat at about 3 hours if you want it intact for slicing into pho. Chilled, it should set firm enough to hold a spoon standing up."
      },
      {
        m: "Pressure cook",
        why: "At 15 psi the liquid runs around 250°F, and collagen conversion accelerates several times over. Shank has so much collagen that the trade is worth taking even though the fibers pay for it.",
        how: "Brown first, then 45-55 minutes at high pressure with liquid a third of the way up, then a full natural release — a fast release boils the liquid inside the meat and tears it apart. Reduce the sauce afterward, since a sealed pot evaporates nothing and the liquid comes out thin."
      },
      {
        m: "Grind for ragù and chili",
        why: "Ground shank carries enough collagen that a two-hour simmer bodies the sauce up on its own, so you don't need starch or a roux to get it to cling.",
        how: "Boneless shank through a 3/8 inch plate, meat and grinder parts at 32-35°F. Brown in batches in a wide pan so it sears instead of steams, then simmer at least 2 hours in tomato or stock. It stays coarse and toothy where chuck grind goes soft."
      }
    ],
    avoid: {
      m: "Dry-roasting or grilling it",
      why: "Dry heat gives shank collagen two things it can't use: a surface that dehydrates and hardens, and not enough time in the 180-200°F band. In a 350°F dry oven the outer half inch case-hardens within about 40 minutes, and that hardened shell then slows heat transfer inward, so the core is still sitting at gristle temperature while the outside has already gone to sawdust. A grill is worse — the perimeter ring of connective tissue hits 140°F, contracts hard, and cups the whole round up off the grate so only the edges touch heat. You also can't back out of it afterward. A shank that has spent an hour drying in dry heat can absolutely be put into liquid and braised until the collagen converts, but the fibers have already given up their water and set, so what you get is mealy and cottony even once it's technically tender. The gelatin will be there. The meat won't."
    },
    buying: "Ask for center-cut cross sections, 1.5-2 inches thick, marrow bone intact and roughly centered — an off-center bone means the round came from the taper of the leg and there's less meat on it. One round per person, 12-16 oz. Hindshank rounds are larger with a wider marrow channel; foreshank rounds are smaller, carry more seams of connective tissue, and cost less, which for a braise is a straight advantage. The marrow should be pink to off-white and firm, not gray or crumbling at the edges. Leave the perimeter membrane on and score it rather than trimming it — it's what holds the round together while it cooks. If you want meat only, ask for boneless shank, sometimes labeled beef shin, and buy a couple of marrow bones alongside it to make up the gelatin.",
    temps: "There's no target temperature here that means anything on its own — cook to texture. A skewer or paring knife should go in and come out with zero drag, and the meat should be visibly retracting from the bone. That usually lands at 200-210°F internal after 2.5-3.5 hours. For broth, hold the water at 180-190°F and never let it break into a boil.",
    faq: [
      {
        q: "What's the difference between beef shank and osso buco?",
        a: "Osso buco is a dish — cross-cut veal or beef shank braised with wine, aromatics and usually tomato — and the name has migrated onto the cut itself. At a counter, asking for osso buco means shank sawed across the bone into 1.5-2 inch rounds. All osso buco is shank, but 'beef shank' can also mean a whole leg section or boneless shin, so specify cross-cut, bone in."
      },
      {
        q: "Can I use beef shank instead of chuck for stew?",
        a: "Yes, and the stew comes out with more body — shank has more collagen than chuck, so the liquid thickens on its own and you can skip the flour or cornstarch finish. Plan for two differences: shank needs about 30-45 minutes longer, and it yields less edible meat per pound because of the bone and the heavy trim. Buy roughly 1.5 times the weight you'd buy in chuck, and leave the bones in the pot until the end."
      },
      {
        q: "Why did my braising liquid turn to jelly in the fridge?",
        a: "Because it worked. That's collagen from the shank, converted to gelatin and dissolved in the liquid. It sets at refrigerator temperature and melts back around 95-100°F, which is body temperature range and exactly why it coats your mouth. A braise that stays watery when cold either started with a cut that had little connective tissue or never spent enough hours above 175°F."
      },
      {
        q: "Do I have to tie or score beef shank before braising?",
        a: "Yes, unless you're fine with broken rounds. There's a band of connective tissue and silverskin wrapping the outside of every cross-cut, and it shrinks harder and faster than the meat inside it — left alone it curls the round into a cup and pushes the marrow bone out of the center. Either cut through that band in three or four places around the perimeter or run a loop of butcher's twine around the outside. Snip the twine off before it goes to the table."
      }
    ]
  },

  {
    slug: "beef-ribs",
    name: "Beef Ribs (Short Rib & Back Rib)",
    animal: "beef",
    shelf: "beef",
    aka: ["short ribs", "plate ribs", "dino ribs", "flanken", "galbi", "back ribs", "English cut short ribs", "chuck short ribs"],
    match: ["short rib", "beef back rib", "beef ribs", "flanken", "galbi", "plate rib"],
    dek: "Two very different cuts get sold as beef ribs. Short ribs are the lower rib bones with a thick slab of muscle riding on top; back ribs are the upper half of ribs 6-12, the bones the ribeye was cut away from, so the only meat left on them is between the bones. Both want hours, but you buy them for opposite reasons — one for the meat, one for what's wedged between.",
    anatomy: "Short ribs come off the lower rib cage. Chuck short ribs are ribs 1-5, plate short ribs are ribs 6-9, and the meat sitting on those bones is mostly serratus ventralis — the big fan-shaped muscle that helps sling the ribcage between the shoulder blades — plus the intercostals underneath it. Back ribs are the top half of ribs 6-12 and they're a byproduct: the ribeye is the most valuable muscle on that section, so the butcher strips it off the bones and the rack goes out with whatever survived the knife. That means back rib meat is intercostal — the small muscles between each pair of ribs that pull the ribcage open with every breath the animal ever took. Constant, low-load work: fine fibers, dense connective tissue, strong flavor, and not much volume.",
    science: "Short rib meat runs 25-30% fat and it's laminated — sheets of muscle stacked with sheets of collagen and fat between them. That structure is why it can go to 205°F and stay moist: as the collagen between layers dissolves, the layers separate and rendered fat sits in the gaps. Intercostal meat on back ribs is leaner and denser but thin enough to reach conversion temperature fast. Both need the same thing, sustained time above 175°F with useful conversion running up to about 205°F, but a plate short rib needs six to eight hours to get there and a rack of back ribs needs three to four. Thin flanken is the exception that proves the rule: cut across the bones at 1/3 to 1/2 inch, every muscle fiber is severed to under an inch long, so toughness never gets the chance to matter and the meat grills in minutes.",
    methods: [
      {
        m: "Braise (English cut)",
        why: "Short ribs are built in layers with collagen between them, and liquid holds the whole stack in the conversion range until those sheets dissolve and the layers let go of each other.",
        how: "English cut, 2-3 inch bones with at least an inch of meat on top. Brown hard on every face, then 300-325°F with liquid a third of the way up, covered, 2.5-3.5 hours. Done when the bone slides out clean. Chill overnight in the liquid — short ribs throw an enormous amount of fat, and cold it caps solid and lifts off in one piece, plus the meat firms up enough to reheat without collapsing."
      },
      {
        m: "Smoke (plate short ribs)",
        why: "Six to eight hours of dry heat converts the collagen while the surface builds bark, and at 25-30% fat the meat bastes itself the entire time with no wrap needed.",
        how: "Three-bone plate ribs, 5-6 lb a slab. Salt and coarse pepper only. Membrane off the bone side. 250-275°F for 6-8 hours to probe-tender, usually 203-208°F measured between the bones. Rest 45 minutes, then cut between the bones — one bone is a portion."
      },
      {
        m: "Grill (flanken)",
        why: "Cutting across the bones at half an inch shortens every fiber to under an inch, so tenderness stops depending on collagen conversion and starts depending on geometry.",
        how: "1/3 to 1/2 inch flanken. Marinate — soy, sugar or grated pear, garlic and sesame is the standard galbi build, and the sugar is doing real browning work in a two-minute cook. Screaming direct heat, 2-3 minutes a side, off as soon as the edges char. Anything thicker than 1/2 inch over direct fire is back to being tough."
      },
      {
        m: "Low roast or smoke (back ribs)",
        why: "The meat between the bones is thin, so the goal isn't rendering a slab — it's getting the intercostals past 190°F before the exposed surface dehydrates.",
        how: "Membrane off, 275°F, 3-3.5 hours, wrapped for the middle hour if the surface is drying out. They're done when the meat has receded about a quarter inch from the bone ends and the rack bends easily when you lift it from the center. Sauce in the last 15 minutes only, or the sugar burns."
      }
    ],
    avoid: {
      m: "Grilling thick bone-in English-cut short ribs over direct heat",
      why: "A 2-inch English cut is a stack of muscle sheets with collagen between every layer, sitting on a bone that conducts heat unevenly. Over direct fire the exterior passes 300°F and starts carbonizing long before the center reaches 175°F. Even if you nailed a medium-rare center, none of the interior collagen has had time to convert, so you'd be chewing through sheets of intact connective tissue sandwiched between layers of cooked meat. There's no recovery: the surface is already carbon, which is bitter and doesn't soften, and moving it into a braise afterward just steeps burnt char through the liquid and ruins that too. If you want short ribs off a grill, have them cut flanken-thin across the bones, or move the thick ones to indirect heat at 275°F and give them three hours."
    },
    buying: "For braising, ask for English-cut short ribs, bone-in, 2-3 inch bone lengths with at least an inch of meat on top. Much of what gets sold as 'short ribs' is chuck ribs cut thin — mostly bone with half an inch of meat — and there's nothing there to braise. For smoking, ask for plate short ribs by number, NAMP 123A, a three-bone slab at 4-6 lb; that's the one that comes out looking like a dinosaur bone. For grilling, have them cut flanken across the bones at 1/3 to 1/2 inch. Boneless short ribs are usually chuck, not rib — fine in a braise, but you lose the bone's collagen and the shape. On back ribs, check that meat was actually left between the bones: scalped racks with nothing but membrane on them are common, because the ribeye takes priority on that primal, and they aren't worth buying at any price. Pull the membrane off the bone side yourself with a butter knife and a paper towel for grip.",
    temps: "Braised or smoked short ribs: 203-208°F, though probe feel is the real cue — no resistance between the bones and the bone pulling clean. Back ribs: about 195-203°F, or when the meat has receded a quarter inch from the bone ends and the rack bends. Grilled flanken: pull as soon as the edges char, roughly 130-140°F, and the exact number barely matters because the slices are thin enough to eat tender at any doneness.",
    faq: [
      {
        q: "What's the difference between beef short ribs and beef back ribs?",
        a: "Position on the rib bone and how much meat came with it. Short ribs are the lower half of the bones and carry a thick slab of muscle on top — that's what you braise or smoke as a main course. Back ribs are the upper half, the bones the ribeye is cut off of, so nearly all the top meat is gone before you ever see them and what remains is between the bones. Short ribs cost several times more per pound and earn it if you want meat on a plate; back ribs are cheap and eaten with your hands."
      },
      {
        q: "Why are my short ribs still tough?",
        a: "Not enough time above 175°F. Short rib meat is layered muscle with collagen sheets in between, and until those sheets dissolve the layers won't separate — that failure to separate is exactly what 'tough' feels like in a short rib. Give it another 45-60 minutes and test by pulling the bone; when it slides out with no effort you're done. If instead they're falling apart but dry and stringy, you overshot, and running the oven hotter than 325°F is usually why."
      },
      {
        q: "English cut vs flanken — which one do I want?",
        a: "English cut runs parallel to the bone, one bone per piece, thick. That's for braising and smoking, where hours of collagen conversion do the work. Flanken is cut across three or four bones in a thin strip, half an inch or less, and that's for grilling, because the fibers are severed short enough to be tender immediately. Swapping them fails in both directions: flanken disintegrates in a braise, and English cut burns on a grill long before the inside is cooked."
      },
      {
        q: "Do I need to remove the membrane from beef ribs?",
        a: "Yes on back ribs and plate ribs. The membrane on the bone side is a sheet of connective tissue that doesn't render at cooking temperatures, doesn't take smoke, and blocks seasoning, so it survives as a papery layer you have to chew through and spit out. Slide a butter knife under it at one end, lift a corner, grab it with a paper towel and pull it off in one sheet. On English-cut short ribs it's usually gone with the trimming and short enough not to matter either way."
      }
    ]
  }
];
