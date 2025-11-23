// ServerEvents.recipes((event) => {
//   const recipesToDuplicate = [];
//   event.forEachRecipe(
//     { type: "farmersdelight:cooking", input: "#forge:milk" },
//     (recipe) => {
//       recipesToDuplicate.push(recipe);
//     }
//   );

//   for (const recipe of recipesToDuplicate) {
//     // Deep copy the original JSON just in case.
//     let originalJson = JSON.parse(recipe.json.toString());
//     // Replace milk with milk bottle. The original recipe resolves to soymilk.
//     for (const i = 0; i < originalJson["ingredients"].length; i++) {
//       if (originalJson["ingredients"][i]["tag"] === "forge:milk") {
//         originalJson["ingredients"][i] = {
//           item: "farmersdelight:milk_bottle",
//         };
//       }
//     }
//     event.custom(originalJson);
//   }
// });
