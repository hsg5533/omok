(game.AIvsAI = async (e) => {
  let t = 1;
  for (game.stone.reset(); !game.checkWin(); )
    await new Promise((t) => {
      setTimeout(t, e || 1);
    }),
      game.stone.set(t + 1, ...AI(t + 1, game.stone.list)),
      (t = 1 - t);
  console.log([null, "WHITE", "BLACK"][game.checkWin()] + " win!");
}),
  (game.checkAIWinRate = async (e = 100) => {
    let t = 1,
      $,
      o = [0, 0, 0],
      _ = Date.now();
    console.log(`테스트 시작! 예상 소요 시간: ${e / 2}초.`);
    for (let n = 0; n < e; n++) {
      for (game.stone.reset(); !($ = game.checkWin()); )
        try {
          game.stone.set(t + 1, ...AI(t + 1, game.stone.list)), (t = 1 - t);
        } catch (s) {
          o[0]++, (t = 1);
          break;
        }
      if (
        (console.log(
          `${n + 1}/${e} (${((100 * (n + 1)) / e).toFixed(2)}%) 완료됨...`
        ),
        await new Promise((e) => setTimeout(e, 0)),
        o[$]++,
        !(n % 100) && n + 1 < e && n)
      ) {
        let l = Date.now();
        console.log(`
        ---중간점검---

        [ 무승부: ${o[0]} ]
        [ 백돌승: ${o[1]} ]
        [ 흑돌승: ${o[2]} ]

        ${l - _}ms(${((l - _) / 1e3).toFixed(2)})초 소요됨.
      `);
      }
    }
    o.forEach((t, $, o) => (o[$] = `${t} (${(100 * t) / e}%)`));
    let c = Date.now();
    console.log(`
    ---결과---

    [ 무승부: ${o[0]} ]
    [ 백돌승: ${o[1]} ]
    [ 흑돌승: ${o[2]} ]

    ${c - _}ms(${((c - _) / 1e3).toFixed(2)})초 소요됨.
  `);
    alert(` ${c - _}ms(${((c - _) / 1e3).toFixed(2)})초 소요됨.`);
  });
