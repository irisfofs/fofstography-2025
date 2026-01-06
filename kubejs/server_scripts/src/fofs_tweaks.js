// Custom recipes and tags that don't fit better anywhere else.

ServerEvents.recipes((event) => {
  // Wash magma cream to make it less spicy.
  event.recipes.create
    .splashing("minecraft:slime_ball", "minecraft:magma_cream")
    .id("fofs:unspicy_magma_cream");

  // Remove recipe for Interplanar Projector.
  event.remove({ id: "exposure:interplanar_projector" });

  // Manually add Vanilla Backport and Copper Age Backport compat.
  event.shaped(Item.of("minecraft:pale_oak_shelf", 6), ["AAA", "   ", "AAA"], {
    A: "minecraft:stripped_pale_oak_log",
  });
});

// Custom tag for Jade equipment requirement.
ServerEvents.tags("item", (event) => {
  event.add("fofs:enable_jade", "create:goggles");
  event.add("fofs:enable_jade", "minecraft:spyglass");
});
