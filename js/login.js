if ($("body").width() <= 800) {
  $("#id").attr("placeholder", "아이디");
  $("#pw").attr("placeholder", "비밀번호");
} else {
  $("#id").attr("placeholder", "");
  $("#pw").attr("placeholder", "");
}

// var label_width = $(".login_form label").outerWidth(true);
// $(".send_btn").css("margin-left", label_width);
