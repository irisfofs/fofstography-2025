// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info("Loaded Hauser startup script.");

StartupEvents.registry("item", (e) => {
  e.create("incomplete_raw_processor", "create:sequenced_assembly");
  e.create("incomplete_elder_guardian_slab", "create:sequenced_assembly");
  e.create("soulless_elder_guardian_slab");
});

// StartupEvents.registry("block", (e) => {
//   e.create("trophy")
//     .displayName("Trophy")
//     .soundType("metal")
//     .model("kubejs:block/trophy")
//     .opaque(false)
//     .fullBlock(false)
//     .notSolid()
//     .requiresTool(false)
//     .box(4, 0, 4, 12, 12, 12);
// });
