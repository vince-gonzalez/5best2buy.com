// batch-66-world-b.js — real world dishes (agent-drafted, culled). Italian pastas, fried rice, ramen,
// tom yum, chili, burrito, Indian mains. Every ingredient local:true (resolver auto-links).
module.exports = [
  {
    slug:"spaghetti-carbonara",
    title:"Spaghetti Carbonara, and where to source it",
    cuisine:"Italian", category:"Main",
    kw:"carbonara, spaghetti carbonara, roman pasta, guanciale egg pasta",
    iso:["PT10M","PT15M","PT25M"], prep:"10 min", cook:"15 min", makes:"serves 4",
    desc:"The real Roman carbonara — egg, cheese, guanciale, pepper, no cream — and where to source every part.",
    dek:"Kill the heat before the eggs go in. The sauce is raw yolk thickened by the pasta's residual warmth, not scrambled — tossed off the burner it turns silky; left on the flame it turns to breakfast.",
    card:"Egg, pecorino, guanciale, black pepper — no cream, ever. The sauce is made off the heat.",
    ing:[
      {n:"Spaghetti", q:"A bronze-die spaghetti grips the sauce. Cook it a minute shy of the box.", amt:"1 lb", local:true},
      {n:"Guanciale", q:"Cured pork jowl — the real thing, not pancetta or bacon. Render it slowly for crisp edges.", amt:"6 oz", local:true},
      {n:"Egg yolks", q:"The sauce. Mostly yolks plus one whole egg, at room temperature.", amt:"4 yolks + 1 egg", local:true},
      {n:"Pecorino Romano", q:"Grated fine — sharp, salty sheep's cheese. Real aged pecorino.", amt:"1 cup", local:true},
      {n:"Black pepper", q:"Coarsely cracked and a lot of it. Toast it in the pan first.", amt:"to taste", local:true}
    ],
    steps:[
      {b:"Render the guanciale", t:"Cut into short batons and render slowly until crisp; keep the fat."},
      {b:"Make the base", t:"Whisk the yolks, whole egg, pecorino, and lots of pepper into a paste."},
      {b:"Cook the pasta", t:"Boil in well-salted water; save a mug of pasta water before draining."},
      {b:"Combine off the heat", t:"Off the burner, toss the hot pasta with guanciale and fat, then the egg mix, loosening with pasta water."},
      {b:"Serve", t:"Plate immediately with more pecorino and pepper."}
    ],
    tools:["Large pot|8 quart pasta pot","Box grater|stainless box grater","Skillet|carbon steel skillet"]
  },
  {
    slug:"spaghetti-bolognese",
    title:"Spaghetti Bolognese, and where to source it",
    cuisine:"Italian", category:"Main",
    kw:"bolognese, ragu bolognese, meat sauce, spaghetti bolognese, ragu alla bolognese",
    iso:["PT20M","PT180M","PT200M"], prep:"20 min", cook:"3 hr", makes:"serves 6",
    desc:"A slow-simmered Bolognese ragu — soffritto, milk, wine, a whisper of tomato — and where to source it.",
    dek:"Milk before wine, wine before tomato — added in that order and cooked down each time, the dairy tenderizes the meat and the acid layers in without ever tasting sour. Rush the sequence and you get gray meat in red water.",
    card:"A long-simmered northern ragu: soffritto, beef and pork, milk, wine, barely any tomato.",
    ing:[
      {n:"Ground beef and pork", q:"A blend, not lean — the pork fat carries the flavor. Chuck plus shoulder.", amt:"1.5 lb total", local:true},
      {n:"Pancetta", q:"Diced fine, melted into the base for depth before the meat goes in.", amt:"4 oz", local:true},
      {n:"Soffritto vegetables", q:"Onion, carrot, celery, minced small and cooked soft — the flavor foundation.", amt:"1 each", local:true},
      {n:"Whole milk", q:"Simmered into the meat first; it tenderizes and rounds out the acidity.", amt:"1 cup", local:true},
      {n:"Dry white wine", q:"Deglazes after the milk cooks off. White, traditionally — not red.", amt:"1 cup", local:true},
      {n:"Tomato passata", q:"Just enough for color and body, not a tomato sauce. Passata or a little paste.", amt:"1 cup", local:true},
      {n:"Tagliatelle or spaghetti", q:"Fresh egg tagliatelle is the classic partner; spaghetti works too.", amt:"1 lb", local:true}
    ],
    steps:[
      {b:"Build the base", t:"Melt the pancetta, then sweat the soffritto in its fat until soft and sweet."},
      {b:"Brown the meat", t:"Add beef and pork, breaking it up, and cook until the moisture evaporates and it browns."},
      {b:"Milk, then wine", t:"Pour in the milk and simmer until nearly gone, then the wine and reduce again."},
      {b:"Add tomato and simmer", t:"Stir in the passata and a little stock, then barely simmer 2.5 to 3 hours."},
      {b:"Finish and toss", t:"Season, cook the pasta, and toss the ragu with the noodles — never piled on top."}
    ],
    tools:["Dutch oven|enameled dutch oven","Wooden spoon|wooden cooking spoon","Fine grater|microplane grater"]
  },
  {
    slug:"pasta-puttanesca",
    title:"Pasta alla Puttanesca, and where to source it",
    cuisine:"Italian", category:"Main",
    kw:"puttanesca, pasta puttanesca, olive caper pasta, anchovy pasta, spaghetti puttanesca",
    iso:["PT10M","PT20M","PT30M"], prep:"10 min", cook:"20 min", makes:"serves 4",
    desc:"A punchy Neapolitan puttanesca — anchovy, olive, caper, chili — and where to source every salty part.",
    dek:"Melt the anchovies into the oil until they dissolve — they stop tasting like fish and become the deep savory floor the whole sauce stands on. Skip them and no amount of olive and caper fills the hole.",
    card:"A bold no-cream tomato sauce loaded with anchovy, olives, capers, garlic and chili.",
    ing:[
      {n:"Spaghetti", q:"A sturdy dried spaghetti stands up to the aggressive sauce.", amt:"1 lb", local:true},
      {n:"Anchovy fillets", q:"Oil-packed; they melt into the base and disappear as saltiness. Don't skip them.", amt:"6 fillets", local:true},
      {n:"Garlic", q:"Sliced thin, gently cooked in the oil with the anchovy and chili.", amt:"4 cloves", local:true},
      {n:"Kalamata or Gaeta olives", q:"Pitted and torn; briny black olives, not canned salad olives.", amt:"3/4 cup", local:true},
      {n:"Capers", q:"Salt-packed and rinsed if you can get them; sharper than brined.", amt:"3 tbsp", local:true},
      {n:"Whole peeled tomatoes", q:"Crushed by hand; San Marzano if you can find them.", amt:"1 28-oz can", local:true},
      {n:"Red pepper flakes", q:"For the heat that ties it together. Add to taste.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Bloom the aromatics", t:"Warm olive oil, then melt the anchovies with the garlic and chili until dissolved."},
      {b:"Add olives and capers", t:"Stir in the olives and capers and let them sizzle a minute."},
      {b:"Build the sauce", t:"Add the crushed tomatoes and simmer until thickened and glossy, 15 minutes."},
      {b:"Cook the pasta", t:"Boil in salted water until just shy of done; reserve some pasta water."},
      {b:"Toss and serve", t:"Finish the pasta in the sauce, loosening with pasta water; no cheese needed."}
    ],
    tools:["Large skillet|12 inch skillet","Pasta pot|8 quart pasta pot","Wooden spoon|wooden cooking spoon"]
  },
  {
    slug:"pasta-amatriciana",
    title:"Pasta all'Amatriciana, and where to source it",
    cuisine:"Italian", category:"Main",
    kw:"amatriciana, bucatini amatriciana, guanciale tomato pasta, pasta amatriciana",
    iso:["PT10M","PT20M","PT30M"], prep:"10 min", cook:"20 min", makes:"serves 4",
    desc:"The Roman amatriciana — guanciale, tomato, pecorino, chili — and where to source every part.",
    dek:"Render the guanciale, pull it out, and add it back at the very end so it stays crisp. Left simmering in the tomato it goes soft and rubbery, and crisp guanciale is the entire point of the dish.",
    card:"Bucatini with a guanciale-and-tomato sauce, sharp pecorino and a hit of chili.",
    ing:[
      {n:"Bucatini", q:"The thick hollow spaghetti that's traditional here; regular spaghetti works.", amt:"1 lb", local:true},
      {n:"Guanciale", q:"Cured pork jowl — not pancetta. Its rendered fat flavors the whole sauce.", amt:"6 oz", local:true},
      {n:"Whole peeled tomatoes", q:"Crushed by hand; San Marzano preferred for sweetness.", amt:"1 28-oz can", local:true},
      {n:"Pecorino Romano", q:"Grated fine and stirred in at the end. Sharp and salty.", amt:"3/4 cup", local:true},
      {n:"Red pepper flakes", q:"A modest amount of heat cooked into the fat.", amt:"1/2 tsp", local:true},
      {n:"Dry white wine", q:"A splash to deglaze after rendering the guanciale.", amt:"1/4 cup", local:true}
    ],
    steps:[
      {b:"Render the guanciale", t:"Crisp the guanciale batons slowly, then lift them out and set aside."},
      {b:"Deglaze", t:"Add the chili and wine to the fat and let it cook off."},
      {b:"Simmer the tomato", t:"Add the crushed tomatoes and simmer until thickened, about 15 minutes."},
      {b:"Cook the pasta", t:"Boil the bucatini in salted water until al dente; save some pasta water."},
      {b:"Combine", t:"Toss pasta with the sauce, stir in pecorino and the crisp guanciale off the heat."}
    ],
    tools:["Large skillet|12 inch skillet","Pasta pot|8 quart pasta pot","Box grater|stainless box grater"]
  },
  {
    slug:"pasta-arrabbiata",
    title:"Penne all'Arrabbiata, and where to source it",
    cuisine:"Italian", category:"Main",
    kw:"arrabbiata, penne arrabbiata, spicy tomato pasta, sugo all'arrabbiata",
    iso:["PT5M","PT20M","PT25M"], prep:"5 min", cook:"20 min", makes:"serves 4",
    desc:"A fiery Roman arrabbiata — garlic, chili, tomato, olive oil — and where to source every part.",
    dek:"Toast the dried chili and garlic in cold oil brought up slowly, so both infuse the oil without scorching. Burnt garlic turns the whole sauce bitter, and there are only five ingredients to hide behind.",
    card:"A short-list tomato sauce built on garlic, dried chili and good olive oil — genuinely spicy.",
    ing:[
      {n:"Penne", q:"Ridged penne rigate catches the sauce in its ridges and tube.", amt:"1 lb", local:true},
      {n:"Whole peeled tomatoes", q:"Crushed by hand; the sauce is mostly tomato, so use good ones.", amt:"1 28-oz can", local:true},
      {n:"Garlic", q:"Sliced or lightly crushed, cooked gently in the oil until golden, not brown.", amt:"4 cloves", local:true},
      {n:"Dried red chilies", q:"Whole or flaked — this is where the heat comes from. Be generous.", amt:"2 chilies", local:true},
      {n:"Extra-virgin olive oil", q:"A good fruity oil; it's a main flavor, not just a cooking fat.", amt:"1/4 cup", local:true},
      {n:"Fresh parsley", q:"Chopped and stirred in at the end for a green lift.", amt:"handful", local:true}
    ],
    steps:[
      {b:"Infuse the oil", t:"Warm the olive oil from cold with the garlic and chili until fragrant and golden."},
      {b:"Add tomatoes", t:"Pour in the crushed tomatoes, season, and simmer until thick and glossy."},
      {b:"Cook the pasta", t:"Boil the penne in salted water until al dente; reserve pasta water."},
      {b:"Toss", t:"Finish the pasta in the sauce, loosening with pasta water until it clings."},
      {b:"Serve", t:"Stir through parsley and drizzle with a little raw olive oil."}
    ],
    tools:["Large skillet|12 inch skillet","Pasta pot|8 quart pasta pot","Wooden spoon|wooden cooking spoon"]
  },
  {
    slug:"pineapple-fried-rice",
    title:"Thai Pineapple Fried Rice, and where to source it",
    cuisine:"Thai", category:"Main",
    kw:"pineapple fried rice, khao pad sapparot, thai fried rice, cashew fried rice",
    iso:["PT15M","PT15M","PT30M"], prep:"15 min", cook:"15 min", makes:"serves 4",
    desc:"Thai pineapple fried rice with curry powder, cashews and day-old rice — and where to source it.",
    dek:"Use cold day-old rice and a screaming-hot wok. Fresh rice steams and clumps into mush; chilled grains have dried out just enough to fry up separate and toasty, which is the whole texture of the dish.",
    card:"Wok-fried rice with pineapple, cashews, curry powder and a savory-sweet fish-sauce edge.",
    ing:[
      {n:"Day-old jasmine rice", q:"Cold, cooked the day before so the grains dry and fry separate.", amt:"4 cups", local:true},
      {n:"Fresh pineapple", q:"Cut in chunks; its juice and acid define the dish. Fresh over canned.", amt:"1.5 cups", local:true},
      {n:"Cashews", q:"Toasted, for buttery crunch against the soft rice.", amt:"1/2 cup", local:true},
      {n:"Eggs", q:"Scrambled fast in the wok before the rice goes in.", amt:"2", local:true},
      {n:"Curry powder", q:"A mild yellow curry powder gives the rice its color and warmth.", amt:"1 tbsp", local:true},
      {n:"Fish sauce", q:"The savory backbone; balances the sweet pineapple. Add to taste.", amt:"2 tbsp", local:true},
      {n:"Scallions", q:"Sliced, added at the end for freshness.", amt:"3", local:true}
    ],
    steps:[
      {b:"Prep everything", t:"Have rice, pineapple, cashews and sauces ready — the wok moves fast."},
      {b:"Scramble the eggs", t:"Heat oil in a very hot wok and scramble the eggs, then push aside."},
      {b:"Fry the rice", t:"Add the cold rice and curry powder, tossing until the grains toast and separate."},
      {b:"Add pineapple and sauce", t:"Fold in pineapple and fish sauce, stir-frying until hot and glossy."},
      {b:"Finish", t:"Toss through cashews and scallions and serve, often in a hollowed pineapple."}
    ],
    tools:["Carbon steel wok|carbon steel wok","Wok spatula|wok spatula","Rice cooker|rice cooker"]
  },
  {
    slug:"chicken-fried-rice",
    title:"Chicken Fried Rice, and where to source it",
    cuisine:"Chinese", category:"Main",
    kw:"chicken fried rice, egg fried rice, wok fried rice, takeout fried rice",
    iso:["PT15M","PT10M","PT25M"], prep:"15 min", cook:"10 min", makes:"serves 4",
    desc:"Takeout-style chicken fried rice built on cold rice and high heat — and where to source it.",
    dek:"Cook in batches and never crowd the wok. Pile everything in at once and it drops the heat, releases water and steams — you want each addition to sear and stay dry, which is what gives fried rice its wok-hei.",
    card:"Cold rice stir-fried hot with chicken, egg, scallion and a light soy seasoning.",
    ing:[
      {n:"Day-old rice", q:"Cold long-grain rice, dried out overnight so it fries loose.", amt:"4 cups", local:true},
      {n:"Chicken thigh", q:"Diced small; thigh stays juicy through high-heat frying.", amt:"12 oz", local:true},
      {n:"Eggs", q:"Scrambled separately so the curds stay tender.", amt:"3", local:true},
      {n:"Scallions", q:"Whites cooked in, greens tossed at the end.", amt:"4", local:true},
      {n:"Soy sauce", q:"Light soy for seasoning; keep it restrained so the rice doesn't go soggy or dark.", amt:"2 tbsp", local:true},
      {n:"Frozen peas and carrots", q:"The classic mix; add near the end so they stay bright.", amt:"1 cup", local:true},
      {n:"Toasted sesame oil", q:"A few drops off the heat for aroma, not for frying.", amt:"1 tsp", local:true}
    ],
    steps:[
      {b:"Sear the chicken", t:"Stir-fry the diced chicken in a hot wok until cooked, then remove."},
      {b:"Scramble the eggs", t:"Add a little oil and scramble the eggs, breaking into curds."},
      {b:"Fry the rice", t:"Add the cold rice and scallion whites, tossing until hot and loose."},
      {b:"Season", t:"Return the chicken, add peas and carrots and soy, stir-frying to combine."},
      {b:"Finish", t:"Off the heat, toss in scallion greens and a few drops of sesame oil."}
    ],
    tools:["Carbon steel wok|carbon steel wok","Wok spatula|wok spatula","Rice cooker|rice cooker"]
  },
  {
    slug:"ramen",
    title:"Shoyu Ramen, and where to source it",
    cuisine:"Japanese", category:"Soup",
    kw:"ramen, shoyu ramen, japanese noodle soup, chicken ramen, homemade ramen",
    iso:["PT30M","PT120M","PT150M"], prep:"30 min", cook:"2 hr", makes:"serves 4",
    desc:"A soy-based shoyu ramen — tare, broth and springy noodles built in parts — and where to source it.",
    dek:"Season the bowl with tare, not the broth. Concentrated soy tare goes in the bowl first and the hot unseasoned broth is poured over it — that separation lets you dial salt per bowl instead of over-salting the whole pot.",
    card:"A layered bowl: soy tare, rich chicken broth, springy noodles, chashu and a jammy egg.",
    ing:[
      {n:"Fresh ramen noodles", q:"Alkaline wheat noodles for spring and bite — not spaghetti or instant.", amt:"4 portions", local:true},
      {n:"Chicken bones and feet", q:"Feet add collagen for body; simmered long for a rich broth.", amt:"3 lb", local:true},
      {n:"Soy sauce", q:"The base of the tare — the seasoning that goes in the bowl first.", amt:"3/4 cup", local:true},
      {n:"Kombu and dried shiitake", q:"Steeped into the broth for deep savory umami.", amt:"1 piece + 4", local:true},
      {n:"Pork belly for chashu", q:"Rolled and braised in soy and mirin, then sliced thin.", amt:"1 lb", local:true},
      {n:"Eggs", q:"Soft-boiled and marinated to a jammy center — the ajitama.", amt:"4", local:true},
      {n:"Scallions and nori", q:"Sliced scallion and a sheet of nori to finish each bowl.", amt:"to taste", local:true}
    ],
    steps:[
      {b:"Simmer the broth", t:"Blanch the bones, then simmer with aromatics, kombu and shiitake for 2 hours."},
      {b:"Make the tare", t:"Reduce soy, mirin and a little sugar into a concentrated seasoning."},
      {b:"Braise the chashu", t:"Slow-cook the rolled pork belly in soy and mirin, then slice."},
      {b:"Marinate the eggs", t:"Soft-boil the eggs and steep in soy marinade for a jammy yolk."},
      {b:"Build the bowl", t:"Spoon tare into each bowl, pour over hot broth, add noodles, chashu, egg and toppings."}
    ],
    tools:["Stockpot|12 quart stockpot","Fine strainer|fine-mesh strainer","Spider skimmer|spider skimmer"]
  },
  {
    slug:"tom-yum-soup",
    title:"Tom Yum Goong, and where to source it",
    cuisine:"Thai", category:"Soup",
    kw:"tom yum, tom yum goong, thai hot sour soup, shrimp tom yum, lemongrass soup",
    iso:["PT15M","PT20M","PT35M"], prep:"15 min", cook:"20 min", makes:"serves 4",
    desc:"Thai tom yum goong — hot, sour shrimp soup with lemongrass and lime leaf — and where to source it.",
    dek:"Add the lime juice off the heat at the very end. Boiling fresh lime turns it flat and bitter; stirred in after the pot leaves the flame it stays bright and sharp, which is the sour half of hot-and-sour.",
    card:"A fragrant hot-and-sour shrimp soup: lemongrass, galangal, lime leaf, chili and fresh lime.",
    ing:[
      {n:"Shrimp", q:"Head-on if you can get them; the heads make the broth rich. Peel and save shells.", amt:"1 lb", local:true},
      {n:"Lemongrass", q:"Bruised and cut in lengths so it releases oil without shredding into the soup.", amt:"3 stalks", local:true},
      {n:"Galangal", q:"Sliced — sharper and more piney than ginger; not interchangeable.", amt:"2 in", local:true},
      {n:"Kaffir lime leaves", q:"Torn to release their perfume; the signature aroma of the soup.", amt:"6 leaves", local:true},
      {n:"Thai chilies", q:"Bruised to taste for heat; birds-eye chilies bring the burn.", amt:"4", local:true},
      {n:"Fish sauce", q:"The salt and savor; balances the sour and heat.", amt:"3 tbsp", local:true},
      {n:"Fresh lime juice", q:"Squeezed in off the heat for the sour lift. Never boil it.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Build the broth", t:"Simmer stock with lemongrass, galangal, lime leaves and shrimp shells."},
      {b:"Strain (optional)", t:"For a clear soup, strain out the aromatics; leave them for a rustic bowl."},
      {b:"Season", t:"Add chilies and fish sauce and taste for the salt-heat balance."},
      {b:"Cook the shrimp", t:"Drop in the shrimp and cook just until pink and curled, a couple minutes."},
      {b:"Finish off the heat", t:"Take off the heat, stir in lime juice and cilantro, and serve hot."}
    ],
    tools:["Soup pot|4 quart saucepan","Fine strainer|fine-mesh strainer","Citrus juicer|handheld citrus juicer"]
  },
  {
    slug:"chili-con-carne",
    title:"Chili con Carne, and where to source it",
    cuisine:"Tex-Mex", category:"Main",
    kw:"chili con carne, texas chili, beef chili, chile con carne, bowl of red",
    iso:["PT20M","PT150M","PT170M"], prep:"20 min", cook:"2.5 hr", makes:"serves 6",
    desc:"A Texas-style bowl of red — chunked beef and real dried chiles, no beans — and where to source it.",
    dek:"Toast whole dried chiles and blend your own paste instead of shaking in chili powder. Store powder is stale and salted; a fresh puree of ancho and guajillo is the difference between muddy heat and deep, layered flavor.",
    card:"Chunks of braised beef in a deep red sauce of toasted dried chiles — no beans, Texas-style.",
    ing:[
      {n:"Beef chuck", q:"Cut in cubes, not ground — it braises to tender bites. Well-marbled chuck.", amt:"3 lb", local:true},
      {n:"Dried ancho chiles", q:"Toasted and blended; mild, raisiny backbone of the paste.", amt:"4", local:true},
      {n:"Dried guajillo chiles", q:"Brighter and slightly hotter; the other half of the chile paste.", amt:"4", local:true},
      {n:"Cumin seed", q:"Toasted and ground fresh — earthy warmth that store-ground can't match.", amt:"1 tbsp", local:true},
      {n:"Onion and garlic", q:"The aromatic base, softened before the chile paste goes in.", amt:"1 onion + 4 cloves", local:true},
      {n:"Beef stock", q:"The braising liquid; enough to just cover the meat as it simmers.", amt:"3 cups", local:true},
      {n:"Masa harina", q:"A spoonful stirred in near the end thickens the chili and rounds it out.", amt:"2 tbsp", local:true}
    ],
    steps:[
      {b:"Make the chile paste", t:"Toast the dried chiles, soak in hot water, and blend to a smooth paste."},
      {b:"Sear the beef", t:"Brown the cubed chuck hard in batches, then set aside."},
      {b:"Build the base", t:"Soften onion and garlic, add toasted cumin, then the chile paste."},
      {b:"Braise", t:"Return the beef with stock and simmer low until fork-tender, 2 to 2.5 hours."},
      {b:"Thicken and finish", t:"Stir in masa harina, simmer to thicken, and adjust salt."}
    ],
    tools:["Dutch oven|enameled dutch oven","Blender|countertop blender","Cast iron skillet|cast iron skillet"]
  },
  {
    slug:"beef-burrito",
    title:"Beef Burrito, and where to source it",
    cuisine:"Tex-Mex", category:"Main",
    kw:"beef burrito, burrito, seasoned beef burrito, mission burrito, flour tortilla burrito",
    iso:["PT20M","PT20M","PT40M"], prep:"20 min", cook:"20 min", makes:"makes 4 burritos",
    desc:"A beef burrito with seasoned beef, rice, and beans, rolled tight.",
    dek:"Warm the tortilla until it's pliable, keep the filling modest, and finish it seam-side down on the griddle. A cold tortilla cracks as you fold and an overstuffed one won't close at all. A quick sear on the seam sets it shut so the burrito holds instead of unraveling.",
    card:"A big flour tortilla wrapped around seasoned beef, rice, beans, cheese and salsa.",
    ing:[
      {n:"Large flour tortillas", q:"Burrito-size and fresh so they roll without cracking. Warm before filling.", amt:"4", local:true},
      {n:"Ground beef", q:"An 80/20 chuck for flavor; browned and seasoned with cumin and chili.", amt:"1 lb", local:true},
      {n:"Cooked rice", q:"Warm rice, lightly seasoned, for body and to soak up juices.", amt:"2 cups", local:true},
      {n:"Pinto or black beans", q:"Warmed and lightly mashed so they spread and bind the filling.", amt:"1.5 cups", local:true},
      {n:"Cheese", q:"A melting cheese like Monterey Jack, shredded so it melts against the hot filling.", amt:"1 cup", local:true},
      {n:"Salsa or pico de gallo", q:"For acid and freshness; keep it drier so the burrito doesn't get soggy.", amt:"1/2 cup", local:true}
    ],
    steps:[
      {b:"Season the beef", t:"Brown the ground beef, drain, and season with cumin, chili powder and salt."},
      {b:"Warm the tortillas", t:"Heat each tortilla on a dry griddle until soft and foldable."},
      {b:"Layer the filling", t:"Lay rice, beans, beef, cheese and salsa in a line, leaving borders clear."},
      {b:"Roll tight", t:"Fold in the sides, then roll from the bottom, tucking the filling as you go."},
      {b:"Sear the seam", t:"Griddle seam-side down until golden so it stays closed, then serve."}
    ],
    tools:["Cast iron skillet|cast iron skillet","Griddle|flat top griddle","Box grater|stainless box grater"]
  },
  {
    slug:"chicken-biryani",
    title:"Chicken Biryani, and where to source it",
    cuisine:"Indian", category:"Main",
    kw:"chicken biryani, hyderabadi biryani, dum biryani, basmati rice biryani",
    iso:["PT40M","PT50M","PT90M"], prep:"40 min", cook:"50 min", makes:"serves 6",
    desc:"A layered dum chicken biryani — marinated chicken, parcooked basmati, sealed and steamed — and where to source it.",
    dek:"Parboil the basmati to about 70 percent, then finish it on dum over the chicken. Cook the rice fully first and the second steam turns it to paste; leave it firm and the trapped steam finishes each grain separate and fragrant.",
    card:"Fragrant basmati layered over spiced yogurt-marinated chicken and steamed sealed on dum.",
    ing:[
      {n:"Basmati rice", q:"Long aged basmati, soaked then parboiled to 70 percent for separate grains.", amt:"3 cups", local:true},
      {n:"Bone-in chicken", q:"Thighs and legs on the bone stay juicy through the long steam.", amt:"2.5 lb", local:true},
      {n:"Yogurt", q:"The marinade base; its acid tenderizes the chicken and carries the spice.", amt:"1 cup", local:true},
      {n:"Fried onions (birista)", q:"Deep-fried until dark and sweet — layered and mixed in for the signature flavor.", amt:"1.5 cups", local:true},
      {n:"Saffron", q:"Bloomed in warm milk and drizzled over the rice for color and aroma.", amt:"1 pinch", local:true},
      {n:"Whole spices", q:"Cardamom, cloves, cinnamon, bay — bloomed in the layers for warmth.", amt:"1 tbsp mix", local:true},
      {n:"Mint and cilantro", q:"Fresh herbs layered between the rice and chicken for brightness.", amt:"1 cup", local:true}
    ],
    steps:[
      {b:"Marinate the chicken", t:"Coat the chicken in yogurt, ginger-garlic, spices and fried onions; rest at least an hour."},
      {b:"Parboil the rice", t:"Boil soaked basmati with whole spices to 70 percent done, then drain."},
      {b:"Layer the pot", t:"Spread the marinated chicken, then the rice, herbs, fried onions and saffron milk."},
      {b:"Seal and dum", t:"Cover tightly, cook on high briefly, then steam on the lowest heat 25 minutes."},
      {b:"Rest and fluff", t:"Let it rest sealed 10 minutes, then gently fold to mix layers and serve."}
    ],
    tools:["Heavy pot|heavy bottomed pot with lid","Fine strainer|fine-mesh strainer","Dutch oven|enameled dutch oven"]
  },
  {
    slug:"samosa",
    title:"Punjabi Samosa, and where to source it",
    cuisine:"Indian", category:"Appetizer",
    kw:"samosa, punjabi samosa, aloo samosa, potato samosa, fried samosa",
    iso:["PT40M","PT30M","PT70M"], prep:"40 min", cook:"30 min", makes:"makes 12",
    desc:"Crisp Punjabi aloo samosas with a stiff dough and spiced potato filling — and where to source it.",
    dek:"Fry them low and slow, not hot and fast. A hot oil blisters the surface while the inside stays doughy; a moderate 300F fry cooks the shell through to that pale, glassy, bubbled crunch that stays crisp for hours.",
    card:"A flaky pastry triangle stuffed with spiced potato, peas and whole cumin, fried until crisp.",
    ing:[
      {n:"All-purpose flour", q:"Made into a stiff, low-water dough with ajwain — the key to a crisp, non-flaky shell.", amt:"2 cups", local:true},
      {n:"Ajwain (carom seed)", q:"Worked into the dough; its thyme-like note is the classic samosa scent.", amt:"1 tsp", local:true},
      {n:"Potatoes", q:"Boiled and roughly crushed, not mashed smooth — you want texture.", amt:"4 medium", local:true},
      {n:"Green peas", q:"Sweet counterpoint to the spiced potato; fresh or frozen.", amt:"1/2 cup", local:true},
      {n:"Cumin seed", q:"Whole, bloomed in oil to start the filling.", amt:"1 tsp", local:true},
      {n:"Garam masala and amchur", q:"Warmth from garam masala, tang from dried mango powder.", amt:"1 tsp each", local:true},
      {n:"Ginger and green chili", q:"Minced fresh for heat and brightness in the filling.", amt:"1 tbsp", local:true}
    ],
    steps:[
      {b:"Make a stiff dough", t:"Rub oil and ajwain into the flour, add just enough water for a firm dough, and rest it."},
      {b:"Cook the filling", t:"Bloom cumin, add ginger and chili, then crushed potato, peas and the dry spices."},
      {b:"Shape the cones", t:"Roll and halve the dough, form cones, fill, and seal the edges with water."},
      {b:"Fry low and slow", t:"Fry in moderate oil until pale gold and blistered, turning for even color."},
      {b:"Drain and serve", t:"Drain and serve hot with tamarind and mint chutneys."}
    ],
    tools:["Heavy pot|heavy bottomed frying pot","Rolling pin|wooden rolling pin","Spider skimmer|spider skimmer"]
  },
  {
    slug:"chicken-korma",
    title:"Chicken Korma, and where to source it",
    cuisine:"Indian", category:"Main",
    kw:"chicken korma, korma, mughlai korma, creamy chicken curry, badami korma",
    iso:["PT20M","PT40M","PT60M"], prep:"20 min", cook:"40 min", makes:"serves 4",
    desc:"A mild Mughlai chicken korma thickened with nuts and yogurt — and where to source every part.",
    dek:"Temper the yogurt and add it off a hard boil, whisking, or it splits into curds. Korma's silk comes from yogurt and ground nuts held just below a simmer — a rolling boil breaks the sauce grainy every time.",
    card:"A gentle, aromatic curry thickened with almonds and yogurt, rich but not spicy-hot.",
    ing:[
      {n:"Chicken", q:"Bone-in pieces or thighs for flavor in the gentle braise.", amt:"2 lb", local:true},
      {n:"Yogurt", q:"Whisked and added slowly off the boil so it enriches without splitting.", amt:"1 cup", local:true},
      {n:"Blanched almonds", q:"Ground to a paste — the traditional thickener and body of the sauce.", amt:"1/2 cup", local:true},
      {n:"Fried onion paste", q:"Onions fried golden and blended smooth for a sweet, deep base.", amt:"2 onions", local:true},
      {n:"Whole spices", q:"Cardamom, cloves, cinnamon and bay bloomed in ghee to open the dish.", amt:"1 tbsp mix", local:true},
      {n:"Ginger-garlic paste", q:"The aromatic foundation cooked into the base.", amt:"2 tbsp", local:true},
      {n:"Ghee", q:"The cooking fat that carries the whole-spice aroma.", amt:"3 tbsp", local:true}
    ],
    steps:[
      {b:"Bloom the spices", t:"Heat ghee and sizzle the whole spices until fragrant."},
      {b:"Build the base", t:"Add ginger-garlic and the fried onion paste, cooking until deep and glossy."},
      {b:"Add the chicken", t:"Brown the chicken in the base to seal in flavor."},
      {b:"Temper the yogurt", t:"Lower the heat and whisk in yogurt and almond paste, guarding against a boil."},
      {b:"Simmer gently", t:"Cook low until the chicken is tender and the sauce is silky, then finish with a little cream."}
    ],
    tools:["Heavy pan|heavy bottomed saute pan","Blender|countertop blender","Wooden spoon|wooden cooking spoon"]
  },
  {
    slug:"chicken-vindaloo",
    title:"Chicken Vindaloo, and where to source it",
    cuisine:"Indian", category:"Main",
    kw:"chicken vindaloo, vindaloo, goan vindaloo, spicy chicken curry, vinegar curry",
    iso:["PT30M","PT40M","PT70M"], prep:"30 min", cook:"40 min", makes:"serves 4",
    desc:"A Goan chicken vindaloo — a vinegar-and-chili spice paste with real heat — and where to source it.",
    dek:"Vinegar is the point, not an afterthought — grind the spice paste with it and marinate in it. Vindaloo descends from vinho e alhos (wine and garlic); the sour tang is structural, and water-based versions miss the dish entirely.",
    card:"A fiery, tangy Goan curry built on a vinegar-ground chili-and-garlic paste.",
    ing:[
      {n:"Chicken thigh", q:"Bone-in or boneless thigh stands up to the assertive sauce.", amt:"2 lb", local:true},
      {n:"Dried Kashmiri chilies", q:"Ground into the paste for deep red color and manageable heat.", amt:"8", local:true},
      {n:"Palm or cider vinegar", q:"The defining sour note; the paste and marinade are built on it, not water.", amt:"1/3 cup", local:true},
      {n:"Garlic", q:"A generous amount ground into the paste — vinho e alhos means vinegar and garlic.", amt:"8 cloves", local:true},
      {n:"Cumin and coriander seed", q:"Toasted and ground fresh into the wet paste.", amt:"1 tbsp each", local:true},
      {n:"Ginger", q:"Ground with the garlic for warmth and bite.", amt:"2 in", local:true},
      {n:"Onions", q:"Sliced and browned as the cooking base before the paste goes in.", amt:"2", local:true}
    ],
    steps:[
      {b:"Grind the paste", t:"Blend soaked chilies, garlic, ginger, toasted spices and vinegar into a smooth paste."},
      {b:"Marinate", t:"Coat the chicken in the paste and marinate at least an hour, ideally overnight."},
      {b:"Brown the onions", t:"Fry the sliced onions in oil until deeply golden."},
      {b:"Cook the paste", t:"Add the marinated chicken and cook the paste down until the oil separates."},
      {b:"Simmer", t:"Add a little water, cover, and simmer until the chicken is tender and the sauce is thick."}
    ],
    tools:["Heavy pan|heavy bottomed saute pan","Blender|countertop blender","Cast iron skillet|cast iron skillet"]
  }
];
