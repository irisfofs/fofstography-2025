ServerEvents.tags("item", (event) => {
  // Only allow powdering peeled boiled eggs, since otherwise you can't peel
  // them with a cutting board.
  event.add("c:powderable_eggs", "createfood:boiled_egg_peeled");
  event.remove("c:powderable_eggs", "createfood:boiled_egg");
});

ServerEvents.recipes((event) => {
  // Allow only actual eggs.
  event.replaceInput(
    { output: "farmersdelight:fried_egg" },
    "minecraft:egg",
    "#c:eggs/bird"
  );

  // Allow using all eggs and egg substitutes.
  event.replaceInput(
    { output: "neapolitan:vanilla_pudding" },
    "minecraft:egg",
    "#c:eggs"
  );
  event.replaceInput(
    { output: "createfood:raw_ube_cake_base" },
    "minecraft:egg",
    "#c:eggs"
  );

  // Manually recreate Create and Farmer's Delight cooking recipes, since
  // replaceInput doesn't work on them.
  event.remove({
    id: "createfood:create/mixing/boiled_egg_from_mixing_heated_water",
  });
  event.recipes.create
    .mixing("createfood:boiled_egg", [
      { tag: "c:eggs/bird" },
      Fluid.of("minecraft:water", 125),
      { tag: "c:salt" },
    ])
    .heated()
    .id("fofs:createfood/create/mixing/boiled_egg_from_mixing_heated_water");

  event.remove({
    id: "createfood:farmersdelight/cooking/boiled_egg_from_cooking",
  });
  event
    .custom({
      type: "farmersdelight:cooking",
      container: { count: 1, id: "minecraft:stick" },
      experience: 0.2,
      cookingtime: 200,
      ingredients: [
        { item: "minecraft:water_bucket" },
        { tag: "c:eggs/bird" },
        { tag: "c:salt" },
      ],
      recipe_book_tab: "misc",
      result: { count: 1, id: "createfood:boiled_egg" },
      "neoforge:conditions": [
        {
          type: "almostunified:conditional",
          conditions_met: true,
          original_conditions: [
            { type: "createfood:enabled", id: "boiled_egg" },
          ],
        },
      ],
    })
    .id("fofs:createfood/farmersdelight/cooking/boiled_egg_from_cooking");
});
