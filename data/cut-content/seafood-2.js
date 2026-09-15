// seafood-2.js — the counter, rather than four things off it.
//
// The section covered cod, salmon, tuna and shrimp. Shelves already existed for
// scallops, oysters, clams, mussels, crab, lobster, octopus, trout and white
// fish, and none of them had a cut page pointing at them.
//
// Shellfish need a different structure to the muscle cuts: the failure modes
// are buying and handling as much as cooking, and several of the rules people
// repeat about them — tap the shells, discard anything that stays shut, add a
// wine cork to the octopus — are wrong in ways that cost either dinner or
// money. Those are addressed directly rather than repeated.
module.exports = [

{
  slug: "scallops",
  name: "Scallops",
  animal: "seafood",
  shelf: "scallops",
  aka: ["sea scallops", "bay scallops", "dry scallops", "diver scallops", "U-10"],
  match: ["scallop", "scallops", "sea scallops"],
  dek: "A single adductor muscle, and the most expensive thing you can buy that is ruined by a factory before you ever see it. Wet-packed scallops are soaked in phosphate solution until they hold a third more water than they should, and no technique will make one sear.",
  anatomy: "The scallop's adductor is the muscle that snaps the two shells shut, and unlike a clam or oyster it is used constantly — scallops swim by clapping their shells, which is why the muscle is large, well-developed and worth eating on its own. It's almost pure protein with very little fat or connective tissue, arranged in fibers running vertically through the cylinder, which is why a scallop separates into strands when overcooked. On the side of each is a small crescent-shaped side muscle, tougher than the rest, that peels off with a fingernail. Sea scallops run twenty to forty per pound; bay scallops are a different, much smaller species at eighty to a hundred per pound and cook in under a minute.",
  science: "The dry-versus-wet distinction is the whole story and it is chemical, not marketing. Wet-packed scallops are treated with sodium tripolyphosphate, which raises pH and lets the muscle proteins bind far more water than they naturally would — up to 25-30% extra by weight, which you pay for at scallop prices. That water then floods out the moment the scallop hits a hot pan, dropping the surface temperature below browning range so it poaches in its own liquid instead of searing. STP also leaves a faint soapy, metallic taste. Dry scallops, untreated, are off-white to pinkish or slightly tan rather than uniformly bright white, and sear in ninety seconds because there's no water to boil off first.",
  methods: [
    { m: "Hard sear",
      why: "A thick adductor with no connective tissue needs a fast, hot crust and a barely-warm centre, which only works if the surface is genuinely dry.",
      how: "Pat completely dry, then dry again on paper towel for ten minutes. Salt just before cooking. Screaming-hot pan, thin film of high-smoke-point oil, ninety seconds to two minutes undisturbed until a deep crust forms, then thirty to sixty seconds on the second side. Butter and thyme for the last twenty seconds only." },
    { m: "Raw, as crudo",
      why: "Very fresh dry scallops are sweet and firm raw, and the texture is arguably better than cooked — no protein contraction at all.",
      how: "Slice thin across the fibers, dress with citrus, good oil and flaky salt no more than a few minutes before serving. Acid will start to firm and opacify the surface, so timing matters." },
    { m: "Grill on skewers",
      why: "Skewering keeps them from falling through and lets you turn several at once at exactly the same moment, which matters when the window is ninety seconds.",
      how: "Two parallel skewers so they can't spin. Very hot, clean, oiled grates. Ninety seconds a side. Bay scallops are too small for this." },
    { m: "Gentle poach or bake in butter",
      why: "For scallops that aren't dry-packed, or for anyone who doesn't want the risk, low moist heat sidesteps the searing problem entirely.",
      how: "250-300°F oven in butter or cream with aromatics, eight to ten minutes until just opaque. It won't brown, so build the flavour in the liquid." }
  ],
  avoid: {
    m: "Buying wet-packed scallops and then blaming the pan",
    why: "This is the single most common seafood disappointment and it happens at the counter rather than the stove. Wet-packed scallops have been soaked in sodium tripolyphosphate, which lets them absorb up to a third of their weight in water. In the pan that water floods out immediately, drops the surface temperature below the range where browning happens, and the scallops sit in a pool of liquid going grey and rubbery no matter how hot the pan was or how well you dried them — the water is inside the muscle, not on it. You also paid scallop prices for it. The tells: uniform stark white, sitting in a milky liquid in the tray, and a price that looks too good. Dry scallops are ivory, pinkish or faintly tan, look slightly tacky, and cost noticeably more per pound because you aren't buying water."
  },
  buying: "Ask for dry-packed or chemical-free by name — good counters know exactly what you mean, and if the person behind the counter doesn't, that's an answer too. Sizes are sold as counts per pound: U-10 means under ten per pound and they're large enough to sear properly; 20/30 is standard; anything smaller is hard to crust before it cooks through. Look for ivory to pale pink rather than bright white, and no liquid in the tray. Frozen dry-packed scallops from a reputable source are often better than fresh wet-packed ones and are worth choosing. Peel the small crescent side muscle off each one before cooking. Figure five to six large scallops per person as a main.",
  temps: "Pull at 120-125°F internal, or by eye — opaque at the edges with a translucent centre. They continue cooking off the heat. Past 130°F the fibers separate and go rubbery. Total pan time for a large scallop is two to three minutes.",
  faq: [
    { q: "How do I tell dry from wet if it isn't labelled?",
      a: "Colour and liquid. Wet-packed are uniformly bright, almost artificial white and sit in a cloudy pool; dry are ivory, pinkish or tan and look slightly sticky. If you already have them home, put one in a hot dry pan — a wet scallop will immediately release a puddle of liquid and start simmering. The other tell is price: STP treatment adds water weight cheaply, so wet scallops are consistently several dollars a pound less." },
    { q: "Can I rescue wet scallops?",
      a: "Partly. Soaking them for thirty minutes in a solution of water, lemon juice and salt draws some of the phosphate out and mitigates the soapy taste, then drying them on a rack in the fridge for an hour removes more surface moisture. You'll get a better result than doing nothing. You will not get a hard sear, because the excess water is bound inside the muscle. Better to cook them a way that doesn't need browning." },
    { q: "What's the little tag on the side?",
      a: "The side muscle, sometimes called the catch muscle — a small crescent that attached the adductor to the shell. It's tougher and chewier than the rest and cooks at a different rate. It peels off with a fingernail in a second. Some processors remove it; many don't." }
  ]
},

{
  slug: "oysters",
  name: "Oysters",
  animal: "seafood",
  shelf: "oysters",
  aka: ["Bluepoint", "Kumamoto", "Wellfleet", "Pacific oyster", "Eastern oyster"],
  match: ["oyster", "oysters"],
  dek: "Five species farmed worldwide, and the differences people taste between named oysters come mostly from where they grew rather than what they are. Bought live and shucked at home they cost a third of the raw bar, and the only real skill is not stabbing yourself.",
  anatomy: "An oyster is a bivalve with a deep cup shell and a flat top shell, joined by a hinge and held shut by a single adductor muscle. Inside, the meat sits in liquor — its own filtered seawater — which is part of the eating and should never be poured off. The Eastern or Atlantic oyster is the large briny one covering most of the US east coast and Gulf; the Pacific is frilly-shelled and more melon-like; the Kumamoto is small, deep-cupped and sweet; the European flat, or Belon, is metallic and intense. The shell shape matters practically — deep cups hold more liquor and are easier to shuck without spilling.",
  science: "Named oysters like Wellfleet or Bluepoint are usually the same species grown in different places, and the flavour difference is environmental: salinity, mineral content, water temperature and the algae available to filter. The industry calls it merroir. Salinity is the dominant variable and is measured in parts per thousand — a high-salinity oyster from open Atlantic water reads sharply briny, while one grown near a river mouth is mild and sweet. Oysters are also alive until shucked, which is the entire food-safety basis: a live oyster's tissue is protected, a dead one degrades fast. Vibrio bacteria multiply in warm water, which is where the old advice about months with an R comes from — it predates refrigeration and modern harvest controls, and is now mostly obsolete for farmed oysters.",
  methods: [
    { m: "Raw on the half shell",
      why: "The point of a good oyster, and the only preparation where the liquor and the merroir come through undisturbed.",
      how: "Chill hard. Shuck over a bowl to catch the liquor, cut the adductor from both shells so it lifts free, and check for shell fragments. Serve on ice with lemon or a shallot-vinegar mignonette — hot sauce is fine but it obliterates the differences you paid for." },
    { m: "Grill or roast in the shell",
      why: "The shell steams the oyster in its own liquor, and the ones that were too big or too rough for raw are ideal for this.",
      how: "Cup side down on a hot grill or in a 450°F oven, five to eight minutes until the shells pop open. Add butter, garlic and parmesan for the Gulf-style version. No shucking needed — the heat does it." },
    { m: "Fry",
      why: "Larger, less premium oysters have the meat-to-liquor ratio that survives a batter, and frying suits the ones too big to eat raw comfortably.",
      how: "Shucked, drained, dredged in seasoned cornmeal or a wet batter, fried at 375°F for ninety seconds to two minutes until golden. Any longer and they shrink to erasers." },
    { m: "Oyster stew or chowder",
      why: "Their liquor is a concentrated stock, and adding oysters at the very end preserves their texture in a dish that's mostly about the liquid.",
      how: "Build the base separately, then add shucked oysters and their strained liquor in the last two minutes off direct heat. They're done when the edges just ruffle." }
  ],
  avoid: {
    m: "Shucking without a proper knife and a towel, and discarding the liquor",
    why: "Two mistakes, one dangerous and one merely wasteful. Oyster shells are sharp and irregular and the adductor holds hard, so people brace an oyster in a bare palm and push with a paring knife — which either snaps the blade or drives it through the shell into a hand, and it is one of the more common serious kitchen injuries. A proper oyster knife has a short, thick, blunt-tipped blade designed to lever rather than cut, and the oyster should sit on a folded towel on a flat surface with the towel over your holding hand. The second error is pouring off the liquor because it looks cloudy. That liquid is filtered seawater and it carries most of the salinity and minerality that distinguish one oyster from another — an oyster served drained is a plain piece of shellfish."
  },
  buying: "Buy live, in the shell, from somewhere with turnover. Shells should be closed, or should close when tapped; heavy for their size means full of liquor. Store cup side down in the fridge under a damp cloth, never sealed in a bag or submerged in fresh water, both of which suffocate them. They keep five to seven days but are best within two. Ask where they're from and what the salinity is like — a good counter will tell you, and it's a better guide than the name. Shucked oysters in jars are for frying and stews, not for raw. Figure six per person as a starter, a dozen for someone who came for oysters.",
  temps: "Raw is raw — keep them at or below 40°F until service. Grilled or roasted, they're done when the shells pop and the edges of the meat ruffle, five to eight minutes. Fried, ninety seconds at 375°F. Overcooking shrinks them badly.",
  faq: [
    { q: "Is the R-month rule real?",
      a: "It's a real rule with an obsolete basis. Vibrio bacteria multiply in warm water, so summer oysters carried more risk before refrigeration and before modern harvest regulation — hence avoiding months without an R. Farmed oysters from regulated waters with a proper cold chain are now safe year-round, and many are best in summer. Wild-harvested Gulf oysters in warm months remain the higher-risk case, and anyone immunocompromised, pregnant or with liver disease should cook them regardless of month." },
    { q: "What does the name on the menu actually tell me?",
      a: "Where it grew, usually not what species it is. Wellfleet, Bluepoint, Malpeque and most East Coast names are all the same species — Crassostrea virginica — grown in different water. The differences in salinity, sweetness and mineral character are real and come from the environment. Kumamoto and European flat are genuinely different species and taste distinctly different. Ask about salinity rather than memorising names." },
    { q: "Should I chew them?",
      a: "Yes. Swallowing whole skips essentially all the flavour, which is concentrated in the meat rather than the liquor. Chew two or three times. The convention of tipping them straight back is a drinking custom, not a tasting one." }
  ]
},

{
  slug: "clams",
  name: "Clams",
  animal: "seafood",
  shelf: "clams",
  aka: ["littleneck", "cherrystone", "quahog", "manila clam", "steamers", "razor clam"],
  match: ["clam", "clams", "littleneck", "steamers"],
  dek: "Sold by size rather than species on the east coast, and the size decides the use — littlenecks for steaming whole, cherrystones for the grill, big quahogs for chowder because they're too tough to eat any other way. The one universal step is purging the sand.",
  anatomy: "Hard-shell clams on the US east coast are all Mercenaria mercenaria at different ages: littlenecks are the youngest and smallest at seven to ten per pound, topnecks next, cherrystones larger, and quahogs or chowder clams the oldest and toughest. Soft-shell clams — steamers — are a different species with a thin brittle shell and a protruding siphon that can't fully retract, which is why they're never fully closed and why the old tap-test doesn't apply to them. Manila clams, the small ridged ones common on the west coast, are sweeter and cook fastest. All of them filter-feed by drawing water through a siphon, which is how they end up full of sand.",
  science: "Clams live buried in sand and mud and pump water constantly, so their gut and mantle cavity hold grit. Purging works because a live clam continues to filter: given clean salted water it will expel sand and take in clean water over an hour or two. Fresh water kills them and makes it worse. Salinity matters — around 35 grams of salt per litre approximates seawater, and tap-water salinity that's too low stresses them into clamping shut rather than filtering. Cooking is a matter of the adductor releasing: heat denatures the muscle holding the shells together and it lets go, which is why an open shell reads as done. That takes only a few minutes, and clams held past that point shrink and toughen fast.",
  methods: [
    { m: "Steam in a covered pot",
      why: "The clams release their own liquor as they open, so they create the broth they cook in — no stock needed.",
      how: "A little wine, garlic and butter in a wide pot, clams in, lid on, high heat five to eight minutes. Remove each one as it opens rather than waiting for the last, since the early ones overcook while you wait. Strain the liquor through cloth to catch grit." },
    { m: "Grill or roast in the shell",
      why: "Direct heat opens them fast and concentrates the liquor rather than diluting it, and the shells char slightly.",
      how: "Straight onto a hot grill or into a 500°F oven, four to six minutes until they pop open. A spoonful of garlic butter into each as it opens." },
    { m: "Chowder, with the big ones",
      why: "Quahogs are too tough to eat whole and are the traditional chowder clam precisely because chopping solves that and their liquor is the strongest.",
      how: "Steam open, chop the meat, and strain and keep every drop of liquor as the base. Add the chopped meat back at the very end — simmering it into the pot turns it to rubber." },
    { m: "Raw on the half shell",
      why: "Littlenecks and topnecks are sweet raw and cheaper than oysters, with a firmer, more mineral bite.",
      how: "Well chilled, shucked with a clam knife — thinner and sharper-edged than an oyster knife — with lemon and horseradish or a mignonette." }
  ],
  avoid: {
    m: "Skipping the purge, and applying the tap-test rules to the wrong species",
    why: "Sand is the failure that ruins an otherwise good pot, and it can't be fixed after cooking — once the shells open, any grit inside disperses into the broth. Purging means an hour or two in cold salted water at roughly seawater strength, around 35g of salt per litre, in a bowl where the clams sit on a rack or elevated so the expelled sand falls below them rather than getting re-filtered. Fresh water does not work; it kills them and they stop filtering. The second error is repeating the standard advice indiscriminately. The rules are: a live hard-shell clam is closed or closes when tapped, and one that stays open is dead and gets discarded. But soft-shell steamers physically cannot close, because their siphon protrudes — judging them by that rule means throwing away the whole bag. For steamers, the test is whether the siphon retracts when touched."
  },
  buying: "Buy live, in mesh rather than sealed plastic, from somewhere with turnover. Shells should be intact and unchipped and the bag shouldn't smell of anything but the sea. Store in the fridge under a damp cloth, never in water and never sealed airtight. Size selection matters more than with most shellfish: littlenecks for steaming and pasta, cherrystones for grilling and stuffing, quahogs only for chowder. Manila clams are excellent and cook in half the time. Frozen and canned clams are legitimate for chowder and inferior for anything else. A pound per person for a main, half that as a starter.",
  temps: "Not a temperature cut — done is when the shell opens, which takes four to eight minutes. Pull each as it opens. A clam that hasn't opened after ten minutes was likely dead going in; a stubbornly closed one can occasionally be a strong adductor, so prying it and checking that it smells clean is reasonable, but when in doubt discard it.",
  faq: [
    { q: "Do I really discard the ones that don't open?",
      a: "Mostly yes, and the reason is that an unopened shell usually means the clam was dead before cooking, which means it may have been degrading for a while. Occasionally a live clam has an unusually strong adductor and stays shut through cooking. If you want to check, pry it and smell — a clean sea smell is fine, anything sour or ammoniac is not. Given the cost of getting it wrong, discarding is the sensible default." },
    { q: "How long should I purge?",
      a: "One to two hours in cold salt water at roughly 35g per litre is enough for most farmed clams, which are often purged commercially already. Wild-dug clams may want three to four hours or a change of water. Longer than about four hours starts to stress them. Put them on a rack or in a colander suspended inside the bowl so the sand they expel doesn't sit where they can filter it back in — that detail matters more than the duration." },
    { q: "Littleneck, cherrystone or quahog?",
      a: "Same species at different ages, and the age determines everything. Littlenecks are youngest, most tender, and the ones to steam or eat raw. Cherrystones are bigger and slightly chewier — good grilled or stuffed. Quahogs are old, large and genuinely tough, which is why they get chopped for chowder rather than served whole. Buying quahogs for a pasta dish is the common mistake." }
  ]
},

{
  slug: "mussels",
  name: "Mussels",
  animal: "seafood",
  shelf: "mussels",
  aka: ["blue mussel", "rope-grown mussels", "PEI mussels", "moules"],
  match: ["mussel", "mussels", "moules"],
  dek: "The cheapest shellfish in the shop and among the fastest — five minutes from cold pot to dinner. Rope-grown mussels have almost no grit and barely need cleaning, which makes most of the elaborate prep advice written for wild ones unnecessary.",
  anatomy: "Mussels attach themselves to rocks and ropes with byssal threads, the tough fibrous tuft known as the beard, which emerges between the shells. Rope-grown mussels — the great majority sold now, particularly from Prince Edward Island — spend their lives suspended in open water rather than sitting in sediment, so they're clean, evenly sized and have small beards. Wild or bottom-cultured mussels sit in sand, grow unevenly, and carry both grit and heavy beards. Inside, the meat is the whole animal: mantle, gills, adductor and all, which is why the texture is softer and more varied than a scallop's single muscle. Colour varies with sex — cream-coloured are male, orange are female — and both taste the same.",
  science: "Mussels open when heat denatures the adductor muscles, the same mechanism as clams, and it happens fast because the shells are thin and the animal is small. The window is genuinely narrow: they open at around five minutes and are noticeably shrunken and rubbery by eight, so the difference between good and disappointing is about three minutes of inattention. They also release a lot of liquor, which is why a mussel pot needs far less starting liquid than people expect — a splash of wine is enough, and adding a cup of stock dilutes what the mussels themselves produce. Debearding just before cooking rather than in advance matters because pulling the beard injures the animal and it will die.",
  methods: [
    { m: "Steam with wine and aromatics",
      why: "The classic moules marinière, and it works because the mussels supply both the cooking liquid and the seasoning.",
      how: "Sweat shallot and garlic in butter, add a splash of white wine, then the mussels, lid on, high heat. Four to six minutes, shaking the pot once. They're done the moment most are open. Finish with parsley and a knob of cold butter off the heat." },
    { m: "Steam in coconut and curry",
      why: "The same method with a richer liquid, which suits mussels because their own liquor is briny enough to season a fatty base.",
      how: "Coconut milk, red curry paste, lemongrass and lime, brought to a simmer, then mussels in with the lid on for five minutes. Fish sauce at the end if it needs salt — often it doesn't." },
    { m: "Grill in a pan or straight on the grate",
      why: "Direct high heat opens them in two or three minutes and concentrates their liquor rather than diluting it.",
      how: "Straight onto a very hot grate, or in a cast iron pan over the coals. Pull each as it opens. Garlic butter poured over after." },
    { m: "Smoke or pickle after steaming",
      why: "Steamed mussel meat takes smoke and vinegar exceptionally well, and it's the best use for a bag that's slightly too large.",
      how: "Steam open, remove the meat, then either cold-smoke twenty minutes or pack in a vinegar-and-aromatic brine. Keeps a week refrigerated." }
  ],
  avoid: {
    m: "Debearding hours ahead, and drowning them in liquid",
    why: "Two easy errors that both come from over-preparing. Pulling the beard tears the byssal gland and kills the mussel, so a bag debearded in the morning for dinner has been dying all afternoon — do it immediately before cooking, pulling firmly toward the hinge. The second error is treating a mussel pot like a soup. Mussels release a surprising amount of their own liquor, which is intensely savoury and properly salty, and starting with a cup of stock or a bottle of wine dilutes it into something bland that then needs seasoning to compensate. A quarter cup of wine for two pounds of mussels is plenty; they will produce the rest themselves, and the broth at the bottom of a well-made pot is the best part of the dish."
  },
  buying: "Rope-grown or rope-cultured on the label means clean, uniform and easy — worth choosing. They should smell of the sea and nothing else, with shells intact and mostly closed. Store in the fridge in a bowl under a damp cloth, never sealed in the plastic bag they came in and never in water. They keep two to three days but are much better on day one. Discard any with cracked shells. Cheap enough that two pounds for two people as a main is a reasonable purchase, and they cook in five minutes, which makes them one of the best weeknight options in the shop.",
  temps: "Done when the shells open — four to six minutes over high heat. Remove them as they open if you're being careful. Past eight minutes they shrink noticeably and go rubbery. There's no useful internal temperature here.",
  faq: [
    { q: "Do I throw away the ones that don't open?",
      a: "Yes, as the default. An unopened mussel after five or six minutes usually means it was dead before it went in the pot. As with clams, an occasional live one has a stubborn adductor, and prying and smelling it will tell you — clean sea smell fine, anything sour not. Given that mussels cost very little, discarding is the easy call. The reverse test matters more: before cooking, a mussel gaping open should close when tapped, and one that doesn't is already dead." },
    { q: "How much cleaning do they actually need?",
      a: "Rope-grown mussels usually need a rinse and a quick beard-pull, and that's all. The elaborate scrubbing, soaking and cornmeal-purging advice in older recipes was written for wild, bottom-grown mussels that genuinely carried sand and barnacles. Check what you bought — if the shells are clean, smooth and uniformly sized, they were rope-grown and you can skip most of it." },
    { q: "Why are some of the meats orange and some cream?",
      a: "Sex. Orange mussels are female, cream are male. There's no difference in flavour or quality, and a bag will contain both. Some people report the orange ones being slightly plumper during spawning season, which is a real seasonal effect rather than a difference between individuals." }
  ]
},

{
  slug: "lobster",
  name: "Lobster",
  animal: "seafood",
  shelf: "lobster",
  aka: ["Maine lobster", "American lobster", "spiny lobster", "rock lobster", "langouste"],
  match: ["lobster", "lobster tail"],
  dek: "Two very different products sold under one word — the clawed North Atlantic lobster and the clawless spiny lobster, which is all tail. Both go from sweet to rubbery in about ninety seconds, and the traditional hard boil is the most reliable way to overshoot.",
  anatomy: "The American or Maine lobster has two claws that do different jobs: a heavy crusher and a finer ripper, with different textures. The tail is the abdominal muscle used for the escape flick — fast-twitch, dense, the primary meat. There's more meat in the knuckles and body than people extract, and the tomalley (the green hepatopancreas) and roe are edible and prized, though the tomalley concentrates contaminants and should be eaten sparingly. Spiny lobsters have no claws at all; everything is tail. Shell hardness is the other variable: hard-shell lobsters have recently not moulted and are packed with meat, while soft-shells have just moulted, hold more water, and give noticeably less meat per pound.",
  science: "Lobster muscle is lean and fine-grained with almost no fat or connective tissue, so it follows a narrow curve like a scallop rather than a forgiving one like a braising cut. The proteins set around 120-130°F and the meat is at its best there — sweet, tender, still slightly translucent at the very centre. Past about 140°F the fibers contract and expel water and the texture turns to the rubbery, squeaky consistency most people associate with lobster because most lobster is boiled to well past it. A hard boil holds 212°F against a small piece of lean muscle, which gives no margin at all — steaming, poaching in butter, or cooking sous vide all give considerably more control.",
  methods: [
    { m: "Steam rather than boil",
      why: "Steam transfers heat more gently than boiling water, which buys several minutes of margin on a cut that overshoots in ninety seconds.",
      how: "Two inches of heavily salted water, rack, lid, hard boil. Eight to nine minutes for a 1.25 lb lobster, adding roughly a minute per quarter pound. Pull at 135°F in the thickest part of the tail." },
    { m: "Butter poach",
      why: "The finest texture available. Fat conducts heat gently and at a controlled temperature the meat cannot overshoot.",
      how: "Par-cook two minutes in boiling water to release the meat from the shell, then remove the meat and poach in butter held at 150-160°F for six to eight minutes. The butter can be an emulsion with a little water so it doesn't split." },
    { m: "Grill split",
      why: "Direct heat gives char and smoke that boiling can't, and splitting exposes the meat so it cooks fast and evenly.",
      how: "Split lengthwise, brush the meat with butter, shell side down over medium-high for five minutes, then meat side down for two. Baste continuously." },
    { m: "Sous vide",
      why: "Eliminates the window entirely on the cut where the window is narrowest.",
      how: "Shell the raw tails after a thirty-second blanch, then 130°F for thirty to forty-five minutes. The texture is noticeably better than any boiled result." }
  ],
  avoid: {
    m: "Boiling hard for the time on the chart",
    why: "Boiling is the traditional method and it is the reason so many people describe lobster as rubbery. A rolling boil holds the water at 212°F against a small piece of extremely lean, fine-grained muscle with no fat and no connective tissue to buffer it — so the outer layer races past 140°F and turns to rubber long before the centre arrives, and the standard per-pound timing charts have no way to account for shell hardness, starting temperature, or how full the pot is. A soft-shell lobster in particular is mostly water and cooks far faster than the chart says. Steam instead, which is gentler, and measure the tail rather than watching the clock — 135°F, pulled immediately. The difference between a lobster at 135°F and one at 150°F is the difference between why people pay for it and why people are disappointed by it."
  },
  buying: "Buy live and lively — a lobster that doesn't curl its tail when picked up is weak or dying and the meat degrades quickly after death. Hard-shell gives substantially more meat per pound than soft-shell; press the shell, and if it flexes it's a recent moult. Ask, because it's rarely labelled and the price is usually the same. Chicken lobsters at a pound to a pound and a quarter are the sweet spot for tenderness; larger ones are not tougher, contrary to the folklore, but they are harder to cook evenly. Frozen raw tails are a legitimate purchase and often better value than fresh, particularly spiny lobster tails. Store live lobsters in the fridge under damp newspaper, never in fresh water, which kills them.",
  temps: "135°F in the thickest part of the tail, pulled immediately. Claws tolerate slightly more, up to 140°F, since the meat is looser. Butter poach at 150-160°F ambient; sous vide at 130°F. Past 140°F internal the texture is gone.",
  faq: [
    { q: "What's the most humane way to kill one?",
      a: "The consensus among people who handle them regularly is to chill the lobster in the freezer for fifteen to twenty minutes, which makes it torpid, then split the head lengthwise through the cross-shaped mark behind the eyes with a heavy knife in one decisive motion. That destroys the main nerve centre immediately. Dropping a live lobster into boiling water takes considerably longer. Some jurisdictions now require stunning first; Switzerland and New Zealand have banned live boiling outright." },
    { q: "Hard shell or soft shell?",
      a: "Hard shell, if you're paying by the pound. A recently moulted soft-shell lobster is carrying a lot of seawater inside an oversized shell, so a 1.5 lb soft-shell yields substantially less meat than a 1.5 lb hard-shell. Soft-shells are sweeter and easier to open by hand, which some people prefer, and they're often cheaper in late summer. Just know which you're buying." },
    { q: "Is the green stuff safe to eat?",
      a: "The tomalley is the hepatopancreas, functioning as both liver and pancreas, and it's considered a delicacy — rich and intensely flavoured. It also concentrates contaminants including PCBs and biotoxins from the water, which is why several health agencies advise limiting it and avoiding it from certain harvest areas. Eating it occasionally is a normal thing to do; making a habit of large quantities is not advised." }
  ]
},

{
  slug: "crab",
  name: "Crab",
  animal: "seafood",
  shelf: "crab",
  aka: ["blue crab", "Dungeness", "king crab", "snow crab", "stone crab", "soft-shell crab"],
  match: ["crab", "crab meat", "dungeness", "blue crab"],
  dek: "Four or five species sold under one word, with almost nothing in common. King crab is bought cooked and frozen and only needs warming; blue crab is picked by hand for an hour to yield a cup of meat; soft-shells are eaten whole, shell and all.",
  anatomy: "Blue crab, the Atlantic and Gulf species behind crab cakes and Maryland steaming, is small — meat comes from the body chambers and the swimming legs, and picking one takes real time. Dungeness, from the Pacific, is larger with substantial body and leg meat and is the best value for eating whole. King crab is enormous, sold almost exclusively as cooked frozen legs, with dense sweet meat. Snow crab is smaller and cheaper with more delicate meat. Soft-shell crabs are blue crabs caught within hours of moulting, when the new shell is still membrane-soft, and they're eaten entirely. Picked meat is graded: jumbo lump comes from the two large swimming muscles, lump is smaller pieces, backfin and claw are darker and cheaper.",
  science: "Almost all crab is sold already cooked, because crab meat degrades unusually fast after death due to enzymes in the digestive tract, so processors cook them within hours of harvest. That changes the cooking problem entirely: for king, snow and most picked meat, you are reheating, not cooking, and the goal is to add as little heat as possible. Crab muscle is fine-grained and lean like lobster, and it turns stringy and dry above about 140°F. The grades matter texturally rather than in flavour — jumbo lump holds together in visible chunks, which is the point of a good crab cake, while claw meat shreds and is better in dips and soups where texture isn't the feature.",
  methods: [
    { m: "Steam live blue crabs",
      why: "The Chesapeake method, and steaming rather than boiling keeps the meat from waterlogging and keeps the seasoning on the shell.",
      how: "Rack above an inch of water and vinegar, layered with Old Bay, lid on, twenty to twenty-five minutes until the shells are bright red. Let them cool enough to handle before picking." },
    { m: "Reheat king or snow legs",
      why: "They arrive cooked, so any further cooking is subtraction. The aim is warm through, nothing more.",
      how: "Steam four to five minutes from thawed, or six to eight from frozen. Or 375°F oven wrapped in foil for eight minutes. Melted butter and lemon; nothing else is needed." },
    { m: "Fry soft-shells whole",
      why: "The entire crab is edible at this stage, and frying crisps the membrane shell while the interior stays custardy.",
      how: "Clean them — snip the face, lift the shell points and remove the gills, cut off the apron. Dredge in seasoned flour, fry in half an inch of oil at 350°F, three minutes a side. They pop and spit; use a lid as a shield." },
    { m: "Crab cakes with jumbo lump",
      why: "The grade is doing the work. The binder should be minimal so the lumps stay visible and intact.",
      how: "Jumbo lump, folded gently with just enough mayonnaise, egg, mustard and cracker crumb to hold — the mixture should look barely bound. Chill an hour so they set, then sear in butter three minutes a side. Anything that needs a lot of filler was made with the wrong grade." }
  ],
  avoid: {
    m: "Cooking pre-cooked crab, and buying pasteurized meat for a dish where texture matters",
    why: "Nearly all crab sold in the US — king, snow, and every tub of picked meat — was cooked at the dock, because the meat spoils fast enough that processors have no alternative. Treating it as raw and giving it fifteen minutes in a pot produces exactly what people complain about: stringy, dry, faintly ammoniac meat, and an expensive ingredient turned into a cheap-tasting one. Legs need four to five minutes to warm through, and picked meat should go into a dish at the very end or not be heated at all. The related error is grade. Pasteurized tubs are heat-treated for shelf life, which softens the muscle and breaks up the lumps, so they're fine in a dip or a bisque and wrong for a crab cake where you're paying for visible chunks. Fresh or fresh-frozen jumbo lump costs more for a reason that's visible on the plate."
  },
  buying: "Live blue crabs should be active and heavy for their size. Dungeness is usually sold cooked whole and is the best value for eating with your hands. King crab legs are sold cooked and frozen — buy them frozen rather than thawed at the counter, since thawed-at-the-shop is just frozen crab that has been sitting. For picked meat, jumbo lump for crab cakes and anything where the pieces show, claw meat for dips, soups and pasta at a third of the price. Check the country of origin and whether it's pasteurized. Soft-shells are seasonal, usually spring, and should be bought live and cleaned just before cooking. Figure a pound of legs or two Dungeness crabs for two people.",
  temps: "Live blue crabs: steamed twenty to twenty-five minutes until bright red. Pre-cooked legs: warm through only, four to five minutes steamed, internal 130-140°F. Soft-shells: three minutes a side at 350°F. Picked meat in a hot dish should go in during the last minute.",
  faq: [
    { q: "Why is crab always sold cooked?",
      a: "Enzymes in the digestive tract break down the meat very quickly after death, faster than in most shellfish, so processors cook crabs within hours of landing to arrest it. That's why live crab is only really available near where it's caught, and why everything else — king, snow, tubs of picked meat — arrives already cooked. Once you know that, the cooking instructions for most crab reduce to 'warm it up'." },
    { q: "What do the meat grades actually mean?",
      a: "Where on the crab it came from. Jumbo lump is the two large muscles that power the swimming legs — big, white, intact chunks, the most expensive. Lump is smaller pieces of the same plus broken jumbo. Backfin is smaller flakes from the body. Claw meat is darker, stronger-flavoured and cheapest. For a crab cake where visible lumps are the point, buy jumbo lump. For a bisque or a dip, claw meat tastes better and costs a third as much." },
    { q: "How do I clean a soft-shell crab?",
      a: "Three cuts. Snip off the face just behind the eyes. Lift each pointed side of the top shell and pull out the feathery gills underneath — they're unpleasant and don't cook down. Turn it over and cut off the apron, the small flap on the belly. That's it; everything else is eaten. Do it just before cooking, and ask the fishmonger to do it if you'd rather, but then cook them the same day." }
  ]
},

{
  slug: "octopus",
  name: "Octopus",
  animal: "seafood",
  shelf: "octopus",
  aka: ["pulpo", "polpo", "baby octopus", "tako"],
  match: ["octopus", "pulpo", "polpo"],
  dek: "Collagen-heavy muscle that behaves like beef shin rather than like fish: tough at every temperature until it isn't, and then tender. The folklore around tenderizing it — wine corks, beating it on rocks, dipping it three times — is mostly noise around one real mechanism, which is time.",
  anatomy: "An octopus arm is a muscular hydrostat, meaning it has no bone or rigid support and moves by opposing muscle groups against each other. That construction requires dense, layered muscle fibers running in three directions — longitudinal, transverse and helical — bound together by an unusually high proportion of collagen. There's essentially no fat. The head contains the viscera and the beak sits at the centre where the arms meet, both of which are removed. Larger octopus has coarser muscle and needs longer; baby octopus is tender enough to grill almost directly. Most sold in the West is frozen, which is genuinely an advantage here rather than a compromise.",
  science: "The tenderizing question has a real answer and it isn't the cork. Octopus collagen converts to gelatin with sustained time above roughly 160-170°F, the same as any braising cut, and that conversion is what turns it from rubber to tender — typically forty-five minutes to an hour and a half of simmering depending on size. Freezing helps independently: ice crystals rupture the muscle cell walls and physically disrupt the collagen matrix, which is why frozen-then-thawed octopus cooks tender faster than fresh, and why Mediterranean fishermen traditionally beat it against rocks — mechanical disruption doing the same job. The wine cork does nothing; there's no mechanism, and controlled comparisons show no difference.",
  methods: [
    { m: "Simmer then grill",
      why: "The standard two-stage treatment. The simmer converts the collagen, the grill adds char and crisps the suckers, which is the texture contrast the dish is about.",
      how: "Simmer whole in barely-bubbling water with a bay leaf and no salt, forty-five to ninety minutes depending on size, until a knife slides into the thickest part of an arm with no resistance. Cool in the liquid. Then separate the arms, oil them, and grill hard for two to three minutes a side." },
    { m: "Confit in olive oil",
      why: "Submerged in fat at low temperature the collagen converts without any water leaching flavour out, giving a richer result than simmering.",
      how: "Cover in olive oil with garlic and thyme, 200-215°F, two to two and a half hours. Cool in the oil, which keeps for weeks and is excellent for cooking." },
    { m: "Pressure cook",
      why: "Raises the temperature above boiling so collagen converts far faster, turning ninety minutes into fifteen or twenty.",
      how: "Fifteen to twenty minutes at high pressure with no added liquid beyond what the octopus releases — it gives off a surprising amount. Natural release. Check with a knife and give it another five if needed." },
    { m: "Slow braise in its own liquid",
      why: "The Galician and Neapolitan approach, where the cooking liquid becomes the sauce and nothing is discarded.",
      how: "In a heavy covered pot with tomato, wine and aromatics at 300°F for ninety minutes to two hours. It releases enough liquid that very little needs adding." }
  ],
  avoid: {
    m: "Grilling it raw, and the cork",
    why: "Octopus looks like squid and gets treated like it, and that is the error the dish never recovers from. Squid is thin-walled and low in collagen, so it cooks in ninety seconds over high heat; octopus arms are dense, collagen-heavy muscle that need the better part of an hour above 160°F before the connective tissue converts. Put a raw arm on a grill and the outside chars while the inside stays rubbery, and no amount of further grilling fixes it — dry heat dehydrates the surface faster than it converts the interior. It must be simmered, confited or pressure-cooked first, and only then grilled. The wine cork in the pot is the other thing worth dropping: it's a widely repeated Mediterranean practice with no proposed mechanism that survives testing, and side-by-side comparisons show no difference. Freezing the octopus first does help, and that one has a real basis."
  },
  buying: "Frozen is genuinely preferable and usually cheaper — freezing disrupts the muscle structure and produces a more tender result, so buying fresh and then freezing it yourself for forty-eight hours is a reasonable move. Most sold in the US is already cleaned, with beak and viscera removed; check, and ask the fishmonger to do it if not. Spanish and Portuguese octopus is the benchmark. Two to four pounds whole is a good size — large enough that the arms have body, small enough to cook evenly. Baby octopus is a different proposition, tender enough to grill after only a short poach. Expect it to lose a lot of weight in cooking, so buy roughly double what you'd plan for another protein.",
  temps: "Not a thermometer cut. Simmer until a thin knife slides into the thickest part of an arm with no resistance — forty-five to ninety minutes at a bare simmer, or fifteen to twenty under pressure. Then hard, fast heat for the char, two to three minutes a side.",
  faq: [
    { q: "Does the wine cork actually work?",
      a: "No. It's a real and widespread tradition, particularly in Spain and Italy, and there's no mechanism that holds up — a cork releases nothing into simmering water that would affect collagen, and side-by-side tests find no difference. What does work is freezing, which ruptures cell walls, and time above 160°F, which converts the collagen. The cork is probably a folk memory of something else that did work being done at the same time." },
    { q: "Fresh or frozen?",
      a: "Frozen, in most cases — this is one of the few proteins where it's genuinely better. Ice crystals rupture the muscle cells and break down the collagen matrix mechanically, which is exactly what you want, and it's why fishermen traditionally beat octopus against rocks. If you buy fresh, freeze it for forty-eight hours before cooking and you'll get a more tender result with less time in the pot." },
    { q: "How do I know when it's tender?",
      a: "A thin knife or skewer should slide into the thickest part of an arm — near where it joins the head — with no resistance at all, the same test as a braise. Don't judge by the thin tips, which are tender long before the base is. If there's any push-back, give it another fifteen minutes. Undercooked octopus is the near-universal failure and the only fix is more time." }
  ]
},

{
  slug: "halibut",
  name: "Halibut",
  animal: "seafood",
  shelf: "white-fish",
  aka: ["Pacific halibut", "Atlantic halibut", "flatfish steak", "fletch"],
  match: ["halibut", "white fish steak"],
  dek: "The largest flatfish, sold in thick firm steaks and fillets, lean enough that it dries faster than almost anything else in the case. It is expensive, it is very good at 130°F, and it is chalky at 145°F.",
  anatomy: "Halibut is a flatfish that lies on the seabed with both eyes migrated to one side, and it grows enormous — Pacific halibut over three hundred pounds. The fillets come off in four long quarters, two from each side, and thick steaks are cut across the whole fish through the backbone. The muscle is arranged in the flake structure typical of fish: short segments called myotomes separated by thin sheets of connective tissue, which is why cooked fish flakes rather than shredding. Halibut's flakes are unusually large and firm. It carries almost no fat — under 2% — which is what makes it firm, mild and lean, and also what makes it unforgiving.",
  science: "Fish connective tissue is a different collagen to mammal collagen and converts at a far lower temperature — it starts breaking down around 120-130°F, which is why fish is done in minutes rather than hours and why 'flaking easily' happens so early. Halibut's problem is that with essentially no fat, there's nothing holding water in the muscle once the proteins contract. Between 130 and 145°F it goes from moist and just-set to visibly dry, and albumin — the white protein that squeezes out onto the surface — appears as a signal that you're already past the point. Because it's typically cut thick, the outside can easily be at 150°F while the centre is at 120°F, which is why gentle methods suit it much better than aggressive ones.",
  methods: [
    { m: "Pan sear skin-off, finish gently",
      why: "The thick cut wants a crust on one side and a slow finish, rather than sustained high heat that overshoots the exterior.",
      how: "Dry thoroughly, salt fifteen minutes ahead. Medium-high in a little oil, three to four minutes on the presentation side, then flip, drop the heat, add butter and baste for another two to three to 130°F." },
    { m: "Slow roast",
      why: "A low oven eliminates the gradient problem entirely, which matters more on lean fish than on anything else.",
      how: "275°F, brushed with oil or butter, twelve to eighteen minutes for a one-inch fillet to 125-130°F. It won't brown, so finish under a broiler for ninety seconds or serve with a sauce." },
    { m: "Butter poach or olive oil confit",
      why: "Fat conducts heat gently and at a controlled temperature, and it also substitutes for the fat the fish doesn't have.",
      how: "Submerged in butter or oil held at 130-140°F for fifteen to twenty minutes. The texture is silkier than any dry-heat method achieves on this fish." },
    { m: "Grill on the skin, or on a plank",
      why: "Halibut sticks and falls apart on a grate, and skin or a cedar plank provides a barrier while adding smoke.",
      how: "Skin side down over medium, never flipped, eight to ten minutes with the lid down. On a soaked plank, 400°F for twelve to fifteen minutes." }
  ],
  avoid: {
    m: "Cooking it until it flakes easily",
    why: "This is the standard doneness instruction for fish and it is set roughly fifteen degrees too late for anything this lean. Fish flakes when the thin sheets of connective tissue between the muscle segments have broken down, and on halibut that happens around 140-145°F — by which point the fibers have contracted and expelled a substantial amount of water, and the fish is dry and chalky in exactly the way people complain about. Worse, by the time a fillet flakes easily under a fork at the thickest point, the outer half has been well past that for several minutes. Halibut is at its best at 125-130°F, where it is just barely set, still faintly translucent at the centre and separates into large moist flakes only under real pressure. The white albumin appearing on the surface is a warning that you're already past it, not a sign of progress."
  },
  buying: "Pacific halibut is the more sustainable choice; Atlantic halibut is severely depleted and generally best avoided. Look for flesh that's pure white to faintly translucent with no browning or gapping — gapping is when the flakes separate visibly, a sign of age or rough handling. Thick centre-cut fillets cook far more evenly than thin tail pieces. Frozen-at-sea halibut is excellent and often better than fresh that's travelled. It is expensive; cod, hake or pollock cook the same way and cost a third as much if the recipe isn't specifically about halibut. Figure six ounces per person. Ask for the skin removed for pan searing, left on for grilling.",
  temps: "125-130°F, pulled immediately — carryover on a thick fillet is real. It should be just barely opaque with a faintly translucent centre. Sous vide or butter poach at 130°F. 145°F is the FDA figure and it is well past palatable for this fish.",
  faq: [
    { q: "What is the white stuff on the surface?",
      a: "Albumin, a water-soluble protein that coagulates and is squeezed out of the muscle as the fibers contract. It's harmless and it's a useful signal — visible albumin means the fish has passed the point where it was holding its water, so it's a sign of overcooking rather than of doneness. Salting the surface fifteen minutes ahead reduces it noticeably, and cooking to a lower final temperature almost eliminates it." },
    { q: "Halibut is expensive. What substitutes?",
      a: "Cod, haddock, hake and pollock are all lean white fish that cook the same way and behave similarly, at a third to a half the price. Halibut is firmer and holds together better on a grill, so it's worth the premium when the fish needs structure. For a braise, a stew or anything sauced, the cheaper white fish are indistinguishable once cooked and often better value." },
    { q: "Why does mine always fall apart on the grill?",
      a: "Lean fish has very little fat and its connective tissue breaks down early, so it loses structural integrity fast and sticks to metal. Three fixes: leave the skin on and never flip it, use a cedar plank or a fish basket, or make sure the grates are ferociously hot, scrupulously clean and oiled — food sticks to dirty and lukewarm metal, not to hot clean metal. Flipping repeatedly guarantees it breaks." }
  ]
},

{
  slug: "trout",
  name: "Trout",
  animal: "seafood",
  shelf: "trout",
  aka: ["rainbow trout", "steelhead", "brook trout", "butterflied trout", "brown trout"],
  match: ["trout", "rainbow trout", "steelhead"],
  dek: "Small, oily and forgiving in a way that lean white fish isn't — the fat protects it, so the window is wider and the skin crisps easily. Farmed rainbow trout is also one of the few fish that is both cheap and a genuinely sound environmental choice.",
  anatomy: "Trout are salmonids, related closely enough to salmon that steelhead — a sea-run rainbow trout — is often sold and cooked as salmon and looks nearly identical. Most sold is farmed rainbow, at ten to fourteen inches and under a pound, generally sold whole or butterflied. Butterflied trout is split along the belly with the backbone and rib bones removed, leaving the two fillets joined at the back with the skin on — which is the most useful format, because it cooks in four minutes and there are no bones to negotiate. The pin bones along the centreline of a fillet run at an angle and need tweezers. The skin is thin and crisps unusually well.",
  science: "Trout carries 5-8% fat depending on species and diet, well above halibut or cod, and that fat is doing the same protective work that intramuscular fat does in beef — it renders slightly, coats the fibers and keeps the fish tasting moist several degrees past where a lean fish would be dry. The practical result is a window of maybe ten degrees rather than five. The flesh sets at around 120-125°F and holds up well to 135°F. Colour varies from white to pink to orange depending on diet, since the pigment is astaxanthin from crustaceans or feed, and says nothing about quality or species. The thin skin has less collagen than a salmon's and crisps faster, in two to three minutes.",
  methods: [
    { m: "Pan-fry butterflied, skin down",
      why: "The fastest good dinner in the fish case — four minutes total, and the skin crisps into the best part.",
      how: "Dry the skin thoroughly, salt it, and lay it skin-down in a hot pan with a little oil, pressing flat for the first twenty seconds so it doesn't curl. Three minutes on the skin, then thirty to sixty seconds flesh-side. Butter, lemon and capers off the heat." },
    { m: "Whole roasted or grilled",
      why: "The bone and skin protect the flesh and add flavour, and a whole small fish is very hard to overcook.",
      how: "Stuff the cavity with lemon, herbs and butter, score the skin, and roast at 425°F for twelve to eighteen minutes, or grill over medium for five to six minutes a side in a fish basket." },
    { m: "Smoke",
      why: "The fat content makes trout ideal for smoking — lean fish goes dry and papery, oily fish absorbs smoke and stays succulent.",
      how: "Brine in a 5% solution for two hours, dry uncovered in the fridge until a tacky pellicle forms, then hot-smoke at 180°F for one and a half to two hours to 140°F internal." },
    { m: "Meunière",
      why: "The classic treatment for a small delicate fish: flour, butter, lemon, and nothing that competes with it.",
      how: "Dredge lightly in seasoned flour, fry in foaming butter three minutes a side, then finish the pan with more butter, lemon juice and parsley and pour it over." }
  ],
  avoid: {
    m: "Cooking it in a cold or wet pan, and leaving the pin bones in",
    why: "Trout skin is the best thing about the fish and is easily wasted. It's thin, and it needs a genuinely hot pan and a properly dry surface to crisp — into a lukewarm pan it sticks and tears, and with any moisture on it, it steams into something grey and flabby rather than crisping. Pat it dry, salt it fifteen minutes ahead and pat again, and press the fillet flat for the first twenty seconds so it doesn't curl away from the heat. The bone problem is separate and more annoying: whole trout have a row of fine pin bones running along the centreline of each fillet at an angle, and butterflying removes the backbone and ribs but not those. Run a finger along the line to find them and pull each with tweezers in the direction it points, or accept that everyone at the table will be picking them out."
  },
  buying: "Farmed rainbow trout is one of the better environmental choices in the case — raised in freshwater raceways with low impact and a good feed conversion ratio — and it's cheap. Buy butterflied if you can; it's the most useful format and most counters will do it. Whole fish should have clear rather than sunken eyes, bright red gills, firm flesh that springs back, and no smell beyond clean water. Steelhead is sold as trout or as salmon depending on the shop and is excellent either way. Flesh colour ranges from white to deep orange depending on feed and tells you nothing about quality. One butterflied trout or one whole fish per person.",
  temps: "125-135°F, which is a wider window than lean fish thanks to the fat. Whole fish is done when the flesh at the thickest point near the spine has just turned opaque and pulls from the bone. Hot-smoked to 140°F.",
  faq: [
    { q: "Trout or salmon?",
      a: "Steelhead is a rainbow trout that migrated to sea and it looks and cooks almost exactly like salmon, so the two are frequently substituted. Freshwater rainbow trout is smaller, milder, less fatty and more delicate, and it's better suited to fast pan cooking than to the thick-fillet treatments salmon gets. In a recipe, small trout and a salmon fillet are not interchangeable on timing — the trout will be done in a third of the time." },
    { q: "Why does the flesh colour vary so much?",
      a: "Diet. The pink and orange colour in salmonids comes from astaxanthin, a carotenoid the fish get from crustaceans in the wild or from feed in farms. A trout raised on a diet without it is white-fleshed, and it tastes the same. Colour is not a quality signal in either direction, and in farmed fish it's essentially a formulation choice." },
    { q: "Do I eat the skin?",
      a: "It's the best part if you cook it properly. Trout skin is thin and crisps in two or three minutes into something close to a crisp, which is why the skin-down pan method is worth the effort of drying it. Skin that's been steamed or poached is unpleasant and worth removing. If you're not going to crisp it, take it off." }
  ]
}

];
