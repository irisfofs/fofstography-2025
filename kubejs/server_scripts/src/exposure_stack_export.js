ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("export_photo_stack") // The name of the command
      .requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
      .executes((c) => exportHeldPhotoStack(c.source.player))
  );

  const exportHeldPhotoStack = (player) => {
    if (player.mainHandItem?.id !== "exposure:stacked_photographs") return 0;

    for (let p of player.mainHandItem.components.get(
      "exposure:stacked_photographs"
    )) {
      let identifier = p.item.getFrame(p.getItemStack()).identifier().id();
      let command = makePhotoCommand(identifier);
      if (command) player.runCommandSilent(command);
    }

    return 1;
  };
});

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("export_photos_in_inventory") // The name of the command
      .requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
      .executes((c) => exportAllPhotosInInventory(c.source.player))
  );

  const exportAllPhotosInInventory = (player) => {
    const items = player.getInventory().items;
    for (let item of items) {
      if (item.id !== "exposure:photograph") continue;

      let command = makePhotoCommand(getIdentifierFromKubeItemStack(item));
      if (command) player.runCommandSilent(command);
    }
    return 1;
  };
});

function getIdentifierFromKubeItemStack(item) {
  return item.components.get("exposure:photograph_frame").identifier().id();
}

function makePhotoCommand(identifier) {
  if (!identifier) return null;
  return `exposure export id ${identifier} x2`;
}
