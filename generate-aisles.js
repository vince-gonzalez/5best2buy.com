const fs = require('fs');
const path = require('path');
const ROOT = 'C:/tmp/5b2b-live';
const DATE = '2026-07-03';
const AWIN = '<script src="https://www.dwin2.com/pub.2961345.min.js" type="text/javascript" defer></script>';
// Change FEATURED each week — this is "This Week's Hunt" on the homepage.
const FEATURED = {slug:'octopus', name:'⚓ Octopus', blurb:'Five real purveyors that actually ship whole octopus to your door — the list that started it all.'};

const aisles = [
  { slug:'daily-catch', emoji:'⚓', name:'The Daily Catch', intro:'Seafood from people who can tell you where it came from.', shelves:[
    {name:'Octopus', slug:'octopus', desc:'Specialty purveyors for whole octopus.'},
    {name:'Tinned Fish', slug:'tinned-fish', desc:'Conservas worth the cupboard.'},
    {name:'Smoked Fish', slug:'smoked-fish', desc:'Small-smokehouse, sustainably sourced.'},
    {name:'Caviar & Roe', slug:'caviar', desc:'Sustainable American roe, nothing endangered.'},
    {name:'Anchovies', slug:'anchovies', desc:'Hand-packed Cantabrian & sustainable American.'},
    {name:'Wild Salmon', slug:'wild-salmon', desc:'Fisherman-direct, frozen at sea.'},
    {name:'Wild Shrimp', slug:'shrimp', desc:'Wild US Gulf & Atlantic, off the boat.'},
    {name:'Scallops', slug:'scallops', desc:'Dry-pack, chemical-free, day-boat.'},
    {name:'Mussels', slug:'mussels', desc:'Live, rope-grown, grit-free.'},
    {name:'Oysters', slug:'oysters', desc:'Single-farm, shipped live overnight.'},
    {name:'Clams', slug:'clams', desc:'Littleneck to geoduck, live from the beds.'},
    {name:'Crab', slug:'crab', desc:'Blue, stone, king & Dungeness, boat-direct.'},
    {name:'Lobster', slug:'lobster', desc:'Live Maine lobster & dock-frozen tails.'},
    {name:'Cod & White Fish', slug:'white-fish', desc:'US day-boat cod, haddock & halibut.'},
    {name:'Trout & Freshwater Fish', slug:'trout', desc:'River trout & Great Lakes fish.'},
    {name:'Nori & Seaweed Snacks', slug:'nori-seaweed', desc:'US-roasted, real seaweed.'},
    {name:'Kombu & Kelp', slug:'kombu-kelp', desc:'US ocean-farmed kelp.'},
    {name:'Wakame & Dulse', slug:'wakame-dulse', desc:'Maine-harvested sea vegetables.'},
    {name:'Bottarga & Cured Roe', slug:'bottarga', desc:'US-cured mullet & tuna roe.'},
    {name:'Dried Shrimp & Scallop', slug:'dried-seafood', desc:'Gulf-dried shrimp, real depth.'} ]},
  { slug:'butcher', emoji:'🔪', name:'The Butcher', intro:'Meat raised right, shipped to your door.', shelves:[
    {name:'Beef', slug:'beef', desc:'Single-ranch, grass-fed & dry-aged.'},
    {name:'Pork', slug:'pork', desc:'Heritage breeds — Berkshire & Mangalitsa.'},
    {name:'Chicken', slug:'chicken', desc:'Pasture-raised, real breeds, frozen.'},
    {name:'Lamb', slug:'lamb', desc:'American pasture-raised, not imported.'},
    {name:'Hot Dogs & Franks', slug:'hot-dogs', desc:'Real meat, no fillers or nitrates.'},
    {name:'Deli & Ham', slug:'deli-meat', desc:'Wood-smoked ham, real mortadella.'},
    {name:'Regenerative Meat', slug:'regenerative-meat', desc:'Pasture-raised, regenerative ranches.'},
    {name:'Charcuterie', slug:'charcuterie', desc:'Small-batch cured meats & salumi.'},
    {name:'Bacon', slug:'bacon', desc:'Dry-cured, heritage-pork, real smoke.'},
    {name:'Bone Broth', slug:'bone-broth', desc:'Grass-fed & regenerative, slow-simmered.'},
    {name:'Sausage', slug:'sausage', desc:'Fresh & smoked, heritage pork.'},
    {name:'Pepperoni', slug:'pepperoni', desc:'Cup-and-char & old-world artisan.'},
    {name:'Heritage Turkey', slug:'turkey', desc:'Pasture-raised heritage birds for the holidays.'},
    {name:'Goat', slug:'goat-meat', desc:'Pasture-raised, the world\'s most-eaten meat.'},
    {name:'Bison & Buffalo', slug:'bison', desc:'Grass-fed, ranch-direct.'},
    {name:'Venison & Game', slug:'venison-game', desc:'Wild-harvest & ranch-raised game.'},
    {name:'Duck & Game Birds', slug:'duck-meat', desc:'Whole ducks, breasts & confit.'},
    {name:'Veal', slug:'veal', desc:'Humane, pasture & free-raised.'},
    {name:'Offal & Organ Meats', slug:'organ-meats', desc:'Liver, heart, marrow & more.'},
    {name:'Country Ham & Cured Muscle', slug:'country-ham', desc:'Salt-cured, aged Southern ham.'},
    {name:'Ground Meat & Meatball Blends', slug:'ground-blends', desc:'Fresh-ground, real fat ratios.'},
    {name:'Pate & Mousse', slug:'pate', desc:'French-style, small charcutiers.'},
    {name:'Rillettes & Potted Meat', slug:'rillettes', desc:'Slow-cooked, spreadable.'},
    {name:'Duck Confit & Prepared Duck', slug:'duck-confit', desc:'Leg confit, ready to crisp.'},
    {name:'Nduja & Spreadable Salami', slug:'nduja', desc:'Soft, spicy, Calabrian-style.'},
    {name:'Saucisson & Dry Salami', slug:'saucisson', desc:'Air-dried, real fermentation.'},
    {name:'Coppa & Capicola', slug:'coppa-capicola', desc:'Whole-muscle cured pork.'},
    {name:'Prosciutto & Dry-Cured Ham', slug:'prosciutto-cured-ham', desc:'Aged, thin-sliced, US-made.'},
    {name:'Mortadella & Cooked Charcuterie', slug:'mortadella-cooked', desc:'Real mortadella, not bologna.'} ]},
  { slug:'heat-and-sauce', emoji:'🌶', name:'Heat & Sauce', intro:'The good stuff that brings the heat.', shelves:[
    {name:'Hot Sauce', slug:'hot-sauce', desc:'Craft, fermented, fruit-forward.'},
    {name:'Chili Crisp', slug:'chili-crisp', desc:'Small-batch crunch and heat.'},
    {name:'Hot Honey', slug:'hot-honey', desc:'Real raw honey with a kick.'},
    {name:'Pickles & Ferments', slug:'pickles', desc:'Raw, live pickles, kimchi & kraut.'},
    {name:'Mustard', slug:'mustard', desc:'Stone-ground & small-batch.'},
    {name:'BBQ Sauce', slug:'bbq-sauce', desc:'Regional styles, real ingredients.'},
    {name:'Salsa', slug:'salsa', desc:'Small-batch & regional, real chiles.'},
    {name:'Calabrian Chili', slug:'calabrian-chili', desc:'Hot-and-fruity Calabrian peppers & bomba.'},
    {name:'Dried Chiles', slug:'dried-chiles', desc:'Whole guajillo, ancho, pasilla & árbol.'},
    {name:'Ketchup', slug:'ketchup', desc:'Real-tomato, no corn syrup.'},
    {name:'Mayonnaise', slug:'mayonnaise', desc:'Real-egg mayo, the independents left.'},
    {name:'Salad Dressing', slug:'salad-dressing', desc:'Small-batch real vinaigrettes.'},
    {name:'Worcestershire & Steak Sauce', slug:'worcestershire', desc:'Real fermentation, no corn syrup.'},
    {name:'Relish', slug:'relish', desc:'Chow-chow & pepper relish, small-batch.'},
    {name:'Sauerkraut', slug:'sauerkraut', desc:'Raw, live-fermented, cold-shipped.'},
    {name:'Pesto', slug:'pesto', desc:'Basil & herb, real cheese and oil.'},
    {name:'Teriyaki & Glaze', slug:'teriyaki-sauce', desc:'Barrel-brewed, no corn syrup.'},
    {name:'Cocktail & Seafood Sauce', slug:'cocktail-sauce', desc:'Real horseradish bite.'},
    {name:'Prepared Horseradish', slug:'horseradish', desc:'Fresh-grated, sinus-clearing.'},
    {name:'Ranch & Buttermilk Dressing', slug:'ranch-dressing', desc:'Real buttermilk, clean label.'},
    {name:'Steak & Brown Sauce', slug:'steak-sauce', desc:'Steakhouse-style, small-batch.'},
    {name:'Tartar & Remoulade', slug:'tartar-sauce', desc:'Creole remoulade & real tartar.'},
    {name:'Gravy & Demi-Glace', slug:'pan-gravy', desc:'Real stock reductions.'},
    {name:'Tomato Paste & Passata', slug:'tomato-paste', desc:'Double-concentrate & strained.'},
    {name:'Pizza Sauce', slug:'pizza-sauce', desc:'Uncooked & slow-cooked reds.'},
    {name:'Alfredo & Cream Sauce', slug:'alfredo-sauce', desc:'Real cream, butter & parm.'},
    {name:'Vodka & Pink Sauce', slug:'vodka-sauce', desc:'Tomato-cream, small-batch.'},
    {name:'Mole Paste', slug:'mole-paste', desc:'Oaxacan negro, rojo & more.'},
    {name:'Enchilada & Red Chile Sauce', slug:'enchilada-sauce', desc:'Dried-chile, no thickeners.'},
    {name:'Indian Cooking Sauce', slug:'tikka-cooking-sauce', desc:'Tikka, korma & makhani, real spice.'},
    {name:'Peanut & Satay Sauce', slug:'peanut-satay-sauce', desc:'Ground peanut, real heat.'},
    {name:'Pickled Onions & Beets', slug:'pickled-onions', desc:'Quick-pickled, bright crunch.'},
    {name:'Curtido & Latin Slaws', slug:'curtido', desc:'Fermented cabbage for pupusas.'},
    {name:'Fermented Hot Sauce', slug:'fermented-hot-sauce', desc:'Barrel-aged, live-culture heat.'},
    {name:'Pickled Vegetable Medleys', slug:'pickled-vegetables', desc:'Giardiniera-style, real brine.'},
    {name:'Escabeche & Pickled Jalapenos', slug:'escabeche', desc:'Mexican-style pickled peppers.'},
    {name:'Live Fermented Vegetables', slug:'fermented-vegetables', desc:'Raw, probiotic, cold-shipped.'},
    {name:'Pickled Garlic & Ginger', slug:'pickled-garlic', desc:'Crunchy, sweet-sour, small-batch.'},
    {name:'Chow-Chow & Southern Relish', slug:'chow-chow', desc:'Green-tomato & pepper relish.'},
    {name:'Pepper Jelly & Hot Jam', slug:'pepper-jelly', desc:'Sweet heat for the cheese board.'},
    {name:'Tomato Jam & Savory Jam', slug:'tomato-jam', desc:'Slow-cooked, savory-sweet.'},
    {name:'Onion & Bacon Jam', slug:'onion-jam', desc:'Caramelized, for burgers & brie.'},
    {name:'Apple & Fruit Butter', slug:'apple-butter', desc:'Long-cooked, spiced, no pectin.'},
    {name:'Wine & Spirit Jelly', slug:'wine-jelly', desc:'For the cheese plate.'},
    {name:'Compound & Finishing Butter', slug:'compound-butter', desc:'Herb & cultured, small-batch.'},
    {name:'Fig & Cheese-Board Spreads', slug:'fig-spread', desc:'Mostarda-style, for pairing.'},
    {name:'Conserves & Brandied Fruit', slug:'conserves', desc:'Whole-fruit, spirit-laced.'} ]},
  { slug:'pantry', emoji:'🫙', name:'The Pantry', intro:'Staples worth keeping on the shelf.', shelves:[
    {name:'Spices', slug:'spices', desc:'Single-origin, direct from farms.'},
    {name:'Peanut Butter', slug:'peanut-butter', desc:'One ingredient — peanuts, ground fresh.'},
    {name:'Canned & Jarred Beans', slug:'canned-beans', desc:'Real cooked beans, many in glass.'},
    {name:'Tahini', slug:'tahini', desc:'Single-origin sesame, ground silky.'},
    {name:'Coconut Milk', slug:'coconut-milk', desc:'Just coconut & water, no gums.'},
    {name:'Capers & Caperberries', slug:'capers', desc:'Single-estate, salt-packed.'},
    {name:'Molasses & Cane Syrup', slug:'molasses', desc:'Open-kettle cane & sorghum.'},
    {name:'Medjool Dates', slug:'dates', desc:'California date gardens, DTC.'},
    {name:'Dried Mushrooms', slug:'dried-mushrooms', desc:'Porcini, shiitake & morel.'},
    {name:'Pistachios', slug:'pistachios', desc:'California grower-direct.'},
    {name:'Saffron', slug:'saffron', desc:'Single-origin threads, farmer-direct.'},
    {name:'Ginger', slug:'ginger', desc:'Crystallized, ground & paste.'},
    {name:'Tamarind', slug:'tamarind', desc:'Pure paste & concentrate.'},
    {name:'Shredded Coconut', slug:'shredded-coconut', desc:'Unsweetened, no additives.'},
    {name:'Breadcrumbs & Panko', slug:'breadcrumbs', desc:'Real bakery crumb & panko.'},
    {name:'Baking Leaveners', slug:'baking-leaveners', desc:'Yeast, baking powder & soda.'},
    {name:'Masa & Corn Tortillas', slug:'masa', desc:'Heirloom nixtamalized masa harina.'},
    {name:'Almonds', slug:'almonds', desc:'Raw, organic, California family orchards.'},
    {name:'Leaf Lard & Manteca', slug:'lard', desc:'Pasture-raised, never hydrogenated.'},
    {name:'Olive Oil', slug:'olive-oil', desc:'Single-estate, harvest-dated.'},
    {name:'Maple Syrup', slug:'maple-syrup', desc:'Real family sugarhouses.'},
    {name:'Pasta', slug:'pasta', desc:'Bronze-die, heritage grain.'},
    {name:'Jam', slug:'jam', desc:'Real-fruit small-batch preserves.'},
    {name:'Raw Honey', slug:'raw-honey', desc:'Single-source, unfiltered, small apiaries.'},
    {name:'Finishing Salt', slug:'finishing-salt', desc:'Hand-harvested flake & smoked salt.'},
    {name:'Vinegar', slug:'vinegar', desc:'Barrel-aged & wild-fermented, by hand.'},
    {name:'Nut Butter', slug:'nut-butter', desc:'Small-batch, real nuts, no palm oil.'},
    {name:'Heirloom Beans', slug:'heirloom-beans', desc:'Single-farm & Indigenous-grown varieties.'},
    {name:'Pasta Sauce', slug:'pasta-sauce', desc:'Small-batch marinara & family gravy.'},
    {name:'Heritage Rice & Grains', slug:'rice', desc:'Carolina Gold, wild rice, heirloom grain.'},
    {name:'Miso', slug:'miso', desc:'Craft, long-aged, unpasteurized.'},
    {name:'Walnuts', slug:'walnuts', desc:'Fresh-crop, single-orchard & wild black walnut.'},
    {name:'Baking Flour', slug:'baking-flour', desc:'Stone-milled, heritage & organic bread flour.'},
    {name:'Citrus', slug:'citrus', desc:'Tree-ripened Meyer lemons & specialty citrus.'},
    {name:'Sourdough Starter', slug:'sourdough-starter', desc:'Live heritage cultures, shipped active.'},
    {name:'Unrefined Sugar', slug:'unrefined-sugar', desc:'Granulated maple sugar & whole-cane.'},
    {name:'Pizza Flour', slug:'pizza-flour', desc:'Tipo 00 & Neapolitan, American-milled.'},
    {name:'Canned Tomatoes', slug:'canned-tomatoes', desc:'Certified San Marzano & organic whole-peeled.'},
    {name:'Olives', slug:'olives', desc:'Heirloom California & Mediterranean, brine-cured.'},
    {name:'Cranberries', slug:'cranberries', desc:'Fresh & dried, direct from small bogs.'},
    {name:'Pecans', slug:'pecans', desc:'Fresh-crop, Southern family orchards.'},
    {name:'Heirloom Potatoes', slug:'potatoes', desc:'Organic & heirloom eating potatoes, shipped.'},
    {name:'Oats & Hot Cereal', slug:'oats-hot-cereal', desc:'Single-farm oats, steel-cut & rolled.'},
    {name:'Grits & Polenta', slug:'grits-polenta', desc:'Stone-ground heirloom corn.'},
    {name:'Cooking Oil', slug:'cooking-oil', desc:'Avocado, sunflower & expeller-pressed.'},
    {name:'Vanilla & Extracts', slug:'vanilla-extract', desc:'Pure single-origin vanilla & extracts.'},
    {name:'Dried & Seed Potatoes', slug:'potatoes-pantry', desc:'Dehydrated flakes & certified seed.'},
    {name:'Truffle Oil', slug:'truffle-oil', desc:'Real truffle, honestly labeled.'},
    {name:'Truffle Salt & Seasoning', slug:'truffle-salt', desc:'Flake salt, real truffle bits.'},
    {name:'Truffle Paste & Sauce', slug:'truffle-paste', desc:'For pasta & risotto finishing.'},
    {name:'Truffle Honey', slug:'truffle-honey', desc:'For cheese boards & drizzling.'},
    {name:'Vanilla Bean & Paste', slug:'vanilla-bean-paste', desc:'Whole beans & seed paste.'},
    {name:'Mostarda & Fruit Condiments', slug:'mostarda', desc:'Mustard-fruit, for meats & cheese.'},
    {name:'Fleur de Sel & Sel Gris', slug:'fleur-de-sel', desc:'Hand-harvested finishing salt.'},
    {name:'Traditional Aged Balsamic', slug:'aged-balsamic-tradizionale', desc:'DOP, barrel-aged, syrupy.'} ]},
  { slug:'greengrocer', emoji:'🥬', name:'The Greengrocer', intro:'The produce aisle — growers who ship the harvest, in season.', shelves:[
    {name:'Garlic', slug:'garlic', desc:'Single-farm hardneck, named varieties, cured.'},
    {name:'Fresh Peppers', slug:'fresh-peppers', desc:'Hatch chiles & fresh peppers, in season.'},
    {name:'Sweet Corn', slug:'sweet-corn', desc:'Picked-that-morning, overnighted.'},
    {name:'Apples', slug:'apples', desc:'Heirloom orchards, fresh fall crop.'},
    {name:'Stone Fruit', slug:'stone-fruit', desc:'Tree-ripened peaches, plums & apricots.'},
    {name:'Pears', slug:'pears', desc:'Warren, Comice & heirloom pears.'},
    {name:'Avocados', slug:'avocados', desc:'California groves, tree-to-box.'},
    {name:'Microgreens', slug:'microgreens', desc:'Grow kits & live-cut greens.'},
    {name:'Fresh Herbs', slug:'fresh-herbs', desc:'Cut-to-order & living herb plants.'},
    {name:'Farm Box', slug:'farm-box', desc:"One farm's fields, boxed weekly."},
    {name:'Carrots', slug:'carrots', desc:'Dried, juiced, pickled & rainbow-in-season.'},
    {name:'Onions & Shallots', slug:'onions-shallots', desc:'Powder, dried, crispy, jam & relish.'},
    {name:'Root Vegetables', slug:'root-vegetables', desc:'Pickled beets, powders, horseradish, kraut.'},
    {name:'Preserved Tomatoes', slug:'fresh-tomatoes', desc:'Sun-dried, powder, jam & green-tomato.'},
    {name:'Winter Squash', slug:'winter-squash', desc:'Seed oil, pepitas, puree & squash butter.'},
    {name:'Melons', slug:'melons', desc:'Freeze-dried, dried & pickled rind.'},
    {name:'Berries', slug:'berries', desc:'Freeze-dried, frozen & powdered.'},
    {name:'Dried & Freeze-Dried Vegetables', slug:'dried-vegetables', desc:'Broccoli, greens & more, shelf-stable.'},
    {name:'Avocado Oil', slug:'avocado-oil', desc:'Cold-pressed, real avocado.'},
    {name:'Coconut Oil', slug:'coconut-oil', desc:'Virgin, cold-pressed.'},
    {name:'Walnut & Nut Oils', slug:'specialty-nut-oil', desc:'Roasted walnut, pumpkin-seed & more.'},
    {name:'Balsamic Vinegar', slug:'balsamic-vinegar', desc:'Barrel-aged, real grape must.'},
    {name:'Sherry & Red Wine Vinegar', slug:'sherry-red-wine-vinegar', desc:'Slow-aged, real acidity.'},
    {name:'Tallow, Duck Fat & Cooking Fats', slug:'tallow-duck-fat', desc:'Rendered, grass-fed & pastured.'},
    {name:'Malt, Coconut & Cane Vinegar', slug:'malt-coconut-vinegar', desc:'The vinegars beyond apple cider.'},
    {name:'Date Syrup & Silan', slug:'date-syrup', desc:'Whole-date, no added sugar.'},
    {name:'Sorghum Syrup', slug:'sorghum-syrup', desc:'Cane-belt kettle syrup.'},
    {name:'Coconut & Palm Sugar', slug:'coconut-sugar', desc:'Unrefined, low-glycemic.'},
    {name:'Agave & Cactus Syrup', slug:'agave', desc:'Raw agave & prickly-pear.'},
    {name:'Cane Syrup', slug:'cane-syrup', desc:'Open-kettle Southern syrup.'},
    {name:'Jaggery & Panela', slug:'jaggery', desc:'Unrefined whole-cane sugar.'},
    {name:'Brown, Turbinado & Muscovado', slug:'brown-turbinado-sugar', desc:'Real molasses-rich sugars.'},
    {name:'Cocoa & Cacao Powder', slug:'cocoa-powder', desc:'Dutch & natural, single-origin.'},
    {name:'Sprinkles & Decorating', slug:'sprinkles', desc:'Natural-dye, real sprinkles.'},
    {name:'Gelatin & Pectin', slug:'gelatin-pectin', desc:'Grass-fed gelatin & low-sugar pectin.'},
    {name:'Natural Food Coloring', slug:'food-coloring', desc:'Plant-based, no petroleum dyes.'},
    {name:'Frosting & Icing', slug:'frosting', desc:'Clean-label, real-ingredient.'},
    {name:'Almond, Mint & Baking Extracts', slug:'baking-extracts', desc:'Pure extracts, not imitation.'},
    {name:'Baking Yeast & Sourdough', slug:'active-yeast', desc:'Active dry, instant & starter.'},
    {name:'Pie Filling & Baking Preserves', slug:'pie-filling', desc:'Real fruit, low-sugar fillings.'},
    {name:'Fresh Gourmet Mushrooms', slug:'fresh-gourmet-mushrooms', desc:'Lion\'s mane & oyster, shipped fresh.'},
    {name:'Mushroom Grow Kits', slug:'mushroom-grow-kits', desc:'Countertop to harvest in a week.'},
    {name:'Edible Flowers', slug:'edible-flowers', desc:'Pansy & nasturtium, same-day cut.'},
    {name:'Sprouting & Microgreen Seeds', slug:'sprouting-seeds', desc:'Germination-tested, non-GMO.'},
    {name:'Fresh & Specialty Chiles', slug:'specialty-chiles-fresh', desc:'Hatch & fresh superhots.'},
    {name:'Exotic & Tropical Fruit', slug:'exotic-fruit', desc:'Durian, lychee, cherimoya.'},
    {name:'Fresh Truffles (Seasonal)', slug:'fresh-truffles', desc:'Oregon-foraged, overnighted.'},
    {name:'Specialty & Heirloom Citrus', slug:'specialty-citrus', desc:'Yuzu, finger lime, Ojai pixie.'} ]},
  { slug:'snacks', emoji:'🍿', name:'Snacks & the Jerky Drawer', intro:'The good snack drawer.', shelves:[
    {name:'Jerky', slug:'jerky', desc:'Small-batch & game jerky.'},
    {name:'Popcorn', slug:'popcorn', desc:'Heirloom & small-batch popcorn.'},
    {name:'Chips', slug:'chips', desc:'Regional & clean-oil chips.'},
    {name:'Crackers', slug:'crackers', desc:'Artisan crackers & crisps for the board.'},
    {name:'Granola', slug:'granola', desc:'Small-batch, real-ingredient, honest sugar.'},
    {name:'Pretzels', slug:'pretzels', desc:'Hand-rolled sourdough & soft pretzels.'},
    {name:'Cashews', slug:'cashews', desc:'Fair-trade & small-farm cashews.'},
    {name:'Hazelnuts & Filberts', slug:'hazelnuts', desc:'Oregon-grown, single-orchard.'},
    {name:'Macadamia Nuts', slug:'macadamia', desc:'Hawaiian estate macadamias.'},
    {name:'Pine Nuts', slug:'pine-nuts', desc:'US wild-harvested & true pignoli.'},
    {name:'Pumpkin Seeds & Pepitas', slug:'pumpkin-seeds', desc:'Roasted, sprouted & raw.'},
    {name:'Sunflower Seeds', slug:'sunflower-seeds', desc:'US-grown, small-batch roasted.'},
    {name:'Chia & Flax Seeds', slug:'chia-flax', desc:'Cold-milled & whole, farm-direct.'},
    {name:'Hemp Seeds', slug:'hemp-seeds', desc:'US-grown hulled hemp hearts.'},
    {name:'Pork Rinds & Chicharrones', slug:'pork-rinds', desc:'Kettle-fried, real skin.'},
    {name:'Trail Mix', slug:'trail-mix', desc:'Real nuts & fruit, no fillers.'},
    {name:'Fruit Leather & Fruit Snacks', slug:'fruit-leather', desc:'Just fruit, no added sugar.'},
    {name:'Meat Sticks & Snack Sticks', slug:'meat-sticks', desc:'Grass-fed, clean-cured.'},
    {name:'Veggie & Root Chips', slug:'veggie-chips', desc:'Real vegetables, clean oil.'},
    {name:'Rice Crackers & Crisps', slug:'rice-crackers', desc:'Brown-rice & tamari-baked.'},
    {name:'Energy & Snack Bars', slug:'energy-bars', desc:'Whole-food, real-ingredient bars.'},
    {name:'Cheese Puffs & Baked Snacks', slug:'puffs-cheese-snacks', desc:'Real cheese, popped & baked.'},
    {name:'Roasted Chickpeas & Bean Snacks', slug:'roasted-chickpeas', desc:'Crunchy, protein-packed.'},
    {name:'Dried Edamame & Pea Snacks', slug:'dried-edamame', desc:'Roasted, salted, real crunch.'},
    {name:'Seed Crackers & Crisps', slug:'seed-crackers', desc:'Flax & seed, grain-free.'},
    {name:'Protein Cookies & Bites', slug:'protein-cookies', desc:'Real-food protein, no chalk.'},
    {name:'Fruit Chips & Crisps', slug:'fruit-chips', desc:'Just fruit, freeze-dried & baked.'},
    {name:'Chocolate-Covered Nuts & Fruit', slug:'dark-chocolate-nuts', desc:'Dark chocolate, real fruit.'},
    {name:'Nut Clusters & Brittle Bites', slug:'nut-clusters', desc:'Small-batch, honest crunch.'},
    {name:'Plant & Mushroom Jerky', slug:'jerky-alternative', desc:'Meaty chew, no meat.'} ]},
  { slug:'sweets', emoji:'🍫', name:'Sweets & Bakery', intro:'The good kind of sweet tooth.', shelves:[
    {name:'Chocolate', slug:'chocolate', desc:'Bean-to-bar, ethically sourced.'},
    {name:'Mexican Chocolate', slug:'mexican-chocolate', desc:'Stone-ground table chocolate for mole & cocoa.'},
    {name:'Candy', slug:'candy', desc:'Small-batch & regional confections.'},
    {name:'Cookies', slug:'cookies', desc:'Bakeries that ship real cookies.'},
    {name:'Bread', slug:'bread', desc:'Naturally-leavened sourdough that ships.'},
    {name:'Bagels', slug:'bagels', desc:'Kettle-boiled, hand-rolled, shipped.'},
    {name:'Baking Chocolate', slug:'baking-chocolate', desc:'Bean-to-bar bars, chips & cocoa.'},
    {name:'Marshmallows', slug:'marshmallows', desc:'Hand-cut gourmet, real vanilla.'},
    {name:'Tortillas', slug:'tortillas', desc:'Real masa & flour, pressed fresh.'},
    {name:'Pie', slug:'pie', desc:'Scratch crust, shipped frozen.'},
    {name:'Croissants & Pastry', slug:'pastry', desc:'Butter lamination, bake at home.'},
    {name:'English Muffins & Crumpets', slug:'english-muffins', desc:'Griddled, nooks & crannies.'},
    {name:'Pita & Flatbread', slug:'pita-flatbread', desc:'Hand-stretched, real puff.'},
    {name:'Naan', slug:'naan', desc:'Tandoor-style, blistered.'},
    {name:'Donuts', slug:'donuts', desc:'Yeast-raised & cake, shipped.'},
    {name:'Muffins & Quick Breads', slug:'muffins', desc:'Scratch-baked, real fruit.'},
    {name:'Cinnamon Rolls & Sweet Buns', slug:'cinnamon-rolls', desc:'Hand-rolled, bake at home.'},
    {name:'Layer Cake & Bundt', slug:'cake', desc:'Scratch cakes that ship.'},
    {name:'Babka & Enriched Bread', slug:'babka-brioche', desc:'Laminated chocolate & cinnamon.'},
    {name:'Caramels & Toffee', slug:'caramel', desc:'Slow-cooked, real cream & butter.'},
    {name:'Fudge', slug:'fudge', desc:'Copper-kettle, small-batch.'},
    {name:'Gummies & Chews', slug:'gummy-candy', desc:'Real juice, real pectin.'},
    {name:'Licorice', slug:'licorice', desc:'Real molasses & anise, soft-cut.'},
    {name:'Lollipops & Hard Candy', slug:'lollipops-hard-candy', desc:'Hand-pulled, real flavor.'},
    {name:'Brittle & Nut Confections', slug:'brittle', desc:'Copper-kettle peanut & pecan.'},
    {name:'Chocolate Truffles', slug:'truffles', desc:'Ganache-centered, hand-rolled.'},
    {name:'Marzipan & Nougat', slug:'marzipan-nougat', desc:'Almond confection, old-world.'},
    {name:'Gelato', slug:'gelato', desc:'Dense, low-air, real gelaterias.'},
    {name:'Sorbet & Dairy-Free Frozen', slug:'sorbet', desc:'Real fruit, no dairy.'},
    {name:'Ice Cream Cones & Waffle Cones', slug:'ice-cream-cones', desc:'Fresh-pressed, real waffle.'},
    {name:'Italian Ice & Sorbetto', slug:'italian-ice', desc:'Water-ice, real fruit.'},
    {name:'Mochi Ice Cream', slug:'mochi-ice-cream', desc:'Pounded rice, real cream.'},
    {name:'Custard & Pudding', slug:'custard-pudding', desc:'Frozen custard & rice pudding.'},
    {name:'Whipped Cream & Toppings', slug:'whipped-cream-topping', desc:'Real cream, fudge & sprinkles.'} ]},
  { slug:'drink-cart', emoji:'☕', name:'The Drink Cart', intro:'Everything worth pouring in a glass.', shelves:[
    {name:'Coffee', slug:'coffee', desc:'Small-roaster, roasted fresh.'},
    {name:'Juice', slug:'juice', desc:'Cold-pressed, no added sugar.'},
    {name:'Sparkling Water & Seltzer', slug:'sparkling-water', desc:'Real minerals or a serious bubble.'},
    {name:'Shrubs & Drinking Vinegars', slug:'shrubs', desc:'Real fruit & vinegar, small-batch.'},
    {name:'Cocktail Mixers & Syrups', slug:'mixers', desc:'Real botanicals, no HFCS.'},
    {name:'Tea', slug:'tea', desc:'Loose-leaf, direct from farms.'},
    {name:'Matcha', slug:'matcha', desc:'Ceremonial, single-origin.'},
    {name:'Craft Soda', slug:'craft-soda', desc:'Real botanicals & mixers.'},
    {name:'Kombucha', slug:'kombucha', desc:'Raw, live, cold-shipped.'},
    {name:'Drinking Chocolate', slug:'drinking-chocolate', desc:'Real ground cacao for the cup.'},
    {name:'Apple Cider', slug:'apple-cider', desc:'Fresh-pressed, orchard-direct, cold-shipped.'},
    {name:'Chai & Concentrate', slug:'chai', desc:'Whole-spice, real black tea.'},
    {name:'Herbal & Wellness Tea', slug:'herbal-tea', desc:'Single-herb & botanical blends.'},
    {name:'Yerba Mate', slug:'yerba-mate', desc:'Shade-grown, real cebado.'},
    {name:'Cold Brew Coffee', slug:'cold-brew', desc:'Slow-steeped, low-acid.'},
    {name:'Chicory & Coffee Alternatives', slug:'chicory-coffee', desc:'Roasted chicory & grain brews.'},
    {name:'Tonic & Craft Mixers', slug:'tonic-water', desc:'Real quinine & botanicals.'},
    {name:'Cocktail Bitters', slug:'cocktail-bitters', desc:'Small-batch aromatic & fruit.'},
    {name:'Ginger Beer & Botanical Soda', slug:'ginger-beer', desc:'Real ginger, proper burn.'},
    {name:'Horchata & Rice Drinks', slug:'horchata', desc:'Cinnamon-rice, real & creamy.'},
    {name:'Aguas Frescas', slug:'aguas-frescas', desc:'Fresh-fruit waters, low sugar.'},
    {name:'Lemonade & Limeade', slug:'lemonade', desc:'Real-juice, not from powder.'},
    {name:'Coconut Water', slug:'coconut-water', desc:'Single-source, not-from-concentrate.'},
    {name:'Aloe & Botanical Drinks', slug:'aloe-drink', desc:'Real aloe pulp, small-batch.'},
    {name:'Switchel & Vinegar Tonics', slug:'switchel', desc:'Ginger-vinegar, the old field drink.'},
    {name:'Cordials & Drink Syrups', slug:'cordial-syrups', desc:'Real fruit & botanical syrups.'},
    {name:'Barista Oat & Nut Milk', slug:'oat-milk-drink', desc:'Clean-label, steams & foams.'},
    {name:'Espresso Roasts', slug:'espresso-beans', desc:'Small-roaster espresso blends.'},
    {name:'Decaf Coffee', slug:'decaf-coffee', desc:'Swiss-water & sugarcane decaf.'},
    {name:'Single-Origin & Micro-Lot Coffee', slug:'single-origin-coffee', desc:'Traceable, freshly roasted.'},
    {name:'Oolong Tea', slug:'oolong-tea', desc:'Hand-processed, real terroir.'},
    {name:'Pu-erh & Aged Tea', slug:'puerh-tea', desc:'Fermented & aged, sourced direct.'},
    {name:'Rooibos & Honeybush', slug:'rooibos', desc:'Caffeine-free South African.'},
    {name:'Green Tea (Sencha, Gyokuro)', slug:'green-tea', desc:'Fresh-harvest, single-garden.'},
    {name:'Specialty Instant Coffee', slug:'instant-specialty-coffee', desc:'Craft-roast, freeze-dried.'} ]},
  { slug:'cold-case', emoji:'🧀', name:'The Cold Case', intro:'The refrigerated good stuff.', shelves:[
    {name:'Cheese', slug:'cheese', desc:'Small-creamery & farmstead.'},
    {name:'Hummus & Dips', slug:'hummus', desc:'Cold-pressured, no preservatives.'},
    {name:'Fresh Pasta', slug:'fresh-pasta', desc:'Egg pasta & ravioli, made daily.'},
    {name:'Plant Milk', slug:'plant-milk', desc:'More nut, fewer gums, independent.'},
    {name:'Sour Cream & Crème Fraîche', slug:'sour-cream', desc:'Cultured cream, no fillers.'},
    {name:'Cottage Cheese', slug:'cottage-cheese', desc:'Real curds, no stabilizers.'},
    {name:'Cultured Butter', slug:'cultured-butter', desc:'European-style, cultured.'},
    {name:'Tofu & Tempeh', slug:'tofu-tempeh', desc:'Craft, organic, fresh-shipped.'},
    {name:'Milk & Cream', slug:'milk', desc:'Cream-line, grass-fed, glass-bottled.'},
    {name:'Pasture-Raised Eggs', slug:'eggs', desc:'True pasture, deep-gold yolks.'},
    {name:'Butter', slug:'butter', desc:'European, grass-fed, slow-churned & goat.'},
    {name:'Fresh Mozzarella', slug:'mozzarella', desc:'Hand-stretched cow & buffalo, shipped cold.'},
    {name:'Parmesan', slug:'parmesan', desc:'DOP Parmigiano-Reggiano & American aged parm.'},
    {name:'Mexican Cheese', slug:'mexican-cheese', desc:'Cotija, queso fresco & Oaxaca, real creameries.'},
    {name:'Ricotta', slug:'ricotta', desc:'Hand-dipped whole-milk, from real creameries.'},
    {name:'Yogurt & Skyr', slug:'yogurt', desc:'Cream-top & grass-fed, real cultures.'},
    {name:'Kefir', slug:'kefir', desc:'Live-culture, tart & drinkable.'},
    {name:'Cream Cheese & Spreads', slug:'cream-cheese', desc:'Real cultured, no gums.'},
    {name:'Mascarpone & Creme Fraiche', slug:'mascarpone-creme-fraiche', desc:'Cultured, rich & real.'},
    {name:'Goat Cheese', slug:'goat-cheese', desc:'Fresh chevre & aged, farmstead.'},
    {name:'Blue Cheese', slug:'blue-cheese', desc:'Cave-aged American & classic.'},
    {name:'Feta', slug:'feta', desc:'Brined sheep & goat, real curd.'},
    {name:'Aged & Cave-Aged Cheddar', slug:'aged-cheddar', desc:'Clothbound & cave-aged, real age.'},
    {name:'Burrata & Fresh Mozzarella', slug:'burrata', desc:'Hand-pulled, cold-shipped.'},
    {name:'Cheese Curds', slug:'cheese-curds', desc:'Squeaky-fresh, co-op & farm.'},
    {name:'Pimento Cheese & Spreads', slug:'pimento-cheese', desc:'Real cheddar, hand-mixed.'},
    {name:'Swiss & Alpine Cheese', slug:'swiss-alpine', desc:'Raw-milk, mountain-style.'},
    {name:'Gouda & Aged Dutch-Style', slug:'gouda-aged', desc:'Farmstead, aged for crystals.'},
    {name:'Clothbound & Cave-Aged', slug:'clothbound', desc:'Cave-ripened, bandaged rind.'},
    {name:'Plant-Based Cheese', slug:'plant-cheese', desc:'Cultured cashew & almond.'},
    {name:'Plant-Based Yogurt', slug:'plant-yogurt', desc:'Coconut & oat, live cultures.'},
    {name:'Quark & Fresh Curd', slug:'quark', desc:'German-style fresh cheese.'},
    {name:'Buttermilk & Cultured Milk', slug:'buttermilk', desc:'Real churned buttermilk.'},
    {name:'Clotted Cream & Creme', slug:'clotted-cream', desc:'Devon-style & creme fraiche.'},
    {name:'Plant-Based Butter', slug:'plant-butter', desc:'Cultured, real-fat plant butter.'},
    {name:'Egg Substitutes & Liquid Egg', slug:'egg-substitute', desc:'Plant & pasteurized egg.'},
    {name:'Farmer & Pot Cheese', slug:'farmer-cheese', desc:'Dry-curd fresh cheese.'},
    {name:'Cheese Spreads & Fondue', slug:'cheese-spread', desc:'Real-cheese cold-pack & fondue.'},
    {name:'Cream & Half-and-Half', slug:'heavy-cream', desc:'Cream-line, glass-bottled.'} ]},
  { slug:'frozen', emoji:'❄', name:'The Frozen Aisle', intro:'Regional food shipped on dry ice.', shelves:[
    {name:'Regional Frozen', slug:'frozen', desc:'Tamales, dumplings, boudin & more.'},
    {name:'Ice Cream', slug:'ice-cream', desc:'Small-batch creameries that ship on dry ice.'},
    {name:'Frozen Dumplings & Potstickers', slug:'frozen-dumplings', desc:'Hand-folded, flash-frozen.'},
    {name:'Frozen Prepared Meals', slug:'frozen-meals', desc:'Chef-made, real-ingredient.'},
    {name:'Frozen Pot Pies', slug:'frozen-pot-pies', desc:'Scratch crust, shipped frozen.'},
    {name:'Frozen Pizza', slug:'frozen-pizza', desc:'Real pizzerias, flash-frozen.'},
    {name:'Frozen Breakfast', slug:'frozen-breakfast', desc:'Biscuits, waffles & burritos.'},
    {name:'Frozen Fruit', slug:'frozen-fruit', desc:'Peak-picked, single-farm.'},
    {name:'Frozen Appetizers & Snacks', slug:'frozen-appetizers', desc:'Empanadas, rolls & bites.'},
    {name:'Frozen Prepared Vegetables', slug:'frozen-vegetables-prepared', desc:'Blanched & ready, real veg.'},
    {name:'Puff Pastry', slug:'puff-pastry', desc:'All-butter, real lamination.'},
    {name:'Phyllo & Filo Dough', slug:'phyllo-dough', desc:'Paper-thin, hand-stretched.'},
    {name:'Pie Crust & Dough', slug:'pie-crust', desc:'All-butter, ready to roll.'},
    {name:'Pizza Dough & Crust', slug:'pizza-dough', desc:'Real pizzerias, frozen fresh.'},
    {name:'Edible & Bake Cookie Dough', slug:'cookie-dough', desc:'Safe-to-eat & bake, real butter.'},
    {name:'Tart & Pastry Shells', slug:'tart-shells', desc:'Pre-baked, all-butter shells.'},
    {name:'Empanada & Hand-Pie Discs', slug:'empanada-wrappers', desc:'Ready discs, real dough.'},
    {name:'Biscuit & Scone Dough', slug:'biscuit-dough', desc:'Buttermilk, Southern-style.'} ]},
  { slug:'british-pantry', emoji:'🇬🇧', name:'The British & Irish Pantry', intro:'Marmalade, brown pickle, mince pies, and yeast extract — the British larder from independent American preservers and small family import shops, not the conglomerate jars that own the category.', shelves:[
    {name:'Ploughman\'s & Brown Pickle', slug:'branston-pickle', desc:'The independent maker\'s version.'},
    {name:'Yeast Extract Spread', slug:'marmite', desc:'The anti-Marmite independents.'},
    {name:'Marmalade', slug:'marmalade', desc:'Real Seville peel, US preservers.'},
    {name:'Custard & Pudding Sauce', slug:'custard', desc:'Pouring custard, honestly sourced.'},
    {name:'Digestives & Tea Biscuits', slug:'digestive-biscuits', desc:'Family-baked, for dunking.'},
    {name:'Lemon & Fruit Curd', slug:'lemon-curd', desc:'Real egg-and-butter curd.'},
    {name:'Mince Pies & Mincemeat', slug:'mince-pie', desc:'Bourbon-laced, US bakers.'},
    {name:'HP-Style Brown Sauce', slug:'british-brown-sauce', desc:'The independent UK makers.'} ]},
  { slug:'german-nordic', emoji:'🥨', name:'The German & Nordic Pantry', intro:'Spätzle, lingonberry, lebkuchen, and brown cheese — the German and Scandinavian larder from family makers and independent import grocers, not the flour-and-water boxes.', shelves:[
    {name:'Spaetzle & German Egg Noodles', slug:'spaetzle', desc:'High-egg, Swabian makers.'},
    {name:'Braised Red Cabbage & Rotkohl', slug:'red-cabbage', desc:'Slow-cooked, jarred right.'},
    {name:'Lebkuchen & Stollen', slug:'lebkuchen-stollen', desc:'Real German holiday baking.'},
    {name:'Lingonberry & Nordic Preserves', slug:'lingonberry', desc:'Tart, for meatballs & toast.'},
    {name:'Crispbread & Knäckebröd', slug:'crispbread', desc:'Rye crisp, real Scandinavian.'},
    {name:'Brunost & Brown Cheese', slug:'brown-cheese', desc:'Caramelized whey, Norwegian.'},
    {name:'Remoulade & German Condiments', slug:'remoulade-german', desc:'Independent German brands.'},
    {name:'German & Scandinavian Seasoning', slug:'german-spice-mix', desc:'US spice makers, real blends.'} ]},
  { slug:'garden', emoji:'🌱', name:'The Garden', intro:'Grow-your-own and ship-stable.', shelves:[
    {name:'Mushrooms', slug:'mushrooms', desc:'Dried gourmet & grow kits.'},
    {name:'Seeds', slug:'seeds', desc:'Heirloom & open-pollinated.'},
    {name:'Dried Fruit', slug:'dried-fruit', desc:'Unsulphured, single-orchard.'} ]},
  { slug:'menagerie', emoji:'🐾', name:'The Menagerie', intro:'Real food for the animals in your life — not big-brand kibble.', shelves:[
    {name:'Dog Food', slug:'dog-food', desc:'Fresh & raw, human-grade, cold-shipped.'},
    {name:'Cat Food', slug:'cat-food', desc:'Fresh & raw for obligate carnivores.'},
    {name:'Parrot & Bird Food', slug:'bird-food', desc:'Vet-developed, organic, beyond seed.'},
    {name:'Rabbit & Small-Animal', slug:'rabbit-food', desc:'Current-crop hay & timothy pellets.'},
    {name:'Reptile Food', slug:'reptile-food', desc:'Gel diets, gecko food & live feeders.'},
    {name:'Fish Food', slug:'fish-food', desc:'Whole-ingredient marine & tropical.'},
    {name:'Turtle & Tortoise', slug:'turtle-food', desc:'Zoo-standard diets & grazing gels.'},
    {name:'Ferret Food', slug:'ferret-food', desc:'High-meat, grain-free & raw.'},
    {name:'Chinchilla Food', slug:'chinchilla-food', desc:'Plain timothy pellets & fresh hay.'},
    {name:'Feeder Insects', slug:'feeder-insects', desc:'Crickets, dubia & more, shipped live.'},
    {name:'Hamster & Gerbil Food', slug:'hamster-gerbil-food', desc:'Fortified blocks that stop picky eating.'},
    {name:'Guinea Pig Food', slug:'guinea-pig-food', desc:'Vitamin-C-fortified pellets & fresh hay.'},
    {name:'Hermit Crab Food', slug:'hermit-crab-food', desc:'Preservative-free, whole-food diets.'},
    {name:'Frog & Amphibian Food', slug:'frog-food', desc:'Live cultures, dart-frog flies & supplements.'},
    {name:'Snake Food & Frozen Feeders', slug:'snake-food', desc:'Quality flash-frozen feeder mice & rats.'} ]},
  { slug:'coop-barn', emoji:'🐔', name:'The Coop & Barn', intro:'Feed for the flock and the herd — poultry, waterfowl & livestock done right.', shelves:[
    {name:'Chicken Feed', slug:'chicken-feed', desc:'Organic, soy-free layer & starter.'},
    {name:'Duck Feed', slug:'duck-feed', desc:'Niacin-rich waterfowl formulas.'},
    {name:'Goat Feed & Minerals', slug:'goat-feed', desc:'Copper-correct minerals & forage.'},
    {name:'Horse Feed', slug:'horse-feed', desc:'Low-NSC feeds, balancers & forage.'} ]},
  { slug:'asian-pantry', emoji:'🥢', name:'The Asian Pantry', intro:'The real backbone of Asian cooking — brewed, pressed & fermented by hand.', shelves:[
    {name:'Soy Sauce & Tamari', slug:'soy-sauce', desc:'Naturally brewed, barrel-aged, gluten-free tamari.'},
    {name:'Fish Sauce', slug:'fish-sauce', desc:'First-press nuoc mam & US-made garum.'},
    {name:'Toasted Sesame Oil', slug:'sesame-oil', desc:'US-milled, nutty finishing oil.'},
    {name:'Rice Noodles', slug:'rice-noodles', desc:'Banh pho, vermicelli & more.'},
    {name:'Wonton & Dumpling Wrappers', slug:'wonton-wrappers', desc:'Fresh & frozen, the real skins.'},
    {name:'Gochujang', slug:'gochujang', desc:'Onggi-fermented Korean chili paste.'},
    {name:'Thai Curry Paste', slug:'thai-curry-paste', desc:'Real pounded red, green & massaman.'},
    {name:'Stir-Fry Sauce', slug:'stir-fry-sauce', desc:'Hoisin, oyster & all-purpose, small-batch.'},
    {name:'Kimchi', slug:'kimchi', desc:'Raw fermented, cold-shipped.'},
    {name:'Rice Vinegar', slug:'rice-vinegar', desc:'Traditionally brewed, oak-aged.'},
    {name:'Mirin', slug:'mirin', desc:'Real hon-mirin, not corn syrup.'},
    {name:'Doenjang', slug:'doenjang', desc:'Long-aged Korean soybean paste.'},
    {name:'Dashi', slug:'dashi', desc:'Kombu, bonito & US-grown kelp.'},
    {name:'Furikake', slug:'furikake', desc:'Rice seasoning, US-grown seaweed.'},
    {name:'Tamari & Aged Soy', slug:'tamari', desc:'Barrel-aged, gluten-free tamari.'},
    {name:'Oyster & Mushroom Sauce', slug:'oyster-sauce', desc:'Real oyster & vegan mushroom.'},
    {name:'Hoisin & Sweet Bean Sauce', slug:'hoisin', desc:'Small-batch, no corn syrup.'},
    {name:'Sriracha & Asian Chili Sauce', slug:'sriracha-chili-sauce', desc:'Craft ferment, fresh chili.'},
    {name:'Ponzu & Citrus Soy', slug:'ponzu', desc:'Yuzu & sudachi, real dashi.'},
    {name:'Sambal & Indonesian Chili', slug:'sambal', desc:'Pounded fresh chili paste.'},
    {name:'Gochugaru & Korean Chili Flake', slug:'gochugaru', desc:'Sun-dried, true Korean pepper.'},
    {name:'Kecap Manis & Sweet Soy', slug:'kecap-manis', desc:'Palm-sugar sweet soy.'},
    {name:'Panko & Japanese Breadcrumbs', slug:'panko', desc:'Coarse, crisp, real panko.'},
    {name:'Japanese Short-Grain Rice', slug:'japanese-rice', desc:'Koshihikari & sushi rice.'},
    {name:'Udon, Soba & Ramen Noodles', slug:'udon-soba', desc:'Fresh & dried, real wheat & buckwheat.'},
    {name:'Katsuobushi & Bonito', slug:'katsuobushi', desc:'Smoked skipjack flakes for dashi.'},
    {name:'Real Wasabi', slug:'wasabi', desc:'Fresh-grated & true wasabi paste.'},
    {name:'Yuzu & Japanese Citrus', slug:'yuzu', desc:'Yuzu juice, kosho & sudachi.'},
    {name:'Japanese Curry Roux', slug:'curry-roux', desc:'Small-batch, no shortcuts.'},
    {name:'Umeboshi & Pickled Plum', slug:'umeboshi', desc:'Salt-cured sour plum.'},
    {name:'Ssamjang & Wrap Sauce', slug:'ssamjang', desc:'The Korean BBQ wrap sauce.'},
    {name:'Tteok & Rice Cakes', slug:'rice-cakes-tteok', desc:'Fresh garaetteok & tteokbokki.'},
    {name:'Korean Noodles', slug:'korean-noodles', desc:'Japchae glass & naengmyeon.'},
    {name:'Perilla & Sesame Leaf', slug:'perilla', desc:'Perilla oil, seeds & pickled leaf.'},
    {name:'Danmuji & Korean Pickles', slug:'danmuji', desc:'Yellow radish & banchan.'},
    {name:'Myeolchi & Korean Dried Anchovy', slug:'korean-anchovy', desc:'Broth anchovy, screened & graded.'},
    {name:'Cheonggukjang & Fermented Soybean', slug:'korean-soybean', desc:'Farmhouse-fermented soybean.'},
    {name:'Banana Ketchup', slug:'banana-ketchup', desc:'Filipino sweet-tangy classic.'},
    {name:'Calamansi', slug:'calamansi', desc:'Philippine lime, juice & concentrate.'},
    {name:'Patis & Bagoong', slug:'patis-bagoong', desc:'Filipino fish sauce & shrimp paste.'},
    {name:'Ube & Purple Yam', slug:'ube', desc:'Halaya, jam & real purple yam.'},
    {name:'Longganisa & Filipino Sausage', slug:'filipino-longganisa', desc:'Sweet & garlic, flash-frozen.'},
    {name:'Sukang Filipino Vinegar', slug:'filipino-vinegar', desc:'Cane, coconut & palm vinegar.'},
    {name:'Pancit & Filipino Noodles', slug:'pancit-noodles', desc:'Bihon, canton & sotanghon.'},
    {name:'Adobo & Sinigang Mixes', slug:'filipino-sauce-mix', desc:'Real sauce & sinigang bases.'},
    {name:'Rice Paper & Spring Roll Wrappers', slug:'rice-paper', desc:'Banh trang, for fresh rolls.'},
    {name:'Palm & Coconut Sugar (Gula)', slug:'palm-sugar', desc:'Block & paste, real caramel.'},
    {name:'Shrimp Paste & Belacan', slug:'shrimp-paste', desc:'Fermented, the umami base.'},
    {name:'Lemongrass, Galangal & Thai Aromatics', slug:'lemongrass-aromatics', desc:'Fresh, frozen & paste.'},
    {name:'Kaffir Lime & Thai Herbs', slug:'kaffir-lime', desc:'Makrut leaf & fruit, US-grown.'},
    {name:'Vietnamese Noodles (Bun, Banh Pho)', slug:'vietnamese-noodles', desc:'Rice vermicelli & flat.'},
    {name:'Thai Sticky & Jasmine Rice', slug:'thai-sticky-rice', desc:'Glutinous & fragrant, US & import.'},
    {name:'Tamarind & Sour Pastes', slug:'tamarind-paste-seasian', desc:'Concentrate & block, real sour.'} ]},
  { slug:'latin-pantry', emoji:'🌮', name:'The Latin Pantry', intro:'The Latin American staples the big brands flattened — sofrito, dulce de leche, real plantain.', shelves:[
    {name:'Dulce de Leche', slug:'dulce-de-leche', desc:'Slow-cooked milk caramel, made here.'},
    {name:'Sofrito & Recaito', slug:'sofrito', desc:'The aromatic base, jarred & frozen.'},
    {name:'Plantain & Yuca Chips', slug:'plantain-chips', desc:'Real plantain, kettle & baked.'},
    {name:'Guava Paste', slug:'guava-paste', desc:'Bocadillo & membrillo, small-batch.'},
    {name:'Masarepa', slug:'masarepa', desc:'Precooked arepa flour — an honest thin shelf.'},
    {name:'Sazón & Adobo', slug:'sazon-adobo', desc:'Clean Latin seasoning blends.'},
    {name:'Hominy & Pozole', slug:'hominy', desc:'Heirloom nixtamal for pozole.'} ]},
  { slug:'middle-eastern-pantry', emoji:'🧆', name:'The Middle-Eastern Pantry', intro:'Harissa, za\'atar, and the pantry of the Levant and Maghreb — from makers who source it right.', shelves:[
    {name:'Harissa', slug:'harissa', desc:'Sun-dried chili paste, real heat.'},
    {name:'Za\'atar', slug:'zaatar', desc:'Single-origin thyme, sumac & sesame.'},
    {name:'Pomegranate Molasses', slug:'pomegranate-molasses', desc:'Single-ingredient, origin-named.'},
    {name:'Halva', slug:'halva', desc:'Hand-spun sesame, small-batch.'},
    {name:'Labneh', slug:'labneh', desc:'Strained yogurt — regional, cold.'},
    {name:'Preserved Lemon', slug:'preserved-lemon', desc:'Salt-cured, for tagine & more.'},
    {name:'Dukkah', slug:'dukkah', desc:'Egyptian nut & spice blend.'},
    {name:'Bulgur', slug:'bulgur', desc:'US-milled cracked wheat.'} ]},
  { slug:'indian-pantry', emoji:'🍛', name:'The Indian Pantry', intro:'Bilona-churned ghee, named dal, and simmer sauces from cooks, not conglomerates.', shelves:[
    {name:'Ghee', slug:'ghee', desc:'Grass-fed, small-batch, hand-poured.'},
    {name:'Dal & Lentils', slug:'dal-lentils', desc:'Named varieties, traceable farms.'},
    {name:'Curry & Simmer Sauce', slug:'curry-simmer-sauce', desc:'Founder-made, real-spice jars.'},
    {name:'Atta Flour', slug:'atta-flour', desc:'Stone-ground whole wheat for roti.'},
    {name:'Mango Chutney', slug:'mango-chutney', desc:'Real fruit, family recipes.'} ]},
  { slug:'african-pantry', emoji:'🌍', name:'The African Pantry', intro:'Teff, berbere, and the pantry of the continent — a thin US field, honestly stocked.', shelves:[
    {name:'Teff', slug:'teff', desc:'US-grown grain & flour for injera.'},
    {name:'Berbere', slug:'berbere', desc:'Ethiopian spice blend, real depth.'},
    {name:'Piri-Piri', slug:'piri-piri', desc:'African bird\'s-eye chili sauce.'},
    {name:'Fonio', slug:'fonio', desc:'West African ancient grain.'},
    {name:'Egusi', slug:'egusi', desc:'Ground melon seed for soup.'} ]},
  { slug:'spice-rack', emoji:'🧂', name:'The Spice Rack', intro:'Single spices and hand-mixed blends from single-origin importers and small blenders — the flavor the supermarket jar lost to age and irradiation.', shelves:[
    {name:'Cinnamon', slug:'cinnamon', desc:'True Ceylon & real cassia.'},
    {name:'Black Pepper & Peppercorns', slug:'black-pepper', desc:'Single-origin, freshly harvested.'},
    {name:'Cumin', slug:'cumin', desc:'Single-origin, high-oil seed.'},
    {name:'Turmeric', slug:'turmeric', desc:'High-curcumin, single-farm.'},
    {name:'Paprika & Smoked Paprika', slug:'smoked-paprika', desc:'Oak-smoked & sweet, real color.'},
    {name:'Cardamom', slug:'cardamom', desc:'Green & black, whole pods.'},
    {name:'Coriander & Fennel Seed', slug:'coriander', desc:'Whole, bright & citrusy.'},
    {name:'Nutmeg, Cloves & Warm Spice', slug:'nutmeg-cloves', desc:'Whole warm spices, fresh-ground.'},
    {name:'Curry Powder & Masala', slug:'curry-powder', desc:'Toasted, hand-mixed blends.'},
    {name:'Garam Masala', slug:'garam-masala', desc:'Freshly ground warming blend.'},
    {name:'Ras el Hanout', slug:'ras-el-hanout', desc:'North African many-spice blend.'},
    {name:'Cajun & Creole Seasoning', slug:'cajun-creole-seasoning', desc:'Louisiana blends, real heat.'},
    {name:'Jerk Seasoning', slug:'jerk-seasoning', desc:'Allspice-forward, real Scotch bonnet.'},
    {name:'Everything & All-Purpose', slug:'everything-seasoning', desc:'The sprinkle-on workhorses.'},
    {name:'Chili Powder & Taco Seasoning', slug:'chili-powder', desc:'Single-chile & real blends.'},
    {name:'Chinese Five-Spice & Asian Blends', slug:'five-spice', desc:'Toasted, balanced, fresh.'} ]},
  { slug:'mill', emoji:'🌾', name:'The Mill', intro:'Ancient grains and stone-milled flours from heritage farms, tribal growers, and employee-owned mills — grains the commodity aisle forgot.', shelves:[
    {name:'Quinoa', slug:'quinoa', desc:'US-grown, high-altitude.'},
    {name:'Farro & Emmer', slug:'farro', desc:'Heritage wheat, nutty & chewy.'},
    {name:'Barley', slug:'barley', desc:'Hulled & heirloom, real body.'},
    {name:'Buckwheat & Kasha', slug:'buckwheat', desc:'Toasted groats, gluten-free.'},
    {name:'Millet', slug:'millet', desc:'Golden, fluffy, farm-direct.'},
    {name:'Amaranth & Sorghum Grain', slug:'amaranth', desc:'Tiny ancient grains, gluten-free.'},
    {name:'Freekeh', slug:'freekeh', desc:'Fire-roasted green wheat.'},
    {name:'Wild Rice', slug:'wild-rice', desc:'Tribal-harvested, real manoomin.'},
    {name:'Semolina & Durum Flour', slug:'semolina-flour', desc:'For pasta & rustic bread.'},
    {name:'Rye Flour', slug:'rye-flour', desc:'Stone-milled, light to pumpernickel.'},
    {name:'Chickpea & Gram Flour', slug:'chickpea-flour', desc:'Besan for socca & pakora.'},
    {name:'Almond Flour', slug:'almond-flour', desc:'Blanched, fine-ground.'},
    {name:'Coconut Flour', slug:'coconut-flour', desc:'Fine, high-fiber, gluten-free.'},
    {name:'Cassava & Tapioca Flour', slug:'cassava-flour', desc:'Grain-free, whole-root.'},
    {name:'Cornmeal & Corn Flour', slug:'cornmeal', desc:'Stone-ground, real corn flavor.'},
    {name:'Spelt & Einkorn Flour', slug:'spelt-flour', desc:'Ancient wheat, easy-digesting.'} ]},
  { slug:'mediterranean-pantry', emoji:'🫒', name:'The Mediterranean Pantry', intro:'The sun-dried, brined, and jarred backbone of Mediterranean cooking — the antipasto jar done by small makers instead of the big canning lines.', shelves:[
    {name:'Sun-Dried Tomatoes', slug:'sun-dried-tomatoes', desc:'Oil-packed & dry, real sweetness.'},
    {name:'Roasted & Marinated Peppers', slug:'roasted-peppers', desc:'Fire-roasted piquillo & sweet.'},
    {name:'Artichoke Hearts & Marinated Veg', slug:'artichoke-hearts', desc:'Trimmed hearts, real brine.'},
    {name:'Tapenade & Olive Spread', slug:'tapenade', desc:'Hand-chopped olive & caper.'},
    {name:'Grape Leaves & Dolma', slug:'grape-leaves', desc:'Brined leaves & stuffed dolma.'},
    {name:'Giardiniera & Pickled Mix', slug:'giardiniera', desc:'Chicago-style & Italian, crisp.'},
    {name:'Orzo & Mediterranean Pasta', slug:'orzo-pasta', desc:'Bronze-die orzo & regional shapes.'},
    {name:'Pepperoncini & Pickled Peppers', slug:'pepperoncini', desc:'Brined golden & hot, real crunch.'} ]},
  { slug:'caribbean-pantry', emoji:'🏝️', name:'The Caribbean Pantry', intro:'Scotch bonnet, browning, ackee, and saltfish — the island pantry from Caribbean-American makers and family importers, not the one conglomerate that owns the aisle.', shelves:[
    {name:'Scotch Bonnet & Pepper Sauce', slug:'scotch-bonnet-sauce', desc:'Fiery island hot sauce.'},
    {name:'Browning & Cooking Caramel', slug:'browning-sauce', desc:'Burnt-sugar color & depth.'},
    {name:'Ackee', slug:'ackee', desc:'Canned, for ackee and saltfish.'},
    {name:'Callaloo & Caribbean Greens', slug:'callaloo', desc:'Canned amaranth & taro leaf.'},
    {name:'Salt Cod & Saltfish', slug:'saltfish', desc:'Dried & salted, the real thing.'},
    {name:'Pimento & Allspice', slug:'caribbean-allspice', desc:'Jamaican pimento berry & ground.'},
    {name:'Pikliz & Haitian Condiments', slug:'pikliz', desc:'Spicy pickled slaw, real heat.'},
    {name:'Sorrel & Caribbean Drinks', slug:'sorrel-drink', desc:'Hibiscus sorrel & mauby.'} ]},
  { slug:'glass-case', emoji:'🔎', name:'The Glass Case', special:true, intro:'The strict shelf: same hunt, higher bar — provably clean, small makers. Home of the featured Independent Halal and Independent Kosher hubs, where every maker names its certifier.', shelves:[
    {name:'Plant-Only', slug:'plant-only', desc:'Genuinely vegan, small makers.'},
    {name:'No-Additive', slug:'no-additive', desc:'Short, whole-food ingredient lists.'},
    {name:'Organic', slug:'organic', desc:'Genuinely certified-organic makers.'},
    {name:'Halal Beef & Lamb', slug:'halal-meat', desc:'Zabiha beef and lamb, certifier named.'},
    {name:'Halal Chicken & Poultry', slug:'halal-poultry', desc:'Hand-slaughtered halal poultry, certified.'},
    {name:'Halal Broth & Prepared', slug:'halal-prepared', desc:'Bone broth, franks, ready meals — certified.'},
    {name:'Halal Jerky & Snacks', slug:'halal-jerky-snacks', desc:'Certified halal jerky and snacks.'},
    {name:'Halal Sweets & Candy', slug:'halal-sweets', desc:'Candy on certified-halal gelatin.'},
    {name:'Halal Pantry & Spices', slug:'halal-pantry', desc:'Halal broth powders, spice blends, pantry.'},
    {name:'Halal Bakery', slug:'halal-bakery', desc:'Breads and pastry on a named halal certificate.'},
    {name:'Halal Nuts', slug:'halal-nuts', desc:'Growers and packers certified by ISA or HFSAA.'},
    {name:'Halal Supplements', slug:'halal-supplements', desc:'Gelatin-free capsules, certifier on the label.'},
    {name:'Halal Wagyu & Steak', slug:'halal-wagyu', desc:'Certified halal wagyu and premium steak.'},
    {name:'Halal Breakfast Meats', slug:'halal-breakfast', desc:'Beef bacon and breakfast sausage, certifier named.'},
    {name:'Halal Meal Prep', slug:'halal-meal-prep', desc:'Chef-made halal meals, delivered.'},
    {name:'Halal Pizza & Flatbread', slug:'halal-pizza', desc:'Pizza, lahmacun and flatbread under certification.'},
    {name:'Halal + Organic', slug:'halal-organic', desc:'Double-certified: halal and USDA Organic.'},
    {name:'Halal Seasonings & Sauces', slug:'halal-seasonings', desc:'Condiments with a named halal certificate.'},
    {name:'Halal Bulk & Beef Shares', slug:'halal-bulk', desc:'Bulk boxes and shares from certified processors.'},
    {name:'Halal Raw Pet Food', slug:'halal-pet', desc:'Raw pet food from halal-certified plants.'},
    {name:'Halal Baby Food', slug:'halal-baby-food', desc:'Baby and toddler food, certifier named.'},
    {name:'Halal Ice Cream', slug:'halal-icecream', desc:'Frozen dessert under a named certificate.'},
    {name:'Kosher Soup', slug:'kosher-soup', desc:'Soups under a named hechsher.'},
    {name:'Kosher Tea', slug:'kosher-tea', desc:'Blended tea where the flavor base is certified.'},
    {name:'Kosher Baking', slug:'kosher-baking', desc:'Chocolate, vanilla and flour you can read at a glance.'},
    {name:'Kosher Grains', slug:'kosher-grains', desc:'Certified grain and flour from independent mills.'},
    {name:'Kosher Wine', slug:'kosher-wine', desc:'Certified kosher wine from independent US wineries.'},
    {name:'Kosher Spirits', slug:'kosher-spirits', desc:'Whiskey and liqueurs under a named hechsher.'},
    {name:'Kosher Jerky', slug:'kosher-jerky', desc:'Beef jerky and meat snacks, agency named.'},
    {name:'Kosher Deli', slug:'kosher-deli', desc:'Salami, franks and knishes from kosher delis.'},
    {name:'Kosher Chocolate', slug:'kosher-chocolate', desc:'Bean-to-bar chocolate with the hechsher named.'},
    {name:'Kosher Maple Syrup', slug:'kosher-maple', desc:'Certified maple from independent sugarmakers.'},
    {name:'Kosher Coffee', slug:'kosher-coffee', desc:'Roasters certified by a named agency.'},
    {name:'Kosher Chips & Pretzels', slug:'kosher-chips', desc:'Certified snacks from small bakeries.'},
    {name:'Kosher Juice', slug:'kosher-juice', desc:'Juice and iced tea under supervision.'},
    {name:'Kosher Meat & Deli', slug:'kosher-meat', desc:'Glatt kosher meat and poultry, hechsher named.'},
    {name:'Kosher Pantry & Matzo', slug:'kosher-pantry', desc:'Family matzo and kosher pantry.'},
    {name:'Kosher Dairy & Cheese', slug:'kosher-dairy', desc:'Small kosher creameries, certified.'},
    {name:'Kosher Sweets & Chocolate', slug:'kosher-sweets', desc:'Kosher chocolate and confection.'},
    {name:'Kosher Pickles & Deli', slug:'kosher-pickles', desc:'Barrel pickles and deli condiments, kosher.'},
    {name:'Kosher Coffee, Spice & Specialty', slug:'kosher-specialty', desc:'Kosher roasters, spice, honey, pantry.'},
    {name:'Halal Seafood', slug:'halal-seafood', desc:'Halal-certified fish and shellfish.'},
    {name:'Halal Frozen & Prepared Meals', slug:'halal-frozen', desc:'Certified halal frozen entrees and meals.'},
    {name:'Halal Deli & Charcuterie', slug:'halal-deli', desc:'Halal pepperoni, pastrami, sausage.'},
    {name:'Halal Cheese & Dairy', slug:'halal-cheese', desc:'Halal-certified cheese and dairy.'},
    {name:'Kosher Smoked Fish & Seafood', slug:'kosher-fish', desc:'Kosher smoked salmon and fish, pareve.'},
    {name:'Kosher Olive Oil & Vinegar', slug:'kosher-oil', desc:'Family-estate kosher olive oil.'},
    {name:'Kosher Nuts & Dried Fruit', slug:'kosher-nuts', desc:'Kosher nuts, dried fruit, snacks.'},
    {name:'Kosher Granola & Snacks', slug:'kosher-granola', desc:'Small-batch kosher granola.'},
    {name:'Kosher Challah & Bakery', slug:'kosher-bakery', desc:'Kosher challah, rye, bakery, shipped.'},
    {name:'Kosher Ice Cream & Frozen', slug:'kosher-frozen', desc:'Kosher ice cream and frozen, certified.'},
    {name:'Kosher Prepared & Deli Meals', slug:'kosher-prepared', desc:'Kosher deli, brisket, prepared meals.'},
    {name:'Kosher Honey, Preserves & Jam', slug:'kosher-honey', desc:'Kosher honey, preserves, and jam.'} ]},
];

