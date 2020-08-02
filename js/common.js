$(document).ready(function(){
// paralax
$('.parallax-window').parallax({imageSrc: 'images/appointment-img.jpg'});
//in-view-js
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
//in-view-js

	window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




      $(".vertical1").slick({
        dots: true,
        horizontal: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // fade: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });

      $(".sub-vertical1").slick({
        dots: true,
        horizontal: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

    $(".vertical2").slick({
        dots: true,
        horizontal: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      });


$(".toggle").click(function(){
  $(".nav-bar2").toggleClass("main-a");

});

$(".toggle").click(function(){
  $(".lines").toggleClass("chin");
});



$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 768) { 

      $('html').addClass('mobile');
         
      }
    else
    {
        $('html').removeClass('mobile');
    }

});


});