function activateBtn(btn) {
  const btns = $(".cookie-action-btns");
  btns.addClass("btn-outline-success");
  btns.removeClass("btn-success");
  btn.removeClass("btn-outline-success");
  btn.addClass("btn-success");
}