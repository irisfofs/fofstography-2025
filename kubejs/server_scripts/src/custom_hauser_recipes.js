ServerEvents.recipes((event) => {
  // Wash magma cream to make it less spicy.
  event.recipes.create
    .splashing("minecraft:slime_ball", "minecraft:magma_cream")
    .id("hauser:unspicy_magma_cream");
});

// Custom tag for Jade equipment requirement.
ServerEvents.tags("item", (event) => {
  event.add("fofs:enable_jade", "create:goggles");
  event.add("fofs:enable_jade", "minecraft:spyglass");
});
