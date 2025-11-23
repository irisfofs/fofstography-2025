ServerEvents.recipes((event) => {
  // Wash magma cream to make it less spicy.
  event.recipes.create
    .splashing("minecraft:slime_ball", "minecraft:magma_cream")
    .id("hauser:unspicy_magma_cream");
});

// ServerEvents.tags("item", (event) => {
//   event.add("forge:fruits", "deeperdarker:bloom_berries");
//   event.add("forge:berries", "deeperdarker:bloom_berries");
// });
