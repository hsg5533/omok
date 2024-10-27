(game.drawBoard = function () {
  let e = document.getElementById("board"),
    t = e.getContext("2d"),
    l = e.width,
    a = e.height,
    i = (l - (2 * l) / 25) / 14,
    o = l / 125,
    d = Array(15)
      .fill()
      .map((e, t) => t);
  (t.fillStyle = "#f0c68f"),
    t.fillRect(0, 0, e.width, e.height),
    (t.lineWidth = 3),
    (t.strokeStyle = "black"),
    t.beginPath(),
    [
      [
        (e) => l / 25 + i * e,
        (e) => a / 25,
        (e) => l / 25 + i * e,
        (e) => (24 * a) / 25,
      ],
      [
        (e) => a / 25,
        (e) => a / 25 + i * e,
        (e) => (24 * l) / 25,
        (e) => a / 25 + i * e,
      ],
    ].forEach(([e, l, a, i]) => {
      d.forEach((o) => {
        t.moveTo(e(o), l(o)), t.lineTo(a(o), i(o));
      });
    }),
    t.stroke(),
    (t.fillStyle = "black"),
    [
      [l / 2, a / 2],
      [l / 25 + 3 * i, l / 25 + 3 * i],
      [l - (l / 25 + 3 * i), l / 25 + 3 * i],
      [l / 25 + 3 * i, l - (l / 25 + 3 * i)],
      [l - (l / 25 + 3 * i), l - (l / 25 + 3 * i)],
    ].forEach(([e, l]) => {
      t.beginPath(), t.arc(e, l, o, 0, Math.PI2), t.fill();
    });
}),
  window.addEventListener("DOMContentLoaded", game.drawBoard, !1);
