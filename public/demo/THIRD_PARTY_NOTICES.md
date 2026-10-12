# Third-party notices — playable demos

The playable web demos bundle third-party open-source games originally
vendored inside FlowWorks (`public/games/`). They are shown with their own
licenses and author credits intact.

- 2048 — MIT, Gabriele Cirulli (see `public/demo/gamezone/2048/LICENSE.txt`,
  Riddle: original by Gabriele Cirulli, https://github.com/gabrielecirulli/2048)
- Flappy (flappy bird clone) — check `public/demo/gamezone/flappy/bower.json` for author/license
- Hextris — GPLv3, Hextris team (see in-game header + `public/demo/gamezone/hextris/`)
- Pac-Man (HTML5 Pacman) — check in-game writeup link + `public/demo/gamezone/pacman/`

Side A demo (`public/demo/side-a/`) is a static web export of the owner's own
project, built with `expo export --platform web` into this workspace only.
The original project was not modified.

Chain Zero demo imports the real `SumpleteEngine` at build time by reference
only. No Chain Zero source is copied into this repo.