const HEAD = (title, desc, canonical) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/logo.png" />
<link rel="apple-touch-icon" href="/logo.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#0d1421" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="5best2buy.com" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="https://www.5best2buy.com/logo.png" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"5best2buy.com","alternateName":"Worth the Hunt","url":"https://www.5best2buy.com/","logo":"https://www.5best2buy.com/logo.png","email":"vince@5best2buy.com","description":"An independent guide to small-batch and independent American food makers, with no pay-to-play: makers cannot buy placement, rank, or rating.","slogan":"The five best of everything worth eating, from the independent makers who make it.","founder":{"@type":"Person","name":"Vince Gonzalez","url":"https://www.5best2buy.com/about/","address":{"@type":"PostalAddress","addressLocality":"Punta Gorda","addressRegion":"FL","addressCountry":"US"}},"knowsAbout":["small-batch food","independent food makers","food industry consolidation","brand ownership","sourced recipes"]}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"5best2buy.com","alternateName":"Worth the Hunt","url":"https://www.5best2buy.com/","publisher":{"@type":"Person","name":"Vince Gonzalez"},"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.5best2buy.com/search/?q={search_term_string}"},"query-input":"required name=search_term_string"}}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GG5QF6LH0D"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GG5QF6LH0D');</script>
<meta name="google-adsense-account" content="ca-pub-8826956454892311" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8826956454892311" crossorigin="anonymous"></script>
<style>
  :root{--navy:#0d1421;--surface:#121e30;--card:#16223a;--card-h:#1d2c47;--blue:#5fb0ef;--gold:#f0c560;--green:#5fe39a;--text:#eef2f8;--soft:#c8d3e6;--meta:#9aabc4;--line:rgba(120,150,190,0.18);--fd:'Rajdhani','Arial Narrow',sans-serif;--fm:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--navy);color:var(--text);font-family:Georgia,'Times New Roman',serif;line-height:1.7;font-size:17px;}
  .wrap{max-width:780px;margin:0 auto;padding:22px 18px 64px;}
  a{color:var(--blue);text-decoration:none;}
  .home{font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);}
  .home:hover{color:var(--gold);}
  .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin:22px 0 6px;}
  h1{font-family:var(--fd);font-weight:700;letter-spacing:.5px;line-height:1.02;color:var(--text);}
  .intro{color:var(--soft);margin:8px 0 26px;}
  .cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media(max-width:560px){.cards{grid-template-columns:1fr;}}
  .card{display:block;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 16px 14px;transition:border-color .2s,transform .2s,background .2s;}
  .card:hover{border-color:rgba(95,176,239,.45);background:var(--card-h);transform:translateY(-2px);}
  .card .nm{font-family:var(--fd);font-size:21px;font-weight:700;letter-spacing:.4px;color:var(--text);margin-bottom:2px;}
  .card .ds{font-size:15px;color:var(--meta);line-height:1.5;}
  .card .go{font-family:var(--fm);font-size:12.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-top:10px;display:inline-block;}
  .card.glass{border-color:rgba(95,227,154,.3);}
  .card.glass:hover{border-color:rgba(95,227,154,.6);}
  .card.glass .go{color:var(--green);}
  footer{border-top:1px solid var(--line);padding-top:18px;margin-top:40px;font-family:var(--fm);font-size:15px;color:var(--meta);line-height:1.7;}
