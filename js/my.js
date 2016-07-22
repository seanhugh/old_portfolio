//HERE GOES ALL THE GRAPHIC DESIGN IMAGES
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

var image5 = "wellness.png";
var title5 = "Taxoma Wellness";
var pg5 = "Logo and Brandig for a Hollistic Healing center's <br> new Thermography Program"

var image6 = "charlie.png";
var title6 = "Charlie the Tuna";
var pg6 = "Logo and Brandig for a fishing company in Alaska <br> Is now on multiple boats and buildings"

var image7 = "nickandgreg.png";
var title7 = "Slow Motion Gentlemen Logo";
var pg7 = "Made logo and introduction video for <br> startup YouTube channel"
images_left = 7;
var originalimages_left = 7;

//HERE GOES ALL THE 3DDESIGN IMAGES



var dimage1 = "america.png";
var dtitle1 = "Scrap Wood USA";
var dpg1 = "This piece was handmade from recycled <br>items around the shop";

var dimage2 = "pingpong.png";
var dtitle2 = "Unique Hand Made<br> Ping Pong Paddle";
var dpg2 = "This unique paddle not only looks the part <br> but also provides extra spin and power"

var dimage3 = "sunglasses-01.png";
var dtitle3 = "Bamboo Sunglasses";
var dpg3 = "Laser cut and designed in illustrator <br>Hand Sanded and Constructed"

var dimage4 = "boatdecal.png";
var dtitle4 = "Glass decal of wolf and dolphin design";
var dpg4 = "My design has gained popularity in Alaska and is <br> now on muliple people as tatoos"

dimages_left=4;


var whichcategory = 0;



function addimg(i) {
i = i.toString();
if(whichcategory==0){
     var temp = "image" + (i);
var title = "title" + (i);
var pg = "pg" + (i);
} else{
  var temp = "dimage" + (i);
var title = "dtitle" + (i);
var pg = "dpg" + (i);
}
$( "#thecontainer" ).append( "<div class='bigim'><img class = 'theim' src='images/blog/"+ eval(temp) + "''><div class='coverdis'><img id='whitebow' src='images/whitebow.svg'><div class='hovert'><h1 class='hovertitle animated bounceInLeft'>"+eval(title)+"</h1><p class = 'hovertext'>"+eval(pg)+"</p></div></div></div>" );
  }


function add5images() {
if(whichcategory==0){
     images = images_left;
} else{
  images = dimages_left;
}
if (images>=50) {
      for (var i = 1; i <= 5; i++) {
      addimg(i);
      images-=1;
  };
} else { 
    for (var i = 1; i <= images; i++) {
      addimg(i);
  };
  images=0;
}

};


function scrollopac() {
      $('.bigim').each(function(){
        var _this = this;
        var middle = ($( window ).height()/2) + $(window).scrollTop();
        var middlepic = $(this).offset().top + 350;
        var difference = Math.abs(middle-middlepic);
        if (difference < ($(this).height()/2) + ($( window ).height())/2) {
         var opacvar = 150/difference;

         $(".theim", this).css('opacity', opacvar);
        }
        else{
          $(".theim", this).css('opacity', .3);
        }


        });
};

function addabout() {
$( "#thecontainer" ).append( "<div class='aboutcontainer'><h1 class = 'abouth1'>Hello.</h1><p class='biop'>My name is <em class = 'name'>Sean Hughes</em> and I'm a web, graphic, and 3D designer.</p><p class='biop'>I am currently a computer science major at Harvard University, and a competitive squash player both indivudally and for Harvard's team.</p><p class = 'biop'>Contact me through my <a class = 'bioa' href='#'>Email</a>, or <a class = 'bioa' href='#'>Give me a call</a> if you'd like to talk.</p></div>" );
}

// Making the Menu Close on Click:

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

//  Adding images and scroll effects at start

$(document).ready(function() {
      add5images();
      scrollopac();
      var whattopwas = $('#staticbar').offset().top;
  $(window).scroll(function () {

      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() >= whattopwas) {
      $('#staticbar').addClass('navbar-fixed-top');
      $('#thecontainer').addClass('spacedis');
    }
    else if ($(window).scrollTop() < whattopwas) {
      var opacvar = (420-(2*$(window).scrollTop()))/420;
      $('#fadeouttitle').css('opacity', opacvar);
      $('#fadeouttitle').css('top', $(window).scrollTop());
      $('#staticbar').removeClass('navbar-fixed-top');
      $('#thecontainer').removeClass('spacedis');
      
    }
//fading in stuff here:::::
   
      scrollopac();

//my stuff ends here


  });

  $( "#3ddesignbutton" ).click(function() {
  $( "#thecontainer" ).empty();
  whichcategory = 1;
  $( "#thecontainer" ).css('display', 'none');
  add5images();
  $( "#thecontainer" ).fadeIn();
  $("#navbar ul>li.active").removeClass("active");
  $( "#3d" ).addClass( "active" )
  scrollopac();
});



  $( "#graphicdesignbutton" ).click(function() {
  $( "#thecontainer" ).empty();
  whichcategory = 0;
    $( "#thecontainer" ).css('display', 'none');
  add5images();
   $( "#thecontainer" ).fadeIn();
  $("#navbar ul>li.active").removeClass("active");
  $( "#graphic" ).addClass( "active" )
  scrollopac();
});

  $( "#aboutbutton" ).click(function() {
  $( "#thecontainer" ).empty();
  whichcategory = 2;
    $( "#thecontainer" ).css('display', 'none');
  addabout();
   $( "#thecontainer" ).fadeIn();
  $("#navbar ul>li.active").removeClass("active");
  $( "#about" ).addClass( "active" )
  scrollopac();
});



});