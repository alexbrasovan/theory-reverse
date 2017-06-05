var main = function() {
  /* Push the nav over by 325px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);

  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-325px"
    }, 200);

  });
};


$(document).ready(main);