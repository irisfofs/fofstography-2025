PlayerEvents.loggedIn((event) => {
  // event.player.tell("Hello!");
  announceToPlayer(event.player);
});

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

function formatTitle(date, title) {
  return `<yellow>[${date}]</yellow> <bold><gold>${title}</gold></bold>`;
}

function announceToPlayer(player) {
  let lastTitle = null;
  for (const message of MESSAGES.filter((m) => m.show)) {
    let { title, date, body } = message;
    let formattedTitle = formatTitle(date, title);
    player.tell(global.parseTextFormat(`${formattedTitle}\n${body}`));
    lastTitle = formattedTitle;
  }

  // Repeat the last message title at the end.
  if (lastTitle) {
    player.tell(
      global.parseTextFormat(`${lastTitle} (open chat and scroll up to read)`)
    );
  }
}

const MESSAGES = [
  {
    show: false,
    date: "2025-12-16",
    title: "1st Photo Contest",
    body: `<bold>Theme:</bold> "Welcome to my house !!"
<bold>Due:</bold> 2025-12-31 (end of day)

<bold><gold>To Enter</gold></bold>
- Submit one (1) photo via the hopper at Iris's base (no peeking).
  - For bonus points*, put it in a Present first. (*bonus points are not real)
 
<bold><gold>Prizes</gold></bold>
- All entrants will receive 1 Interplanar Projector, which you can use to import a meme of your choice as a photo. (Or a picture, whatever.)
- Other prizes (and judging details) to be announced later!

<bold>Tip:</bold> An Instant Camera is a lot easier to get started with, but takes lower-res pictures.`,
  },
  {
    show: false,
    date: "2025-12-31",
    title: "Contest #1 Deadline Extension",
    body: `Due to busy schedules on New Year's Eve, the new deadline is <bold>2026-01-01</bold>.`,
  },
  {
    show: false,
    date: "2026-01-02",
    title: "Contest #1 Submissions Closed!",
    body: `We had eight (8) people enter! Thanks for your submissions, everyone. Judging in progress and results will be returned soon.`,
  },
  {
    show: true,
    date: "2026-01-05",
    title: "Contest #1 Results",
    body: `<bold>Theme:</bold> "Welcome to my house !!"
<bold>Winner:</bold> <italic>huh? oh... u can use the bed, im good... zzz</italic>, by irisfofs
<bold>Runners-up:</bold>
  - <italic>Sanctuary</italic>, by Jangoose
  - <italic>"Welcome to my Horse"</italic>, by SuckyBlowfish

Congrats, and thanks everyone for entering! Prizes and trophies will be delivered today.`,
  },
];
