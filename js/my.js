//Constant Varibles
var ScreenHeight = $(window).height();
var Phone = IsPhone();
var NavOffset = $('#staticbar').offset().top;
var isFixed = false;

function addimg(i, array, location) {
    if (!Phone) {
        $("#thecontainer").append("<div class='bigim'><img class = 'theim' src='images/" + location + '/' + array[i].image + "''><div class='coverdis'><img id='popupX' src='images/popupX.svg'><div class='hovert'><h1 class='hovertitle animated bounceInLeft'>" + array[i].title + "</h1><p class = 'hovertext'>" + array[i].pg + "</p></div></div></div>");
    } else {
        $("#thecontainer").append("<div class='bigim'><img class = 'theim' src='images/" + location + '/' + 'mobile/' + array[i].image + "''><div class='coverdis'><img id='popupX' src='images/popupX.svg'><div class='hovert'><h1 class='hovertitle animated bounceInLeft'>" + array[i].title + "</h1><p class = 'hovertext'>" + array[i].pg + "</p></div></div></div>");
    }
}

// Function adds images to the page
function AddImages(type) {
    if (type == "graphic") {
        for (var i = 0; i <= (GraphicArray.length - 1); i++) {
            addimg(i, GraphicArray, type);
        }
    } else if (type == "3d") {
        for (var i = 0; i <= (ThreeDArray.length - 1); i++) {
            addimg(i, ThreeDArray, type);
        }
    } else if (type == "coding") {
        for (var i = 0; i <= (CodingArray.length - 1); i++) {
            addimg(i, CodingArray, type);
        }
    }
};

// Function checks to see if the computer is a phone
function IsPhone() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else if ($(window).width() < 500) {
        return true;
    } else {
        return false;
    }
};

function NavBar() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= NavOffset) {
        $('#staticbar').addClass('navbar-fixed-top');
        isFixed = true;
        $('#thecontainer').addClass('spacedis');
        $('#mobilebow').fadeIn();
    } else {
        var opacvar = (NavOffset - (2 * scrollTop)) / NavOffset;
        $('#fadeouttitle .col-md-4').css('opacity', opacvar);
        $('#fadeouttitle').css('top', scrollTop);
        $('#staticbar').removeClass('navbar-fixed-top');
        isFixed = false;
        $('#thecontainer').removeClass('spacedis');
        $('#mobilebow').fadeOut();
    }
}

// This function sets the opacity for all images within the viewable range
function ScrollOpacity() {

    $('.bigim').each(function() {
        // var ImageHeight = $(this).height();
        var ImageHeight = $(this).height();
        var scrollTop = $(window).scrollTop();
        var ImageTop = $(this).offset().top;

        //If statement checks to see if image is on the screen. If it is not then the opacity is set to .3.
        if ((ImageTop < scrollTop + ScreenHeight + 10) || (ImageTop - ImageHeight > scrollTop - 10)) {
            //calculates what opacity to make the image based on distance from the center
            var MiddleScreen = (ScreenHeight / 2) + scrollTop;
            var MiddlePic = ImageTop + ImageHeight / 2;
            var Difference = Math.abs(MiddleScreen - MiddlePic);
            $(".theim", this).css('opacity', 150 / Difference);
        } else {
            $(".theim", this).css('opacity', .3);
        }
    });
};

// This function adds the about section to the page
function addabout() {
    $("#thecontainer").append("<div class='aboutcontainer'><h1 class = 'abouth1'>Hello.</h1><p class='biop'>My name is <em class = 'name'>Sean Hughes</em> and I'm a <a class='bioa'>coder</a>, and designer.</p><p class='biop'>I am currently a computer science major at Harvard University, and a competitive squash player.</p><p class = 'biop'>Contact me through my <a class = 'bioa' href='#'>Email</a>, or <a class = 'bioa' href='#'>Give me a call</a> if you'd like to talk.</p></div>");
}

function Navigate(location) {
    $("#thecontainer").empty();
    $("#thecontainer").css('display', 'none');
    AddImages(location);
    $("#thecontainer").fadeIn();
    $("#navbar ul>li.active").removeClass("active");
    $("#" + location).addClass("active")
    if (!Phone) {
        $(".theim").css('opacity', .3);
    }
}



// Making the Menu Close on Click:

$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});



//  Adding images and scroll effects at start

$(document).ready(function() {
    AddImages("coding");
    if (Phone == true) {
        $('#staticbar').addClass('navbar-fixed-top');
    }

    if (!Phone) {


        $(window).scroll(function() {
            if (!isFixed) {
                NavOffset = $('#staticbar').offset().top;
            };
            NavBar();
            ScrollOpacity();


        });
    };


    $("#3ddesignbutton").click(function() {
        Navigate("3d");
    });
    $("#graphicdesignbutton").click(function() {
        Navigate("graphic");
    });
    $("#codingbutton").click(function() {
        Navigate("coding");
    });

    $("#aboutbutton").click(function() {
        $("#thecontainer").empty();
        $("#thecontainer").css('display', 'none');
        addabout();
        $("#thecontainer").fadeIn();
        $("#navbar ul>li.active").removeClass("active");
        $("#about").addClass("active")
    });

});