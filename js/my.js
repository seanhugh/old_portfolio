$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 420) {
      $('#navbar').addClass('fixdis');
    }
    if ($(window).scrollTop() < 421) {
      var opacvar = (420-(2*$(window).scrollTop()))/420;
      console.log(opacvar);
      $('#fadeouttitle').css('opacity', opacvar);
      $('#navbar').removeClass('fixdis');
    }
  });
});