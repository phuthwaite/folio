/*	Preloader */

// jQuery(window).load(function(){
// 	$("#preloader").fadeOut("slow");
// });

// $(function(){
//     var $el = $('#wrapper3');     
//     $(window).scroll(function () {
//         para($el);
//     });
//     para($el);
// });
// var speed = 0.2;
// function para($el) {
//     var diff = $(window).scrollTop() - $el.offset().top;
//     var yPos = -(diff * speed);
//     var coords = '50% ' + yPos + 'px';
//     $el.css({
//         backgroundPosition: coords
//     });
// }

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

    /* 
    within -externalhtml-
    for each -section-
    grab the -contents- 
    and put it into the -containers- 
    */
    $( "#_1-0" ).load( "cs-vw.html #_1-0" );
        $( "#_1-1" ).load( "cs-vw.html #_1-1" );
    $( "#_2-0" ).load( "cs-vw.html #_2-0" );
        $( "#_2-1" ).load( "cs-vw.html #_2-1" );
        $( "#_2-2" ).load( "cs-vw.html #_2-2" );
        $( "#_2-3" ).load( "cs-vw.html #_2-3" );
        $( "#_2-4" ).load( "cs-vw.html #_2-4" );
    $( "#_3-0" ).load( "cs-vw.html #_3-0" );
        $( "#_3-1" ).load( "cs-vw.html #_3-1" );
        $( "#_3-2" ).load( "cs-vw.html #_3-2" );
        $( "#_3-3" ).load( "cs-vw.html #_3-3" );
        $( "#_3-4" ).load( "cs-vw.html #_3-4" );
    $( "#_4-0" ).load( "cs-vw.html #_4-0" );
        $( "#_4-1" ).load( "cs-vw.html #_4-1" );
    $( "#_5-0" ).load( "cs-vw.html #_5-0" );
        $( "#_5-1" ).load( "cs-vw.html #_5-1" );
        $( "#_5-2" ).load( "cs-vw.html #_5-2" );
    $( "#_6-0" ).load( "cs-vw.html #_6-0" );
        $( "#_6-1" ).load( "cs-vw.html #_6-1" );
        $( "#_6-2" ).load( "cs-vw.html #_6-2" );
        $( "#_6-3" ).load( "cs-vw.html #_6-3" );
        $( "#_6-4" ).load( "cs-vw.html #_6-4" );
        $( "#_6-5" ).load( "cs-vw.html #_6-5" );
        $( "#_6-6" ).load( "cs-vw.html #_6-6" );
    $( "#_7-0" ).load( "cs-vw.html #_7-0" );
        $( "#_7-1" ).load( "cs-vw.html #_7-1" );
    $( "#_8-0" ).load( "cs-vw.html #_8-0" );
        $( "#_8-1" ).load( "cs-vw.html #_8-1" );
        $( "#_8-2" ).load( "cs-vw.html #_8-2" );
        $( "#_8-3" ).load( "cs-vw.html #_8-3" );
    $( "#_9-0" ).load( "cs-vw.html #_9-0" );
        $( "#_9-1" ).load( "cs-vw.html #_9-1" );
        $( "#_9-2" ).load( "cs-vw.html #_9-2" );

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

var wow = new WOW ({
	offset:       0,
	mobile:       false,       // trigger animations on mobile devices
});
wow.init();

var sayit = document.getElementById("huth"); 
function playAudio() { 
  sayit.play(); 
} 

var s = skrollr.init({
  smoothScrolling: false,
  forceHeight: false
});

document.getElementById('current-year').innerHTML = new Date().getFullYear();