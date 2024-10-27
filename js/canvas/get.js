game.getCanvas = () => {
  let t = $("#board");
  return t
    ? {
        elem: t,
        ctx: t.getContext("2d"),
        width: t.width,
        height: t.height,
        padding: t.width / 25,
        blockWidth: (t.width - (2 * t.width) / 25) / 14,
      }
    : { elem: null };
};
