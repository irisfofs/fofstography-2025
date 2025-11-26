ServerEvents.tags("item", (event) => {
  event.add("forge:eggs/bird", "untitledduckmod:goose_egg");
  event.add("forge:eggs/bird", "untitledduckmod:duck_egg");
  event.add("c:bread_slices", "createfood:toast_slice");
});

// ServerEvents.recipes((event) => {
//   // Replace this cooking recipe with one that uses the tag.
//   event.remove({ id: "culturaldelights:cooking/raw_pasta" });
//   event
//     .custom({
//       type: "farmersdelight:cooking",
//       ingredients: [
//         { item: "minecraft:wheat" },
//         { item: "minecraft:wheat" },
//         { tag: "forge:eggs/bird" },
//       ],
//       result: { item: "farmersdelight:raw_pasta", count: 4 },
//       experience: 0.2,
//       cookingtime: 200,
//     })
//     .id("culturaldelights:cooking/raw_pasta");
// });
