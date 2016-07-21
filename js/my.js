
var image1 = "beerguys.png";
var title1 = "Beer Guys";
var pg1 = "This is the Beer Guys Paragraph Yaw"

var image2 = "winford-01.png";
var title2 = "Beer Guys";
var pg2 = "This is the Beer Guys Paragraph Yaw"

images_left = 2;

function addimg(i) {
i = i.toString();
var temp = "image" + (i);
$( "#thecontainer" ).append( "<div class='bigim'><img src='images/blog/"+ eval(temp) + "''><div class='coverdis'></div></div>" );
  }


function add5images() {
if (images_left>=5) {
      for (var i = 1; i <= 5; i++) {
      addimg(i);
      images_left-=1;
  };
} else { 
    for (var i = 1; i <= images_left; i++) {
      addimg(i);
  };
  images_left=0;
}

};


function scrollopac() {
      $('.bigim').each(function(){
        var _this = this;
        var middle = ($( window ).height()/2) + $(window).scrollTop();
        var middlepic = $(this).offset().top + 500;
        var difference = Math.abs(middle-middlepic);
        console.log(difference);
        if (difference < ($(this).height()/2) + ($( window ).height())/2) {
         var opacvar = 150/difference;
         $(this).css('opacity', opacvar);
        }


        });
};



$(document).ready(function() {
      add5images();
      scrollopac();
  $(window).scroll(function () {

      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 420) {
      $('#navbar').addClass('fixdis');
    }
    if ($(window).scrollTop() < 421) {
      var opacvar = (420-(2*$(window).scrollTop()))/420;
      $('#fadeouttitle').css('opacity', opacvar);
      $('#navbar').removeClass('fixdis');
    }
//fading in stuff here:::::
   
      scrollopac();

//my stuff ends here


  });
});