</style>
</head>`;

const FOOTER = `<footer><nav style="margin-bottom:10px;letter-spacing:1px;text-transform:uppercase;font-size:12.5px;"><a href="/recipes/">Recipes</a> &middot; <a href="/what-can-i-make/">What Can I Make?</a> &middot; <a href="/what-to-eat/">What to Eat?</a> &middot; <a href="/traditional-nut-roll/">Nut Roll Guide</a> &middot; <a href="/kitchen-fundamentals/">Kitchen Fundamentals</a> &middot; <a href="/shelves/">All Shelves</a> &middot; <a href="/list/">My List</a> &middot; <a href="/who-owns/">Who Owns Your Food?</a> &middot; <a href="/games/">Games</a> &middot; <a href="/gifts/">Gift Guide</a> &middot; <a href="/independent/">Still Independent</a><br><a href="/how-we-hunt/">How We Hunt</a> &middot; <a href="/about/">About</a> &middot; <a href="/contact/">Contact</a> &middot; <a href="/privacy/">Privacy</a> &middot; <a href="/disclosure/">Affiliate Disclosure</a></nav>Some links on this site are affiliate links — if you buy through one, 5best2buy may earn a small commission at no extra cost to you. It never costs the maker anything, and it never decides who makes a list. The list is the list.<br>Published June 2026 &middot; Last updated 6 July 2026 &middot; © 2026 5best2buy.com</footer><script src="/list.js" defer></script>`;

function aislePage(a){
  const cards = a.shelves.map(s => `    <a class="card" href="/hunt/${s.slug}/">
      <div class="nm">${s.name}</div>
      <div class="ds">${s.desc}</div>
      <span class="go">See who made the cut →</span>
    </a>`).join('\n');
  return `${HEAD(`${a.name} | 5best2buy.com`, `${a.intro} ${a.shelves.length} curated shelves of small, independent makers.`, `https://www.5best2buy.com/aisles/${a.slug}/`)}
