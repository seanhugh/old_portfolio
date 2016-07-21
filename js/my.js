
var image1 = "beerguys.png";
var title1 = "Beer Guys";
var pg1 = "This is the Beer Guys Paragraph Yaw"

var image2 = "winford-01.png";
var title2 = "Beer Guys";
var pg2 = "This is the Beer Guys Paragraph Yaw"

function add5images() {

  for (var i = 1; i <= 5; i++) {
      console.log("i began");
      i = i.toString();
      var temp = "image" + (i);
      $( "#thecontainer" ).append( "<div class='bigim'><img src='images/blog/"+ eval(temp) + "''></div>" );
      console.log(temp);
  };
};

$(document).ready(function() {
      add5images();
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