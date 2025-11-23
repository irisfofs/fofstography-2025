// // priority: 10

// ServerEvents.recipes((event) => {
//   event.remove({
//     mod: "create_more_automation",
//     output: "minecraft:magma_cream",
//   });
//   event.remove({
//     mod: "create_more_automation",
//     output: "minecraft:diamond",
//   });

//   event.remove({ output: "apotheosis:scrap_tome" });
//   // Make the tome of scrapping really expensive.
//   event.shaped(Item.of("apotheosis:scrap_tome", 7), ["ACA", "ABA", "AAA"], {
//     A: "minecraft:book",
//     B: "minecraft:anvil",
//     C: "minecraft:nether_star",
//   });
//   // I guess this works.
//   event
//     .shapeless("apotheosis:scrap_tome", [
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//       "minecraft:bedrock",
//     ])
//     .id("apotheosis:scrap_tome");
//   event.remove({ id: "apotheosis:scrap_tome" });
// });
