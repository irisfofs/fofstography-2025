// // Listen for the "recipes" server event.
// ServerEvents.recipes((event) => {
//   // You can replace `event` with any name you like, as
//   // long as you change it inside the callback too!
//   // This part, inside the curly braces, is the callback.
//   // You can modify as many recipes as you like in here,
//   // without needing to use ServerEvents.recipes() again.

//   event.remove({
//     mod: "createmetalwork",
//     // input: ["createmetalwork:crushed_netherite_scrap"],
//     output: Fluid.of("createmetalwork:molten_netherite"),
//   });
//   event.recipes
//     .createMixing(Fluid.of("createmetalwork:molten_netherite", 111), [
//       "minecraft:netherite_ingot",
//     ])
//     .superheated();
//   event.recipes
//     .createMixing(Fluid.of("createmetalwork:molten_netherite", 222), [
//       "4x create:crushed_raw_gold",
//       "4x createmetalwork:crushed_netherite_scrap",
//     ])
//     .superheated();
// });
