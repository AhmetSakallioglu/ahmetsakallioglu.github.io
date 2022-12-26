AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});


       

jQuery(document).ready(function($) {
   

   "use strict";

   
   $(".loader").delay(1000).fadeOut("slow");
 $("#overlayer").delay(1000).fadeOut("slow");	

   var siteMenuClone = function() {

       $('.js-clone-nav').each(function() {
           var $this = $(this);
           $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
       });


       setTimeout(function() {
           
           var counter = 0;
     $('.site-mobile-menu .has-children').each(function(){
       var $this = $(this);
       
       $this.prepend('<span class="arrow-collapse collapsed">');

       $this.find('.arrow-collapse').attr({
         'data-toggle' : 'collapse',
         'data-target' : '#collapseItem' + counter,
       });

       $this.find('> ul').attr({
         'class' : 'collapse',
         'id' : 'collapseItem' + counter,
       });

       counter++;

     });

   }, 1000);

       $('body').on('click', '.arrow-collapse', function(e) {
     var $this = $(this);
     if ( $this.closest('li').find('.collapse').hasClass('show') ) {
       $this.removeClass('active');
     } else {
       $this.addClass('active');
     }
     e.preventDefault();  
     
   });

       $(window).resize(function() {
           var $this = $(this),
               w = $this.width();

           if ( w > 768 ) {
               if ( $('body').hasClass('offcanvas-menu') ) {
                   $('body').removeClass('offcanvas-menu');
               }
           }
       })

       $('body').on('click', '.js-menu-toggle', function(e) {
           var $this = $(this);
           e.preventDefault();

           if ( $('body').hasClass('offcanvas-menu') ) {
               $('body').removeClass('offcanvas-menu');
               $this.removeClass('active');
           } else {
               $('body').addClass('offcanvas-menu');
               $this.addClass('active');
           }
       }) 

       // click outisde offcanvas
       $(document).mouseup(function(e) {
       var container = $(".site-mobile-menu");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
         if ( $('body').hasClass('offcanvas-menu') ) {
                   $('body').removeClass('offcanvas-menu');
               }
       }
       });
   }; 
   siteMenuClone();


   var sitePlusMinus = function() {
       $('.js-btn-minus').on('click', function(e){
           e.preventDefault();
           if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
               $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
           } else {
               $(this).closest('.input-group').find('.form-control').val(parseInt(0));
           }
       });
       $('.js-btn-plus').on('click', function(e){
           e.preventDefault();
           $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
       });
   };
   // sitePlusMinus();


   var siteSliderRange = function() {
   $( "#slider-range" ).slider({
     range: true,
     min: 0,
     max: 500,
     values: [ 75, 300 ],
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
     }
   });
   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
   };
   // siteSliderRange();


   
   var siteCarousel = function () {
       if ( $('.nonloop-block-13').length > 0 ) {
           $('.nonloop-block-13').owlCarousel({
           center: false,
           items: 1,
           loop: true,
               stagePadding: 0,
           margin: 0,
           autoplay: true,
           nav: true,
           smartSpeed: 1000,
               navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
           responsive:{
           600:{
               margin: 0,
               nav: true,
             items: 2
           },
           1000:{
               margin: 0,
               stagePadding: 0,
               nav: true,
             items: 3
           },
           1200:{
               margin: 0,
               stagePadding: 0,
               nav: true,
             items: 4
           }
           }
           });
       }

       $('.slide-one-item').owlCarousel({
       center: false,
       items: 1,
       loop: true,
           stagePadding: 0,
       margin: 0,
       smartSpeed: 1000,
       autoHeight: true,
       autoplay: true,
       pauseOnHover: false,
       nav: true,
       navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
     });
   };
   siteCarousel();

   var siteStellar = function() {
       $(window).stellar({
       responsive: false,
       parallaxBackgrounds: true,
       parallaxElements: true,
       horizontalScrolling: false,
       hideDistantElements: false,
       scrollProperty: 'scroll'
     });
   };
   // siteStellar();

   var siteCountDown = function() {

       $('#date-countdown').countdown('2020/10/10', function(event) {
         var $this = $(this).html(event.strftime(''
           + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
           + '<span class="countdown-block"><span class="label">%d</span> days </span>'
           + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
           + '<span class="countdown-block"><span class="label">%M</span> min </span>'
           + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
       });
               
   };
   siteCountDown();

   var siteDatePicker = function() {

       if ( $('.datepicker').length > 0 ) {
           $('.datepicker').datepicker();
       }

   };
   siteDatePicker();

   var siteSticky = function() {
       $(".js-sticky-header").sticky({topSpacing:0});
   };
   siteSticky();

   // navigation
 var OnePageNavigation = function() {
   var navToggler = $('.site-menu-toggle');
      $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
     e.preventDefault();

     var hash = this.hash;

     $('html, body').animate({
       'scrollTop': $(hash).offset().top - 0
     }, 1000, 'easeInOutCirc', function(){
       window.location.hash = hash;
     });

   });
 };
 OnePageNavigation();

 var siteScroll = function() {

     

     $(window).scroll(function() {

         var st = $(this).scrollTop();

         if (st > 100) {
             $('.js-sticky-header').addClass('shrink');
         } else {
             $('.js-sticky-header').removeClass('shrink');
         }

     }) 

 };
 siteScroll();

});

 /*-------------------
       OWL - Hizmetler Slider
   --------------------- */
   $(".hizmet-carousel").owlCarousel({
       nav: true,
       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
       dots: false,
       autoplay: true,
       margin: 15,
       loop: true,
       smartSpeed: 4000,
       autoplayTimeout:5000,
       responsive: {
           0: {
               items: 1,
           },
           320: {
               items: 2,
           },
           600: {
               items: 3,
           },
           800: {
               items: 4,
           },
           1000: {
               items: 4,
           }
       }
   });


 /*-------------------
       OWL - Fotolar Slider
   --------------------- */
   $(".fotolar-carousel").owlCarousel({
       dots: false,
       autoplay: true,
       loop: true,
       smartSpeed: 4000,
       autoplayTimeout:3000,
       responsive: {
           0: {
               items: 1,
           },
           320: {
               items: 2,
           },
           600: {
               items: 8,
           },
           800: {
               items: 8,
           },
           1000: {
               items: 8,
           }
       }
   });


 /*-------------------
       OWL - Yorumlar Slider
   --------------------- */
   $(".yorum-carousel").owlCarousel({
       dots: false,
       autoplay: true,
       loop: true,
       smartSpeed: 2000,
       autoplayTimeout:5000,
       responsive: {
           0: {
               items: 1,
           },
           320: {
               items: 1,
           },
           600: {
               items: 1,
           },
           800: {
               items: 1,
           },
           1000: {
               items: 1,
           }
       }
   });

 /*-------------------
       OWL - Hizmetler Slider
   --------------------- */
   $(".hiz-carousel").owlCarousel({
       dots: false,
       autoplay: true,
       loop: true,
       smartSpeed: 2000,
       autoplayTimeout:5000,
       responsive: {
           0: {
               items: 1,
           },
           320: {
               items: 1,
           },
           600: {
               items: 2,
           },
           800: {
               items: 3,
           },
           1000: {
               items: 4,
           }
       }
   });


/* 5. Gallery Active */
   var client_list = $('.completed-active');
   if(client_list.length){
     client_list.owlCarousel({
       slidesToShow: 2,
       slidesToScroll: 1,
       loop: true,
       autoplay:true,
       speed: 3000,
       smartSpeed:2000,
       nav: false,
       dots: false,
       margin: 15,

       autoplayHoverPause: true,
       responsive : {
         0 : {
           items: 1
         },
         768 : {
           items: 2
         },
         992 : {
           items: 2
         },
         1200:{
           items: 3
         }
       }
     });
   }


 /*-------------------
       OWL - Hizmetler Slider
   --------------------- */
   $(".yorumlar-carousel").owlCarousel({
       dots: false,
       autoplay: true,
       loop: true,
       smartSpeed: 2000,
       autoplayTimeout:5000,
       responsive: {
           0: {
               items: 1,
           },
           320: {
               items: 1,
           },
           600: {
               items: 1,
           },
           800: {
               items: 1,
           },
           1000: {
               items: 1,
           }
       }
   });