<body>
<div class="wrap">
  <a class="home" href="/">← 5best2buy</a>
  <div class="eyebrow">The Market</div>
  <h1 style="font-size:clamp(34px,7vw,56px);margin:6px 0 4px;">${a.emoji} ${a.name}</h1>
  <p class="intro">${a.intro}</p>
  <div class="cards">
${cards}
  </div>
  ${FOOTER}
</div>
${AWIN}
</body>
</html>`;
}

// ---- FEATURED ROTATION: weekly shelf + monthly aisle, computed from the date in-browser.
// No cron, no rebuild needed — it cycles forever on its own. Baked value = correct at build (no flash);
// the inline script re-picks on load so it stays right between rebuilds.
const ROT_SHELVES = aisles.flatMap(a => a.shelves.map(s => ({ s: s.slug, n: s.name, d: s.desc, e: a.emoji })));
const ROT_AISLES = aisles.map(a => ({ s: a.slug, n: a.name, i: a.intro, e: a.emoji }));
const _E = Date.UTC(2026, 0, 5), _now = Date.now();
const _wk = Math.floor((_now - _E) / 6048e5), _sh = ROT_SHELVES[((_wk % ROT_SHELVES.length) + ROT_SHELVES.length) % ROT_SHELVES.length];
const _md = new Date(), _ai = ROT_AISLES[(_md.getFullYear() * 12 + _md.getMonth()) % ROT_AISLES.length];
const FEATURED_CARDS = `
  <a href="/hunt/${_sh.s}/" id="rotShelf" style="display:block;text-decoration:none;background:var(--surface);border:1px solid rgba(95,227,154,.38);border-radius:12px;padding:14px 18px;margin:24px 0 6px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--green);margin-bottom:3px;">★ This Week's Hunt — start here</div>
    <div id="rsName" style="font-family:var(--fd);font-size:22px;font-weight:700;color:var(--text);letter-spacing:.3px;">${_sh.e} ${_sh.n}</div>
    <div id="rsDesc" style="font-size:15px;color:var(--soft);margin-top:2px;">${_sh.d} <span style="color:var(--green);">See who made the cut &rarr;</span></div>
  </a>
  <a href="/aisles/${_ai.s}/" id="rotAisle" style="display:block;text-decoration:none;background:linear-gradient(135deg,#1b2a44,#15203a);border:1px solid rgba(240,197,96,.4);border-radius:12px;padding:14px 18px;margin:0 0 4px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:3px;">🗓️ This Month's Aisle</div>
    <div id="raName" style="font-family:var(--fd);font-size:22px;font-weight:700;color:var(--text);letter-spacing:.3px;">${_ai.e} ${_ai.n}</div>
    <div id="raDesc" style="font-size:15px;color:var(--soft);margin-top:2px;">${_ai.i} <span style="color:var(--gold);">Explore the aisle &rarr;</span></div>
  </a>
  <script>(function(){var SH=${JSON.stringify(ROT_SHELVES)},AI=${JSON.stringify(ROT_AISLES)},E=Date.UTC(2026,0,5),n=Date.now();var wk=Math.floor((n-E)/6048e5),s=SH[((wk%SH.length)+SH.length)%SH.length];var d=new Date(),a=AI[(d.getFullYear()*12+d.getMonth())%AI.length];var x=document.getElementById('rotShelf');if(x&&s){x.href='/hunt/'+s.s+'/';document.getElementById('rsName').textContent=(s.e?s.e+' ':'')+s.n;document.getElementById('rsDesc').innerHTML=s.d+' <span style="color:#5fe39a;">See who made the cut &rarr;</span>';}var y=document.getElementById('rotAisle');if(y&&a){y.href='/aisles/'+a.s+'/';document.getElementById('raName').textContent=(a.e?a.e+' ':'')+a.n;document.getElementById('raDesc').innerHTML=a.i+' <span style="color:#f0c560;">Explore the aisle &rarr;</span>';}})();</script>`;

function homePage(){
  const octo = `<svg viewBox="0 0 240 200" role="img" aria-label="Octopus mark" xmlns="http://www.w3.org/2000/svg" style="width:140px;height:auto;margin:0 auto;display:block;">
      <g fill="none" stroke="#f0c560" stroke-width="6" stroke-linecap="round" opacity="0.92">
        <path d="M88,108 C62,128 40,134 32,168 C29,180 43,186 53,176"/><path d="M152,108 C178,128 200,134 208,168 C211,180 197,186 187,176"/>
        <path d="M100,118 C82,150 60,170 70,194 C74,206 90,202 96,192"/><path d="M140,118 C158,150 180,170 170,194 C166,206 150,202 144,192"/>
        <path d="M112,122 C104,154 88,176 106,198 C115,207 124,202 124,190"/><path d="M128,122 C136,154 152,176 134,198 C125,207 116,202 116,190"/>
        <path d="M120,124 C118,158 114,184 128,202"/></g>
      <g fill="#caa23f" opacity="0.85"><circle cx="56" cy="150" r="2.6"/><circle cx="44" cy="166" r="2.6"/><circle cx="184" cy="150" r="2.6"/><circle cx="196" cy="166" r="2.6"/></g>
      <path d="M120,26 C84,26 60,56 60,94 C60,122 84,138 120,138 C156,138 180,122 180,94 C180,56 156,26 120,26 Z" fill="#1a2840" stroke="#f0c560" stroke-width="4"/>
      <ellipse cx="100" cy="86" rx="12" ry="16" fill="#0d1421" stroke="#f0c560" stroke-width="3"/><ellipse cx="140" cy="86" rx="12" ry="16" fill="#0d1421" stroke="#f0c560" stroke-width="3"/>
      <circle cx="103" cy="81" r="3" fill="#eef2f8"/><circle cx="143" cy="81" r="3" fill="#eef2f8"/></svg>`;
  const cards = aisles.map(a => {
    const summary = a.shelves.map(s=>s.name).join(' · ');
    return `    <a class="card${a.special?' glass':''}" href="/aisles/${a.slug}/">
      <div class="nm">${a.emoji} ${a.name}</div>
      <div class="ds">${summary}</div>
      <span class="go">Enter →</span>
    </a>`;
  }).join('\n');
  return `${HEAD('5best2buy — America\'s best independent food makers','553 best-of lists covering 2,010 independent American food makers — spices, coffee, cheese, hot sauce, olive oil, cured meats and more. Every spot on every list is earned, and none of them are for sale.','https://www.5best2buy.com/')}
