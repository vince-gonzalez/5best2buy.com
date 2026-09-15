/* Worth The Hunt — cut profiles: beef steak cuts
   ribeye | sirloin | tenderloin | flank | skirt */

module.exports = [

  {
    slug: "ribeye",
    name: "Ribeye",
    animal: "beef",
    shelf: "beef",
    aka: ["rib eye", "delmonico steak", "spencer steak", "scotch fillet", "cowboy steak", "tomahawk", "prime rib", "standing rib roast"],
    match: ["ribeye", "rib eye", "rib-eye", "rib roast", "prime rib", "tomahawk", "delmonico", "cowboy steak", "scotch fillet"],
    dek: "Ribeye is the loin muscle where it runs through the rib section, ribs 6 through 12, cut into steaks. It carries more intramuscular fat than any other common steak, and that fat is the whole job: it has to get hot enough to melt, around 130°F, without pushing the lean around it past the point where it dries out. The entire technique is managing about a 15-degree window.",
    anatomy: "The rib primal sits on the animal's back between the chuck and the short loin. The main muscle in a ribeye — the eye — is the longissimus dorsi, a postural muscle that runs along the spine and holds the back up rather than pushing the animal forward, so it carries a low, steady load and builds fine fiber with almost no connective tissue. Wrapped around the outside of the eye is the spinalis dorsi, the cap or deckle: looser grain, more fat, and the best-eating piece of beef on the carcass. Steaks from the chuck end, ribs 6 through 9, carry more of that cap; steaks from the loin end, ribs 10 through 12, have a rounder, tighter eye and less of it.",
    science: "USDA Select runs about 3–4% intramuscular fat, Choice 5–8%, Prime 8% and up, and ribeye grades highest of the common steaks because a lightly worked postural muscle stores fat between fiber bundles instead of burning it as fuel. That fat softens around 100–110°F and renders freely at 130–140°F; below that it eats waxy, which is why an underdone ribeye can come across as greasy rather than rich. The lean around it moves the other direction — myosin sets near 120°F, collagen contracts hard at 140°F and wrings water out of the fibers, and actin denatures around 150–160°F, after which the meat is permanently dry. There is almost no collagen in the eye to convert into gelatin, so nothing is bought by going past 140°F; high heat only pays you back on cuts that have connective tissue to trade.",
    methods: [
      {
        m: "Reverse sear",
        why: "Low oven or indirect heat brings the entire steak to within a few degrees of target before any browning happens, so the marbling in the middle renders instead of only the marbling near the surface.",
        how: "225–275°F oven or indirect grill until internal reads 115–118°F — about 35–50 minutes for a 1.5-inch steak. Rest 5 minutes, then 60–90 seconds a side in a dry cast iron pan at full heat. Land at 130–133°F."
      },
      {
        m: "Cast-iron sear",
        why: "Contact with 500°F-plus iron drives Maillard browning across the surface faster than heat conducts inward, so the crust forms before a thick gray band develops under it.",
        how: "Preheat the pan at least 5 minutes, dry the steak, 2–3 minutes a side undisturbed, then pull the pan off direct heat and baste with butter and thyme for 2 minutes. Best at 1.25–1.5 inches; thicker steaks want an oven finish."
      },
      {
        m: "Two-zone grill",
        why: "Coals radiate hotter than a home burner can, and rendered fat dripping into the fire returns as smoke on the meat — but the same dripping fat means the steak cannot stay over the flame the whole time.",
        how: "Sear over the coals 2 minutes a side, then move to the cool side with the lid down until 125°F, roughly 8–12 minutes for 1.5 inch. Flare-ups are your fat burning off; move the steak rather than spraying water on it."
      },
      {
        m: "Sous vide, then sear",
        why: "Holding the steak at its target temperature for an hour renders marbling without ever exposing the lean to anything hotter.",
        how: "129–131°F for 1–2 hours. Dry it completely, then 45–60 seconds a side in a smoking pan. Past 3 hours the texture starts turning pasty — there is no connective tissue here that a long hold improves."
      }
    ],
    avoid: {
      m: "Slow-cooking it — braise, crock pot, or any pot-roast treatment",
      why: "Braising works on chuck and brisket because those muscles are loaded with collagen, and collagen held above 160°F for hours hydrolyzes into gelatin, which coats the fibers and registers on the tongue as moisture. A ribeye does not have that collagen. Put one in liquid at 300°F for three hours and you pay the full price of the heat — collagen contraction at 140°F squeezing out water, actin denaturing near 155°F locking the fibers dry — and collect none of the payment. The marbling that made the steak worth buying renders out into the braising liquid. What is left is gray, crumbly, and dry, and more time makes it worse, because more time only removes more water. Cooked muscle fiber does not take water back. The same arithmetic applies to a ribeye held past 155°F on a grill: everything that made it a ribeye is now on the coals."
    },
    buying: "Ask for a steak cut 1.25 to 1.75 inches thick. Under an inch it cooks through before it browns, and you cannot fix that with technique. Marbling should read as fine, even flecks spread across the eye, not two big blobs of seam fat and a lot of empty red. Choice is the working minimum and Prime is a genuine step up here, unlike on lean cuts where the grade buys you less. Bone-in eats the same as boneless but cooks slower near the bone — add 5–10 minutes and probe away from it. For more cap, ask for the chuck end, sometimes called second cut; for a clean round eye, ask for the loin end. Dry-aged 28–45 days concentrates flavor and loses 15–25% to trim, which is the whole reason it costs more per pound.",
    temps: "Pull at 120–122°F for medium rare; a 1.5-inch steak carries over 5–8°F while it rests. Final 128–133°F. Medium, 135–140°F, is defensible on a heavily marbled ribeye because more of the fat has rendered by then — that argument does not transfer to lean cuts. Past 145°F the fat is gone and the lean is dry.",
    faq: [
      {
        q: "What's the difference between ribeye and New York strip?",
        a: "Same muscle, different section. The strip is the longissimus dorsi in the short loin; the ribeye is the same muscle a rib or two forward. The rib section carries more marbling and the spinalis cap on top, so it eats richer and softer. The strip has a tighter, more uniform grain, a firmer chew, and a band of fat along one edge instead of through the middle. Cook them identically — the strip is just less forgiving, because there is less fat buffering the lean."
      },
      {
        q: "Why does my ribeye taste greasy or chewy in the fat?",
        a: "The fat never got hot enough. Beef fat softens around 100–110°F but does not render until 130–140°F, so a thick ribeye pulled at 120°F still has solid marbling in the center that eats waxy. Either take it to 130–133°F, or reverse-sear so the interior sits above 115°F long enough for the fat to soften all the way through before you build the crust."
      },
      {
        q: "Should you sear a ribeye before or after cooking it?",
        a: "After, for anything 1.5 inches or thicker. Searing first and finishing in the oven means the surface sits hot while the center climbs, which widens the overcooked gray band under the crust. Bringing it to 115°F slowly and then searing gives a thinner band and a more even interior. Under 1.25 inches it makes no practical difference — there isn't enough thickness for the gradient to show."
      },
      {
        q: "Can you use ribeye for stew or pot roast?",
        a: "You can, and it will be worse than chuck at several times the price. Stew depends on collagen becoming gelatin over hours above 160°F; ribeye has almost none, so long moist heat only drives out its water and renders its marbling into the pot. Chuck finishes shredding and lubricated because its connective tissue converted. Ribeye finishes gray and stringy. Buy chuck and cook the ribeye as a steak."
      }
    ]
  },

  {
    slug: "sirloin",
    name: "Top Sirloin",
    animal: "beef",
    shelf: "beef",
    aka: ["top butt", "sirloin steak", "sirloin cap", "coulotte", "picanha", "bottom sirloin", "tri-tip", "flap meat", "bavette"],
    match: ["top sirloin", "sirloin steak", "beef sirloin", "sirloin roast", "sirloin tip", "bottom sirloin", "tri-tip", "tri tip", "picanha", "coulotte", "flap meat", "bavette", "ball tip"],
    dek: "Top sirloin is the gluteus medius, the hip muscle that drives the animal forward. It is lean, genuinely worked, and it has a hard ceiling: past about 135°F there is no fat and no gelatin to hide behind, so it dries out fast and does not come back. High heat, short time, sliced across the grain.",
    anatomy: "The sirloin primal sits between the short loin and the round, over the hip. It splits in two. Top sirloin — the top butt — is mostly gluteus medius, a hip extensor that fires on every step the animal takes: real locomotor work, more than the loin does, less than the shank. Beneath it lies the gluteus accessorius, and over it, under a fat cap, the biceps femoris, sold as the sirloin cap, coulotte, or picanha. Bottom sirloin is the looser, coarser group underneath — tri-tip (tensor fasciae latae), flap meat or bavette (obliquus internus abdominis), and ball tip — and a package labeled just sirloin steak with no top on it is usually one of those, which will chew tougher for the same money.",
    science: "Top sirloin runs about 3–5% intramuscular fat even at Choice, roughly half a ribeye. Because the muscle carries load, its fiber bundles are thicker and its grain coarser than the loin's, and it holds a moderate amount of collagen — enough to register as chew, not enough to become useful gelatin. That combination makes the cooking window narrow: myosin firms at 120°F, collagen contracts near 140°F and wrings water out of the fibers, and with no marbling melting into that space, the steak reads dry almost immediately. Actin denatures around 150–160°F, and past that the texture is set for good. There is also a geometry problem — the gluteus medius and the muscle under it run at different angles, so half of a large sirloin steak can slice tender while the other half slices into ropes off the same piece of meat.",
    methods: [
      {
        m: "Hot sear, grill or cast iron",
        why: "A short stay on a very hot surface browns the outside and gets the center to 130°F before collagen contraction at 140°F can push the water out.",
        how: "1.25–1.5 inch steak, salted 45 minutes ahead or immediately before, surface bone dry. 500°F-plus grill or pan, 3–4 minutes a side, pull at 125–128°F, rest 8 minutes, slice 1/4 inch across the grain."
      },
      {
        m: "Sous vide, then sear",
        why: "Sets the whole steak below the 140°F contraction point so nothing overshoots, and a long hold slowly softens connective tissue without ever raising the temperature that dries the fibers.",
        how: "129–131°F for 2–4 hours, up to 6 for a thick top butt. Dry it hard, then sear 45 seconds a side over maximum heat."
      },
      {
        m: "Kebabs and spiedini",
        why: "Cut into cubes, sirloin has enough surface area to brown in the 5–6 minutes it takes to reach medium rare, and a 1-inch cube already has short fibers no matter which way you bite it.",
        how: "Cube at 1 to 1.5 inches, skewer with a gap between pieces so they roast rather than steam, direct high heat, turn every 90 seconds, 6–8 minutes total. Pull while a cube still gives under a squeeze."
      },
      {
        m: "Thin-sliced stir-fry",
        why: "Slicing raw sirloin at 1/8 inch across the grain does mechanically what braising cannot do chemically to this cut — it shortens the fibers before they are ever cooked.",
        how: "Freeze 30–45 minutes to firm the meat, slice 1/8 inch against the grain, cook in batches on the hottest surface you have, 60–90 seconds. Crowding the pan drops it into steaming and the meat goes gray and tight."
      }
    ],
    avoid: {
      m: "Stewing or braising it",
      why: "This is the most expensive common mistake with sirloin, and it usually gets made because sirloin was the cut on sale that week. Braising pays off on chuck, brisket, and shank because those muscles carry two to four times the collagen; held above 160°F for hours, that collagen hydrolyzes into gelatin, which lubricates the fibers and registers as moisture. Top sirloin does not have the collagen to make that trade. Three hours in liquid still drives its fibers well past actin denaturation near 155°F, and the water they expel goes into the pot and stays there, because cooked muscle fiber cannot reabsorb it. What comes out is dry, mealy chunks floating in a thin broth — and the instinct people follow at that point, giving it another hour, is precisely the thing making it worse. Nothing recovers it. The only salvage is to chop it fine and bury it in a sauce where texture stops mattering."
    },
    buying: "Ask for center-cut top sirloin, 1.25 to 1.5 inches thick, cut fresh rather than pulled from a pre-cut tray. Look for a fine, consistent grain running one direction across the whole face; if you can see the seam where two muscles meet at different angles, plan to cut the cooked steak in half along that seam and slice each half on its own grain. Marbling on sirloin is sparse by nature — Choice over Select is worth the spread, Prime usually is not. If the counter has the cap on, take it: picanha or coulotte, 2.5 to 3.5 lb with a 1/4-inch fat cap left intact, is the best eating in the primal and takes the same fast, high heat. Sirloin tip and ball tip are separate, tougher cuts riding on a similar name, so ask which one you are actually holding.",
    temps: "Pull at 125°F, rest 8–10 minutes, land at 130–133°F. Do not go past 135°F; sirloin has no fat reserve and every degree beyond that shows up as dryness. Slice 1/4 inch or thinner across the grain, and on a wide steak cut along the muscle seam first so both halves get sliced correctly.",
    faq: [
      {
        q: "What's the difference between top sirloin and bottom sirloin?",
        a: "Top sirloin is the gluteus medius, one fairly uniform muscle, and it is what gets sold as sirloin steak. Bottom sirloin is the group underneath — tri-tip, flap meat or bavette, and ball tip — with a coarser, more open grain and more connective tissue, so it costs less and needs more help: marinade, high heat, and disciplined slicing across the grain. Tri-tip is the one worth going out of your way for. Roast it whole to 130°F, then notice that its grain changes direction partway along and cut it into two pieces before slicing."
      },
      {
        q: "Can I use sirloin for beef stew?",
        a: "No, and substituting it for chuck is the most common way a stew goes wrong. Stew works because collagen turns into gelatin over hours above 160°F; chuck has enough collagen for that and sirloin does not. Sirloin cubes hit 155°F in the first half hour, expel their moisture into the pot, and then spend the next two hours getting drier. If sirloin is what you already bought, cook it fast as steak and make the stew another day."
      },
      {
        q: "Why did my sirloin steak come out tough and dry?",
        a: "Usually one of two things. Temperature: at 3–5% intramuscular fat, sirloin has nothing left to read as moist once it passes 140°F, so the failure arrives quickly and obviously. Or slicing: the grain is coarse, so cutting along it leaves inch-long fiber bundles in every bite, while cutting across at 1/4 inch leaves quarter-inch ones. Same steak, same cook, completely different result on the plate."
      },
      {
        q: "Sirloin vs ribeye — why is sirloin so much cheaper?",
        a: "Workload and marbling. The ribeye's muscle holds the back up and stores fat between its fiber bundles; the sirloin's muscle drives the hind leg and burns that fat as fuel. Ribeye ends up with roughly double the intramuscular fat and a finer grain, and USDA grading tracks marbling directly, so the price follows. Sirloin trades that for leaner, more mineral-tasting meat and a much narrower window. It is the better buy if you will pull it at 130°F and slice it across the grain, and the worse one if you cook by feel."
      }
    ]
  },

  {
    slug: "tenderloin",
    name: "Beef Tenderloin",
    animal: "beef",
    shelf: "beef",
    aka: ["filet mignon", "filet", "chateaubriand", "tournedos", "psoas major", "fillet steak"],
    match: ["beef tenderloin", "tenderloin steak", "filet mignon", "filets mignons", "chateaubriand", "tournedos", "beef medallions", "beef filet"],
    dek: "The tenderloin is the psoas major, a muscle suspended inside the body cavity that does close to no work in the animal's life. That is the whole story: it is the softest muscle on the carcass and one of the leanest, so it starts out tender and has nothing to give back if you overcook it. Call the usable window ten degrees.",
    anatomy: "It runs along the inside of the spine, one on each side, starting under the last few ribs and finishing in the sirloin. As a hip flexor in a four-legged animal it is almost never loaded, since the leg largely swings forward on its own momentum, and hanging inside the cavity it carries no weight and takes no impact. That near-zero workload builds the finest fiber and the least connective tissue on the animal. It is also small — the pair comes to about 1% of a carcass, roughly 5 to 7 lb each untrimmed — which is the other half of why it prices the way it does. The muscle tapers hard from a thick butt end at the sirloin down to a thin tail, with a smaller strap muscle, the chain or psoas minor, running along one side.",
    science: "Fine fiber and low collagen make it soft raw and soft cooked, but the same absence of connective tissue means it has nothing to convert and nothing in reserve. Even Prime tenderloin usually sits around 2–4% intramuscular fat, well under a Choice ribeye, which is why it is tender and mild at the same time — beef flavor tracks fat and connective-tissue byproducts, and this muscle is short on both. Heat behaves the way it does everywhere else: myosin sets at 120°F, collagen contracts near 140°F, actin denatures at 150–160°F and locks the fibers dry. The difference is that nothing is melting into that space to cover it, so the drop-off past 135°F is steep and unmistakable. One more thing worth knowing before you trim: the silverskin is elastin, not collagen. It will not convert at any temperature over any length of time. It shrinks, curls the meat, and stays rubbery, so cut it off.",
    methods: [
      {
        m: "Sear, then oven — individual filets",
        why: "A 2-inch filet is too thick to cook through in a pan without scorching the crust and too small to be worth a full reverse sear, so the sear-then-finish split gets both.",
        how: "Cast iron at full heat, 2 minutes a side plus 30 seconds rolled on the edges, then a 400°F oven for 4–7 minutes to 122°F. Rest 6 minutes. Bacon barding or a butter baste is replacing fat this muscle does not have, not decorating it."
      },
      {
        m: "Reverse sear — whole roast",
        why: "A whole tenderloin tapers, so a hot oven cooks the tail well done before the butt reaches medium rare; low heat shrinks that gradient because the whole roast climbs slowly and together.",
        how: "Fold the tail back under itself and tie the roast every 1.5 inches so the thickness is close to even. 225–250°F to 118–120°F internal, about 50–75 minutes for a 4 lb roast. Rest 15 minutes, then sear every side in a hot pan or over coals, 3–4 minutes total."
      },
      {
        m: "Sous vide, then sear",
        why: "It removes the window problem outright — the meat cannot exceed the bath temperature, which matters most on the cut with the least room for error.",
        how: "129–131°F, 1–2.5 hours for filets, 2–4 for a whole roast. Dry it thoroughly, sear 45 seconds a side. Past 4 hours the texture turns mushy; there is no connective tissue here that a long hold improves."
      },
      {
        m: "Medallions from the tail",
        why: "The thin end never cooks evenly as part of a roast, but cut into rounds it is the fastest-cooking piece of beef in the kitchen.",
        how: "Cut 3/4-inch rounds, press them lightly to even the thickness, 60–90 seconds a side in a hot pan, out at 125°F. This is what tail meat should be doing instead of overcooking on the end of a roast."
      }
    ],
    avoid: {
      m: "Taking it past about 140°F — including any braise, stew, or slow cooker",
      why: "Every cut loses water twice: once when collagen contracts near 140°F, again when actin denatures around 155°F. On chuck or short rib that loss gets paid back, because the same hours of heat are converting a heavy load of collagen into gelatin that coats the fibers and reads as moisture. Tenderloin has neither the collagen to convert nor the fat to render, so you absorb the entire loss and receive nothing for it. A well-done filet is dry in a way sauce sits on top of instead of fixing, and a tenderloin dropped into a stew pot turns into dry crumbling threads inside 45 minutes and stays that way no matter how long it simmers — muscle fiber that has expelled its water does not draw it back in. This is also why it is the wrong cut to cook for a table with mixed doneness preferences. A ribeye or a chuck steak still has something left at 155°F. This one does not."
    },
    buying: "Whole tenderloin sells three ways. PSMO — peeled, side muscle on — is 5 to 7 lb with the chain and silverskin still attached and yields about 60–70% once you trim it: cheapest per pound, most knife work, and you keep the trim for stir-fry and medallions. Peeled means the silverskin is off. Fully trimmed center-cut costs the most per pound and wastes the least. For steaks, ask for center-cut filets at 2 inches, which lands around 6–8 oz; under 1.5 inches they cook through before they brown. Grade matters less here than on a ribeye because the muscle barely marbles at any grade, so Choice is fine and the money is better spent on thickness. A good one is uniform pinkish-red with a tight, clean grain and no gray or dried edges. Skip the pre-cut 1-inch discs sitting in the case.",
    temps: "Pull filets at 120–122°F to finish at 128–130°F; a 2-inch filet carries over about 5°F. A whole roast carries 8–10°F because of its mass, so pull it at 118–120°F. Rest 6 minutes for steaks, 15 for a roast. Treat 135°F as the ceiling. Texture cue: at target the center gives like the pad of your palm with thumb and middle finger touching, and if it springs back it is already past medium.",
    faq: [
      {
        q: "Why is filet mignon so expensive if it doesn't have much flavor?",
        a: "You are paying for texture and scarcity. The psoas major does almost no work, which is what gives it the finest fiber and the least connective tissue on the animal. There is also very little of it — the pair is about 1% of the carcass, and a third of that trims away as chain and silverskin. The flavor is mild because flavor tracks intramuscular fat and connective-tissue byproducts, and this muscle runs 2–4% fat with little collagen. That is why it traditionally arrives with a sauce, wrapped in bacon, or under a crust: those are adding back what the muscle does not have."
      },
      {
        q: "Can I use beef tenderloin for stew or stroganoff?",
        a: "Stew, no. Stroganoff, yes, if you keep the meat out of the simmer. Tenderloin has no collagen to convert, so time in liquid only makes it dry. For stroganoff, slice it thin, sear it 60 seconds in a very hot pan, pull it out, build the sauce, and return the meat off the heat at the end. Tail meat and trimmings off a whole tenderloin are the right pieces for this — buying center-cut filets to cook this way is throwing money away."
      },
      {
        q: "Do you sear beef tenderloin before or after roasting?",
        a: "After. Searing does not seal in juices — that idea has been tested and it is wrong; searing actually drives moisture off the surface. What it does is brown, and browning works better on a roast that is already up to temperature. Bring it to 118–120°F at 225–250°F, rest it, then sear all sides in 3–4 minutes. Searing first means the exterior sits hot for the entire roasting time, which thickens the overcooked gray ring."
      },
      {
        q: "How long does a whole beef tenderloin take to cook?",
        a: "Cook to temperature, not to the clock, because thickness varies wildly along one roast. At 225–250°F a tied 4 lb tenderloin needs roughly 50–75 minutes to reach 118–120°F. At 425°F it is done in 30–40 minutes, but the tail will be well past medium before the center arrives. Tuck the tail under itself, tie the roast every 1.5 inches to even out the thickness, and put a probe in the thickest section."
      }
    ]
  },

  {
    slug: "flank",
    name: "Flank Steak",
    animal: "beef",
    shelf: "beef",
    aka: ["flank", "london broil", "bavette de flanchet", "jiffy steak"],
    match: ["flank steak", "flank", "london broil"],
    dek: "Flank is the rectus abdominis — the abdominal wall — a single flat sheet of long, coarse muscle fiber about an inch thick at the center. It is lean, and the grain runs the full length of the steak in one direction. There are two ways to cook it, hot and fast or long and wet, and how you slice it matters more than either.",
    anatomy: "It comes off the underside of the animal, behind the plate and below the loin, and its job is holding the abdomen together. That means constant duty: core stabilization plus every breath the animal takes. Muscle that works steadily builds long, thick-bundled fibers with connective tissue woven along them and stores very little fat inside. A whole flank is one muscle, 1.5 to 2.5 lb, roughly 12 inches long and an inch thick in the middle, with the grain visibly running lengthwise. If something sold to you as flank shows two different grain directions, it is not flank.",
    science: "Flank's chew is a fiber-geometry problem more than a collagen problem — the bundles are long and wide, so a bite taken along them means shearing through several inches of intact fiber. Cutting across the grain at 1/4 inch drops that to a quarter inch of fiber per bite, a larger change in tenderness than anything heat does. It is also lean, roughly 4–6% intramuscular fat, so once collagen contracts at 140°F and wrings water out of the fibers, nothing melts into the gap to cover for it. That is why the two workable strategies sit at opposite ends: reach 130°F fast and get off the heat, or go the other way entirely and hold it above 180°F for 2.5 to 3 hours until the collagen woven along the fibers hydrolyzes into gelatin. The middle — twenty-five minutes at moderate heat — is well past the drying threshold and nowhere near conversion, and that is where most gray, stiff flank steaks come from.",
    methods: [
      {
        m: "Very hot grill or broiler",
        why: "At an inch thick over 600°F-plus coals, the surface browns in about four minutes while the center is still climbing, so crust and a 130°F interior arrive in the same window.",
        how: "Salt 40 minutes to overnight, dry the surface. Direct high heat, 4–5 minutes a side for a 1-inch steak, pull at 125–128°F. Rest 10 minutes, then slice 1/4 inch or thinner across the grain, knife at a 45-degree bias for wider pieces."
      },
      {
        m: "Braise, ropa vieja style",
        why: "Held above 180°F in liquid for hours, the collagen running along the fibers converts to gelatin and the long bundles separate into strands instead of resisting as one sheet.",
        how: "Sear it, then 300°F covered with liquid halfway up, 2.5–3 hours, until internal is 200–205°F and two forks pull it apart. Shred with the grain for this one — strands are the point."
      },
      {
        m: "Thin-sliced stir-fry",
        why: "Slicing across the grain while the meat is raw solves the fiber-length problem before cooking starts, and 1/8-inch pieces are through in under two minutes, short enough to stay below the drying threshold.",
        how: "Freeze 30 minutes to firm it, slice 1/8 inch against the grain, cook in batches over maximum heat, 60–90 seconds each. A cornstarch and egg-white velvet coating buys another margin."
      },
      {
        m: "Sous vide, then sear",
        why: "A long hold at 130–133°F slowly softens connective tissue without ever crossing the temperature where the fibers wring themselves out.",
        how: "131°F for 5–8 hours, then dry thoroughly and sear 45–60 seconds a side on the hottest surface available. Still slice it across the grain."
      }
    ],
    avoid: {
      m: "Slicing it with the grain",
      why: "This ruins more flank steaks than any error made on the fire, and it happens after the cooking is over, which is what makes it so galling. The fibers in a flank run the full 12-inch length of the steak in parallel bundles. Cut parallel to them and every piece on the plate is a bundle of intact, inches-long fibers your teeth have to shear lengthwise — the meat can be a flawless 130°F and still eat like rope. Cut perpendicular at 1/4 inch and that same meat comes apart with almost no pressure, because you already did the shearing with the knife. There is no fixing it once it is cut. You cannot un-slice a steak, and re-cutting the strips crosswise just gives you short cubes with the same problem in miniature. Find the grain before the steak goes on the heat, and remember it runs the long way, so you are almost always cutting across the short dimension of the board."
    },
    buying: "A whole flank runs 1.5 to 2.5 lb and about an inch at the thickest point. Buy it whole rather than in pre-cut strips so you control the slicing. Look for even thickness end to end and a grain you can clearly see running lengthwise. There is a thin sheet of silverskin on one face — have them pull it or take it off with a boning knife, because it is elastin and it will not soften, it just contracts and cups the steak on the grill. Skip anything labeled pre-tenderized or blade-tenderized: the needles have already cut through the fiber bundles, which sounds helpful and in practice means the steak sheds moisture faster and falls apart into shreds. Case-marinated flank is usually older meat with the label doing the work; buy it plain and season it yourself.",
    temps: "Fast method: pull at 125–128°F, rest 10 minutes, finish around 130–133°F. Past 140°F it stiffens quickly and there is no fat to disguise it. Braise method: cook to 200–205°F internal and judge by fork — done means the bundles separate under light pressure, not that a probe slides in easily. Either way, slice 1/4 inch or thinner across the grain, except when you are deliberately shredding a braise.",
    faq: [
      {
        q: "Flank steak vs skirt steak — which one should I buy?",
        a: "They are different muscles. Flank is the abdominal wall: about an inch thick, one clean grain direction, lean, fairly mild. Skirt is the diaphragm: half that thickness, much coarser and more open grained, with noticeably more intramuscular fat and a stronger mineral flavor. Skirt takes marinade further because of the open grain and cooks in 2–3 minutes a side. Flank is thicker, easier to slice into neat pieces, and better for stir-fry or a fanned steak on a platter. For fajitas and carne asada, skirt."
      },
      {
        q: "Why is my flank steak always tough?",
        a: "Almost always the slicing. The fibers run the length of the steak, so cutting along them leaves inch-long intact bundles in every bite — cut across at 1/4 inch instead. Second cause is temperature: at 4–6% fat, anything past 140°F stiffens and nothing is melting to soften it. Third is landing in the dead zone, 20 to 30 minutes at moderate heat, which is far too long for a steak and far too short to convert any connective tissue."
      },
      {
        q: "Does marinating flank steak actually tenderize it?",
        a: "Barely, and not the way it is usually described. Acidic marinades — citrus, vinegar, wine — travel about 1/8 inch in several hours and only denature protein at the surface, so the interior is untouched. What they mostly do is flavor the outer layer. Salt penetrates further and does more for moisture retention, which makes a dry brine from 40 minutes to overnight a better use of the same time. Enzymatic marinades with pineapple, papaya, or fresh ginger really do break down protein, but they work outside-in and turn the surface mushy past about four hours."
      },
      {
        q: "Is London broil the same thing as flank steak?",
        a: "London broil is a method, not a cut: marinate, broil or grill hot, slice thin across the grain. It was originally done with flank. Most packages labeled London broil in a US supermarket today are top round, which is leaner, thicker, and tougher than flank and needs the slicing discipline even more. Read the fine print for the actual cut name. If it says top round, treat 130°F as the ceiling and slice it as thin as your knife will go."
      }
    ]
  },

  {
    slug: "skirt",
    name: "Skirt Steak",
    animal: "beef",
    shelf: "beef",
    aka: ["outside skirt", "inside skirt", "arrachera", "fajita meat", "romanian steak", "philadelphia steak"],
    match: ["skirt steak", "outside skirt", "inside skirt", "skirt", "carne asada", "arrachera"],
    dek: "Skirt is the diaphragm, the muscle that contracts every time the animal breathes. A lifetime of nonstop work built it with an extremely coarse open grain and a lot of fat stored inside the fibers, which is where its flavor comes from. It is also only about half an inch thick, so it needs the hottest surface you own and two to three minutes a side.",
    anatomy: "There are two skirts and they are not the same muscle. Outside skirt is the diaphragm proper, sitting on the outside of the ribcage under the plate and covered by a tough membrane — 1 to 2 lb, roughly 20 to 24 inches long and 3 to 4 inches wide, thicker and more even, and the better of the two. Inside skirt is the transversus abdominis off the inner abdominal wall, wider at 5 to 7 inches, thinner and more irregular, and tougher; it is what most supermarket skirt is. A diaphragm never rests. It cycles ten to thirty times a minute for the whole life of the animal, which makes it an oxidative muscle: dark with myoglobin, dense with mitochondria, and carrying fuel as fat stored right in among the fibers.",
    science: "That workload is why skirt eats the way it does. A continuously active oxidative muscle stores intramuscular fat rather than burning it off, so skirt commonly runs 8–12% fat, at or above a Choice ribeye, and the high myoglobin and mitochondrial content give it the strong, almost mineral flavor people either seek out or avoid. The tradeoff is grain: the fiber bundles are thick enough to see from across the room and run in one direction, so it has to be sliced across at 1/4 inch or thinner. That same open structure means more surface area per ounce and real gaps between bundles, which is why marinade travels further into skirt than into a dense-grained cut like sirloin. Thickness sets the cooking rule — at half an inch the center reaches 130°F in about three minutes on a very hot surface and 150°F not long after, so if the surface is not hot enough to brown the outside inside that window, it never will be.",
    methods: [
      {
        m: "Ripping-hot grill or cast iron",
        why: "At half an inch there is no time to build a crust gradually; the surface has to be over 600°F so browning outruns the heat conducting to the center.",
        how: "Full chimney of coals, or cast iron preheated 8–10 minutes. Dry the surface completely. 2–3 minutes a side, pull at 125°F, rest 5 minutes, slice 1/4 inch across the grain."
      },
      {
        m: "Carne asada — marinate, then grill",
        why: "The loose bundles give marinade somewhere to travel, so seasoning gets past the surface layer in a way it cannot on a tight-grained steak.",
        how: "Citrus, garlic, salt, chile, 2 to 6 hours. Longer with citrus starts to chalk the exterior. Wipe it dry before it touches the fire or the surface moisture steams instead of browning. Same 2–3 minutes a side."
      },
      {
        m: "Cut into sections first",
        why: "A 24-inch strip cannot sit over the hot zone evenly, so the thin ends overcook while the middle is still raw.",
        how: "Cut the strip into 5 to 7 inch lengths before it goes on the heat, which also makes the grain direction obvious when you slice later. Start the thicker pieces first and add the thin ones a minute behind."
      },
      {
        m: "Braise",
        why: "The same connective tissue that makes an underheated skirt chewy converts to gelatin above 180°F, and the coarse bundles come apart into strands.",
        how: "Sear, then 300°F covered with liquid halfway up, 2 to 2.5 hours to about 200°F internal, then shred. Skirt is thinner than flank, so start checking at two hours."
      }
    ],
    avoid: {
      m: "Cooking it on a medium grill, or to medium doneness",
      why: "Skirt is about half an inch thick. On a 400–450°F grill the center passes 130°F in roughly two minutes and 155°F not much later, and browning still has not started, because Maillard reactions do not run at a useful rate until the surface is above about 300°F and really want 500°F-plus to outrun the interior. What comes off is gray through the middle with a pale, wet exterior — cooked past the point where its intramuscular fat rendered out and its fiber bundles contracted, without the crust that was supposed to be the payment for that heat. None of it comes back. The fat that made skirt worth buying is on the grate, and contracted fibers do not relax. This is the one cut where an underpowered grill is worse than no grill at all: a cast iron pan run flat out on a home burner will beat a moderate gas grill every time."
    },
    buying: "Ask specifically for outside skirt, and ask whether the membrane has been peeled. Outside skirt is 3 to 4 inches wide and clearly thicker; inside skirt is 5 to 7 inches wide and thinner. Inside skirt is perfectly usable and cheaper — just cut it into 5 to 7 inch sections and slice it thinner after cooking. Look for deep red-brown color and visible white fat running between the fiber bundles; pale, uniformly lean skirt has been trimmed too hard and will not taste like much. Skip anything sold pre-tenderized or already cubed as fajita meat, which is usually inside skirt or flap run through a blade tenderizer, and skip case-marinated skirt for the same reason it got marinated. A whole outside skirt is 1 to 2 lb and feeds three or four.",
    temps: "Pull at 125°F and no higher. Rest 5 minutes — a long rest hurts a thin steak, because it keeps giving up heat and the crust goes soft. Slice 1/4 inch or thinner across the grain, cutting the strip into short sections first so the grain direction is unambiguous. Braised: 200°F internal, shredding under a fork.",
    faq: [
      {
        q: "Inside skirt vs outside skirt — what's the difference?",
        a: "Two different muscles. Outside skirt is the diaphragm itself: 3 to 4 inches wide, thicker, more evenly shaped, better marbled, and more tender. Most of it goes to restaurants and it costs more. Inside skirt is the transversus abdominis from the abdominal wall: 5 to 7 inches wide, thinner and more irregular, and it is what most retail skirt is. Both cook the same way, at the highest heat you can produce for 2–3 minutes a side, but inside skirt needs thinner slicing and gets more out of a marinade."
      },
      {
        q: "Skirt steak or flank steak for fajitas?",
        a: "Skirt, clearly. It is the traditional cut and the reasons are mechanical: more intramuscular fat, 8–12% against flank's 4–6%; a far more open grain that carries marinade past the surface; and a thinness that lets it cook in 2–3 minutes a side over very high heat, which is the only way it works. Flank is a fine substitute if skirt is not available — it is twice as thick, so cook 4–5 minutes a side and slice it thinner to make up the difference in grain."
      },
      {
        q: "Why is my skirt steak chewy?",
        a: "The heat was too low, the slicing was wrong, or both. At half an inch, skirt needs 600°F-plus for 2–3 minutes a side; on a moderate grill it sails past 150°F before it browns, which renders its fat out and contracts the fibers. Then there is the grain — skirt's bundles are unusually thick, which makes slicing along them the worst possible bite. Cut the cooked steak into 5 to 7 inch lengths, look at which direction the fibers run, and slice perpendicular at 1/4 inch."
      },
      {
        q: "How long should you marinate skirt steak?",
        a: "Two to six hours for an acidic marinade. Skirt absorbs marinade better than most cuts because its loose bundles give liquid somewhere to go, but citrus and vinegar still work mostly on the outer 1/8 inch, and past about eight hours they leave the surface chalky and gray. If the marinade has pineapple, papaya, or fresh ginger in it, cut that to two hours — those enzymes keep breaking down protein and will turn the exterior to mush. Wipe the steak dry before it hits the fire, because wet meat steams instead of browning."
      }
    ]
  }

];
