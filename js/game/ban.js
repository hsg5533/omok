(game.banSave = null),
  (game.banId = -1),
  (game.getBanedPosition = (e, r) => {
    let n,
      o,
      f,
      t,
      i,
      _,
      s,
      a,
      u = [];
    if (((r = r || game.stone.list), !e || e !== BLACK)) return u;
    if (game.stone.id === game.banId) return game.banSave;
    for (
      game.banId = game.stone.id,
        [6, 7, 8, 9].forEach((e) => {
          let _ = 16 - e;
          for (n = 0; n < _; n++)
            for (o = 0; o < _; o++)
              for (t = 0; t < 2; t++)
                for (i = -1; i < 2; i++) {
                  let s = 0,
                    a = [-1, -1];
                  if (r[n][o] === BLACK)
                    for (f = 0; f < e; f++) {
                      let l = n + f * t,
                        v = o + f * i ** t;
                      if (
                        !r[l] ||
                        [WHITE, void 0].includes(r[l][v]) ||
                        (r[l][v] === EMPTY && s)
                      ) {
                        s = -1;
                        break;
                      }
                      game.stone.is(EMPTY, l, v) &&
                        (s++, (a[X] = l), (a[Y] = v));
                    }
                  1 === s && u.push(a);
                }
        }),
        n = 0;
      n < 15;
      n++
    )
      for (o = 0; o < 15; o++)
        if (!r[n][o]) {
          for (t = -1; t < 2; t++)
            for (i = -1; i < 2; i++)
              for (f = -1; f < 2; f++)
                for (_ = -1; _ < 2; _++)
                  for (s = -1; s < 1; s++)
                    for (a = -1; a < 1; a++)
                      if (
                        t ||
                        (i && f) ||
                        (_ &&
                          !(t === f && i === _) &&
                          !(s && t === -f) &&
                          !(a && i === -_))
                      ) {
                        function l(e, r) {
                          return (e += r) || e + r;
                        }
                        function v(e) {
                          return [
                            [n + l(e, s) * t, o + l(e, a) * i],
                            [n + l(e, s) * f, o + l(e, a) * _],
                          ];
                        }
                        [1, 2]
                          .map(v)
                          .every((e) =>
                            e.every((e) => game.stone.is(BLACK, ...e))
                          ) &&
                          [-1, -2, 3, 4]
                            .map(v)
                            .every((e) =>
                              e.every((e) => game.stone.is(EMPTY, ...e))
                            ) &&
                          [
                            [t, i],
                            [f, _],
                          ].every(
                            ([e, r]) =>
                              ![-3, 5].every((f) =>
                                game.stone.is(
                                  BLACK,
                                  n + l(f, s) * e,
                                  o + l(f, a) * r
                                )
                              )
                          ) &&
                          (u.push([n, o]),
                          ([t, i, f, _, s, a] = Array(6).fill(1 / 0)));
                      }
        }
    return (game.banSave = u);
  });