<body>
<div class="wrap">
  <header style="text-align:center;padding:12px 0 8px;">
    <img src="/logo.png" alt="5best2buy" style="width:130px;height:auto;margin:0 auto 2px;display:block;" />
    <h1 style="font-size:clamp(42px,9vw,72px);margin:6px 0 10px;">5best<span style="color:var(--gold);">2buy</span></h1>
    <p style="font-size:19px;color:var(--soft);max-width:46ch;margin:0 auto;">The five best of everything worth eating, from the independent makers who make it.</p>
    <p style="font-family:var(--fm);font-size:12.5px;letter-spacing:1.8px;text-transform:uppercase;color:var(--gold);margin:11px auto 0;">553 shelves &nbsp;&middot;&nbsp; 1,349 recipes &nbsp;&middot;&nbsp; No paywall &nbsp;&middot;&nbsp; No ads on recipes</p>
  </header>
  <div style="background:linear-gradient(135deg,#1a2e1f,#122019);border:1px solid rgba(95,227,154,.5);border-radius:14px;padding:20px 20px 18px;margin:22px 0 10px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--green);margin-bottom:5px;">🍽️ ${(()=>{try{return JSON.parse(fs.readFileSync(path.join(ROOT,'data-recipe-slugs.json'),'utf8')).length+11;}catch(e){return 900;}})()} recipes &middot; every one ad-free</div>
    <a href="/recipes/" style="text-decoration:none;"><div style="font-family:var(--fd);font-size:clamp(26px,5.5vw,36px);font-weight:700;color:var(--text);letter-spacing:.4px;line-height:1.04;">Recipes, With the Sourcing Built In</div></a>
    <div style="font-size:15px;color:var(--soft);margin:7px 0 12px;max-width:60ch;">The real method, ingredients first — and next to every ingredient, exactly where to buy the best version. Not a single ad on a recipe page.</div>
    <a href="/what-can-i-make/" style="display:flex;align-items:center;gap:9px;flex-wrap:wrap;background:rgba(95,176,239,.14);border:1px solid rgba(95,176,239,.5);border-radius:12px;padding:10px 15px;margin:0 0 13px;text-decoration:none;"><span style="font-family:var(--fm);font-size:15px;font-weight:700;color:#bfe0ff;white-space:nowrap;">🧺 What Can I Make?</span><span style="font-family:var(--fm);font-size:15px;color:var(--soft);">The reverse lookup — tell us what's in your fridge, we show you what to cook and what to grab &rarr;</span></a>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <a href="/recipes/" style="font-family:var(--fm);font-size:15px;font-weight:700;color:#0d1a12;background:var(--green);border-radius:20px;padding:6px 14px;text-decoration:none;">Browse all →</a>
      <a href="/sauces/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">Sauces &amp; Dips</a>
      <a href="/sides/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">Sides</a>
      <a href="/drinks/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">Drinks &amp; Mocktails</a>
      <a href="/appetizers/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">Appetizers</a>
      <a href="/kitchen-fundamentals/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">Kitchen Fundamentals</a>
      <a href="/what-to-eat/" style="font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:rgba(95,227,154,.1);border:1px solid rgba(95,227,154,.35);border-radius:20px;padding:6px 13px;text-decoration:none;">🎲 Dinner Roll</a>
    </div>
  </div>
  ${FEATURED_CARDS}
  <p class="intro" style="margin:28px 0;color:var(--text);">Amazon and the big grocery chains sell what's easy to ship at scale. That quietly leaves out almost everything good: the small makers, the regional stuff, the things a chain dropped when it "centralized suppliers," the products that exist only because one person cared more about the thing than the margin. This is a map back to all of it — starting with food. Pick an aisle.</p>
  <div style="font-family:var(--fm);font-size:15px;line-height:1.7;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:16px 18px;margin-bottom:30px;">Every maker here clears four bars: <b style="color:var(--gold);">small or independent</b>, <b style="color:var(--gold);">genuinely hard to get</b> on the big platforms, <b style="color:var(--gold);">actually good</b>, and we're <b style="color:var(--gold);">honest about why</b>. Nobody pays to be on this list.</div>
  <a href="/who-owns/" style="display:block;text-decoration:none;background:linear-gradient(135deg,#1b2a44,#15203a);border:1px solid rgba(240,197,96,.42);border-radius:12px;padding:15px 18px;margin-bottom:30px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:4px;">🐙 The Tool</div>
    <div style="font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.4px;">Who Owns Your Food?</div>
    <div style="font-size:15px;color:var(--soft);margin-top:3px;">Type any grocery brand and see the conglomerate behind it — then find an independent maker instead. <span style="color:var(--gold);">Try it →</span></div>
  </a>
  <a href="/what-to-eat/" style="display:block;text-decoration:none;background:linear-gradient(135deg,#2a2140,#191430);border:1px solid rgba(240,197,96,.42);border-radius:12px;padding:15px 18px;margin:-14px 0 30px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:4px;">🎲 Can't Decide?</div>
    <div style="font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.4px;">The Dinner Roll</div>
    <div style="font-size:15px;color:var(--soft);margin-top:3px;">Roll the dice for a meal idea — just a dinner, or a whole five-course menu. Lock what you like, reroll the rest. Every die lands on a real recipe. Good for ending the "I don't know, what do <i>you</i> want" standoff. <span style="color:var(--gold);">Roll →</span></div>
  </a>
  <a href="/what-can-i-make/" style="display:block;text-decoration:none;background:linear-gradient(135deg,#14231f,#182a34);border:1px solid rgba(95,176,239,.42);border-radius:12px;padding:15px 18px;margin:-14px 0 30px;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--blue);margin-bottom:4px;">🧺 Cook From Your Fridge</div>
    <div style="font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.4px;">What Can I Make?</div>
    <div style="font-size:15px;color:var(--soft);margin-top:3px;">Tell us what you've actually got — broccoli, half an onion, some frozen fish — and we'll show you what you can cook tonight, plus where to buy anything you're short. <span style="color:var(--blue);">Raid the pantry →</span></div>
  </a>
  <div class="eyebrow" style="text-align:left;">The Market</div>
  <div class="cards">
