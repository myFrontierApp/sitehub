var browser_width = $(window).width();

$(document).ready(function () {
  // Mobile footer accordion.
  $(".footer_area h3").click(function () {
    if (browser_width <= 768) {
      $(this).toggleClass('open');
      $(this).next('ul').slideToggle(500);
      return false;
    }
  });
});

// Closes footer's expanded menu on resize
$(window).resize(function (e) {
  $(".footer_area h3").removeClass('open');
  $(".footer_area ul").removeAttr('style');
  browser_width = $(window).width();
});
