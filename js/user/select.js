const user = {
  color: EMPTY,
  focus: {
    coord: [7, 7],
    set() {
      let e = game.getCanvas(),
        t = e.ctx,
        o = game.getBanedPosition(user.color),
        s = e.padding + e.blockWidth * user.focus.coord[0],
        r = e.padding + e.blockWidth * user.focus.coord[1],
        n = e.width / 35;
      if (
        (game.stone.update(),
        (t.lineWidth = 7),
        (t.strokeStyle = "#fa6060"),
        t.beginPath(),
        t.arc(s, r, n, 0, 2 * Math.PI),
        t.moveTo(s - e.blockWidth / 1.5, r),
        t.lineTo(s + e.blockWidth / 1.5, r),
        t.moveTo(s, r - e.blockWidth / 1.5),
        t.lineTo(s, r + e.blockWidth / 1.5),
        t.stroke(),
        !game.checkWin())
      )
        for (i = 0; i < o.length; i++) {
          let c = e.padding + e.blockWidth * o[i][0],
            d = e.padding + e.blockWidth * o[i][1],
            l = e.blockWidth / 3;
          (t.strokeStyle = "#7c1b1b"),
            (t.lineWidth = 15),
            t.beginPath(),
            t.moveTo(c - l, d - l),
            t.lineTo(c + l, d + l),
            t.moveTo(c - l, d + l),
            t.lineTo(c + l, d - l),
            t.stroke();
        }
    },
  },
  async set() {
    let e = user.color == BLACK ? WHITE : BLACK;
    if (!user.color || game.stone.isStone(...user.focus.coord)) return;
    let t = game
      .getBanedPosition(user.color)
      .map(JSON.stringify)
      .includes(JSON.stringify(user.focus.coord));
    if (t) return alert("그곳에는 돌을 놓을 수 없습니다. 룰을 확인해주세요.");
    game.stone.set(user.color, ...user.focus.coord),
      game.stone.set(e, ...AI(e, game.stone.list));
    let o = game.checkWin();
    user.focus.set(),
      game.stone.update(),
      o &&
        (await wait(100),
        alert("당신의 " + (o === user.color ? "승리" : "패배") + "입니다."));
  },
};
window.addEventListener(
  "DOMContentLoaded",
  () => {
    let e = game.getCanvas().elem;
    function t(e) {
      (user.color = e),
        ($("#stone-color-select").style.display = "none"),
        ($("#control-keys").style.display = "block");
    }
    function o(t) {
      let o = e.getBoundingClientRect(),
        r = e.getContext("2d"),
        n = e.width / e.offsetWidth,
        c = e.width / 15,
        d = n * (t.x - o.x),
        l = n * (t.y - o.y),
        a = [Math.floor(d / c), Math.floor(l / c)].map((e) =>
          Math.max(0, Math.min(14, e))
        );
      (user.focus.coord = a),
        s(),
        (r.strokeStyle = game.stone.isStone(...a) ? "#3a7ff5" : "#eee"),
        r.beginPath(),
        r.arc(d, l, 12, 0, Math.PI2),
        r.stroke(),
        t.preventDefault();
    }
    function s() {
      user.focus.coord.forEach(
        (e, t, o) => (o[t] = Math.min(14, Math.max(e, 0)))
      ),
        user.focus.set();
    }
    user.focus.set(),
      $("#set-btn").addEventListener("click", user.set, !1),
      $("#select-white").addEventListener(
        "click",
        () => {
          t(WHITE),
            game.stone.set(BLACK, ...AI(BLACK, game.stone.list)),
            user.focus.set();
        },
        !1
      ),
      $("#select-black").addEventListener(
        "click",
        () => {
          t(BLACK);
        },
        !1
      ),
      (function e() {
        let t = $("#stone-color-select");
        e.init || ((e.init = !0), window.addEventListener("resize", e)),
          (t.style.left = (innerWidth - t.offsetWidth) / 2 + "px"),
          (t.style.top = (innerHeight - t.offsetHeight) / 3 + "px");
      })(),
      window.addEventListener(
        "keydown",
        (e) => {
          switch (e.key.toLowerCase().replace("arrow", "")) {
            case "down":
            case "s":
              user.focus.coord[Y]++;
              break;
            case "up":
            case "w":
              user.focus.coord[Y]--;
              break;
            case "left":
            case "a":
              user.focus.coord[X]--;
              break;
            case "right":
            case "d":
              user.focus.coord[X]++;
              break;
            case " ":
            case "enter":
              user.set();
              break;
            default:
              return;
          }
          e.preventDefault(), s();
        },
        !1
      ),
      e.addEventListener("touchmove", (e) =>
        o({
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
          preventDefault: () => e.preventDefault(),
        })
      ),
      e.addEventListener("mousemove", o),
      e.addEventListener("mouseup", () => user.set());
  },
  !1
);