${cards}
  </div>
  ${SPOTLIGHT_CARD}
  <a href="/games/" style="display:block;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin:30px 0 0;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--meta);margin-bottom:3px;">🎮 Games — the fun part</div>
    <div style="font-size:14.5px;color:var(--soft);">Not the point of the site, just the fun of it: guess which conglomerate owns each grocery brand and see how long your streak lasts. A painless way to learn the map. <span style="color:var(--gold);">Enter the arcade →</span></div>
  </a>
  <div style="background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:18px 18px 16px;margin:32px 0 0;text-align:center;">
    <div style="font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.3px;">Become an Insider</div>
    <div style="font-size:15px;color:var(--soft);margin:4px auto 13px;max-width:48ch;">Get each week's new shelves and the featured hunt before anyone else. No spam, and we never sell your email — we are here to support the makers, never to sell you out.</div>
    <form action="https://formspree.io/f/mzdlayra" method="POST" style="display:flex;gap:8px;max-width:400px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
      <input type="email" name="email" required placeholder="you@email.com" aria-label="Email address" style="flex:1;min-width:190px;font-family:var(--fm);font-size:15px;padding:11px 14px;border-radius:8px;border:1px solid var(--line);background:var(--navy);color:var(--text);" />
      <button type="submit" style="font-family:var(--fd);font-weight:700;font-size:15px;letter-spacing:.5px;text-transform:uppercase;color:#10203a;background:var(--gold);border:none;padding:11px 24px;border-radius:8px;cursor:pointer;">Join →</button>
    </form>
  </div>
  <div style="border:1px dashed rgba(240,197,96,.42);border-radius:12px;padding:15px 18px;margin:22px 0 0;text-align:center;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:3px;">Makers</div>
    <div style="font-size:14.5px;color:var(--soft);">Make something good and think it belongs on a shelf here? Features are earned on merit — never bought. <a href="mailto:admin@5best2buy.com?subject=My%20business%20on%205best2buy" style="color:var(--gold);font-weight:600;">admin@5best2buy.com &rarr;</a></div>
  </div>
  ${FOOTER}
