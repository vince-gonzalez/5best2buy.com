// batch-71-world-g.js — world dishes round 2 grp3 (agent-drafted, culled). North & South Indian. local:true.
module.exports = [
  {
    slug:"matar-paneer", title:"Matar Paneer, and where to source it", cuisine:"Indian", category:"Main",
    kw:"matar paneer, mutter paneer, peas paneer curry, punjabi paneer curry, paneer with peas",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"North Indian paneer and pea curry in a spiced tomato-onion gravy, and where to source every part.",
    dek:"Fry the paneer cubes only until barely golden, then soak them in warm water while the gravy cooks. Overfried paneer turns rubbery and stays chewy; the water bath keeps the cubes soft enough to drink up the sauce.",
    card:"Soft paneer and sweet peas in a spiced tomato-onion gravy.",
    ing:[
      {n:"Paneer", q:"Fresh block paneer, firm but not squeaky. Cut into 1-inch cubes just before frying.", amt:"12 oz", local:true},
      {n:"Green peas", q:"Frozen peas are sweeter than tired fresh ones here. Add late so they stay bright.", amt:"1.5 cups", local:true},
      {n:"Onion", q:"Yellow onion, finely chopped or grated for a smooth base.", amt:"2 medium", local:true},
      {n:"Tomatoes", q:"Ripe and blended to a puree; they carry the tang of the gravy.", amt:"3 medium", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground beats the jar. It is the aromatic spine of the base.", amt:"1 tbsp", local:true},
      {n:"Garam masala", q:"Added near the end so the top notes survive. A little goes far.", amt:"1 tsp", local:true},
      {n:"Ground turmeric and red chili", q:"Turmeric for color, Kashmiri chili for red without much heat.", amt:"1 tsp each", local:true},
      {n:"Cumin seeds", q:"Whole seeds bloomed in hot oil to start the tempering.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Fry the paneer", t:"Lightly brown the paneer cubes in oil, then transfer to a bowl of warm water."},
      {b:"Build the base", t:"Bloom cumin in oil, add onion and cook to golden, then ginger-garlic paste."},
      {b:"Cook the gravy", t:"Add tomato puree, turmeric, chili and salt; cook until the oil separates at the edges."},
      {b:"Simmer with peas", t:"Add peas and a splash of water; simmer until the peas are tender."},
      {b:"Finish", t:"Drain the paneer, fold it in with garam masala, simmer two minutes and rest before serving."}
    ],
    tools:["Kadai|indian kadai wok","Blender|countertop blender","Ladle|stainless steel ladle"]
  },
  {
    slug:"idli", title:"Idli, and where to source it", cuisine:"Indian", category:"Breakfast",
    kw:"idli, south indian idli, steamed rice cakes, idli batter, idli rava",
    iso:["PT20M","PT15M","PT35M"], prep:"20 min", cook:"15 min", makes:"makes 24 idli",
    desc:"Fluffy steamed South Indian rice-and-lentil cakes from a naturally fermented batter, and where to source it.",
    dek:"The fenugreek seeds soaked with the urad dal are not for flavor, they are the fermentation engine. They feed the wild yeast that makes the batter rise overnight, which is the whole difference between airy idli and dense pucks.",
    card:"Pillowy steamed cakes from fermented rice-and-lentil batter.",
    ing:[
      {n:"Idli rice", q:"Parboiled short-grain rice; it ferments and steams softer than raw rice.", amt:"2 cups", local:true},
      {n:"Urad dal", q:"Skinned whole black gram. Whole beats split for a fluffier batter.", amt:"1 cup", local:true},
      {n:"Fenugreek seeds", q:"A small spoon soaked with the dal; it drives fermentation and browning.", amt:"1 tsp", local:true},
      {n:"Poha or thick rice flakes", q:"A handful soaked in adds softness and helps the rise.", amt:"1/4 cup", local:true},
      {n:"Salt", q:"Non-iodized is traditional; add before fermenting in warm climates, after in cold.", amt:"1.5 tsp", local:true},
      {n:"Water", q:"Cool, filtered; grind with as little as needed for a thick, pourable batter.", amt:"as needed", local:true}
    ],
    steps:[
      {b:"Soak", t:"Soak rice separately, and urad dal with fenugreek, for at least four hours."},
      {b:"Grind", t:"Grind dal to a light fluffy paste, then rice to a slight grit; combine with salt."},
      {b:"Ferment", t:"Cover and leave in a warm spot 8 to 12 hours until doubled and bubbly."},
      {b:"Steam", t:"Ladle into greased idli molds and steam 10 to 12 minutes until a tester comes clean."},
      {b:"Unmold", t:"Rest two minutes, then spoon out and serve hot with chutney and sambar."}
    ],
    tools:["Idli steamer|idli steamer mold stand","Wet grinder|indian wet grinder","Ladle|stainless steel ladle"]
  },
  {
    slug:"medu-vada", title:"Medu Vada, and where to source it", cuisine:"Indian", category:"Breakfast",
    kw:"medu vada, urad dal vada, south indian vada, garelu, ulundu vadai",
    iso:["PT20M","PT20M","PT40M"], prep:"20 min", cook:"20 min", makes:"makes 12 vada",
    desc:"Crisp, fluffy South Indian lentil doughnuts fried from ground urad dal, and where to source every part.",
    dek:"Grind the urad dal with almost no water, then whip air into the batter until a spoonful floats in a cup of water. That trapped air, not any leavening, is what makes the inside light instead of dense and oily.",
    card:"Golden lentil doughnuts, crisp outside and fluffy within.",
    ing:[
      {n:"Urad dal", q:"Skinned white urad dal; soak just enough that it grinds without extra water.", amt:"1 cup", local:true},
      {n:"Green chilies", q:"Finely chopped for gentle heat folded in at the end.", amt:"2", local:true},
      {n:"Ginger", q:"Minced fine; it cuts the richness of the fried lentil.", amt:"1 inch", local:true},
      {n:"Black peppercorns", q:"Coarsely crushed whole peppercorns are traditional in the batter.", amt:"1 tsp", local:true},
      {n:"Curry leaves", q:"Fresh leaves chopped in for South Indian aroma.", amt:"10 leaves", local:true},
      {n:"Oil for frying", q:"A neutral oil at a steady medium-high; too hot browns before the center cooks.", amt:"for frying", local:true},
      {n:"Salt", q:"Add just before frying so the batter does not thin and weep.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Soak and grind", t:"Soak dal 3 to 4 hours, then grind to a thick fluffy batter with minimal water."},
      {b:"Whip and test", t:"Beat the batter until light; a dab should float in water. Fold in chili, ginger, pepper and leaves."},
      {b:"Shape", t:"Wet your hand, flatten a ball, and poke a hole in the center to form a ring."},
      {b:"Fry", t:"Slide into medium-hot oil and fry, turning, until deep golden and crisp."},
      {b:"Drain", t:"Lift onto a rack and serve hot with coconut chutney and sambar."}
    ],
    tools:["Kadai|indian kadai frying wok","Wet grinder|indian wet grinder","Spider strainer|spider skimmer strainer"]
  },
  {
    slug:"uttapam", title:"Uttapam, and where to source it", cuisine:"Indian", category:"Breakfast",
    kw:"uttapam, uthappam, south indian pancake, onion uttapam, dosa batter pancake",
    iso:["PT10M","PT20M","PT30M"], prep:"10 min", cook:"20 min", makes:"makes 6 uttapam",
    desc:"Thick South Indian savory pancakes with vegetables pressed into fermented batter, and where to source it.",
    dek:"Scatter the toppings onto the wet top side and press them down before the batter sets, so they weld in. Cook it low and slow under a lid, unlike a thin dosa, so the thick round cooks through without burning.",
    card:"Thick fermented pancakes studded with onion, tomato and chili.",
    ing:[
      {n:"Dosa or idli batter", q:"Well-fermented and slightly thick; day-old, tangy batter works best.", amt:"3 cups", local:true},
      {n:"Onion", q:"Finely chopped for the classic sweet, crisp topping.", amt:"1 medium", local:true},
      {n:"Tomato", q:"Firm and seeded so it does not make the top soggy.", amt:"1 medium", local:true},
      {n:"Green chilies", q:"Minced and pressed in for bright heat.", amt:"2", local:true},
      {n:"Cilantro", q:"Chopped fresh, scattered over the top.", amt:"1/4 cup", local:true},
      {n:"Curry leaves", q:"A few, chopped, for South Indian aroma.", amt:"8 leaves", local:true},
      {n:"Oil or ghee", q:"Drizzled around the edges to crisp the base.", amt:"as needed", local:true}
    ],
    steps:[
      {b:"Heat the pan", t:"Warm a griddle to medium; too hot and the thick pancake burns before cooking through."},
      {b:"Pour thick", t:"Ladle batter into a thick round, not spread thin like a dosa."},
      {b:"Add toppings", t:"Scatter onion, tomato, chili, cilantro and curry leaf on the wet top; press gently."},
      {b:"Cook covered", t:"Drizzle oil around the edge, cover, and cook until the base is golden."},
      {b:"Flip and finish", t:"Flip to sear the vegetable side briefly, then serve hot with chutney."}
    ],
    tools:["Cast iron griddle|cast iron dosa tawa","Ladle|stainless steel ladle","Flat spatula|wide dosa spatula"]
  },
  {
    slug:"vegetable-pulao", title:"Vegetable Pulao, and where to source it", cuisine:"Indian", category:"Main",
    kw:"vegetable pulao, veg pulao, pilau rice, basmati pulao, indian rice pilaf",
    iso:["PT15M","PT20M","PT35M"], prep:"15 min", cook:"20 min", makes:"serves 4",
    desc:"Fragrant basmati simmered with whole spices and mixed vegetables, and where to source every part.",
    dek:"Rinse the basmati until the water runs clear, then soak it 20 minutes before cooking. That washes off surface starch and pre-hydrates the grain, so it cooks into separate long strands instead of a sticky clump.",
    card:"Whole-spice basmati studded with tender mixed vegetables.",
    ing:[
      {n:"Basmati rice", q:"Aged long-grain basmati. Rinse until clear, then soak so grains stay separate.", amt:"1.5 cups", local:true},
      {n:"Mixed vegetables", q:"Carrot, beans, peas and potato in even dice so they finish together.", amt:"2 cups", local:true},
      {n:"Whole spices", q:"Bay leaf, cinnamon, cloves, cardamom and cumin bloomed in ghee.", amt:"1 tbsp mixed", local:true},
      {n:"Onion", q:"Thinly sliced and fried golden for a sweet backbone.", amt:"1 medium", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground for aroma without harshness.", amt:"1 tbsp", local:true},
      {n:"Ghee", q:"Ghee carries the whole spices better than neutral oil.", amt:"2 tbsp", local:true},
      {n:"Green chilies and mint", q:"Slit chilies and a few mint leaves lift the whole pot.", amt:"2 chilies, handful mint", local:true}
    ],
    steps:[
      {b:"Prep the rice", t:"Rinse basmati until the water runs clear, then soak 20 minutes and drain."},
      {b:"Bloom spices", t:"Heat ghee, add whole spices, then sliced onion cooked to golden."},
      {b:"Add aromatics and veg", t:"Stir in ginger-garlic paste, chilies and vegetables; saute two minutes."},
      {b:"Add rice and water", t:"Fold in drained rice, add 2.25 cups water and salt, and bring to a boil."},
      {b:"Steam and rest", t:"Cover, cook on low until water is absorbed, then rest 10 minutes and fluff."}
    ],
    tools:["Heavy pot|heavy bottomed dutch oven","Pressure cooker|stovetop pressure cooker","Fork|serving fork"]
  },
  {
    slug:"saag-aloo", title:"Saag Aloo, and where to source it", cuisine:"Indian", category:"Side",
    kw:"saag aloo, spinach potato curry, aloo palak, punjabi spinach potato, indian spinach side",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"Punjabi spinach and potato cooked down with garlic and whole cumin, and where to source it.",
    dek:"Parboil and lightly brown the potatoes before the spinach ever hits the pan. Spinach releases water fast and stops browning; if the potatoes are not already tender and edged golden, they steam into gluey lumps.",
    card:"Golden potatoes folded through garlicky wilted spinach.",
    ing:[
      {n:"Spinach", q:"Fresh mature spinach has more body than baby leaves; wash and roughly chop.", amt:"1 lb", local:true},
      {n:"Potatoes", q:"Waxy potatoes hold their shape; cut into even 1-inch cubes.", amt:"1 lb", local:true},
      {n:"Garlic", q:"Sliced generously; it is the dominant aromatic here.", amt:"5 cloves", local:true},
      {n:"Cumin seeds", q:"Whole seeds bloomed in oil to open the dish.", amt:"1 tsp", local:true},
      {n:"Ginger", q:"Julienned for warmth and a little bite.", amt:"1 inch", local:true},
      {n:"Green chili", q:"Slit for heat; adjust to taste.", amt:"1", local:true},
      {n:"Ground turmeric", q:"A pinch for color and earthiness.", amt:"1/2 tsp", local:true}
    ],
    steps:[
      {b:"Parboil potatoes", t:"Boil the cubes until just tender but still firm, then drain."},
      {b:"Brown the potatoes", t:"Fry them in oil until edges turn golden, then set aside."},
      {b:"Temper", t:"Bloom cumin, add garlic, ginger and chili; cook until fragrant, not burnt."},
      {b:"Wilt the spinach", t:"Add spinach and turmeric; cook down until wilted and most water cooks off."},
      {b:"Combine", t:"Fold the potatoes back in, season with salt, and cook two minutes to marry."}
    ],
    tools:["Kadai|indian kadai wok","Colander|stainless colander","Spatula|wooden spatula"]
  },
  {
    slug:"bhindi-masala", title:"Bhindi Masala, and where to source it", cuisine:"Indian", category:"Side",
    kw:"bhindi masala, okra masala, bhindi do pyaza, indian okra fry, masala okra",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"North Indian okra sauteed with onion and spices until dry and non-slimy, and where to source it.",
    dek:"Wash and fully dry the okra hours ahead, then saute it on high heat and do not stir too much. Water is what makes okra slimy, so keeping it dry and getting a hard sear cooks the sliminess right out.",
    card:"Dry-cooked okra with onion, tomato and warm spice.",
    ing:[
      {n:"Okra", q:"Small tender pods snap cleanly; wash and dry completely to avoid slime.", amt:"1 lb", local:true},
      {n:"Onion", q:"Sliced thick so it stays distinct in the dry fry.", amt:"2 medium", local:true},
      {n:"Tomato", q:"Firm and diced small; too much makes the okra slimy again.", amt:"1 medium", local:true},
      {n:"Ginger-garlic paste", q:"Fresh for the aromatic base.", amt:"1 tbsp", local:true},
      {n:"Ground coriander and cumin", q:"The backbone masala; coriander leads, cumin supports.", amt:"1 tsp each", local:true},
      {n:"Amchur (dry mango powder)", q:"A sour finish that is classic to bhindi; add at the end.", amt:"1 tsp", local:true},
      {n:"Red chili and turmeric", q:"Kashmiri chili for color, turmeric for warmth.", amt:"1 tsp each", local:true}
    ],
    steps:[
      {b:"Prep the okra", t:"Wash and dry fully, then cut into 1-inch lengths."},
      {b:"Sear the okra", t:"Fry on high heat, stirring little, until edges brown and sliminess cooks off; set aside."},
      {b:"Cook the base", t:"Saute onion until soft, add ginger-garlic paste, then ground spices."},
      {b:"Add tomato", t:"Cook the tomato down briefly until it softens but stays scant."},
      {b:"Finish", t:"Fold the okra back in, add amchur and salt, and toss on high two minutes."}
    ],
    tools:["Kadai|indian kadai wok","Chef knife|chef knife","Wooden spatula|wooden cooking spatula"]
  },
  {
    slug:"kadai-paneer", title:"Kadai Paneer, and where to source it", cuisine:"Indian", category:"Main",
    kw:"kadai paneer, karahi paneer, paneer capsicum masala, indian paneer curry, kadhai paneer",
    iso:["PT15M","PT20M","PT35M"], prep:"15 min", cook:"20 min", makes:"serves 4",
    desc:"Paneer and peppers in a coarse tomato gravy built on freshly pounded kadai masala, and where to source it.",
    dek:"Dry-roast whole coriander seeds and red chilies, then crush them coarse just before cooking. This freshly pounded kadai masala, not a smooth store powder, is the entire identity of the dish; grind it fine and it becomes an ordinary curry.",
    card:"Paneer and bell pepper in a coarse, coriander-forward masala.",
    ing:[
      {n:"Paneer", q:"Firm fresh paneer cut into thick fingers or cubes.", amt:"12 oz", local:true},
      {n:"Bell peppers", q:"Green capsicum is classic; cut into bite-size squares kept slightly crisp.", amt:"2", local:true},
      {n:"Coriander seeds", q:"Whole seeds dry-roasted and coarsely crushed for the signature masala.", amt:"2 tbsp", local:true},
      {n:"Dried red chilies", q:"Roasted with the coriander for smoky heat and color.", amt:"3", local:true},
      {n:"Tomatoes", q:"Ripe and roughly chopped for a chunky, not smooth, gravy.", amt:"3 medium", local:true},
      {n:"Onion", q:"Cut into thick petals so it stays present in the coarse gravy.", amt:"1 large", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground for the aromatic base.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Make kadai masala", t:"Dry-roast coriander seeds and red chilies, then pound coarse."},
      {b:"Start the gravy", t:"Saute onion petals, add ginger-garlic paste, then chopped tomato."},
      {b:"Add the masala", t:"Stir in most of the crushed masala; cook until the oil separates."},
      {b:"Add peppers and paneer", t:"Fold in peppers, then paneer; cook until peppers are just tender."},
      {b:"Finish coarse", t:"Sprinkle the reserved masala and ginger juliennes, and serve hot."}
    ],
    tools:["Kadai|indian kadai wok","Mortar and pestle|mortar and pestle","Skillet|heavy skillet"]
  },
  {
    slug:"fish-curry", title:"South Indian Fish Curry, and where to source it", cuisine:"Indian", category:"Main",
    kw:"fish curry, indian fish curry, meen curry, coconut fish curry, south indian fish curry",
    iso:["PT15M","PT20M","PT35M"], prep:"15 min", cook:"20 min", makes:"serves 4",
    desc:"South Indian fish simmered in a tamarind-coconut gravy with curry leaves, and where to source every part.",
    dek:"Add the fish only in the last few minutes and never stir hard, just swirl the pan. Fish flakes apart the moment it is poked at a simmer, so it poaches gently in the finished gravy rather than being cooked into shreds.",
    card:"Fish poached in a tangy tamarind and coconut gravy.",
    ing:[
      {n:"Firm white fish", q:"Kingfish, tilapia or snapper hold together; use steaks or thick fillets.", amt:"1.5 lb", local:true},
      {n:"Tamarind", q:"Soak a walnut-size lump for the sour backbone; concentrate works in a pinch.", amt:"1 tbsp pulp", local:true},
      {n:"Coconut milk", q:"Full-fat for body; added late so it does not split.", amt:"1 cup", local:true},
      {n:"Shallots", q:"Small shallots are sweeter than large onion in a coastal curry.", amt:"6", local:true},
      {n:"Curry leaves", q:"Fresh leaves are essential; they define the aroma.", amt:"2 sprigs", local:true},
      {n:"Kashmiri chili powder", q:"For deep red color with moderate heat.", amt:"1 tbsp", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground for the base.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Build the base", t:"Saute shallots and curry leaves, add ginger-garlic paste and chili powder."},
      {b:"Add tamarind", t:"Pour in tamarind water and a little water; simmer to cook out raw sourness."},
      {b:"Add fish", t:"Slide in the fish pieces in a single layer without stirring."},
      {b:"Add coconut", t:"Pour in coconut milk and swirl the pan; simmer gently, do not boil hard."},
      {b:"Rest", t:"Cook until the fish just flakes, then rest off heat so flavors settle."}
    ],
    tools:["Clay pot|indian clay curry pot","Kadai|indian kadai wok","Ladle|stainless steel ladle"]
  },
  {
    slug:"lamb-rogan-josh", title:"Lamb Rogan Josh, and where to source it", cuisine:"Indian", category:"Main",
    kw:"lamb rogan josh, kashmiri rogan josh, mutton rogan josh, kashmiri lamb curry, rogan josh",
    iso:["PT20M","PT1H30M","PT1H50M"], prep:"20 min", cook:"1 hr 30 min", makes:"serves 4",
    desc:"Kashmiri braised lamb in a deep-red gravy colored with Kashmiri chili, and where to source it.",
    dek:"The red color comes from Kashmiri chilies and ratan jot (cockscomb flower), not tomatoes, which the classic version omits entirely. Bloom the chili in the fat over low heat so it stays crimson instead of scorching brown.",
    card:"Slow-braised Kashmiri lamb in a crimson, aromatic gravy.",
    ing:[
      {n:"Lamb on the bone", q:"Bone-in shoulder or leg; the bone enriches the gravy over a long braise.", amt:"2 lb", local:true},
      {n:"Kashmiri red chili powder", q:"For signature red color with gentle heat, not a fiery blend.", amt:"2 tbsp", local:true},
      {n:"Yogurt", q:"Whole-milk, whisked and added off the boil so it does not curdle.", amt:"1 cup", local:true},
      {n:"Fennel and ginger powder", q:"Ground fennel and dry ginger are the Kashmiri signature over garlic.", amt:"1 tbsp each", local:true},
      {n:"Whole spices", q:"Cloves, green and black cardamom, cinnamon and bay bloomed in the fat.", amt:"1 tbsp mixed", local:true},
      {n:"Asafoetida", q:"A pinch stands in for the onion-garlic often left out in Kashmiri Pandit style.", amt:"1/4 tsp", local:true},
      {n:"Mustard oil", q:"Traditional; heat it to smoking first to mellow its sharpness.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Heat the oil", t:"Heat mustard oil until it smokes, then cool slightly and add asafoetida and whole spices."},
      {b:"Brown the lamb", t:"Sear the lamb pieces in the spiced oil until browned on all sides."},
      {b:"Bloom the chili", t:"Lower the heat and stir in Kashmiri chili so it colors the fat without scorching."},
      {b:"Add yogurt and spices", t:"Off the boil, stir in whisked yogurt, fennel and ginger powder."},
      {b:"Braise", t:"Add water, cover, and simmer gently until the lamb is fork-tender and the gravy is deep red."}
    ],
    tools:["Dutch oven|heavy dutch oven","Pressure cooker|stovetop pressure cooker","Wooden spoon|long wooden spoon"]
  },
  {
    slug:"chicken-jalfrezi", title:"Chicken Jalfrezi, and where to source it", cuisine:"Indian", category:"Main",
    kw:"chicken jalfrezi, jalfrezi, indian stir fry curry, chicken pepper curry, dry chicken curry",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"A dry, stir-fried chicken curry with crisp peppers and onions in a scant tomato masala, and where to source it.",
    dek:"Jalfrezi is a stir-fry, not a stew: cook the peppers and onions hot and fast so they stay crisp-tender with a little char. If you let everything stew soft in a heavy gravy, you have made a korma, not a jalfrezi.",
    card:"Stir-fried chicken with crisp peppers in a dry, tangy masala.",
    ing:[
      {n:"Chicken thighs", q:"Boneless thighs stay juicy in a fast, high-heat fry; cut into strips.", amt:"1.5 lb", local:true},
      {n:"Bell peppers", q:"Mixed colors cut into thick strips, kept crisp with a little char.", amt:"2", local:true},
      {n:"Onion", q:"Cut into petals so the layers separate and sear.", amt:"1 large", local:true},
      {n:"Tomato", q:"Firm, cut into wedges; the gravy stays scant, not saucy.", amt:"2 medium", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground for the base.", amt:"1 tbsp", local:true},
      {n:"Green chilies", q:"Slit lengthwise for bright, direct heat.", amt:"2", local:true},
      {n:"Cumin and coriander powder", q:"The dry masala; add a pinch of garam masala at the end.", amt:"1 tsp each", local:true}
    ],
    steps:[
      {b:"Sear the chicken", t:"Fry the chicken strips on high heat until browned, then set aside."},
      {b:"Char the vegetables", t:"Add onion petals and peppers; stir-fry hot until edged with char but still crisp."},
      {b:"Build the masala", t:"Push aside, add ginger-garlic paste, chilies and ground spices; cook until fragrant."},
      {b:"Add tomato", t:"Add tomato wedges and cook briefly so they soften but stay intact."},
      {b:"Combine", t:"Return the chicken, toss on high with garam masala, and serve dry and glossy."}
    ],
    tools:["Kadai|indian kadai wok","Wok spatula|metal wok spatula","Chef knife|chef knife"]
  },
  {
    slug:"egg-curry", title:"Egg Curry, and where to source it", cuisine:"Indian", category:"Main",
    kw:"egg curry, anda curry, indian egg curry, masala egg curry, boiled egg curry",
    iso:["PT10M","PT25M","PT35M"], prep:"10 min", cook:"25 min", makes:"serves 4",
    desc:"Hard-boiled eggs simmered in a spiced onion-tomato gravy, and where to source every part.",
    dek:"Prick and lightly fry the peeled boiled eggs in the tempered spices before they go in the gravy. The shallow fry sets a thin spiced skin that both stops the whites from breaking and lets the masala cling instead of sliding off.",
    card:"Boiled eggs simmered in a rich onion-tomato masala.",
    ing:[
      {n:"Eggs", q:"Hard-boil and peel; slightly older eggs peel cleaner than very fresh ones.", amt:"6", local:true},
      {n:"Onion", q:"Finely chopped and browned deep for a sweet, thick base.", amt:"2 medium", local:true},
      {n:"Tomatoes", q:"Ripe and pureed for the tangy body of the gravy.", amt:"3 medium", local:true},
      {n:"Ginger-garlic paste", q:"Fresh-ground for the aromatic base.", amt:"1 tbsp", local:true},
      {n:"Garam masala", q:"Added near the end so its aroma survives.", amt:"1 tsp", local:true},
      {n:"Turmeric and chili powder", q:"Turmeric for color and a little chili to coat the fried eggs.", amt:"1 tsp each", local:true},
      {n:"Cumin seeds", q:"Bloomed in oil to open the tempering.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Boil and prep", t:"Hard-boil, peel, and lightly prick the eggs."},
      {b:"Fry the eggs", t:"Toss the eggs in oil with turmeric and chili until lightly golden; set aside."},
      {b:"Build the base", t:"Bloom cumin, brown the onion deeply, then add ginger-garlic paste."},
      {b:"Cook the gravy", t:"Add tomato puree and spices; cook until the oil separates."},
      {b:"Simmer", t:"Add water for gravy, return the eggs, finish with garam masala and simmer gently."}
    ],
    tools:["Kadai|indian kadai wok","Blender|countertop blender","Saucepan|small saucepan"]
  },
  {
    slug:"rava-upma", title:"Rava Upma, and where to source it", cuisine:"Indian", category:"Breakfast",
    kw:"rava upma, upma, sooji upma, semolina upma, south indian upma",
    iso:["PT10M","PT15M","PT25M"], prep:"10 min", cook:"15 min", makes:"serves 4",
    desc:"South Indian semolina cooked with a tempering of mustard, dal and curry leaves, and where to source it.",
    dek:"Dry-roast the rava on low until it smells nutty and is just past pale, before any water goes near it. Roasting keeps each grain separate so the upma turns out fluffy; skip it and the semolina clumps into a gummy paste.",
    card:"Fluffy tempered semolina with dal, ginger and curry leaves.",
    ing:[
      {n:"Rava (semolina)", q:"Coarse or medium sooji, not fine; dry-roast to keep it fluffy.", amt:"1 cup", local:true},
      {n:"Mustard seeds", q:"They pop in hot oil to start the tempering.", amt:"1 tsp", local:true},
      {n:"Urad and chana dal", q:"A spoon of each fried for nutty crunch in the temper.", amt:"1 tbsp each", local:true},
      {n:"Curry leaves", q:"Fresh leaves are essential to the aroma.", amt:"1 sprig", local:true},
      {n:"Ginger and green chili", q:"Minced fine for warmth and gentle heat.", amt:"1 inch, 2 chilies", local:true},
      {n:"Onion", q:"Finely chopped and softened before the water goes in.", amt:"1 small", local:true},
      {n:"Ghee", q:"A spoon stirred in at the end for aroma and shine.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Roast the rava", t:"Dry-roast the semolina on low until nutty and just past pale; set aside."},
      {b:"Temper", t:"Pop mustard seeds in oil, fry the dals golden, then curry leaves, ginger and chili."},
      {b:"Soften aromatics", t:"Add onion and cook until soft."},
      {b:"Add water", t:"Pour in about 2.5 cups hot water with salt and bring to a boil."},
      {b:"Add rava", t:"Rain in the roasted rava while stirring to avoid lumps; cook until thick, then finish with ghee."}
    ],
    tools:["Kadai|indian kadai wok","Wooden spatula|wooden cooking spatula","Saucepan|small saucepan"]
  }
];
