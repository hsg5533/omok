(game.winnerSave = null),
  (game.winnerMark = null),
  (game.winnerId = -1),
  (game.checkWin = () => {
    let n = game.stone.list,
      e,
      r,
      i,
      t,
      f,
      w;
    if (game.stone.id === game.winnerId) return game.winnerSave;
    for (r = 0, game.winnerId = game.stone.id; r < 15; r++)
      for (i = 0; i < 15; i++)
        if (n[r][i])
          for (f = 0; f < 2; f++)
            for (w = -1; w < 2; w++) {
              for (t = 0, e = n[r][i]; t < 5; t++) {
                let a = r + t * f,
                  o = i + t * w ** f;
                if (!n[a] || e !== n[a][o]) {
                  e = EMPTY;
                  break;
                }
              }
              if (e)
                return (
                  (game.winnerMark = {
                    start: [r, i],
                    end: [r + 4 * f, i + 4 * w ** f],
                  }),
                  (game.winnerSave = e)
                );
            }
    return (game.winnerSave = EMPTY);
  });