</div>
${AWIN}
</body>
</html>`;
}

// ---- shelf facets + maker pool (from shelf-content) — powers the /shelves/ filter + Maker Spotlight ----
const SHELF_FACETS = {};   // slug -> {price:'$'|'$$'|'$$$'|'', fast:bool}
const ALL_MAKERS = [];     // {name,line,why,url,shelf,shelfName,price,ship}
try {
  const cdir = 'C:/tmp/shelf-content';
  for (const f of fs.readdirSync(cdir).filter(fn=>fn.endsWith('.js'))) {
    let arr; try { arr = require(path.join(cdir, f)); } catch(e){ continue; }
    if (!Array.isArray(arr)) continue;
    for (const sh of arr) {
      if (!sh || !Array.isArray(sh.makers)) continue;
      const lens = sh.makers.map(m=>(m.price||'').length).filter(Boolean);
      const minP = lens.length ? Math.min(...lens) : 0;
      SHELF_FACETS[sh.slug] = { price: minP ? '$'.repeat(minP) : '', fast: sh.makers.some(m=>m.ship==='fast') };
      for (const m of sh.makers) if (m && m.name && m.url) ALL_MAKERS.push({ name:m.name, line:m.line||'', why:m.why||'', url:m.url, shelf:sh.slug, shelfName:sh.name, price:m.price||'', ship:m.ship||'' });
    }
  }
} catch(e) {}
fs.writeFileSync(path.join(ROOT,'data-makers.json'), JSON.stringify(ALL_MAKERS));
// deterministic "Maker of the Week": rotates by ISO week over a stable, sorted maker list
const SPOT_POOL = ALL_MAKERS.filter(m=>m.why && m.line).sort((a,b)=>a.name.localeCompare(b.name));
const WK = Math.floor((Date.now() - Date.UTC(2026,0,5)) / 6048e5);
const SPOTLIGHT = SPOT_POOL.length ? SPOT_POOL[((WK % SPOT_POOL.length)+SPOT_POOL.length) % SPOT_POOL.length] : null;
const sesc = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const SPOTLIGHT_CARD = SPOTLIGHT ? `<a href="/hunt/${SPOTLIGHT.shelf}/" style="display:block;text-decoration:none;background:linear-gradient(135deg,#1a2e1f,#122019);border:1px solid rgba(95,227,154,.5);border-radius:12px;padding:16px 18px;margin:30px 0 0;">
    <div style="font-family:var(--fm);font-size:12.5px;letter-spacing:2px;text-transform:uppercase;color:var(--green);margin-bottom:4px;">🔦 Maker of the Week</div>
    <div style="font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.3px;">${sesc(SPOTLIGHT.name)}</div>
    <div style="font-size:15px;color:var(--soft);margin:4px 0 7px;max-width:62ch;">${sesc(SPOTLIGHT.why)}</div>
    <div style="font-family:var(--fm);font-size:15px;color:var(--meta);">Found on the <span style="color:var(--green);">${sesc(SPOTLIGHT.shelfName)}</span> shelf${SPOTLIGHT.price?' &middot; '+SPOTLIGHT.price:''} &middot; <span style="color:var(--green);">See who made the cut &rarr;</span></div>
  </a>` : '';

function allShelvesPage(){
  const all = aisles.flatMap(a=>a.shelves.map(s=>({name:s.name,slug:s.slug,aisle:a.name}))).sort((x,y)=>x.name.localeCompare(y.name));
  const aisleList = [...new Set(all.map(s=>s.aisle))].sort();
  const rows = all.map(s=>{
    const f = SHELF_FACETS[s.slug] || {};
    return `    <a class="row" href="/hunt/${s.slug}/" data-n="${s.name.toLowerCase().replace(/"/g,'')}" data-a="${s.aisle}" data-p="${f.price||''}" data-f="${f.fast?1:0}"><span class="nm">${s.name}</span><span class="ai">${s.aisle}${f.fast?' · <span style="color:var(--green);">ships fast</span>':''}${f.price?' · '+f.price:''}</span></a>`;
  }).join('\n');
  const aisleOpts = aisleList.map(a=>`<option value="${a}">${a}</option>`).join('');
  return `${HEAD('Every Shelf, A–Z — The Full Catalog | 5best2buy.com','The complete A–Z catalog of every small-maker food category on 5best2buy — from anchovies to walnuts, and where to buy each one.','https://www.5best2buy.com/shelves/')}
<body>
<div class="wrap">
  <a class="home" href="/">← 5best2buy</a>
  <div class="eyebrow">The Full Catalog</div>
  <h1 style="font-size:clamp(34px,7vw,56px);margin:6px 0 4px;">Every Shelf, A–Z</h1>
  <p class="intro">All ${all.length} shelves in one place — every curated category of small-maker food. Filter by aisle, price, or fast shipping, or type to find one.</p>
  <style>.rows{margin-top:6px;}.row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;border-bottom:1px solid var(--line);padding:11px 4px;text-decoration:none;}.row:hover{background:var(--surface);}.row .nm{font-family:var(--fd);font-size:19px;font-weight:700;color:var(--text);letter-spacing:.3px;}.row:hover .nm{color:var(--gold);}.row .ai{font-family:var(--fm);font-size:12px;letter-spacing:.8px;text-transform:uppercase;color:var(--meta);white-space:nowrap;}
  .sf{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:16px 0 4px;}
  .sf input,.sf select{font-family:var(--fm);font-size:14px;padding:9px 12px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text);}
  .sf input{flex:1;min-width:170px;}.sf input:focus,.sf select:focus{outline:none;border-color:var(--gold);}
  .sf .chip{font-family:var(--fm);font-size:15px;font-weight:600;color:var(--soft);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:7px 13px;cursor:pointer;user-select:none;}
  .sf .chip.on{background:var(--gold);color:#10203a;border-color:var(--gold);}
  #sfCount{font-family:var(--fm);font-size:15px;color:var(--meta);margin:8px 0 2px;letter-spacing:.4px;}</style>
  <div class="sf">
    <input id="sfQ" type="search" placeholder="Type a shelf… (garlic, olive oil, jerky)" aria-label="Filter shelves" />
    <select id="sfAisle" aria-label="Filter by aisle"><option value="">All aisles</option>${aisleOpts}</select>
    <span class="chip" data-p="$" role="button" tabindex="0">$</span><span class="chip" data-p="$$" role="button" tabindex="0">$$</span><span class="chip" data-p="$$$" role="button" tabindex="0">$$$</span>
    <span class="chip" data-fast="1" role="button" tabindex="0">Ships fast</span>
  </div>
  <div id="sfCount"></div>
  <div class="rows" id="sfRows">
${rows}
  </div>
  <script>(function(){
    var q=document.getElementById('sfQ'),ai=document.getElementById('sfAisle'),cnt=document.getElementById('sfCount');
    var rows=[].slice.call(document.querySelectorAll('#sfRows .row')),chips=[].slice.call(document.querySelectorAll('.sf .chip'));
    var price='',fast=false;
    function apply(){
      var t=q.value.trim().toLowerCase(),a=ai.value,shown=0;
      for(var i=0;i<rows.length;i++){var r=rows[i];
        var ok=(!t||r.getAttribute('data-n').indexOf(t)>=0)&&(!a||r.getAttribute('data-a')===a)&&(!price||r.getAttribute('data-p')===price)&&(!fast||r.getAttribute('data-f')==='1');
        r.style.display=ok?'':'none';if(ok)shown++;}
      cnt.textContent=shown+' of '+rows.length+' shelves';
    }
    q.addEventListener('input',apply);ai.addEventListener('change',apply);
    chips.forEach(function(c){function tog(){if(c.hasAttribute('data-fast')){fast=!fast;c.classList.toggle('on',fast);}else{var p=c.getAttribute('data-p');if(price===p){price='';}else{price=p;}chips.forEach(function(x){if(x.hasAttribute('data-p'))x.classList.toggle('on',x.getAttribute('data-p')===price);});}apply();}
      c.addEventListener('click',tog);c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog();}});});
    apply();
  })();</script>
  ${FOOTER}
</div>
${AWIN}
</body>
</html>`;
}

