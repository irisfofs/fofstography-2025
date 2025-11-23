// Listen for the "recipes" server event.
ServerEvents.recipes((event) => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.

  // Brass machine casing.
  event.shaped(
    Item.of("refinedstorage:machine_casing", 1),
    ["AAA", "ABA", "AAA"],
    {
      A: "refinedstorage:quartz_enriched_iron",
      B: "create:brass_casing",
    }
  );
  event.remove({
    mod: "refinedstorage",
    output: "refinedstorage:machine_casing",
  });

  // Brass cable.
  event.shaped(Item.of("refinedstorage:cable", 12), ["ABA", "CDC", "ABA"], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "create:brass_ingot",
    C: "#forge:glass",
    D: "createaddition:copper_wire",
  });
  event.remove({
    mod: "refinedstorage",
    output: "refinedstorage:cable",
  });

  // Brass wrench.
  event.shaped(Item.of("refinedstorage:wrench", 1), ["ABA", "ACA", " C "], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "refinedstorage:basic_processor",
    C: "create:brass_ingot",
  });
  event.remove({
    mod: "refinedstorage",
    output: "refinedstorage:wrench",
  });

  // Use electron tubes in the "screenlike" items.
  const screenlikeBlocks = [
    "grid",
    "crafter_manager",
    "crafting_monitor",
    "storage_monitor",
  ];
  for (const block of screenlikeBlocks) {
    event.replaceInput(
      { output: `refinedstorage:${block}` },
      "refinedstorage:quartz_enriched_iron",
      "create:electron_tube"
    );
  }

  // Use mechanical crafters in the crafting upgrade.
  event.replaceInput(
    { output: "refinedstorage:crafting_upgrade" },
    "minecraft:crafting_table",
    "create:mechanical_crafter"
  );

  event.shapeless(Item.of("refinedstorage:quartz_enriched_iron", 6), [
    "3x minecraft:iron_ingot",
    "minecraft:quartz",
    "3x create:andesite_alloy",
  ]);

  event.shaped(Item.of("refinedstorage:processor_binding", 12), ["ABA"], {
    A: "create:cogwheel",
    B: "create:electron_tube",
  });

  // Force people to use sequenced assembly to fabricate processors.
  function sequencedRawProcessor(tier, ingredient) {
    event.recipes
      .createSequencedAssembly(
        [`refinedstorage:raw_${tier}_processor`],
        "refinedstorage:processor_binding",
        [
          event.recipes.createDeploying("kubejs:incomplete_raw_processor", [
            "kubejs:incomplete_raw_processor",
            ingredient,
          ]),
          event.recipes.createDeploying("kubejs:incomplete_raw_processor", [
            "kubejs:incomplete_raw_processor",
            "refinedstorage:silicon",
          ]),
          event.recipes.createDeploying("kubejs:incomplete_raw_processor", [
            "kubejs:incomplete_raw_processor",
            "minecraft:redstone",
          ]),
          event.recipes.createPressing(
            "kubejs:incomplete_raw_processor",
            "kubejs:incomplete_raw_processor"
          ),
        ]
      )
      .transitionalItem("kubejs:incomplete_raw_processor")
      .loops(1);
    event.remove({
      mod: "refinedstorage",
      output: `refinedstorage:raw_${tier}_processor`,
    });
  }

  sequencedRawProcessor("basic", "minecraft:iron_ingot");
  sequencedRawProcessor("improved", "minecraft:gold_ingot");
  sequencedRawProcessor("advanced", "minecraft:diamond");

  // Replace glass in disks and storage housing with brass sheets.
  const glassDisks = [
    "storage_housing",
    "1k_storage_disk",
    "4k_storage_disk",
    "16k_storage_disk",
    "64k_storage_disk",
    "64k_fluid_storage_disk",
    "256k_fluid_storage_disk",
    "1024k_fluid_storage_disk",
    "4096k_fluid_storage_disk",
  ];
  for (const item of glassDisks) {
    event.replaceInput(
      { mod: "refinedstorage", output: `refinedstorage:${item}` },
      "#forge:glass",
      "create:brass_sheet"
    );
  }

  // Replace comparators with electron tubes.
  event.replaceInput(
    [
      { input: "minecraft:comparator", mod: "functionalstorage" },
      { input: "minecraft:comparator", mod: "storagedrawers" },
    ],
    "minecraft:comparator",
    "create:electron_tube"
  );

  // Replace buckets with fluid tanks.
  event.replaceInput(
    [
      { input: "minecraft:bucket", mod: "functionalstorage" },
      { input: "minecraft:bucket", mod: "refinedstorage" },
    ],
    "minecraft:bucket",
    "create:fluid_tank"
  );
});
