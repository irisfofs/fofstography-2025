// Custom recipes and tags that don't fit better anywhere else.

ServerEvents.recipes((event) => {
  // Wash magma cream to make it less spicy.
  event.recipes.create
    .splashing("minecraft:slime_ball", "minecraft:magma_cream")
    .id("fofs:unspicy_magma_cream");

  // Remove recipe for Interplanar Projector.
  event.remove({ id: "exposure:interplanar_projector" });
});

// Custom tag for Jade equipment requirement.
ServerEvents.tags("item", (event) => {
  event.add("fofs:enable_jade", "create:goggles");
  event.add("fofs:enable_jade", "minecraft:spyglass");
});