// write aisle pages
for(const a of aisles){
  const dir = path.join(ROOT,'aisles',a.slug);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'), aislePage(a));
}
// homepage
fs.writeFileSync(path.join(ROOT,'index.html'), homePage());
// all-shelves A–Z catalog
fs.mkdirSync(path.join(ROOT,'shelves'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'shelves','index.html'), allShelvesPage());

// regenerate sitemap: home + aisles + all shelves
const urls = ['https://www.5best2buy.com/'];
// Walk the filesystem instead of maintaining a list by hand. The hand-kept list
// had drifted badly: 87 live pages were never submitted to Google, including all
// 23 cut guides, 43 cuisine hubs, and both certification hubs. Search Console
// found /cuisine/indian/ only because a recipe happened to link to it.
//
// Anything carrying a noindex meta is skipped, so /flag/ stays out on purpose.
(function walkSections(){
  const seen = new Set(urls.map(u => u.replace('https://www.5best2buy.com/','').replace(/\/$/,'')));
  const skipTop = new Set(['hunt','recipes','aisles','states','swap','soda','data','assets','img','images']);
  const stack = [''];
  while (stack.length) {
    const rel = stack.pop();
    const abs = rel ? path.join(ROOT, rel) : ROOT;
    let entries;
    try { entries = fs.readdirSync(abs, { withFileTypes: true }); } catch(e) { continue; }
    for (const e of entries) {
      if (!e.isDirectory() || e.name.startsWith('.') || e.name === 'node_modules') continue;
      const childRel = rel ? rel + '/' + e.name : e.name;
      if (!rel && skipTop.has(e.name)) continue;          // already enumerated above
      const idx = path.join(ROOT, childRel, 'index.html');
      if (fs.existsSync(idx)) {
        if (!seen.has(childRel)) {
          const html = fs.readFileSync(idx, 'utf8');
          if (!/name=["']robots["'][^>]*noindex/i.test(html)) {
            urls.push(`https://www.5best2buy.com/${childRel}/`);
            seen.add(childRel);
          }
        }
      }
      stack.push(childRel);
    }
  }
})();
for(const a of aisles) urls.push(`https://www.5best2buy.com/aisles/${a.slug}/`);
// state pages (generate-states.js writes them; list whatever exists on disk)
urls.push(`https://www.5best2buy.com/states/`);
urls.push(`https://www.5best2buy.com/data/`);
urls.push(`https://www.5best2buy.com/swap/`);
urls.push(`https://www.5best2buy.com/soda/`);
try{ for(const d of fs.readdirSync(path.join(ROOT,'soda'))) if(fs.existsSync(path.join(ROOT,'soda',d,'index.html'))) urls.push(`https://www.5best2buy.com/soda/${d}/`); }catch(e){}
try{ for(const d of fs.readdirSync(path.join(ROOT,'swap'))) if(fs.existsSync(path.join(ROOT,'swap',d,'index.html'))) urls.push(`https://www.5best2buy.com/swap/${d}/`); }catch(e){}
try{ for(const d of fs.readdirSync(path.join(ROOT,'data'))) if(fs.existsSync(path.join(ROOT,'data',d,'index.html'))) urls.push(`https://www.5best2buy.com/data/${d}/`); }catch(e){}
try{ for(const d of fs.readdirSync(path.join(ROOT,'states'))) if(fs.existsSync(path.join(ROOT,'states',d,'index.html'))) urls.push(`https://www.5best2buy.com/states/${d}/`); }catch(e){}
for(const a of aisles) for(const s of a.shelves) urls.push(`https://www.5best2buy.com/hunt/${s.slug}/`);
// recipes (dimensional recipes — hub + each recipe)
const recipes = ['potica','pizza','thanksgiving','tacos','lasagna','mole','pho','wontons','cacio-e-pepe','aglio-e-olio','shakshuka'];
urls.push('https://www.5best2buy.com/recipes/');
for(const r of recipes) urls.push(`https://www.5best2buy.com/recipes/${r}/`);
// data-driven simple recipes (written by generate-recipes.js)
try{ const gen = JSON.parse(fs.readFileSync(path.join(ROOT,'data-recipe-slugs.json'),'utf8')); for(const s of gen) urls.push(`https://www.5best2buy.com/recipes/${s}/`); }catch(e){}
urls.push('https://www.5best2buy.com/traditional-nut-roll/');
const sm = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u,i)=>{
    // Real per-URL lastmod, read from the file we just wrote.
    //
    // Every URL used to carry one frozen date. That meant a page rebuilt today
    // told Google it had not changed since July, and lastmod is precisely what
    // Google uses to decide what is worth recrawling. We were publishing pages
    // and instructing the crawler to ignore them in the same file.
    const rel = u.replace('https://www.5best2buy.com/','').replace(/\/$/,'');
    let mod = DATE;
    try { mod = fs.statSync(path.join(ROOT, rel, 'index.html')).mtime.toISOString().slice(0,10); } catch(e) {}
    const fresh = mod >= new Date(Date.now()-1000*60*60*24*14).toISOString().slice(0,10);
    return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${mod}</lastmod>\n    <changefreq>${i===0?'daily':(fresh?'weekly':'monthly')}</changefreq>\n    <priority>${i===0?'1.0':(u.includes('/aisles/')?'0.8':'0.7')}</priority>\n  </url>`;
  }).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT,'sitemap.xml'), sm);

// ---- UNIFIED SEARCH INDEX (recipes + shelves + hubs + tools) — powers /search/?q= ----
// entry: {t:title, u:url, k:kind, x:extra-keywords}. Kept small (title+cuisine/aisle only).
const SI = [];
for (const a of aisles) for (const s of a.shelves) SI.push({ t: s.name, u: `/hunt/${s.slug}/`, k: 'Shelf', x: a.name });
try {
  const rm = JSON.parse(fs.readFileSync(path.join(ROOT, 'data-methods.json'), 'utf8'));
  for (const r of rm) SI.push({ t: r.title, u: `/recipes/${r.slug}/`, k: r.category === 'Mocktail' ? 'Mocktail' : 'Recipe', x: `${r.cuisine||''} ${r.category||''}`.trim() });
} catch (e) {}
const HUBS_SI = [
  ['Chicken','/chicken/','Hub'],['Beef','/beef/','Hub'],['Pork','/pork/','Hub'],['Fish & Seafood','/seafood/','Hub'],['Vegetarian','/vegetarian/','Hub'],['Lamb, Duck & Game','/exotic/','Hub'],
  ['Breakfast','/breakfast/','Hub'],['Brunch','/brunch/','Hub'],['Lunch','/lunch/','Hub'],['Dinner','/dinner/','Hub'],['Late Night','/late-night/','Hub'],
  ['Sauces & Dips','/sauces/','Hub'],['Sides','/sides/','Hub'],['Appetizers','/appetizers/','Hub'],['Drinks & Sodas','/drinks/','Hub'],['The Mocktail Bible','/mocktails/','Hub'],
  ['Independent Halal','/halal/','Hub'],['Independent Kosher','/kosher/','Hub'],
  ['All Recipes','/recipes/','Tool'],['All Shelves','/shelves/','Tool'],['Browse by cuisine','/cuisine/','Tool'],
  ['What Can I Make?','/what-can-i-make/','Tool'],['The Dinner Roll','/what-to-eat/','Tool'],['Who Owns Your Food?','/who-owns/','Tool'],
  ['Kitchen Fundamentals','/kitchen-fundamentals/','Tool'],['Games','/games/','Tool'],['Gift Guide','/gifts/','Tool'],['Still Independent','/independent/','Tool'],['The Glass Case','/aisles/glass-case/','Tool'],
];
for (const a of aisles) SI.push({ t: a.name, u: `/aisles/${a.slug}/`, k: 'Aisle', x: 'aisle' });
for (const [t, u, k] of HUBS_SI) SI.push({ t, u, k, x: '' });

// ---- sections the index never covered ----
// The index held shelves, recipes, aisles and hubs only: 2,059 of 2,551 pages.
// Every cut, swap, soda, state, cuisine hub and dataset page — 466 of them —
// was unreachable from site search. Searching "ribeye" found the shelf and
// never the butcher page written about it.
for (const [dir, kind, label] of [['cuts', 'Cut', 'butcher cut'], ['swap', 'Swap', 'ingredient swap'],
                                  ['soda', 'Soda', 'soda flavor'], ['states', 'State', 'state guide'],
                                  ['cuisine', 'Cuisine', 'cuisine'], ['data', 'Dataset', 'open dataset']]) {
  let added = 0;
  try {
    for (const slug of fs.readdirSync(path.join(ROOT, dir))) {
      const p = path.join(ROOT, dir, slug, 'index.html');
      if (!fs.existsSync(p)) continue;
      const h = fs.readFileSync(p, 'utf8');
      if (/<meta[^>]+noindex/i.test(h)) continue;
      const m = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const t = (m ? m[1] : slug).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&')
        .replace(/&#39;|&rsquo;/g, '’').replace(/\s+/g, ' ').trim();
      if (!t) continue;
      SI.push({ t, u: `/${dir}/${slug}/`, k: kind, x: label });
      added++;
    }
  } catch (e) {}
  if (added) console.log(`  search: +${added} ${kind} page(s)`);
}

// ---- alias field: the words people actually type ----
// Matching on title + cuisine/category alone meant "hamburger" found only
// hamburger-steak, a gravy dish with no bun, while the cheeseburger, smash
// burger, juicy lucy and patty melt were invisible. Measured against the live
// index, "barbecue", "catsup", "green onion", "prawn", "aubergine", "courgette",
// "hoagie" and "sub sandwich" all returned zero.
//
// Aliases go in `a`, which the search reads and never renders. They must not go
// in `x`, which is displayed under every hit and would read as keyword spam.
try {
  const GROUPS = require('C:/tmp/search-aliases.js');
  let tagged = 0, added = 0;
  for (const it of SI) {
    const hay = `${it.t} ${it.x || ''}`.toLowerCase();
    // Whole-word matching. Substring matching tagged "Egg Substitutes" and
    // "Spam Musubi" as hoagies, because "sub" sits inside both — putting the
    // wrong dish in front of someone who typed the right word, which is worse
    // than returning nothing.
    const has = term => new RegExp(`\\b${term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(hay);
    const extra = new Set();
    for (const g of GROUPS) {
      if (!g.some(has)) continue;
      for (const term of g) if (!has(term)) extra.add(term);
    }
    if (extra.size) { it.a = [...extra].join(' '); tagged++; added += extra.size; }
  }
  console.log(`  search aliases: ${tagged} of ${SI.length} entries tagged, ${added} terms added`);
} catch (e) {
  console.log('  search aliases: SKIPPED — ' + e.message.slice(0, 90));
}

fs.writeFileSync(path.join(ROOT, 'search-index.json'), JSON.stringify(SI));

console.log('aisle pages:', aisles.length, '| shelves:', aisles.reduce((n,a)=>n+a.shelves.length,0), '| sitemap urls:', urls.length, '| search index:', SI.length);
