// pork.js — the pork primals the site was missing.
//
// The section shipped with three pork cuts and one of them was ground. No ribs
// of any kind, no chop, no tenderloin, no ham, no hock. A butcher counter has
// forty SKUs off this animal and we had shoulder, belly and a tube of mince.
//
// Written to the same depth as beef-braise.js: what the muscle did while the
// animal was alive, what that means for how it cooks, and where the failure
// mode is. Temps follow the 2011 USDA revision — whole-muscle pork is done at
// 145°F with a three-minute rest, not 160°F, and the older number is the single
// most common reason people think they dislike pork loin.
module.exports = [

{
  slug: "pork-loin-chop",
  name: "Pork Loin Chop",
  animal: "pork",
  shelf: "pork",
  aka: ["center-cut chop", "rib chop", "porterhouse chop", "New York chop", "pork steak"],
  match: ["pork chop", "loin chop", "rib chop"],
  dek: "The chop is the same longissimus that gives beef its ribeye, on an animal that never got the chance to marble it. That leaves a lean, mild muscle with a very narrow window: 145°F and it's juicy, 160°F and it's the dry pork chop everyone remembers from childhood.",
  anatomy: "The loin runs along the top of the back from the shoulder to the hip, sitting above the ribs and either side of the spine. It is a postural muscle — it holds the back rigid and does almost no locomotive work — so it stays tender and accumulates very little connective tissue or intramuscular fat. Where you cut it changes what you get. Toward the shoulder (blade end) the chop carries more fat and several muscle groups and is the most forgiving. The centre cut is the pure eye of longissimus, leanest and least forgiving. Toward the hip you start picking up the tenderloin on the other side of the bone, giving a porterhouse chop with two muscles of completely different thickness that finish at different times. The bone matters: bone-in chops cook slower next to the bone and stay juicier for it.",
  science: "Modern pork is bred lean, which means there is very little intramuscular fat to mask moisture loss. Myosin denatures from around 105°F, the fibers begin contracting and expelling water in earnest past 140°F, and by 160°F a loin chop has lost roughly a fifth of its weight as liquid. There is almost no collagen here to convert into gelatin and compensate, which is why the same 160°F that makes a shoulder succulent makes a chop chalky. Brining changes the arithmetic — salt dissolves myosin filaments so the protein matrix holds onto water it would otherwise squeeze out — and a 6% brine for an hour is the difference between a good chop and a great one.",
  methods: [
    { m: "Reverse sear",
      why: "A lean muscle with a 15-degree window benefits enormously from approaching the target slowly, so the interior arrives evenly rather than as a gradient from grey band to raw centre.",
      how: "250°F oven or the cool side of a grill until 135°F internal, twenty-five to forty minutes for a 1.5-inch chop. Rest five minutes, then a screaming-hot cast iron pan with a little oil, ninety seconds a side. Carryover brings it to 145°F. Thin chops under an inch are not worth reverse searing — just sear them hard." },
    { m: "Pan sear and baste",
      why: "For thick chops, butter basting transfers heat to the top surface through the fat, cooking it from both directions without flipping repeatedly and without an oven.",
      how: "Dry the chop, salt an hour ahead. Hot pan, oil, sear four minutes undisturbed. Flip, drop the heat to medium, add butter, garlic and thyme, and spoon the foaming butter over for three to four minutes. Stand it on the fat edge for thirty seconds to render it. Pull at 140°F." },
    { m: "Brine then grill",
      why: "Direct grilling is fast enough that a lean chop can go from underdone to overdone in ninety seconds. Brine widens the margin by making the meat physically hold more water.",
      how: "6% brine — 60g salt per litre — for one to two hours, no longer or the texture turns hammy. Rinse and dry thoroughly. Hot direct heat, two to three minutes a side for a one-inch chop, moved to indirect if it's thicker." },
    { m: "Grill the blade-end chop like shoulder",
      why: "Blade-end chops carry real intramuscular fat and connective tissue because they include part of the shoulder, so they tolerate — and want — higher final temperatures.",
      how: "Indirect at 300°F to 165-175°F internal. This is the one chop that gets better past 145°F rather than worse, and it is usually the cheapest on the shelf." }
  ],
  avoid: {
    m: "Cooking a centre-cut chop to 160°F, or trusting a recipe written before 2011",
    why: "The USDA lowered the whole-muscle pork recommendation from 160°F to 145°F with a three-minute rest in 2011, and a great many recipes and every childhood memory predate that. The gap is not cosmetic. Between 145 and 160°F a lean loin chop loses roughly another 10% of its weight as expelled water, and unlike shoulder it has no collagen converting to gelatin and no fat rendering to compensate for the loss. There is nothing in the muscle to give back. That is the entire reason a generation grew up believing pork is dry — they were eating a lean cut cooked to a temperature that only ever made sense for ground meat and for a trichinosis risk that has been effectively absent from commercial US pork for decades."
  },
  buying: "Ask for bone-in, at least an inch and a quarter thick, and preferably an inch and a half. Thin chops are a trap — there is no thickness for a temperature gradient to live in, so the outside overshoots before the centre arrives. Bone-in costs less per pound of meat and cooks more gently. Look for chops with a visible fat cap and, if you can find it, meat that reads pinkish-red rather than pale grey-pink; very pale, wet-looking pork is often a sign of PSE (pale, soft, exudative) muscle that will never hold water well no matter what you do. Heritage breeds — Berkshire, Duroc, Mangalitsa — actually marble, and on a loin chop that difference is more noticeable than on any other pork cut. Blade-end chops are cheaper and more forgiving if you're feeding people who will wander off and leave them on the grill.",
  temps: "Pull at 140°F, rest three to five minutes, serve at 145°F. It should be faintly pink in the middle, which is correct and safe. Blade-end chops with connective tissue: 165-175°F. Never cook a centre-cut chop past 150°F.",
  faq: [
    { q: "Is pink pork safe?",
      a: "Yes, for whole-muscle cuts. The USDA has recommended 145°F plus a three-minute rest since 2011, and at that temperature a loin chop is visibly pink at the centre. Trichinella has been essentially eliminated from commercial US pork production, and the pathogens that remain live on the surface, which a sear handles instantly. Ground pork is different — grinding distributes surface bacteria throughout, so that still needs 160°F." },
    { q: "Why is my chop dry even at 145°F?",
      a: "Two likely causes. Either it was too thin, so the outer half overshot badly while the centre reached temperature — under an inch it's very hard to avoid — or it was PSE pork, which has an abnormally low pH that denatures proteins early and leaves the muscle unable to retain water at any temperature. Pale, soft, wet-looking meat sitting in a puddle in the package is the tell. A brine helps the first problem and only partly helps the second." },
    { q: "Should I brine or dry-brine?",
      a: "Dry-brine — salting the surface and leaving it uncovered in the fridge — for anything you intend to sear, because it draws surface moisture out and gives a far better crust. Wet-brine for anything going on a grill where the risk is overshooting, because it adds water the muscle can afford to lose. Do not do both, and do not wet-brine longer than two hours or the texture starts moving toward ham." },
    { q: "What's the difference between a rib chop and a centre-cut chop?",
      a: "The rib chop comes from closer to the shoulder end and has the rib bone attached along one side, with a single muscle and usually a better fat cap. The centre cut sits further back and is leaner. Further back still and you reach the sirloin end, where a chop picks up the tenderloin on the far side of a T-shaped bone — a porterhouse chop, which looks impressive and is genuinely awkward to cook because the tenderloin finishes several degrees before the loin." }
  ]
},

{
  slug: "pork-tenderloin",
  name: "Pork Tenderloin",
  animal: "pork",
  shelf: "pork",
  aka: ["pork fillet", "psoas major", "pork filet mignon"],
  match: ["pork tenderloin", "pork fillet"],
  dek: "The single most tender muscle on the animal, and the leanest thing in the meat case — under 3% fat. It cooks in twenty minutes and it is ruined in twenty-five, which makes it the cut most often destroyed by people who are being careful.",
  anatomy: "The psoas major runs along the underside of the spine, inside the ribcage, tucked beneath the loin. It is a hip flexor that is essentially never loaded in a standing animal — it does not bear weight, it does not drive locomotion, and it spends its life protected inside the body cavity. Muscles that do nothing stay fine-grained and accumulate almost no connective tissue, which is why this is the tenderest cut on every four-legged animal that has one. Each pig yields two, each around a pound. One end tapers to a thin tail and the other is a thicker head, which is a real problem: the tail is done several minutes before the head, so it either gets tucked under and tied or cut off and cooked separately. The silverskin — a sheet of tough, non-rendering elastin along one side — must come off, because unlike collagen it does not convert at any temperature and will contract and bow the whole muscle in the pan.",
  science: "Fine muscle fibers, negligible collagen, and almost no intramuscular fat. That combination means there is nothing buffering the cooking process: no fat rendering, no gelatin forming, no margin. The muscle holds water only as long as the protein matrix does, and past 150°F that matrix contracts hard and wrings out. Because the cut is thin — usually two to three inches across — heat travels to the centre in minutes, so the difference between 140°F and 160°F can be ninety seconds of inattention. Its leanness also means it takes on marinades and cures unusually well, since there's little fat to block penetration, and it benefits more than any other pork cut from a salt treatment before cooking.",
  methods: [
    { m: "Sear and roast",
      why: "The standard because it's fast and it works: hard crust from the pan, gentle even finish in the oven, total time under twenty-five minutes.",
      how: "Trim the silverskin. Salt an hour ahead. Sear all sides in a hot pan, four to five minutes total, then into a 400°F oven for ten to fifteen minutes until 140°F. Rest five. Slice thick against the grain." },
    { m: "Sous vide",
      why: "Removes the window problem entirely. The muscle cannot overshoot a bath set to its target, which matters more here than on any other cut of pork.",
      how: "138-140°F for one to two hours, then dried thoroughly and seared hard for sixty seconds a side. Longer than about four hours and the texture starts going mealy — this is a lean muscle, and extended holds soften it past pleasant." },
    { m: "Spatchcock the thick end, or tie",
      why: "The taper means the two ends genuinely finish at different times, and evening the thickness is more effective than any temperature technique.",
      how: "Either fold the thin tail back under itself and tie the whole thing at two-inch intervals with butcher's twine, or butterfly the thick head open so both ends are the same depth. Tying also holds the round shape so it browns evenly on all sides." },
    { m: "Grill hot and fast",
      why: "Small diameter means direct heat can cook it through before the outside burns, which is not true of most roasting cuts.",
      how: "Direct high heat, turned every two minutes for a total of twelve to fifteen. Move to indirect if the exterior is colouring faster than the interior climbs. Pull at 140°F." }
  ],
  avoid: {
    m: "Braising, stewing, or any long moist cook",
    why: "This is the cut people reach for when they want something nice, and then treat it like a roast. It has almost no collagen, and collagen is the only thing that makes a long cook worthwhile. In a braise the fibers pass 160°F within twenty minutes, contract, and expel their water into the liquid — and then nothing else happens, because there is no connective tissue left to convert into gelatin and no fat to render. Two hours later you have a pot of flavourful liquid and a piece of meat with the texture of rope. Chuck and shoulder get better over hours because they are paying into an account; tenderloin has no account. The same logic rules out the slow cooker, which is where a great many tenderloins go to die."
  },
  buying: "Sold two to a package as often as singly, usually a pound to a pound and a quarter each. Look for a uniform pinkish-red colour and avoid anything sitting in a pool of liquid. Check whether the silverskin has been removed — many are sold with it on, and it is worth taking off yourself with a thin flexible knife, sliding the blade underneath and angling slightly upward so you lose as little meat as possible. Do not confuse it with pork loin, which is a much larger, wider roast sold by the same word and cooked completely differently; recipes for one will destroy the other. Avoid pre-marinated tenderloins in plastic — they are typically pumped with a salt-phosphate solution that makes the texture spongy and the flavour flat.",
  temps: "Pull at 138-140°F, rest five minutes, serve at 145°F. Sous vide 138-140°F. It should be clearly pink through the centre. Above 150°F it is unrecoverable.",
  faq: [
    { q: "What's the difference between pork loin and pork tenderloin?",
      a: "Completely different muscles that share a name and nothing else. Pork loin is a large, wide roast from the top of the back — three to five pounds, often sold with a fat cap, roasted for an hour or more. Tenderloin is a thin cylinder from under the spine, about a pound, cooked in twenty minutes. Using a loin recipe on a tenderloin overcooks it by a factor of three. Read the package carefully; the words are nearly identical and the outcomes are not." },
    { q: "Do I really need to remove the silverskin?",
      a: "Yes. Silverskin is elastin, not collagen, and the distinction matters — collagen hydrolyzes into gelatin with time and heat, elastin does not convert at any temperature you will ever reach in a kitchen. Left on, it stays as a tough band, and worse, it contracts as it heats and bows the tenderloin into a curve so it cooks unevenly. It takes ninety seconds to remove." },
    { q: "Can I stuff it?",
      a: "Yes, and it's one of the better uses for the cut, because the stuffing adds moisture the muscle doesn't have. Butterfly it lengthwise, pound to an even half inch, fill, roll and tie. Cook to the same 140°F — but measure in the meat, not the stuffing, and keep the filling to things that don't need cooking themselves, since twenty minutes won't do it." }
  ]
},

{
  slug: "baby-back-ribs",
  name: "Baby Back Ribs",
  animal: "pork",
  shelf: "pork",
  aka: ["loin back ribs", "back ribs", "Canadian back ribs"],
  match: ["baby back", "back ribs", "loin ribs"],
  dek: "Cut from the top of the ribcage where the ribs meet the spine, under the loin. Leaner, shorter and more curved than spares, they cook roughly two hours faster — which is why using a spare-rib timing on them produces the mushy, meat-falling-off-the-bone texture that competition judges mark down.",
  anatomy: "Baby backs come from the upper third of the ribcage, the section nearest the backbone, after the loin has been removed from above them. That removal is why they are short — eight to thirteen ribs running from about three to six inches, curved sharply because they follow the arc of the spine. The meat sits both between the bones (intercostals) and in a layer on top, which is loin trim. A rack runs one and a half to two and a half pounds. They are called baby not because of the animal's age but because they are small relative to spare ribs. On the bone side there is a membrane — the peritoneum, a thin translucent sheet — which does not render, blocks smoke and rub, and turns to a papery layer that makes the rack impossible to bite cleanly.",
  science: "Intercostal muscle is well-worked, so it carries meaningful collagen, but the racks are thin and the loin meat on top is lean. That is the tension in cooking them: they need enough time above 160°F for the connective tissue between the bones to convert to gelatin, but the thin loin meat dries out over a long cook. The window lands around four to five hours at 225-250°F, against six-plus for spares. Bend test beats temperature here — probing a thin rack between bones is unreliable, but picking the rack up at one end and watching the surface crack when it bends to about a 90-degree droop is a direct read on whether the collagen has gone.",
  methods: [
    { m: "Low smoke, unwrapped then wrapped",
      why: "Unwrapped sets bark and takes smoke while the surface is still tacky; wrapping later pushes through the stall and finishes collagen conversion without drying the lean top meat.",
      how: "225-250°F. Two hours unwrapped, then wrapped in foil with a splash of liquid for one and a half to two hours, then thirty to sixty minutes unwrapped with sauce to set. That is the 3-2-1 method compressed — full 3-2-1 is for spares and will turn baby backs to mush." },
    { m: "Oven low and slow",
      why: "Ribs are one of the few barbecue items that transfer well indoors, because the texture comes from time at temperature rather than from smoke.",
      how: "275°F, wrapped in foil on a sheet pan, two to two and a half hours. Unwrap, sauce, and finish under a broiler for three to five minutes to caramelize. Liquid smoke or smoked paprika in the rub compensates for what the oven can't do." },
    { m: "Grill indirect",
      why: "A kettle or a two-zone gas grill holds 250°F comfortably and adds real wood smoke without a dedicated smoker.",
      how: "Coals banked to one side, rack bone-side down on the cool side, a chunk of fruit wood on the coals. Lid vents above the meat to draw smoke across it. Three to four hours, spritzing with cider vinegar every forty-five minutes." },
    { m: "Sous vide then finish",
      why: "Precisely controls the collagen conversion, which is the one variable that decides rib texture, and makes them a weeknight item.",
      how: "165°F for eighteen to twenty-four hours gives a sliceable, competition-style texture; 145°F for thirty-six hours gives something closer to a chop on a bone. Chill, then finish hot on a grill or under a broiler with sauce for ten minutes." }
  ],
  avoid: {
    m: "Leaving the membrane on, and boiling them first",
    why: "Two separate crimes. The membrane on the bone side is elastin and connective sheet that never renders — it blocks rub and smoke from ever reaching the meat, and cooks into a tough papery layer that peels off in your teeth as you bite. It comes off in ten seconds: work a butter knife under it at one end, grab with a paper towel, and pull. Boiling is the more serious error. It is often recommended as a shortcut to tenderness, and it does tenderize, by leaching the water-soluble flavour compounds and a good deal of the fat into a pot of water you then pour down the sink. What comes out is grey, waterlogged, and needs sauce to taste of anything — which is why people who boil their ribs believe ribs are a sauce delivery system."
  },
  buying: "A full rack is thirteen bones; anything sold as eight or nine has been trimmed and you're paying rack price for less meat. Look for even thickness across the rack and a decent layer of meat over the bones rather than shiners — spots where the bone is exposed because the butcher cut too close. Racks around two pounds are the sweet spot; much over two and a half and they may be from an older, larger animal with coarser meat. Check whether the membrane is already removed, which some processors do. Avoid enhanced or pre-seasoned racks in solution, which cook up spongy. Two racks feed three to four people properly, which surprises people the first time.",
  temps: "Not a temperature cut. Target 195-203°F internal if you measure, but the reliable test is the bend: lift the rack a third of the way along with tongs and it should droop to roughly 90 degrees with the surface cracking. Falling completely off the bone is overdone.",
  faq: [
    { q: "What's the difference between baby back and spare ribs?",
      a: "Position on the ribcage. Baby backs come from the top, next to the spine, after the loin is removed — short, curved, leaner, cook in four to five hours. Spares come from the lower ribcage toward the belly — longer, flatter, fattier, more connective tissue, and need six or more hours. Spares have more flavour, baby backs have more meat on top of the bone. Do not swap the cook times." },
    { q: "Should the meat fall off the bone?",
      a: "No, though this is genuinely contested. Competition standard is that the meat pulls cleanly where you bite and leaves the rest intact — a bite mark. Fall-off-the-bone means the collagen has gone well past conversion and the muscle fibers have lost structure, which reads as mushy rather than tender. If you like it that way, it is your dinner. But if the ribs are disintegrating when you pick them up, that's overcooked, not perfect." },
    { q: "Do I need a smoker?",
      a: "No. The texture comes entirely from hours between 160 and 200°F, which an oven does perfectly well. What the oven can't do is smoke, so you lose that flavour layer — smoked paprika in the rub, a little chipotle, or finishing over a grill for the last twenty minutes gets you a good part of the way. Boiling is not a substitute for either." }
  ]
},

{
  slug: "spare-ribs",
  name: "Spare Ribs",
  animal: "pork",
  shelf: "pork",
  aka: ["side ribs", "St. Louis cut", "spareribs", "rib tips"],
  match: ["spare ribs", "spareribs", "st louis ribs"],
  dek: "The lower ribcage, cut from the belly side — longer, flatter and considerably fattier than baby backs. More connective tissue and more intramuscular fat means more time and more flavour, and it is the rack most barbecue people actually prefer.",
  anatomy: "Spares run from where the baby backs end down to the sternum, taking in the lower portion of the ribs plus the cartilage and the sternum bone at the bottom. A full untrimmed rack is a ragged trapezoid weighing three to four pounds. The St. Louis cut is that rack squared off — the sternum, cartilage and the flap of meat known as the rib tips removed, leaving a neat rectangle that cooks evenly. Those trimmings are not waste; rib tips are excellent smoked separately and are a Chicago institution in their own right. Because this section sits against the belly, the meat between and over the bones is interleaved with fat in a way the loin-side baby backs never are.",
  science: "Higher fat and substantially more collagen than baby backs, which is why they take longer and why they are more forgiving. The fat renders slowly across a six-hour cook and bastes the meat internally, so the window between done and overdone is much wider — a spare rack will tolerate an extra forty-five minutes where a baby back rack would turn to paste. The flat, even geometry of a St. Louis cut also matters: an untrimmed rack has thin cartilage-heavy sections that finish long before the thick meaty end, so trimming is not cosmetic, it is what lets the whole rack finish at once.",
  methods: [
    { m: "3-2-1 smoke",
      why: "The classic timing exists for this rack specifically — three hours of smoke to set bark, two wrapped to power through the stall and convert collagen, one unwrapped to firm up and set sauce.",
      how: "225-250°F. Three hours unwrapped over fruit or hickory wood. Two hours wrapped in foil with butter, brown sugar and a splash of cider or apple juice. One hour unwrapped, sauced in the last twenty minutes." },
    { m: "Hot and fast",
      why: "Their fat content lets spares survive a higher pit temperature that would dry out a leaner rack, cutting the cook roughly in half.",
      how: "300-325°F, unwrapped, two and a half to three hours total, spritzing every thirty minutes. Bark sets harder and darker. This is how a lot of restaurant volume is actually run." },
    { m: "Oven braise then broil",
      why: "Wet heat guarantees collagen conversion without a pit, and a final blast under the broiler does the caramelization the braise can't.",
      how: "300°F, covered in a roasting tin with an inch of liquid, two and a half hours. Lift out, dry the surface, sauce, and broil five minutes until it blisters. Reduce the braising liquid into the sauce." },
    { m: "Chinese-style char siu",
      why: "The fat content that suits barbecue also suits a sweet lacquered glaze, and spares are the traditional cut for it.",
      how: "Marinate overnight in hoisin, soy, honey, five spice and fermented bean curd. Roast at 350°F for an hour, basting and turning every fifteen minutes, then a final high-heat blast to lacquer the surface." }
  ],
  avoid: {
    m: "Cooking a full untrimmed rack as-is and expecting it to finish evenly",
    why: "An untrimmed spare rack is not a uniform piece of meat. The sternum end is cartilage and thin flap meat; the top end is thick intercostal muscle over heavy bone. Put the whole thing on at 225°F and the tips are done and drying out by hour three while the meaty end still has two hours to go, so you either pull it all early and serve tough ribs or run it long and serve leathery tips alongside good ones. Trimming to a St. Louis rectangle takes four minutes with a heavy knife and makes the rack a single uniform thickness that finishes at one time. Cook the trimmings separately — they're done in half the time and they're the best thing on the tray."
  },
  buying: "Ask for St. Louis cut if you don't want to trim, though a full rack costs less per pound and gives you the rib tips for free. Look for racks with even meat coverage and no shiners. Three to three and a half pounds trimmed is a good size. The meat should be well marbled with fat between the bones — spares that look lean are usually from a leaner commodity animal and won't reward the long cook. Ask the butcher for the sternum and cartilage if they trim it for you; it makes excellent stock. One St. Louis rack feeds two to three, meaningfully more than a baby back rack of the same weight because there's more meat relative to bone.",
  temps: "195-205°F internal, or the bend test — 90-degree droop with cracking on the surface. Spares tolerate the upper end of that range better than baby backs, so 203°F is a safe target rather than an overshoot.",
  faq: [
    { q: "What exactly is the St. Louis cut?",
      a: "A full spare rack with the sternum bone, the attached cartilage and the flap of meat over it removed, leaving a rectangular rack of uniform thickness. It is a trim, not a different part of the animal. It costs more per pound because someone did the work, and it cooks far more evenly, which is worth it unless you want the tips — which are excellent and cook in about half the time." },
    { q: "Why are mine tough after six hours?",
      a: "Almost always pit temperature that's actually lower than the dial says, or pulling during the stall. Collagen conversion is a function of time above roughly 160°F, and if your pit is really running 200°F rather than 225°F, six hours isn't enough. Check with an independent probe at grate level. The other possibility is that you pulled at a temperature reading rather than a texture test — bones and the probe hitting fat make internal readings on ribs unreliable, so trust the bend." },
    { q: "Do I have to wrap?",
      a: "No, but it does two things. It pushes through the evaporative stall faster, and it traps steam that speeds collagen conversion. Unwrapped the whole way gives a harder, better bark and takes longer; wrapped gives a more tender, slightly softer result. Butcher paper is a middle path — breathable enough to keep some bark, closed enough to help. It's a preference, not a rule." }
  ]
},

{
  slug: "country-style-ribs",
  name: "Country-Style Ribs",
  animal: "pork",
  shelf: "pork",
  aka: ["blade end ribs", "country ribs", "pork shoulder steaks"],
  match: ["country style ribs", "country ribs"],
  dek: "Not ribs. They are cut from the blade end of the loin where it meets the shoulder, sold as thick meaty strips that sometimes carry a piece of the shoulder blade rather than a rib bone. Cheap, fatty and excellent — as long as you cook them like shoulder and not like ribs.",
  anatomy: "Country-style ribs come from the front end of the loin, right at the junction with the shoulder, taken from the fourth to sixth rib area. That location is why they behave differently to anything else sold under the word rib. They include part of the blade end of the longissimus but also the fatter, harder-working muscles that belong to the shoulder — usually spinalis dorsi and the front of the loin eye, with seams of fat and connective tissue running through. Some racks are cut boneless, some carry a section of scapula. Because they are cut across several muscles, one strip may have a lean loin section at one end and a fatty shoulder section at the other, which is the thing to look for when buying.",
  science: "This is essentially shoulder meat with some loin attached, which means it has real collagen and real intramuscular fat — unlike the loin chops sold a few inches further back. It rewards the shoulder treatment: hours above 160°F, target 195-205°F, where the connective tissue converts and the fat renders. Treated as a chop and pulled at 145°F it is chewy, because the collagen is intact and there was never enough tenderness in these muscles to carry it. That inversion — the same rack being tough at 145°F and tender at 200°F — is the single thing to understand about the cut.",
  methods: [
    { m: "Braise",
      why: "The cheapest and most reliable route to converting the collagen, and the braising liquid becomes the sauce.",
      how: "Brown hard, then 300°F covered with liquid halfway up, two to two and a half hours until a fork twists freely. Barbecue sauce, cider, or a tomato base all work. Skim the fat before reducing." },
    { m: "Smoke like a small pork butt",
      why: "They are shoulder meat, so they take smoke the same way and reach pulling texture in a third of the time a whole butt needs.",
      how: "250°F, three to four hours, wrapped once the bark sets at around 165°F, to 200-205°F internal. They shred." },
    { m: "Slow cooker",
      why: "One of the few cuts genuinely suited to it — enough fat and collagen that eight hours of low wet heat improves rather than ruins it.",
      how: "Brown first, then six to eight hours on low with sauce or aromatics. Drain and reduce the liquid separately, because a slow cooker won't evaporate anything." },
    { m: "Grill low, then sauce",
      why: "Indirect heat renders the fat and softens the connective tissue while direct heat at the end sets the glaze.",
      how: "Indirect at 275-300°F for ninety minutes to two hours, then sauced and moved over direct heat for the last five minutes, turning constantly so the sugar doesn't burn." }
  ],
  avoid: {
    m: "Grilling them fast like a chop, to 145°F",
    why: "The word rib on the label and the chop-like shape lead people to treat these as a quick-cooking cut, and the result is reliably disappointing. These are shoulder muscles. They carry the kind of connective tissue that requires hours above 160°F to convert into gelatin, and at 145°F every bit of it is still intact and rubbery. Worse, because the strips are cut across a seam, a fast cook leaves you chewing through sheets of collagen between mouthfuls of meat that is technically cooked correctly. Everything about them — price, fat content, muscle origin — says treat this like a pork butt. The only thing saying otherwise is the marketing name."
  },
  buying: "Look for strips with visible fat marbling and seams of connective tissue rather than the leanest ones on display — the lean ones are cut too far toward the loin and will disappoint no matter how you cook them. Bone-in has more flavour and costs less. They are usually among the cheapest pork in the case, often half the price of a loin chop, which is the main argument for knowing about them. Buy them thick, an inch and a half or more, since thin ones dry at the edges before the middle converts. If the package looks uniformly pale and lean, it was cut from the loin side and you're better off buying a shoulder and cutting your own.",
  temps: "195-205°F internal, exactly like pork shoulder. Fork-tender is the real test. Do not stop at 145°F.",
  faq: [
    { q: "Are these actually ribs?",
      a: "No. They're cut from the blade end of the loin near the shoulder, and often contain no rib bone at all — where there is bone, it's usually a piece of the shoulder blade. The name is a marketing convention that stuck. This matters practically, because every instinct the word rib gives you about how to cook them is wrong for this cut." },
    { q: "Why were mine tough?",
      a: "Almost certainly undercooked, which is counterintuitive. These carry shoulder-level connective tissue, and connective tissue only converts to gelatin with hours above about 160°F. Pulled at 145 or 160°F they're tough. Taken to 200°F over two to three hours they're tender. If yours were tough, the fix is more time, not less." },
    { q: "Can I substitute them for pork shoulder in a recipe?",
      a: "Yes, and it's the best use for them. They're the same meat in a smaller, faster-cooking format — a pulled pork recipe that calls for eight hours on a whole butt will be done in two and a half to three with country-style ribs. Reduce the liquid proportionally and check for fork-tenderness rather than following the original timing." }
  ]
},

{
  slug: "fresh-ham",
  name: "Fresh Ham",
  animal: "pork",
  shelf: "pork",
  aka: ["pork leg", "raw ham", "uncured ham", "leg roast"],
  match: ["fresh ham", "pork leg", "leg of pork"],
  dek: "The hind leg, uncured and unsmoked — which makes it a large lean roast rather than the pink thing people picture. It is what prosciutto and country ham are made from before anything is done to them, and roasted whole with the skin on it produces the best crackling on the animal.",
  anatomy: "The leg runs from the hip down to the hock and can weigh eighteen to twenty pounds whole, which is why it is usually sold split into the shank end (lower, more sinewy, easier to carve around a single bone) and the sirloin or butt end (upper, meatier, awkward to carve because of the aitch bone). It is a locomotive limb, so the muscles are large, well-defined and separated by clean seams — the same muscles that on beef become top round, bottom round and eye of round. Those muscles do real work but they are not weight-bearing in the way the shoulder is, so the collagen content sits between loin and shoulder. The skin, if left on, is thick and covers a substantial fat cap, and that combination is what makes it the crackling cut.",
  science: "Leaner than shoulder and larger than anything else on the animal, which creates the central problem: the outside is exposed to heat for hours while the interior climbs slowly. There is enough collagen that a low, long roast improves it, but not enough fat to protect it at pulled-pork temperatures the way a shoulder is protected — a fresh ham taken to 200°F is often dry and stringy rather than succulent. The reliable target is 160-175°F, high enough to soften the connective tissue meaningfully but short of where the lean muscles wring out. Skin behaves separately: it needs the surface dried thoroughly and then a period of high heat to puff, because crackling is water in the skin flashing to steam inside a collagen matrix.",
  methods: [
    { m: "Slow roast with a crackling finish",
      why: "Low heat gives the collagen time without cooking the lean muscles to death; a final blast at high temperature does the skin, which needs a completely different treatment to the meat.",
      how: "Score the skin, salt it heavily, and leave uncovered in the fridge overnight to dry. 300°F for four to five hours until 160-170°F internal, then crank to 475°F for twenty to thirty minutes until the skin blisters and puffs. Rest thirty minutes." },
    { m: "Wet-brine then roast",
      why: "A large lean roast loses a lot of water over a five-hour cook, and brining pre-loads it with enough that the finished meat still eats moist.",
      how: "6% brine for one to two days depending on size, with sugar, bay and juniper. Rinse, dry hard for crackling, then roast as above. This is essentially a mild home cure and it transforms the cut." },
    { m: "Cut into roasts and cook separately",
      why: "The leg is several muscles with different textures, and separating them lets each be cooked correctly rather than compromised.",
      how: "Seam it out into the top round, bottom round and eye. Roast the top round like a lean roast to 145°F, braise the bottom round, and cube the eye for stew or grind it." },
    { m: "Cure it",
      why: "This is the cut every dry-cured ham in the world starts as, and a basic home cure is achievable without special equipment.",
      how: "For a quick version, an equilibrium cure at 2.5% salt and 0.25% cure #1 by weight, bagged and refrigerated one day per half-inch of thickness, then rinsed and roasted or smoked. Full dry-curing to prosciutto needs controlled humidity and months, not a fridge." }
  ],
  avoid: {
    m: "Treating it like a pork shoulder and taking it to 200°F for pulled pork",
    why: "They are both large pork roasts and cost about the same, so the substitution seems obvious, and it is the most common way this cut disappoints. Shoulder works at 200°F because it is roughly 20% fat interlaced through the muscle and packed with collagen — both of those are actively protecting the meat while the fibers give up their water. The leg has neither in that quantity. Its muscles are large, lean and cleanly separated, so at 200°F the fibers have wrung out with no rendering fat coating them and not nearly enough gelatin to compensate. What you get is stringy and dry, and it shreds in the way a dry thing shreds rather than the way a rich thing pulls. Stop at 160-175°F and slice it."
  },
  buying: "Ask specifically for fresh ham or pork leg, and make clear you want it uncured — most butchers will assume you mean a cured ham otherwise, and supermarkets almost always mean cured. Skin-on is the whole point if you want crackling; ask them not to remove it. Whole legs are eighteen to twenty pounds and feed twenty-plus people; the shank end at eight to ten pounds is the more practical buy and carves more easily. Look for a thick, even fat cap under the skin. If you're going to seam it out into separate roasts, buy the sirloin end, which has the better muscles. Heritage breeds are worth the premium here more than on most cuts, since there's little fat to hide behind.",
  temps: "160-175°F internal for slicing — that is the range where collagen has softened but the lean muscles still hold water. Skin needs a separate final blast above 450°F. Do not take it to 200°F.",
  faq: [
    { q: "Is fresh ham the same as the ham I buy sliced?",
      a: "Same muscle, entirely different product. Deli ham, city ham and country ham are all this leg after curing — brined, or salt-packed, often smoked, sometimes cooked. Fresh ham is the raw leg with none of that done to it, so it tastes like roast pork rather than ham. If a recipe says ham and expects a pink, salty, ready-cooked joint, fresh ham is not a substitute." },
    { q: "How do I actually get crackling?",
      a: "Three things, all required. Score the skin through the fat but not into the meat, in lines about a centimetre apart. Dry the surface thoroughly — salt it and leave it uncovered in the fridge overnight, which pulls moisture out. And finish with real high heat, above 450°F, at the end rather than the beginning. Crackling puffs when water trapped in the skin flashes to steam; a wet skin just leathers, and a low oven never gets there." },
    { q: "Can I make prosciutto from it?",
      a: "That is precisely what prosciutto is, but not in a domestic fridge. Real dry-curing needs a year or more at controlled temperature and humidity, with the salt penetrating slowly enough to protect the interior before spoilage reaches it. Getting that wrong on an eighteen-pound leg is a genuine health risk, not a spoiled dinner. A short equilibrium cure followed by cooking is the safe home version." }
  ]
},

{
  slug: "pork-hock",
  name: "Pork Hock",
  animal: "pork",
  shelf: "pork",
  aka: ["ham hock", "pork knuckle", "shank end", "eisbein", "schweinshaxe"],
  match: ["ham hock", "pork hock", "pork knuckle"],
  dek: "The joint between the foot and the leg — almost entirely skin, tendon, cartilage and bone, with very little actual meat. That composition is the point: it is the cheapest source of gelatin in the shop, and a single hock will give a pot of beans or greens a body that no amount of stock concentrate replicates.",
  anatomy: "The hock sits at the bottom of either the front or hind leg, above the trotter and below the main muscle of the shoulder or ham. What's there is the tibia or radius surrounded by a thin layer of hard-worked muscle, wrapped in a heavy sheath of tendon and connective tissue, covered in thick skin. It is one of the highest ratios of collagen to muscle on any animal. Hind hocks are meatier than front. Sold three ways that behave completely differently: fresh (raw, pale), smoked (cured and smoked, dark pink, salty — the standard for beans and greens), and cured but unsmoked. A recipe calling for one and given another will come out either bland or overwhelmingly salty.",
  science: "This is a collagen delivery system. Long, wet, low cooking hydrolyzes that connective tissue into gelatin, which dissolves into the surrounding liquid and gives it viscosity and mouthfeel — the reason a pot of greens with a hock in it coats the spoon and one without doesn't. The conversion needs hours between roughly 160 and 200°F, and there is no shortcut: the collagen content that makes it valuable is exactly what makes it slow. The skin is a second consideration. Left in liquid it goes soft and gelatinous, which is right for a braise; taken out and blasted with dry heat at the end it can be made to crackle, which is what German schweinshaxe does and why that dish has both textures at once.",
  methods: [
    { m: "Simmer into beans, greens or soup",
      why: "The classic use, and the most efficient — the gelatin, salt and smoke all migrate into the pot, seasoning and thickening it simultaneously.",
      how: "One smoked hock per pot, in from the start, simmered two to three hours. Pull it out, strip the meat off, discard the bone and most of the skin, and return the meat. Taste before adding any salt — a smoked hock brings a lot." },
    { m: "Braise then crisp",
      why: "Wet heat converts the collagen; dry heat afterwards turns the skin to crackling, giving the German-style result of falling meat under a hard shell.",
      how: "Braise fresh hocks in beer with onion, caraway and bay at 300°F for two and a half hours. Lift out, dry the skin, and roast at 475°F for twenty to twenty-five minutes until it blisters. Reduce the braising liquid for sauce." },
    { m: "Pressure cook",
      why: "Collagen conversion is time-at-temperature and a pressure cooker raises the temperature, which cuts the hours down substantially.",
      how: "Forty-five minutes at high pressure with aromatics, natural release. Good for stock and for beans; less good if you want the skin intact for crisping, since it comes out very soft." },
    { m: "Make stock",
      why: "A hock in a stock pot is the cheapest way to make a stock that sets to a firm jelly, which is what separates a good stock from a thin one.",
      how: "One or two fresh hocks with the usual aromatics, four hours at a bare simmer. Strain and chill — it should set solid enough to hold a spoon upright." }
  ],
  avoid: {
    m: "Using a smoked hock where the recipe assumed a fresh one, and salting the pot early",
    why: "The three versions of this cut are not interchangeable and the packaging rarely makes the difference obvious. A smoked hock has been cured, which means it can carry as much salt as a couple of teaspoons dissolved into your pot before you add anything. Season a pot of beans normally, add a smoked hock, cook it three hours while the salt migrates out, and the result is inedible — and unfixable, because you cannot remove salt from a braise. The rule is simple: add the hock, cook it, and only then taste and season. Going the other way, using a fresh hock in a recipe written for smoked leaves the dish tasting flat and watery, because the smoke and cure were doing most of the seasoning work."
  },
  buying: "Decide which you want before you go: smoked for beans, greens, split pea soup and anything southern; fresh for braising, roasting or stock where you want to control the seasoning. Hind hocks are meatier than front and worth asking for. They should be heavy for their size with thick skin intact. This is among the cheapest things in any butcher's case — often under two dollars a pound — and many shops will effectively give them away. Buy several and freeze them; they keep well and one improves almost any pot of beans. Avoid anything sold sliced into rounds unless you specifically want osso buco-style presentation, since the marrow and gelatin escape faster.",
  temps: "Not a thermometer cut. Braise until the meat pulls from the bone with no resistance and the skin is completely soft — two and a half to three hours at 300°F, or forty-five minutes under pressure. If crisping the skin afterwards, 475°F for twenty minutes.",
  faq: [
    { q: "What's the difference between a ham hock and a pork hock?",
      a: "In practice, curing. Both words refer to the same joint, but ham hock almost always means smoked and cured, while pork hock or fresh hock means raw. Since the salt difference is enormous, check the label rather than trusting the name — and if it's pink and smells of smoke, treat it as heavily salted regardless of what it's called." },
    { q: "Is there any meat on them?",
      a: "Not much, and that's not really the point. A hind hock might give you a few ounces of shredded meat. What you're buying is collagen, skin and bone, which turn into gelatin and body in the liquid. Judged as a piece of meat it's poor value; judged as a seasoning and thickening ingredient it's the best value in the shop." },
    { q: "Can I substitute bacon or pancetta?",
      a: "For the smoke and salt, partly. For the body, no. Bacon brings fat and smoke but almost no collagen, so a pot of beans made with bacon tastes similar and has a thin, watery liquid where the hock version is glossy and coating. If you have no hock, a piece of pork skin or a split trotter added alongside bacon gets you closer than bacon alone." }
  ]
},

{
  slug: "pork-jowl",
  name: "Pork Jowl",
  animal: "pork",
  shelf: "pork",
  aka: ["guanciale", "hog jowl", "pork cheek meat", "jowl bacon"],
  match: ["guanciale", "pork jowl", "jowl bacon"],
  dek: "The cheek and jaw, cured into guanciale in Italy and jowl bacon in the American South. Fattier and more deeply flavoured than belly, with a firmer fat that renders slowly and clean — which is why carbonara and amatriciana specify it and why belly is a downgrade rather than an equivalent.",
  anatomy: "The jowl is the fatty pouch below the eye and along the jawline, covering the masseter muscle. Chewing is constant, low-intensity work, so the muscle underneath is well-used and dense, and the fat around it is structured differently to belly fat — firmer, with a higher melting point and a more granular texture. The piece comes off as a roughly triangular slab of two to four pounds, mostly fat with distinct streaks of dark muscle running through. There's usually a lymph node in the middle that a butcher removes; check for it if you're buying uncured. Cured whole and hung, it becomes guanciale. Cured, smoked and sliced, it becomes jowl bacon.",
  science: "The firmer fat is the entire reason chefs specify it. Jowl fat has a higher proportion of saturated fat than belly fat, so it holds structure longer at temperature and renders into a cleaner, less greasy liquid rather than collapsing quickly the way belly does. That means diced guanciale can be rendered slowly until the fat is out and the remaining meat crisps, and the rendered fat stays clear and stable enough to emulsify with pasta water and cheese — the physical basis of carbonara. Belly fat renders faster and softer, which is why a belly-based carbonara tends to go greasy and split. The dense masseter muscle also concentrates flavour compounds, giving cured jowl a much more pronounced porkiness than cured belly.",
  methods: [
    { m: "Render slowly for pasta",
      why: "Slow rendering separates the fat from the meat without burning either, giving you crisp cubes and a clear fat that will emulsify rather than break.",
      how: "Cut into lardons about a quarter inch. Cold pan, no oil, lowest heat, eight to twelve minutes, stirring occasionally, until the fat has run and the meat is deep gold and crisp at the edges. Keep the fat — it's the sauce base." },
    { m: "Cure it yourself into guanciale",
      why: "It's the most achievable whole-muscle cure at home because the piece is small, the fat protects it, and it needs weeks rather than months.",
      how: "Equilibrium cure at 2.5-3% salt by weight with black pepper, thyme, bay and a little sugar. Bagged and refrigerated three weeks, turning every few days, then rinsed, dried and hung at 55-60°F with 65-75% humidity for three to five weeks until it's lost about 30% of its weight." },
    { m: "Roast as a whole piece",
      why: "Uncured jowl roasted slowly is essentially pork belly with more flavour and a firmer texture, and it's dramatically cheaper.",
      how: "Score the skin if present, salt overnight uncovered, then 300°F for two to two and a half hours until the fat is rendered and the meat is tender, followed by a high-heat blast to crisp." },
    { m: "Fry as jowl bacon",
      why: "The southern American treatment — cured and smoked, then sliced and fried like streaky bacon, with a richer result.",
      how: "Slice thin against the muscle streaks, fry from a cold pan over medium-low until the fat renders and the slices crisp. It renders more fat than belly bacon, so drain it and keep the fat." }
  ],
  avoid: {
    m: "Substituting pancetta or bacon in carbonara and expecting the same sauce",
    why: "This is the substitution every carbonara recipe hedges on, and the reason guanciale is specified is mechanical rather than snobbery. Carbonara's sauce is an emulsion of rendered fat, egg yolk, cheese and starchy water, and emulsions depend on the fat behaving predictably. Jowl fat is firmer and higher-melting, so it renders out slowly and stays a clear, stable liquid that the yolk and cheese will bind with. Belly fat — pancetta and bacon — renders faster, softer and greasier, and it carries more water, so it tends to break the emulsion and leave the sauce oily with scrambled bits. Bacon adds a third problem, since it's smoked and carbonara has no other smoke in it. You can make a good pasta with pancetta. You cannot make the same dish."
  },
  buying: "Butchers who break whole hogs will have it and often haven't got a use for it, so it's cheap. Ask for it skin-on if you plan to roast, skin-off if you plan to cure. Look for a slab with clear streaks of muscle through the fat rather than one that's almost entirely fat — the muscle is where the flavour concentrates. Check that the lymph node has been removed; it's a small firm nodule near the centre. For cured guanciale, Italian imports are excellent and expensive; American producers are increasingly good and cheaper. Do not accept pancetta as a substitute if the shop offers it — they're different cuts, and now you know why it matters.",
  temps: "For rendering, low and slow — around 250-300°F pan surface, taking eight to twelve minutes. For roasting whole, 300°F to an internal 190-200°F so the fat fully renders and the muscle softens. Cured guanciale is not cooked, it's dried to about 30% weight loss.",
  faq: [
    { q: "Guanciale vs pancetta — what's the actual difference?",
      a: "Different cuts of the same animal. Guanciale is the cured jowl; pancetta is the cured belly. Guanciale has firmer, higher-melting fat and a much stronger, more concentrated pork flavour, and it renders cleaner. Pancetta is milder and softer. Neither is smoked, which distinguishes both from American bacon. In Roman pasta dishes — carbonara, amatriciana, gricia — guanciale is the traditional and functionally better choice." },
    { q: "Can I cure guanciale in a normal fridge?",
      a: "The salt-cure stage, yes — that happens in a bag in the fridge and is straightforward. The drying stage is the problem, since a domestic fridge is too dry and too cold, and it will case-harden: the outside dries into a shell that traps moisture inside. A wine fridge held at 55-60°F with a bowl of water for humidity works reasonably well. This is the easiest whole-muscle cure to attempt, but it's still a cure, so weigh it and hit 30% loss rather than guessing." },
    { q: "What do I do with all the rendered fat?",
      a: "Treat it as the best cooking fat you have. Roast potatoes in it, fry eggs in it, use it as the base for a sofrito, or fold a spoonful into cornbread batter. It keeps in a jar in the fridge for a month. Throwing it away is throwing away most of what you paid for." }
  ]
},

{
  slug: "picnic-shoulder",
  name: "Picnic Shoulder",
  animal: "pork",
  shelf: "pork",
  aka: ["picnic ham", "pork arm", "arm shoulder", "lower shoulder"],
  match: ["picnic shoulder", "picnic ham", "pork arm"],
  dek: "The lower half of the front leg, below the Boston butt. More skin, more bone and more connective tissue than the butt, which makes it cheaper, slower and — if you want crackling with your pulled pork — better.",
  anatomy: "The pork shoulder is sold as two pieces. The Boston butt is the upper portion, rectangular and evenly muscled, and it is what most pulled pork recipes assume. The picnic is everything below it, running down the arm toward the hock — a tapering, awkwardly shaped piece with the arm bone through it, a large area of skin, and more seams of connective tissue. It weighs six to nine pounds against the butt's six to eight. Because it is lower down the leg and doing more locomotive work, the muscles are harder-working and the collagen content is higher. The skin is the practical difference: butts are usually sold skinless, picnics almost always with the skin on.",
  science: "Higher collagen than the butt and a slightly lower proportion of intramuscular fat, which means it needs a little longer to reach the same texture but produces a richer, more gelatinous result when it gets there. Both cuts land in the same place — 195-205°F, where collagen has hydrolyzed into gelatin and the muscle bundles separate under light pressure — but the picnic typically takes an extra hour to hour and a half for the same weight. The skin is a separate system: left on through a low smoke it turns to leather, so it either comes off early, gets scored and rendered under high heat at the end, or is removed and cooked separately into cracklings.",
  methods: [
    { m: "Low smoke to pulling texture",
      why: "Identical target to a Boston butt, with more collagen to convert, which is what makes the finished meat noticeably richer.",
      how: "225-250°F, eight to eleven hours for a seven-pounder. Wrap at around 165°F when the bark has set. Pull at 200-205°F, rest an hour wrapped, then shred. Expect an hour or so longer than a butt of the same weight." },
    { m: "Roast for crackling and meat at once",
      why: "The skin is the reason to choose a picnic over a butt, and a two-stage roast gets both the pulled texture and hard crackling out of one piece.",
      how: "Score the skin, salt heavily, refrigerate uncovered overnight. 300°F for six to seven hours to 195°F, then remove, raise the oven to 475°F, and return for twenty to thirty minutes until the skin puffs and blisters." },
    { m: "Cut into cubes for carnitas",
      why: "Cubing exposes far more surface area, cutting the collagen conversion time roughly in half, and the picnic's higher collagen gives a better texture than butt.",
      how: "Two-inch cubes, submerged in lard or their own fat with orange, bay and cumin, at 275-300°F for two and a half to three hours until tender, then raised heat or broiled to crisp the edges." },
    { m: "Braise whole",
      why: "The cheapest and most hands-off route, and the braising liquid picks up an enormous amount of gelatin from the extra connective tissue.",
      how: "Brown, then 300°F covered with liquid a third of the way up, five to six hours. Chill overnight and lift off the fat cap before reheating." }
  ],
  avoid: {
    m: "Leaving the skin on through a long low smoke and expecting crackling",
    why: "The skin is the main reason to buy a picnic rather than a butt, and the standard low-and-slow barbecue treatment destroys it. Crackling happens when water inside the skin flashes to steam fast enough to puff the collagen matrix, and that requires dry heat above about 450°F. Nine hours at 250°F does the opposite — it slowly dehydrates the skin into a tough, rubbery, inedible sheet that also blocks smoke and rub from reaching the meat underneath. There are three workable moves: take the skin off at the start and render it separately into cracklings, score it and finish the whole shoulder with a high-heat blast at the end, or accept that it's a smoke shield and discard it. What doesn't work is smoking it low for nine hours and hoping."
  },
  buying: "Almost always cheaper per pound than Boston butt — often meaningfully so, because it's harder to carve and less familiar. Ask for skin-on if you want crackling, and ask them to score it, which is difficult with a home knife. Bone-in is better; the arm bone conducts heat and comes out clean when it's done, which is a reliable doneness signal. Look for a thick, even fat cap. Seven to eight pounds is the practical size for a home oven or kettle. If the shop only offers Boston butt and calls it picnic, check for the tapering shape and the arm bone — a rectangular block is a butt.",
  temps: "195-205°F internal for pulling, and expect an extra hour or so versus a butt of the same weight. Skin needs a separate finish above 450°F. Rest at least forty-five minutes before shredding.",
  faq: [
    { q: "Picnic or Boston butt for pulled pork?",
      a: "Butt is easier — uniform shape, no skin, slightly faster, and it shreds very evenly, which is why almost every recipe specifies it. Picnic is cheaper, has more collagen so the result is richer and more gelatinous, and comes with skin you can turn into crackling. If it's your first pulled pork, buy the butt. If you've done it a few times and want a better result for less money, buy the picnic." },
    { q: "Why is it called a picnic ham if it isn't ham?",
      a: "Because it can be cured and smoked to imitate a real ham from the hind leg, and historically it was sold as a cheaper substitute for one. Cured, it's sometimes labelled picnic ham or smoked picnic. Uncured, it's just the lower shoulder. The naming causes the same confusion as country-style ribs — the label describes a marketing category, not the anatomy." },
    { q: "What do I do with the skin?",
      a: "Take it off before cooking, cut it into strips, and either render it slowly in a 300°F oven until it crisps, or simmer it first for an hour and then roast it, which gives a puffier result. Salt while hot. That's cracklings, and it's the best part. The fat that renders out of it is lard, which is worth keeping for pastry and tortillas." }
  ]
}

];
