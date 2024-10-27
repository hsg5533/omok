game.stone.update = () => {
  let n = game.stone.list,
    t = game.getCanvas(),
    e = t.ctx,
    r = t.width / 35,
    i,
    a,
    l;
  function o() {
    return e.beginPath(), e.arc(a, l, r, 0, 2 * Math.PI), e;
  }
  function d(n) {
    return t.padding + t.blockWidth * n;
  }
  function k(n) {
    return t.padding + t.blockWidth * n;
  }
  game.drawBoard();
  for (let s = 0; s < 15; s++)
    for (let c = 0; c < 15; c++)
      n[s][c] &&
        ((i = n[s][c]),
        (a = d(s)),
        (l = k(c)),
        (e.fillStyle = i == WHITE ? "white" : "black"),
        o().fill(),
        (e.lineWidth = 5),
        (e.strokeStyle = "#808080"),
        o().stroke());
  game.winnerMark &&
    ((a = d(game.winnerMark.start[X])),
    (l = k(game.winnerMark.start[Y])),
    e.beginPath(),
    e.moveTo(a, l),
    (a = d(game.winnerMark.end[X])),
    (l = k(game.winnerMark.end[Y])),
    e.lineTo(a, l),
    (e.strokeStyle = "rgb(241, 76, 76)"),
    (e.lineWidth = t.padding / 3),
    (e.lineCap = "round"),
    e.stroke());
};
