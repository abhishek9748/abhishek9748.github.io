 $(document).ready(function(){
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
         
         var slider = $("#slider")
            $('.responsive').slick({
              dots: true,
              infinite: false,
              autoplay:true,
              autoplayspeed:2500,
              horizontal: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode:true,
         
              draggable:true,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    centerMode:true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    centerMode:true,
                    draggable:false,
                    slidesToScroll: 1
         
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    autoplayspeed:2500,
                    centerMode:true,
                    infinite:false,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });
             $(".vertical-center-5").slick({
              dots: false,
              horizontal: true,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll:1,
              autoplayspeed:2500,
              autoplay:false,
              infinite: false ,
            });
         

         const list = document.querySelectorAll(".limb");
         
         function activeLink() {
         list.forEach((item) => item.classList.remove("active"));
         this.classList.add("active");
         }
         list.forEach((item) => item.addEventListener("click", activeLink));

           function someMethodIThinkMightBeSlow() {
          const startTime = performance.now();

          // Do the normal stuff for this function

          const duration = performance.now() - startTime;
          console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);
       }
         
        $(".yum").click(function(){
          $(".my").addClass("intro");
          $("header").addClass("a");
          $(".nav-bar").addClass("b");
        });  


const box = document.getElementById('box');

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

box.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - box.offsetLeft;
  startY = e.pageY - box.offsetTop;
  scrollLeft = box.scrollLeft;
  scrollTop = box.scrollTop;
  box.style.cursor = 'grabbing';
});

box.addEventListener('mouseleave', () => {
  isDown = false;
  box.style.cursor = 'grab';
});

box.addEventListener('mouseup', () => {
  isDown = false;
  box.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - box.offsetLeft;
  const y = e.pageY - box.offsetTop;
  const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
  const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
  box.scrollLeft = scrollLeft - walkX;
  box.scrollTop = scrollTop - walkY;
});
        

         });
