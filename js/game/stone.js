(game.stone = {}),
  (game.stone.list = []),
  (game.stone.id = 0),
  (game.stone.reset = () => {
    game.stone.id++;
    for (let s = 0; s < 15; s++) game.stone.list[s] = Array(15).fill(EMPTY);
  }),
  game.stone.reset(),
  (game.stone.set = (s, t, e) => {
    !game.checkWin() &&
      game.getCanvas().elem &&
      ((game.stone.list[t][e] = s), game.stone.update(), game.stone.id++);
  }),
  (game.stone.isStone = (s, t, e) => (e = e || game.stone.list)[s] && e[s][t]),
  (game.stone.is = (s, t, e, n) =>
    (n = n || game.stone.list)[t] && n[t][e] === s),
  (game.stone.isValid = (s, t, e) =>
    (e = e || game.stone.list)[s] && t in e[s]);
