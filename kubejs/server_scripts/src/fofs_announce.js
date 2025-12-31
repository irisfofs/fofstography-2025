PlayerEvents.loggedIn((event) => {
  // event.player.tell("Hello!");
  announceToPlayer(event.player);
});

function formatTitle(date, title) {
  return `<yellow>[${date}]</yellow> <bold><gold>${title}</gold></bold>`;
}

function announceToPlayer(player) {
  const title = formatTitle("2025-12-16", "1st Photo Contest");
  player.tell(
    global.parseTextFormat(`${title}
<bold>Theme:</bold> "Welcome to my house !!"
<bold>Due:</bold> 2025-12-31 (end of day)

<bold><gold>To Enter</gold></bold>
- Submit one (1) photo via the hopper at Iris's base (no peeking).
  - For bonus points*, put it in a Present first. (*bonus points are not real)
 
<bold><gold>Prizes</gold></bold>
- All entrants will receive 1 Interplanar Projector, which you can use to import a meme of your choice as a photo. (Or a picture, whatever.)
- Other prizes (and judging details) to be announced later!

<bold>Tip:</bold> An Instant Camera is a lot easier to get started with, but takes lower-res pictures.

${title} (open chat and scroll up to read)
`)
  );

  player.tell(
    global.parseTextFormat(`${formatTitle(
      "2025-12-31",
      "Contest #1 Deadline Extension"
    )}
Due to busy schedules on New Year's Eve, the new deadline is <bold>2026-01-01</bold>.`)
  );
}

/*
## 1st Photo Contest
Theme: "Welcome to my house !!"
Submission deadline: 2025-12-31 23:59

- Submit one (1) photo via the hopper at Iris's base (no peeking).
- All entrants will receive 1 Interplanar Projector, which you can use to import a meme of your choice as a photo. (Or a picture, whatever.)
- Other prizes (and judging details) to be announced later!

(an Instant Camera is a lot easier to get started with than the normal one)
*/

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("fofs_test_announce") // The name of the command
      .requires((source) => source.hasPermission(2)) // Check if the player has operator privileges
      .executes((ctx) => {
        announceToPlayer(ctx.source.player);
        return 1;
      })
  );
});
