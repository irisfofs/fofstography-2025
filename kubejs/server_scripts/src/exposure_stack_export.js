ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("export_photo_stack") // The name of the command
      .requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
      .executes((c) => exportHeldPhotoStack(c.source.player))
  );

  const exportHeldPhotoStack = (player) => {
    if (player.mainHandItem?.id !== "exposure:stacked_photographs") return 0;

    for (const p of player.mainHandItem.nbt.Photographs) {
      Utils.server.runCommandSilent(`exposure export id ${p.tag.Id} x2`);
    }

    return 1;
  };
});
