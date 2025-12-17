PlayerEvents.loggedIn((event) => {
  // event.player.tell("Hello!");
  const title = `<yellow>[2025-12-16]</yellow> <bold><gold>1st Photo Contest</gold></bold>`;
  event.player.tell(
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
});

/*
## 1st Photo Contest
Theme: "Welcome to my house !!"
Submission deadline: 2025-12-31 23:59

- Submit one (1) photo via the hopper at Iris's base (no peeking).
- All entrants will receive 1 Interplanar Projector, which you can use to import a meme of your choice as a photo. (Or a picture, whatever.)
- Other prizes (and judging details) to be announced later!

(an Instant Camera is a lot easier to get started with than the normal one)
*/
