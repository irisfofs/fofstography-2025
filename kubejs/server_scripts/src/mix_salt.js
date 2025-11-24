ServerEvents.recipes((event) => {
  event.remove({ id: "createfood:farmersdelight/cooking/salt_from_cooking" });
  // Can't remove Slice and  Dice converted recipes because they're generated
  // afterwards.
  // event.remove({ id: "jei:/sliceanddice/cooking/vegandlight/cooking/salt_0" });
});
