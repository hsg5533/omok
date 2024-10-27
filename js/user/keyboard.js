window.addEventListener("keyup", (e) => {
  if (!user.color)
    switch (e.keyCode) {
      case 81:
        $("#select-black").click();
        break;
      case 87:
        $("#select-white").click();
    }
});
