ServerEvents.recipes((event) => {
  // Make dirt renewing automateable.
  event.shapeless(Item.of("minecraft:coarse_dirt", 4), [
    "2x minecraft:dirt",
    "2x minecraft:gravel",
  ]);
  event.recipes.createMilling(["minecraft:dirt"], "minecraft:coarse_dirt");
});
