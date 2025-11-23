// ServerEvents.recipes((event) => {
//   const wipBurgerId = "create_central_kitchen:incomplete_hamburger";
//   event.recipes
//     .createSequencedAssembly(
//       ["delightful:deluxe_cheeseburger"],
//       "#forge:bread",
//       [
//         event.recipes.createFilling(wipBurgerId, [
//           wipBurgerId,
//           Fluid.of("create_central_kitchen:tomato_sauce", 250),
//         ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "#hauser:cooked_patty",
//         ]),
//         event.custom({
//           type: "create:filling",
//           ingredients: [
//             { item: wipBurgerId },
//             { fluidTag: "forge:milk", amount: 250 },
//           ],
//           results: [{ item: wipBurgerId }],
//         }),
//         // event.recipes.createFilling(wipBurgerId, [
//         //   wipBurgerId,
//         //   ["#forge:milk", wipBurgerId],
//         // ]),
//         // event.recipes.createDeploying(wipBurgerId, [
//         //   wipBurgerId,
//         //   "#forge:milk",
//         // ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "#hauser:cooked_patty",
//         ]),
//         event.custom({
//           type: "create:filling",
//           ingredients: [
//             { item: wipBurgerId },
//             { fluidTag: "forge:milk", amount: 250 },
//           ],
//           results: [{ item: wipBurgerId }],
//         }),
//         // event.recipes.createDeploying(wipBurgerId, [
//         //   wipBurgerId,
//         //   "#forge:milk",
//         // ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "#hauser:cooked_sliced_pork",
//         ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "farmersdelight:onion",
//         ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "farmersdelight:tomato",
//         ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "#forge:salad_ingredients",
//         ]),
//         event.recipes.createDeploying(wipBurgerId, [
//           wipBurgerId,
//           "#forge:bread",
//         ]),
//       ]
//     )
//     .transitionalItem(wipBurgerId)
//     .loops(1)
//     .id("hauser:vegan_double_cheeseburger");

//   event
//     .shaped(
//       Item.of("minecraft:pufferfish", 1).withNBT({
//         display: {
//           Name: '{"italic":false,"extra":[{"translate":"item.minecraft.pufferfish"},{"text":"\\""}],"text":"\\""}',
//         },
//       }),
//       [" B ", "BFB", " B "],
//       {
//         B: "minecraft:bamboo",
//         F: "#forge:raw_fishes",
//       }
//     )
//     .id("hauser:pufferfish_from_raw_fish");
//   event.recipes.create
//     .haunting("minecraft:spider_eye", "minecraft:slime_ball")
//     .id("hauser:renewable_spider_eye");

//   const wipGuardianSlab = "kubejs:incomplete_elder_guardian_slab";
//   const soullessResult = "kubejs:soulless_elder_guardian_slab";
//   event.recipes.create
//     .sequenced_assembly([soullessResult], "minecraft:pufferfish", [
//       event.recipes.createDeploying(wipGuardianSlab, [
//         wipGuardianSlab,
//         "minecraft:prismarine_shard",
//       ]),
//       event.recipes.createDeploying(wipGuardianSlab, [
//         wipGuardianSlab,
//         "minecraft:prismarine_crystals",
//       ]),
//       event.recipes.createFilling(wipGuardianSlab, [
//         wipGuardianSlab,
//         Fluid.of(
//           "create:potion",
//           250,
//           '{Bottle: "REGULAR", Potion: "minecraft:slowness"}'
//         ),
//       ]),
//     ])
//     .transitionalItem(wipGuardianSlab)
//     .loops(2);

//   event.recipes.create
//     .haunting("oceansdelight:elder_guardian_slab", soullessResult)
//     .id("hauser:ensoul_dubious_fish");
// });
