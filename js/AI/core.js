function AI(e, o) {
  let _ = [
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    r = 0,
    f = Array(15)
      .fill()
      .map(() => Array(15).fill(0)),
    s = -1 / 0,
    t = [],
    $ = [0, 0],
    i,
    n,
    a,
    l,
    c;
  function m(e, o) {
    $ = isNaN(o) ? [e, e] : [e, o];
  }
  function y(o, _) {
    if (Array.isArray(o)) {
      o.every(Array.isArray) ? o.forEach(y) : y(...o);
      return;
    }
    f[o] && _ in f[o] && (f[o][_] += c === e ? $[1] : $[0]);
  }
  for (m(-1 / 0), i = 0; i < 15; i++)
    for (n = 0; n < 15; n++) o[i][n] && (r++, y(i, n));
  if (r >= 225) throw Error("Block exceeded");
  for (
    m(-1 / 0),
      game.getBanedPosition(e).forEach(y),
      r < 2 && (f[7][7] += 1e3),
      m(1),
      i = 0;
    i < 15;
    i++
  )
    for (n = 0; n < 15; n++)
      if (o[i][n])
        for (a = -1; a < 2; a++) for (l = -1; l < 2; l++) y(i + a, n + l);
  for (m(18, 20), i = 0; i < 15; i++)
    for (n = 0; n < 15; n++)
      if (o[i][n])
        for (a = -1, c = o[i][n]; a < 2; a++)
          for (l = -1; l < 2; l++)
            (a || l) &&
              [-1, -2, 2, 3, 4]
                .map((e) => [i + e * a, n + e * l])
                .every(([e, o]) => game.stone.is(EMPTY, e, o)) &&
              game.stone.is(c, i + a, n + l) &&
              y(i + 2 * a, n + 2 * l);
      else
        _.forEach(([e, o]) => {
          (c = game.stone.isStone(i + e, n + o)) &&
            game.stone.is(c, i - e, n - o) &&
            [2, 3, -2, -3].every((_) =>
              game.stone.is(EMPTY, i + _ * e, n + _ * o)
            ) &&
            y(i, n);
        });
  for (m(35, 30), i = 0; i < 15; i++)
    for (n = 0; n < 15; n++)
      if (o[i][n])
        (c = o[i][n]),
          _.forEach(([e, _]) => {
            let r = [
              [1, 2]
                .map((o) => [i + o * e, n + o * _])
                .every(([e, _]) => game.stone.is(c, e, _, o)),
              [-1, -2, 3, 4]
                .map((o) => [i + o * e, n + o * _])
                .every(([e, o]) => game.stone.is(EMPTY, e, o)),
            ];
            r.every((e) => e) &&
              y([
                [i - e, n - _],
                [i + 3 * e, n + 3 * _],
              ]);
          });
      else
        for (a = -1; a < 2; a++)
          for (l = -1; l < 2; l++) {
            let h = (e) => [i + e * a, n + e * l];
            (a || l) &&
              (c = game.stone.isStone(i - a, n - l)) &&
              [1, 2].map(h).every(([e, o]) => game.stone.is(c, e, o)) &&
              [-2, 3].map(h).every(([e, o]) => game.stone.is(EMPTY, e, o)) &&
              y(i, n);
          }
  for (m(1500, 99999), i = 1; i < 13; i++)
    for (n = 1; n < 13; n++)
      o[i][n] &&
        ((c = o[i][n]),
        _.forEach(([e, o]) => {
          let _ = (_) => [i + _ * e, n + _ * o];
          (a || l) &&
            [-1, 4].map(_).some(([e, o]) => game.stone.is(EMPTY, e, o)) &&
            [1, 2, 3].map(_).every(([e, o]) => game.stone.is(c, e, o)) &&
            y([
              [i + 4 * e, n + 4 * o],
              [i - 1 * e, n - 1 * o],
            ]);
        }));
  for (i = 0; i < 15; i++)
    for (n = 0; n < 15; n++)
      o[i][n] &&
        ((c = o[i][n]),
        _.forEach(([e, o]) => {
          let _ = [-1, -1];
          3 ===
            [1, 2, 3, 4]
              .map((_) => [i + _ * e, n + _ * o])
              .filter(
                ([e, o]) => !!game.stone.is(c, e, o) || ((_ = [e, o]), !1)
              ).length && y(_);
        }));
  for (i = 0; i < 15; i++)
    for (n = 0; n < 15; n++)
      s < f[i][n] && ((s = f[i][n]), (t.length = 0)),
        s <= f[i][n] && t.push([i, n]);
  return t.random();
}
