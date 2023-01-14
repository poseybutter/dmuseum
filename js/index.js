$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".goto-top").show();
  } else {
    $(".goto-top").hide();
  }
});
$(".goto-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

$(function () {
  $(".step-process-area ul li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".snb-area .snb li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
});
