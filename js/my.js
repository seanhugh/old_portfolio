
var image1 = "beerguys.png";
var title1 = "Beer Guys";
var pg1 = "A logo design company for a small liquor <br> retailer and beer yard"

var image2 = "winford-01.png";
var title2 = "Winford Plumbing and HVAC";
var pg2 = "Logo design and mockup for a <br> small pumbing business"

var image3 = "precision-01.png";
var title3 = "Precision Athletics";
var pg3 = "Logo design and mockup for a small Gym in <br>Brooklyn looking for a modern aesthetic"

var image4 = "chris-01.png";
var title4 = "Xotic Detailing";
var pg4 = "Logo and Brandig for start-up detailing company"

images_left = 4;

function addimg(i) {
i = i.toString();
var temp = "image" + (i);
var title = "title" + (i);
var pg = "pg" + (i);
$( "#thecontainer" ).append( "<div class='bigim'><img class = 'theim' src='images/blog/"+ eval(temp) + "''><div class='coverdis'><img id='whitebow' src='images/whitebow.svg'><div class='hovert'><h1 class='hovertitle animated bounceInLeft'>"+eval(title)+"</h1><p class = 'hovertext'>"+eval(pg)+"</p></div></div></div>" );
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
        var middlepic = $(this).offset().top + 350;
        var difference = Math.abs(middle-middlepic);
        console.log(difference);
        if (difference < ($(this).height()/2) + ($( window ).height())/2) {
         var opacvar = 150/difference;

         $(".theim", this).css('opacity', opacvar);
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
    if ($(window).scrollTop() < 420) {
      var opacvar = (420-(2*$(window).scrollTop()))/420;
      $('#fadeouttitle').css('opacity', opacvar);
      $('#fadeouttitle').css('top', $(window).scrollTop());
      $('#navbar').removeClass('fixdis');
    }
//fading in stuff here:::::
   
      scrollopac();

//my stuff ends here


  });
});