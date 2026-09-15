// batch-69-world-e.js — world dishes round 2 grp1 (agent-drafted, culled). Chinese + Thai/SE-Asian. local:true.
module.exports = [
  {
    slug:"gong-bao-chicken", title:"Gong Bao Chicken (Kung Pao), and where to source it", cuisine:"Chinese", category:"Main",
    kw:"kung pao chicken, gong bao ji ding, sichuan chicken, dried chili chicken, mala",
    iso:["PT20M","PT10M","PT30M"], prep:"20 min", cook:"10 min", makes:"serves 3",
    desc:"Real Sichuan gong bao ji ding — diced chicken, dried chilies, peanuts, and a sweet-sour-numbing sauce, no gloppy takeout goo.",
    dek:"Toast the dried chilies and Sichuan peppercorns in dry oil until fragrant but not black — you want their aroma to bloom into the oil, not their bitterness. Burn them and the whole wok tastes of ash.",
    card:"Diced chicken, charred chilies, peanuts, and a mala vinegar sauce.",
    ing:[
      {n:"Chicken thigh", q:"Boneless thigh stays juicy through high heat; cut into even 1/2-inch dice.", amt:"1 lb", local:true},
      {n:"Dried red chilies", q:"Sichuan facing-heaven chilies for aroma over pure heat; snip and shake out most seeds.", amt:"10-12", local:true},
      {n:"Sichuan peppercorns", q:"The source of the tingling ma; buy them whole and red, not gray and stale.", amt:"1 tsp", local:true},
      {n:"Chinkiang black vinegar", q:"Malty aged rice vinegar is the backbone of the sauce; balsamic is not a sub.", amt:"1 tbsp", local:true},
      {n:"Roasted peanuts", q:"Skin-on or blanched, added last so they stay crunchy.", amt:"1/2 cup", local:true},
      {n:"Scallions", q:"White parts cut into short chunks, matching the chicken dice.", amt:"4", local:true},
      {n:"Light soy sauce", q:"For salt and color in both the marinade and the sauce.", amt:"2 tbsp", local:true},
      {n:"Sugar", q:"Balances the vinegar into the classic sweet-sour lychee flavor.", amt:"2 tsp", local:true}
    ],
    steps:[
      {b:"Marinate", t:"Toss diced chicken with soy, a splash of Shaoxing wine, and a spoon of cornstarch; rest 15 minutes."},
      {b:"Mix the sauce", t:"Stir black vinegar, soy, sugar, cornstarch, and a little water into a bowl and set by the stove."},
      {b:"Bloom aromatics", t:"In hot oil over medium heat, toast dried chilies and Sichuan peppercorns until fragrant, then push aside."},
      {b:"Sear the chicken", t:"Crank the heat, add chicken in one layer, and stir-fry until just cooked and lightly browned."},
      {b:"Sauce and finish", t:"Add scallion whites and garlic, pour in the sauce, and toss until glossy; fold in peanuts off the heat."}
    ],
    tools:["Wok|carbon steel wok","Wok spatula|wok spatula","Cleaver|chinese cleaver"]
  },
  {
    slug:"peking-duck", title:"Peking Duck, and where to source it", cuisine:"Chinese", category:"Main",
    kw:"peking duck, beijing roast duck, crispy duck pancakes, mandarin pancakes",
    iso:["PT1H","PT1H30M","PT2H30M"], prep:"1 hr", cook:"1 hr 30 min", makes:"serves 4",
    desc:"The home cook's Peking duck — air-dried and scalded skin roasted glass-crisp, carved for pancakes with hoisin and scallion.",
    dek:"Everything rides on drying the skin. Scald it, coat it in a maltose-vinegar wash, and let it air-dry uncovered in the fridge for a full day so the skin roasts crackling-crisp instead of steaming flabby.",
    card:"Air-dried crisp-skin roast duck for pancakes, scallion, and hoisin.",
    ing:[
      {n:"Whole duck", q:"A Pekin (Long Island) duck, 5-6 lb; a plump breast means more skin to crisp.", amt:"1 duck", local:true},
      {n:"Maltose or honey", q:"Maltose gives the deepest lacquer; thin it with hot water to brush on.", amt:"2 tbsp", local:true},
      {n:"Chinese five-spice", q:"Rubbed into the cavity, not the skin, so the outside stays clean for crisping.", amt:"1 tsp", local:true},
      {n:"Mandarin pancakes", q:"Thin steamed flour wrappers; buy frozen from an Asian grocer and steam to serve.", amt:"16", local:true},
      {n:"Hoisin sauce", q:"The sweet-savory smear; look for a brand with fermented soybean up front.", amt:"1/2 cup", local:true},
      {n:"Scallions", q:"Cut into fine matchsticks for the pancakes.", amt:"6", local:true},
      {n:"Cucumber", q:"Seeded and julienned for cool crunch against the rich duck.", amt:"1", local:true}
    ],
    steps:[
      {b:"Prep and scald", t:"Rinse the duck, prick the skin, then pour boiling water over it until the skin tightens; pat dry."},
      {b:"Glaze and dry", t:"Brush all over with maltose-vinegar wash and air-dry uncovered in the fridge 12-24 hours."},
      {b:"Roast low then hot", t:"Roast at 325F breast-up until nearly done, then raise the heat to blister the skin deep amber."},
      {b:"Rest and carve", t:"Rest 15 minutes, then carve the crisp skin and meat into thin slices."},
      {b:"Assemble", t:"Smear a warm pancake with hoisin, add duck, scallion, and cucumber, and roll."}
    ],
    tools:["Roasting rack|roasting rack pan","Bamboo steamer|bamboo steamer basket","Cleaver|chinese cleaver"]
  },
  {
    slug:"zhajiangmian", title:"Zhajiangmian (Fried Sauce Noodles), and where to source it", cuisine:"Chinese", category:"Main",
    kw:"zhajiangmian, fried sauce noodles, beijing noodles, zha jiang mian, bean sauce pork noodles",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"Beijing-style fried-sauce noodles — pork simmered in fermented bean paste over thick wheat noodles with fresh raw vegetables.",
    dek:"Fry the bean paste low and slow in plenty of oil before the pork's water hits it. That patient rendering is what turns raw, salty yellow-soybean paste into the deep, glossy, savory sauce the dish is named for.",
    card:"Thick noodles under fried bean-paste pork and crisp raw vegetables.",
    ing:[
      {n:"Yellow soybean paste", q:"Beijing tianmianjiang plus huangjiang; this fermented paste is the whole dish, not hoisin.", amt:"6 tbsp", local:true},
      {n:"Ground pork", q:"Fattier pork (or hand-diced pork belly) keeps the sauce rich; 20% fat is right.", amt:"3/4 lb", local:true},
      {n:"Thick wheat noodles", q:"Fresh chewy hand-pulled or thick dried wheat noodles; skinny noodles get lost.", amt:"1 lb", local:true},
      {n:"Cucumber", q:"Julienned raw, the cooling counterweight to the salty sauce.", amt:"1", local:true},
      {n:"Scallions", q:"Whites minced for the sauce, greens saved to garnish.", amt:"4", local:true},
      {n:"Ginger", q:"Minced fine to bloom in the oil with the scallion.", amt:"1 tbsp", local:true},
      {n:"Bean sprouts", q:"Blanched briefly for a fresh raw-vegetable topping.", amt:"1 cup", local:true}
    ],
    steps:[
      {b:"Loosen the paste", t:"Stir the bean pastes with a little water and Shaoxing wine into a pourable slurry."},
      {b:"Render the pork", t:"Brown ground pork in oil until the fat renders and the edges crisp."},
      {b:"Fry the sauce", t:"Add ginger and scallion whites, then the paste; fry low 8-10 minutes until dark and glossy."},
      {b:"Simmer", t:"Add a splash of water and simmer until the sauce thickens and the oil separates on top."},
      {b:"Assemble", t:"Boil noodles, top with sauce, cucumber, sprouts, and scallion greens; toss at the table."}
    ],
    tools:["Wok|carbon steel wok","Large pot|8 quart stock pot","Ladle|kitchen ladle"]
  },
  {
    slug:"char-siu-pork", title:"Char Siu Pork, and where to source it", cuisine:"Chinese", category:"Main",
    kw:"char siu, cantonese bbq pork, chinese barbecue pork, char siu pork, red roast pork",
    iso:["PT20M","PT45M","PT1H5M"], prep:"20 min", cook:"45 min", makes:"serves 4",
    desc:"Cantonese char siu — pork shoulder marinated in fermented bean paste, honey, and five-spice, roasted to lacquered, charred edges.",
    dek:"Cut the pork into long thick strips, not one roast. The extra surface is what catches the honey glaze and chars at the edges under high heat — the sweet-burnt caramelized bark is the entire point of char siu.",
    card:"Honey-lacquered, fermented-bean-marinated roast pork with charred edges.",
    ing:[
      {n:"Pork shoulder", q:"Cut into long 2-inch-thick strips; the fat marbling keeps it juicy and takes char.", amt:"2 lb", local:true},
      {n:"Fermented red bean curd", q:"Nam yu gives the classic rosy hue and funk; a couple cubes with their brine.", amt:"2 tbsp", local:true},
      {n:"Hoisin sauce", q:"For body and sweetness in the marinade.", amt:"3 tbsp", local:true},
      {n:"Honey", q:"Brushed on at the end for the lacquer; too early and it scorches to bitter.", amt:"3 tbsp", local:true},
      {n:"Chinese five-spice", q:"Star anise-forward blend; a little goes a long way.", amt:"1 tsp", local:true},
      {n:"Shaoxing wine", q:"Chinese rice wine for depth; dry sherry is the closest sub.", amt:"2 tbsp", local:true},
      {n:"Maltose or sugar", q:"Balances the salt and helps the edges caramelize.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Marinate", t:"Blend bean curd, hoisin, wine, five-spice, soy, and sugar; coat the pork strips and chill 8 hours or overnight."},
      {b:"Roast", t:"Roast on a rack at 425F, turning once, until the edges darken, about 30 minutes."},
      {b:"Glaze", t:"Brush with honey and blast under the broiler until the surface blisters and chars in spots."},
      {b:"Rest and slice", t:"Rest 10 minutes, then slice across the grain into glossy pieces."},
      {b:"Serve", t:"Serve over rice or in noodles, spooning any pan juices over the top."}
    ],
    tools:["Roasting rack|roasting rack pan","Basting brush|silicone basting brush","Cleaver|chinese cleaver"]
  },
  {
    slug:"mongolian-lamb", title:"Mongolian Lamb, and where to source it", cuisine:"Chinese", category:"Main",
    kw:"mongolian lamb, cumin lamb, stir fry lamb, chinese lamb, scallion lamb",
    iso:["PT20M","PT10M","PT30M"], prep:"20 min", cook:"10 min", makes:"serves 3",
    desc:"Fast-fried Chinese lamb with toasted cumin, chili, and a tangle of scallions in a savory-sweet soy sauce.",
    dek:"Slice the lamb thin against the grain and stir-fry it in a screaming-hot wok in one quick batch. Crowd it or cook it low and the meat weeps water, steams gray, and turns tough instead of searing.",
    card:"Thin-sliced lamb seared hot with cumin, chili, and scallions.",
    ing:[
      {n:"Lamb leg or shoulder", q:"Slice paper-thin across the grain; partially freezing it first makes this easy.", amt:"1 lb", local:true},
      {n:"Whole cumin seed", q:"Toasted and crushed, the signature aroma; ground cumin can't match it.", amt:"1 tbsp", local:true},
      {n:"Dried chili flakes", q:"For heat that plays against the cumin's warmth.", amt:"1-2 tsp", local:true},
      {n:"Scallions", q:"Cut into long segments and added late so they stay bright.", amt:"6", local:true},
      {n:"Garlic", q:"Sliced, bloomed in the oil just before the lamb goes back in.", amt:"4 cloves", local:true},
      {n:"Light soy sauce", q:"The salty savory base of the quick sauce.", amt:"2 tbsp", local:true},
      {n:"Sugar", q:"A pinch to round out the soy and chili.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Marinate", t:"Toss sliced lamb with soy, Shaoxing wine, and cornstarch; rest 15 minutes."},
      {b:"Toast the cumin", t:"Dry-toast cumin seed until fragrant, then crush coarsely."},
      {b:"Sear the lamb", t:"In a blazing-hot wok, stir-fry the lamb in one fast batch until browned; remove."},
      {b:"Build the flavor", t:"Fry garlic, chili, and cumin briefly, then return the lamb."},
      {b:"Finish", t:"Add soy, sugar, and scallions; toss hard for 30 seconds and serve."}
    ],
    tools:["Wok|carbon steel wok","Wok spatula|wok spatula","Mortar and pestle|mortar and pestle"]
  },
  {
    slug:"pad-kra-pao", title:"Pad Kra Pao (Thai Basil Stir-Fry), and where to source it", cuisine:"Thai", category:"Main",
    kw:"pad kra pao, thai basil chicken, pad krapow, holy basil stir fry, gai pad kra pao",
    iso:["PT15M","PT10M","PT25M"], prep:"15 min", cook:"10 min", makes:"serves 2",
    desc:"Thailand's true fast food — minced meat stir-fried hard with garlic, chili, and holy basil, crowned with a crispy fried egg.",
    dek:"It has to be holy basil, not sweet Thai basil. Holy basil (kra pao) brings a peppery, clove-like heat that defines the dish; sweet basil turns it into a different, licorice-scented stir-fry entirely.",
    card:"Minced meat, garlic, chili, holy basil, over rice with a fried egg.",
    ing:[
      {n:"Holy basil", q:"Kra pao — peppery and clove-scented, wilted in at the end; sweet basil is not the same herb.", amt:"2 cups", local:true},
      {n:"Ground chicken or pork", q:"Hand-chopped or coarse-ground so it stays juicy, not pasty.", amt:"3/4 lb", local:true},
      {n:"Thai bird chilies", q:"Pounded with garlic; adjust count to taste, but real pad kra pao bites.", amt:"4-8", local:true},
      {n:"Garlic", q:"Pounded rough with the chilies into a coarse paste.", amt:"6 cloves", local:true},
      {n:"Oyster sauce", q:"For savory body; a good brand tastes of oyster, not just salt.", amt:"1 tbsp", local:true},
      {n:"Fish sauce", q:"The salt and funk; look for one listing just anchovy and salt.", amt:"1 tbsp", local:true},
      {n:"Eggs", q:"Fried crisp in hot oil for the classic topping.", amt:"2", local:true}
    ],
    steps:[
      {b:"Pound the paste", t:"Bruise garlic and chilies in a mortar into a rough paste."},
      {b:"Fry the aromatics", t:"Sizzle the paste in hot oil just until fragrant, not browned."},
      {b:"Cook the meat", t:"Add the meat and stir-fry hard, breaking it up, until cooked and lightly caramelized."},
      {b:"Season and basil", t:"Add oyster sauce, fish sauce, a pinch of sugar, and a splash of water, then fold in the holy basil until just wilted."},
      {b:"Serve", t:"Spoon over jasmine rice and top with a crispy fried egg."}
    ],
    tools:["Wok|carbon steel wok","Mortar and pestle|thai granite mortar and pestle","Wok spatula|wok spatula"]
  },
  {
    slug:"som-tum", title:"Som Tum (Green Papaya Salad), and where to source it", cuisine:"Thai", category:"Salad",
    kw:"som tum, green papaya salad, thai papaya salad, som tam, isaan salad",
    iso:["PT20M","PT0M","PT20M"], prep:"20 min", cook:"0 min", makes:"serves 2",
    desc:"Isaan green papaya salad — shredded unripe papaya bruised in a mortar with lime, fish sauce, chili, and palm sugar.",
    dek:"Pound, don't toss. Lightly bruising the papaya and beans in the mortar breaks their cells just enough to drink up the dressing, while whole cherry tomatoes and chilies release their juice into the sauce — a bowl-tossed version stays dry and dull.",
    card:"Bruised green papaya with lime, chili, fish sauce, and palm sugar.",
    ing:[
      {n:"Green papaya", q:"Hard and unripe, peeled and shredded into fine strands; it should be crunchy, not sweet.", amt:"3 cups", local:true},
      {n:"Palm sugar", q:"Soft, caramel-toned sugar that dissolves into the dressing; brown sugar is a rough sub.", amt:"2 tbsp", local:true},
      {n:"Fish sauce", q:"The salty savory core; a clean anchovy-forward bottle.", amt:"2 tbsp", local:true},
      {n:"Limes", q:"Fresh juice for the sour edge; bottled tastes flat here.", amt:"2", local:true},
      {n:"Thai bird chilies", q:"Pounded into the dressing; 2 for mild, more for the real Isaan burn.", amt:"2-6", local:true},
      {n:"Long beans", q:"Snapped into segments and bruised with the papaya.", amt:"4", local:true},
      {n:"Peanuts", q:"Roasted, pounded coarse and added last for crunch.", amt:"1/4 cup", local:true},
      {n:"Cherry tomatoes", q:"Halved and bruised to release their juice into the sauce.", amt:"6", local:true}
    ],
    steps:[
      {b:"Start the dressing", t:"Pound garlic, chilies, and palm sugar in a large mortar into a coarse paste."},
      {b:"Add the wet", t:"Work in fish sauce and lime juice, tasting for the hot-sour-salty-sweet balance."},
      {b:"Bruise the vegetables", t:"Add long beans and tomatoes and pound gently to release their juices."},
      {b:"Fold the papaya", t:"Add shredded papaya, then pound-and-turn with a spoon so it soaks up the dressing without turning to mush."},
      {b:"Finish", t:"Fold in peanuts and serve immediately with sticky rice."}
    ],
    tools:["Clay mortar|thai clay mortar and pestle","Julienne peeler|julienne peeler","Cleaver|chinese cleaver"]
  },
  {
    slug:"larb-gai", title:"Larb Gai (Minced Chicken Salad), and where to source it", cuisine:"Thai", category:"Salad",
    kw:"larb gai, laab, minced chicken salad, thai larb, isaan larb, laab gai",
    iso:["PT15M","PT10M","PT25M"], prep:"15 min", cook:"10 min", makes:"serves 3",
    desc:"Isaan larb gai — warm minced chicken tossed with lime, fish sauce, chili, and the toasted rice powder that defines it.",
    dek:"Toasted rice powder (khao khua) is non-negotiable. Dry-toast raw sticky rice to nutty amber and grind it coarse — it thickens the dressing, adds a nutty crunch, and gives larb the smoky backbone that separates it from a plain lime salad.",
    card:"Warm minced chicken, lime, chili, herbs, and toasted rice powder.",
    ing:[
      {n:"Ground chicken", q:"Coarse-ground or hand-chopped thigh; poached gently so it stays tender.", amt:"1 lb", local:true},
      {n:"Sticky rice", q:"Raw glutinous rice, dry-toasted and ground into khao khua; the soul of the dish.", amt:"2 tbsp", local:true},
      {n:"Fish sauce", q:"The salt and savor; a clean, aromatic bottle.", amt:"2 tbsp", local:true},
      {n:"Limes", q:"Fresh juice, added off the heat to keep it bright.", amt:"2", local:true},
      {n:"Toasted chili flakes", q:"Thai dried chili, toasted and crushed for smoky heat.", amt:"1-2 tsp", local:true},
      {n:"Shallots", q:"Thinly sliced for sweetness and bite.", amt:"3", local:true},
      {n:"Mint and cilantro", q:"Torn in at the end; mint is essential to larb.", amt:"1 cup", local:true},
      {n:"Scallions", q:"Sliced for a fresh oniony lift.", amt:"3", local:true}
    ],
    steps:[
      {b:"Make rice powder", t:"Dry-toast sticky rice in a pan until deep golden and nutty, then grind coarse."},
      {b:"Cook the chicken", t:"Poach the minced chicken in a splash of water over medium heat, breaking it up, until just cooked."},
      {b:"Dress it warm", t:"Off the heat, add fish sauce, lime juice, chili flakes, and the rice powder; toss."},
      {b:"Add herbs", t:"Fold in shallots, scallions, mint, and cilantro just before serving."},
      {b:"Serve", t:"Serve warm or at room temperature with sticky rice and raw vegetables."}
    ],
    tools:["Skillet|carbon steel skillet","Mortar and pestle|thai granite mortar and pestle","Mixing bowl|stainless mixing bowl"]
  },
  {
    slug:"satay-chicken", title:"Satay Chicken, and where to source it", cuisine:"Thai", category:"Appetizer",
    kw:"chicken satay, satay, thai satay, grilled chicken skewers, peanut sauce",
    iso:["PT30M","PT15M","PT45M"], prep:"30 min", cook:"15 min", makes:"serves 4",
    desc:"Grilled marinated chicken skewers glowing yellow with turmeric, served with a rich roasted peanut sauce.",
    dek:"Turmeric and coconut in the marinade, not the peanut sauce, are what make it satay. That yellow lemongrass-turmeric-coconut bath both colors the meat and keeps it moist over the fire — skip it and you have plain grilled chicken with dip.",
    card:"Turmeric-marinated grilled chicken skewers with peanut sauce.",
    ing:[
      {n:"Chicken thigh", q:"Boneless thigh sliced into strips; stays juicy over high heat where breast dries.", amt:"1.5 lb", local:true},
      {n:"Coconut milk", q:"Full-fat, split between marinade and sauce; the fat carries flavor and moisture.", amt:"1 can", local:true},
      {n:"Ground turmeric", q:"The signature color and earthy note in the marinade.", amt:"1 tbsp", local:true},
      {n:"Lemongrass", q:"Tender inner core, minced fine; the citrus-floral heart of the marinade.", amt:"2 stalks", local:true},
      {n:"Roasted peanuts", q:"Ground for the sauce; roast raw ones yourself for the deepest flavor.", amt:"1 cup", local:true},
      {n:"Red curry paste", q:"A spoonful to build the peanut sauce fast.", amt:"2 tbsp", local:true},
      {n:"Palm sugar", q:"Balances the salty-spicy sauce with mellow caramel.", amt:"2 tbsp", local:true},
      {n:"Fish sauce", q:"Seasons both the marinade and the sauce.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Marinate", t:"Blend coconut milk, turmeric, lemongrass, fish sauce, and sugar; coat the chicken and chill 1 hour."},
      {b:"Skewer", t:"Thread the strips onto soaked bamboo skewers, weaving each strip so it holds."},
      {b:"Make the sauce", t:"Fry curry paste in coconut cream, add ground peanuts, sugar, fish sauce, and water; simmer to a spoonable sauce."},
      {b:"Grill", t:"Grill over high heat, turning and basting with marinade, until charred at the edges and cooked through."},
      {b:"Serve", t:"Serve hot with the warm peanut sauce and cucumber relish."}
    ],
    tools:["Bamboo skewers|bamboo skewers","Grill pan|cast iron grill pan","Blender|countertop blender"]
  },
  {
    slug:"tom-kha-gai", title:"Tom Kha Gai (Coconut Chicken Soup), and where to source it", cuisine:"Thai", category:"Soup",
    kw:"tom kha gai, coconut chicken soup, thai coconut soup, tom kha, galangal soup",
    iso:["PT15M","PT25M","PT40M"], prep:"15 min", cook:"25 min", makes:"serves 4",
    desc:"Thai coconut chicken soup — galangal, lemongrass, and lime leaf steeped into coconut milk with a sour-salty finish.",
    dek:"It's galangal, not ginger. Galangal's sharp, piney, almost medicinal bite is what makes tom kha taste like tom kha; ginger is milder and sweeter and quietly turns the soup into something else. Don't let the coconut milk hard-boil, either, or it splits.",
    card:"Coconut, galangal, lemongrass, and lime leaf soup with chicken.",
    ing:[
      {n:"Coconut milk", q:"Full-fat; simmer gently so the cream stays emulsified and silky.", amt:"2 cans", local:true},
      {n:"Galangal", q:"Sliced into coins — piney and sharp, the defining aromatic; ginger is not a swap.", amt:"6 slices", local:true},
      {n:"Lemongrass", q:"Bruised and cut into segments to release its oils into the broth.", amt:"2 stalks", local:true},
      {n:"Kaffir lime leaves", q:"Torn to release their perfume; frozen ones keep their aroma well.", amt:"6", local:true},
      {n:"Chicken thigh", q:"Sliced thin so it poaches quickly and stays tender.", amt:"1 lb", local:true},
      {n:"Straw or oyster mushrooms", q:"They drink up the broth; button mushrooms work in a pinch.", amt:"2 cups", local:true},
      {n:"Fish sauce", q:"The salty savory seasoning, added to taste at the end.", amt:"3 tbsp", local:true},
      {n:"Limes", q:"Juice stirred in off the heat for the sour lift.", amt:"2", local:true}
    ],
    steps:[
      {b:"Steep the aromatics", t:"Simmer galangal, lemongrass, and lime leaves in a little coconut milk and water to infuse."},
      {b:"Poach the chicken", t:"Add the rest of the coconut milk and the sliced chicken; simmer gently, never a rolling boil."},
      {b:"Add mushrooms", t:"Drop in the mushrooms and cook until tender."},
      {b:"Season off the heat", t:"Turn off the heat, then stir in fish sauce, lime juice, and a little palm sugar to balance."},
      {b:"Serve", t:"Finish with cilantro and fresh chili; serve with rice."}
    ],
    tools:["Saucepan|3 quart saucepan","Cleaver|chinese cleaver","Ladle|kitchen ladle"]
  },
  {
    slug:"pad-woonsen", title:"Pad Woonsen (Glass Noodle Stir-Fry), and where to source it", cuisine:"Thai", category:"Main",
    kw:"pad woonsen, glass noodle stir fry, thai bean thread noodles, cellophane noodle stir fry",
    iso:["PT20M","PT10M","PT30M"], prep:"20 min", cook:"10 min", makes:"serves 3",
    desc:"Thai stir-fried glass noodles — bean threads tossed with egg, vegetables, and a light savory sauce that they drink right up.",
    dek:"Soak the bean threads only until pliable, never fully soft, and finish the cooking in the wok with the sauce. Overhydrated noodles blow out into mush; barely-soaked ones absorb the seasoning as they fry and keep their signature slippery bounce.",
    card:"Bean-thread noodles stir-fried with egg, vegetables, and light sauce.",
    ing:[
      {n:"Bean thread noodles", q:"Mung-bean glass noodles; soak just until bendy, not soft, so they finish in the wok.", amt:"5 oz", local:true},
      {n:"Eggs", q:"Scrambled in first to fold through the noodles.", amt:"2", local:true},
      {n:"Shrimp or ground pork", q:"Either works; sear it before the noodles go in.", amt:"1/2 lb", local:true},
      {n:"Oyster sauce", q:"The savory backbone of the light sauce.", amt:"2 tbsp", local:true},
      {n:"Soy sauce", q:"Thin soy for salt without darkening the pale noodles too much.", amt:"1 tbsp", local:true},
      {n:"Garlic", q:"Bloomed in the oil to start the stir-fry.", amt:"3 cloves", local:true},
      {n:"Napa or celery and tomato", q:"Classic additions for crunch and freshness.", amt:"2 cups", local:true},
      {n:"Scallions", q:"Cut in segments and added near the end.", amt:"3", local:true}
    ],
    steps:[
      {b:"Soak the noodles", t:"Soak bean threads in warm water just until pliable, then drain and snip a few times."},
      {b:"Scramble the egg", t:"Fry garlic, add the beaten egg, and scramble it soft; add the protein and sear."},
      {b:"Add noodles and sauce", t:"Toss in the noodles with oyster sauce, soy, sugar, and a splash of water."},
      {b:"Stir-fry", t:"Toss over high heat until the noodles turn translucent and soak up the sauce."},
      {b:"Finish", t:"Fold in the vegetables and scallions, cook briefly to keep them crisp, and serve."}
    ],
    tools:["Wok|carbon steel wok","Wok spatula|wok spatula","Kitchen shears|kitchen shears"]
  },
  {
    slug:"mee-goreng", title:"Mee Goreng (Fried Noodles), and where to source it", cuisine:"Malaysian", category:"Main",
    kw:"mee goreng, mamak mee goreng, malaysian fried noodles, indian fried noodles, spicy fried noodles",
    iso:["PT20M","PT10M","PT30M"], prep:"20 min", cook:"10 min", makes:"serves 2",
    desc:"Mamak-style mee goreng — yellow noodles wok-fried with sambal, tomato, tofu, and a tamarind-sweet-spicy glaze.",
    dek:"The sauce needs both sweet ketchup-type chili and sour tamarind against the sambal heat. That sweet-sour-spicy three-way balance, fried onto fresh yellow noodles over ripping heat, is the mamak signature — miss the sour and it just tastes like sweet chili noodles.",
    card:"Yellow noodles wok-fried with sambal, tomato, tofu, and tamarind.",
    ing:[
      {n:"Fresh yellow noodles", q:"Springy alkaline wheat noodles (Hokkien-style); rinse to loosen before frying.", amt:"1 lb", local:true},
      {n:"Sambal or chili paste", q:"The heat and depth; a good sambal oelek or chili boh.", amt:"3 tbsp", local:true},
      {n:"Tamarind", q:"The essential sour note; soak pulp and strain, or use concentrate.", amt:"1 tbsp", local:true},
      {n:"Firm tofu", q:"Fried golden and cubed for the classic bite.", amt:"6 oz", local:true},
      {n:"Tomato", q:"Wedges that soften into the sauce; some cooks add ketchup too.", amt:"1", local:true},
      {n:"Sweet soy sauce", q:"Kecap manis for the thick sweet gloss and color.", amt:"2 tbsp", local:true},
      {n:"Bean sprouts", q:"Tossed in at the end for crunch.", amt:"1 cup", local:true},
      {n:"Eggs", q:"Scrambled into the wok before the noodles.", amt:"2", local:true}
    ],
    steps:[
      {b:"Make the sauce", t:"Stir sambal, tamarind, sweet soy, and a little sugar and soy into a bowl."},
      {b:"Fry the base", t:"Sizzle garlic, add fried tofu and tomato, then scramble in the eggs."},
      {b:"Add noodles", t:"Toss in the yellow noodles and pour over the sauce."},
      {b:"Stir-fry hard", t:"Fry over high heat, tossing, until the noodles are coated and lightly charred."},
      {b:"Finish", t:"Fold in bean sprouts, cook briefly, and serve with lime and fried shallots."}
    ],
    tools:["Wok|carbon steel wok","Wok spatula|wok spatula","Fine strainer|fine mesh strainer"]
  },
  {
    slug:"goi-cuon", title:"Goi Cuon (Fresh Spring Rolls), and where to source it", cuisine:"Vietnamese", category:"Appetizer",
    kw:"goi cuon, vietnamese fresh spring rolls, summer rolls, rice paper rolls, shrimp spring rolls",
    iso:["PT30M","PT10M","PT40M"], prep:"30 min", cook:"10 min", makes:"makes 10 rolls",
    desc:"Vietnamese fresh spring rolls — rice paper wrapped around shrimp, pork, herbs, and vermicelli, with peanut dipping sauce.",
    dek:"Dip each rice paper in warm water for only a couple of seconds — it should still feel stiff when it comes out. It keeps softening as you fill it; soak it until pliable at the sink and it turns to sticky, tearing paste by the time you roll.",
    card:"Rice paper rolled around shrimp, pork, herbs, and vermicelli.",
    ing:[
      {n:"Rice paper wrappers", q:"Banh trang; dip just 2 seconds in warm water — they finish softening as you fill.", amt:"10", local:true},
      {n:"Shrimp", q:"Poached, peeled, and sliced in half lengthwise to lie flat and show through.", amt:"20", local:true},
      {n:"Pork belly or loin", q:"Simmered until tender, then sliced thin.", amt:"1/2 lb", local:true},
      {n:"Rice vermicelli", q:"Bun noodles, boiled and cooled; the soft starchy filler.", amt:"6 oz", local:true},
      {n:"Fresh herbs", q:"Mint, cilantro, and Thai basil whole-leaf; the herbs are the point, not garnish.", amt:"2 cups", local:true},
      {n:"Lettuce", q:"Soft leaf lettuce as the base layer that holds everything.", amt:"1 head", local:true},
      {n:"Hoisin and peanut", q:"For the classic dipping sauce, thinned with a little water.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Prep the fillings", t:"Poach the shrimp and pork, slice thin; cook and cool the vermicelli; wash and dry the herbs."},
      {b:"Soften a wrapper", t:"Dip one rice paper in warm water for two seconds and lay it on a damp board; it firms as you work."},
      {b:"Layer", t:"Near the bottom third, stack lettuce, vermicelli, herbs, and pork; place shrimp cut-side up above them."},
      {b:"Roll", t:"Fold the bottom over the filling, fold in the sides, then roll tight so the shrimp shows through the top."},
      {b:"Sauce and serve", t:"Simmer hoisin with peanut butter and water; serve the rolls whole with the sauce and crushed peanuts."}
    ],
    tools:["Shallow bowl|wide shallow bowl","Chef knife|chef knife","Small pot|2 quart saucepan"]
  }
];
