/*	Preloader */

// jQuery(window).load(function(){
// 	$("#preloader").fadeOut("slow");
// });

/*  Welcome Section Slider */
$(function() {
    // var Page = (function() {
    //     var $navArrows = $( '#nav-arrows' ),
    //         $nav = $( '#nav-dots > span' ),
    //         slitslider = $( '#slider' ).slitslider( {
    //             onBeforeChange : function( slide, pos ) {
    //                 $nav.removeClass( 'nav-dot-current' );
    //                 $nav.eq( pos ).addClass( 'nav-dot-current' );
    //             }
    //         } ),
    //         init = function() {
    //             initEvents();               
    //         },
    //         initEvents = function() {
    //             // add navigation events
    //             $navArrows.children( ':last' ).on( 'click', function() {
    //                 slitslider.next();
    //                 return false;
    //             } );
    //             $navArrows.children( ':first' ).on( 'click', function() {     
    //                 slitslider.previous();
    //                 return false;
    //             } );
    //             $nav.each( function( i ) {               
    //                 $( this ).on( 'click', function( event ) {
    //                     var $dot = $( this );                       
    //                     if( !slitslider.isActive() ) {
    //                         $nav.removeClass( 'nav-dot-current' );
    //                         $dot.addClass( 'nav-dot-current' );
    //                     }                       
    //                     slitslider.jump( i + 1 );
    //                     return false;                    
    //                 } );                    
    //             } );
    //         };
    //         return { init : init };
    // })();
    // Page.init();
});
var $stopAnimation = false;
$(document).ready(function(){
/* load case study content */
    $( "#title1" ).load( "cs-vw.html #title1" );
    $( "#content1" ).load( "cs-vw.html #content1" );
    $( "#title2" ).load( "cs-vw.html #title2" );
    $( "#content2" ).load( "cs-vw.html #content2" );
    $( "#title3" ).load( "cs-vw.html #title3" );
    $( "#content3" ).load( "cs-vw.html #content3" );
    $( "#title4" ).load( "cs-vw.html #title4" );
    $( "#content4" ).load( "cs-vw.html #content4" );
    $( "#title5" ).load( "cs-vw.html #title5" );
    $( "#content5" ).load( "cs-vw.html #content5" );
    $( "#title6" ).load( "cs-vw.html #title6" );
    $( "#content6" ).load( "cs-vw.html #content6" );
    $( "#title7" ).load( "cs-vw.html #title7" );
    $( "#content7" ).load( "cs-vw.html #content7" );
    $( "#title8" ).load( "cs-vw.html #title8" );
    $( "#content8" ).load( "cs-vw.html #content8" );
    $( "#title9" ).load( "cs-vw.html #title9" );
    $( "#content9" ).load( "cs-vw.html #content9" );
    $( "#title10" ).load( "cs-vw.html #title10" );
    $( "#content10" ).load( "cs-vw.html #content10" );

});

/*	Menu item highlighting */
jQuery('#nav').singlePageNav({
	offset: 600,
    // offset: jQuery('#nav').outerHeight(),
	filter: ':not(.external)',
	speed: 1000,
	currentClass: 'current',
	updateHash: true,
    threshold: 60,
    easing: "easeInOutExpo"
});	
        
// back to top
var offset = 900,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');

$(window).scroll(function () {
	($(this).scrollTop() > offset) ? 
        $back_to_top.addClass('cd-is-visible') : 
        $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(window).scrollTop() > 400) {
        $("#navigation").removeClass("animated-header");
    } else {
        $("#navigation").addClass("animated-header");
    }
    var bottom_of_object = $('.text').offset().top + $('.text').innerHeight(),
        bottom_of_window = $(window).scrollTop();
    // console.log('stopAnimation is ' + $stopAnimation);
    // console.log('object-btm is ' + bottom_of_object);
    //console.log('scroll is ' + bottom_of_window);
    if ( bottom_of_object >= bottom_of_window )
        { $stopAnimation = false; }
    else 
        { $stopAnimation = true; }

// var element = $('footer');
// console.log('footer position is ' + element.position());
//console.log('footer offset is ' + element.offset());
// console.log('footer dist to top is ' + element.offset().top + ' window bottom is at ' +bottom_of_window + 'px');

}); // end scroll function  

$back_to_top.on('click', function (event) {
    	event.preventDefault();
    	$('body,html').animate({
       		 scrollTop: 0,
    	}, scroll_top_duration);
});

var slideHeight = $(window).height();  
$('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

$(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
});

// $("#works, #testimonial").owlCarousel({	 
// 	navigation : true,
// 	pagination : false,
// 	slideSpeed : 700,
// 	paginationSpeed : 400,
// 	singleItem:true,
// 	navigationText: ["<i class='fal fa-angle-left fa-lg'></i>","<i class='fal fa-angle-right fa-lg'></i>"]
// });	

// $('.fancybox').fancybox({
// 	padding: 0,
// 	openEffect : 'fade',
// 	openSpeed  : 350,
// 	closeEffect : 'fade',
// 	closeSpeed  : 450,
// 	closeClick : false,	
//     nextEffect : 'fade',
//     prevEffect : 'fade',
//     wheel : false,
//     beforeShow: function () {
//         this.title = 
//         '<h3>' + $(this.element).find('figcaption > h3').html() + '</h3>' 
//         // + '<h4>' + $(this.element).find('figcaption > h4').html() + '</h4>' 
//         + '<p>' + $(this.element).find('figcaption > p').html() + '</p>';
//         $(".site-content").addClass("blurify");
//     },
//     afterClose : function () {
//         $(".site-content").removeClass("blurify");
//     },
// 	helpers : {
// 		title : { 'type' : 'inside' },
// 		overlay : {
//                 css : { 'background' : 'rgba(0, 0, 0, 0.8)' } 
//         },
//         thumbs : { 
//             autostart : true,
//             axis : 'x' 
//         }
//        //  thumbs: {
//        //      width: 8,
//        //      height: 8,
//        //      source: function () {
//        //          return "";
//        //      }
// 	   // }
//     }
// });	

// $.fancybox.helpers.thumbs.onUpdate = function () {
//     return false;
// };

var wow = new WOW ({
	offset:       0,
	mobile:       false,       // trigger animations on mobile devices
});
wow.init();

var sayit = document.getElementById("huth"); 
function playAudio() { 
  sayit.play(); 
} 

// $('div').magnificPopup({ 
//   type: 'image',
//   delegate: 'a',
//   gallery:{enabled:true},
//   mainClass: 'mfp-fade',
//   closeBtnInside: false,
//   closeMarkup: '<button class="mfp-close yayCloseBtn" href="#"><i class="ion-close-round"></i></button>'
//   callbacks: {
//     buildControls: function() {
//       // re-appends controls inside the main container
//       this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
//     }
//   }
// });



document.getElementById('current-year').innerHTML = new Date().getFullYear();