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

// 

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



$(document).ready(function(){
document.getElementById('current-year').innerHTML = new Date().getFullYear();

/* load case study content... 
    within -externalhtml-
    for each -section-
    grab the -contents- 
    and put it into the -containers- 
    */
    $( "#vw_1-0" ).load( "/volkswagen/cs-vw.html #vw_1-0" );
        $( "#vw_1-1" ).load( "/volkswagen/cs-vw.html #vw_1-1" );
    $( "#vw_2-0" ).load( "/volkswagen/cs-vw.html #vw_2-0" );
        $( "#vw_2-1" ).load( "/volkswagen/cs-vw.html #vw_2-1" );
        $( "#vw_2-2" ).load( "/volkswagen/cs-vw.html #vw_2-2" );
        $( "#vw_2-3" ).load( "/volkswagen/cs-vw.html #vw_2-3" );
        $( "#vw_2-4" ).load( "/volkswagen/cs-vw.html #vw_2-4" );
    $( "#vw_3-0" ).load( "/volkswagen/cs-vw.html #vw_3-0" );
        $( "#vw_3-1" ).load( "/volkswagen/cs-vw.html #vw_3-1" );
        $( "#vw_3-2" ).load( "/volkswagen/cs-vw.html #vw_3-2" );
        $( "#vw_3-3" ).load( "/volkswagen/cs-vw.html #vw_3-3" );
        $( "#vw_3-4" ).load( "/volkswagen/cs-vw.html #vw_3-4" );
    $( "#vw_4-0" ).load( "/volkswagen/cs-vw.html #vw_4-0" );
        $( "#vw_4-1" ).load( "/volkswagen/cs-vw.html #vw_4-1" );
    $( "#vw_5-0" ).load( "/volkswagen/cs-vw.html #vw_5-0" );
        $( "#vw_5-1" ).load( "/volkswagen/cs-vw.html #vw_5-1" );
        $( "#vw_5-2" ).load( "/volkswagen/cs-vw.html #vw_5-2" );
    $( "#vw_6-0" ).load( "/volkswagen/cs-vw.html #vw_6-0" );
        $( "#vw_6-1" ).load( "/volkswagen/cs-vw.html #vw_6-1" );
        $( "#vw_6-2" ).load( "/volkswagen/cs-vw.html #vw_6-2" );
        $( "#vw_6-3" ).load( "/volkswagen/cs-vw.html #vw_6-3" );
        $( "#vw_6-4" ).load( "/volkswagen/cs-vw.html #vw_6-4" );
        $( "#vw_6-5" ).load( "/volkswagen/cs-vw.html #vw_6-5" );
        $( "#vw_6-6" ).load( "/volkswagen/cs-vw.html #vw_6-6" );
    $( "#vw_7-0" ).load( "/volkswagen/cs-vw.html #vw_7-0" );
        $( "#vw_7-1" ).load( "/volkswagen/cs-vw.html #vw_7-1" );
    $( "#vw_8-0" ).load( "/volkswagen/cs-vw.html #vw_8-0" );
        $( "#vw_8-1" ).load( "/volkswagen/cs-vw.html #vw_8-1" );
        $( "#vw_8-2" ).load( "/volkswagen/cs-vw.html #vw_8-2" );
        $( "#vw_8-3" ).load( "/volkswagen/cs-vw.html #vw_8-3" );
    $( "#vw_9-0" ).load( "/volkswagen/cs-vw.html #vw_9-0" );
        $( "#vw_9-1" ).load( "/volkswagen/cs-vw.html #vw_9-1" );
        $( "#vw_9-2" ).load( "/volkswagen/cs-vw.html #vw_9-2" );


    $( "#sam_0-0" ).load( "/samsung/cs-sam.html #sam_0-0" );
        $( "#sam_0-1" ).load( "/samsung/cs-sam.html #sam_0-1" );
    $( "#sam_1-0" ).load( "/samsung/cs-sam.html #sam_1-0" );
        $( "#sam_1-1" ).load( "/samsung/cs-sam.html #sam_1-1" );
        $( "#sam_1-2" ).load( "/samsung/cs-sam.html #sam_1-2" );
        $( "#sam_1-3" ).load( "/samsung/cs-sam.html #sam_1-3" );
        $( "#sam_1-4" ).load( "/samsung/cs-sam.html #sam_1-4" );
        $( "#sam_1-5" ).load( "/samsung/cs-sam.html #sam_1-5" );
    $( "#sam_2-0" ).load( "/samsung/cs-sam.html #sam_2-0" );
        $( "#sam_2-1" ).load( "/samsung/cs-sam.html #sam_2-1" );
        $( "#sam_2-2" ).load( "/samsung/cs-sam.html #sam_2-2" );
        $( "#sam_2-3" ).load( "/samsung/cs-sam.html #sam_2-3" );
        $( "#sam_2-4" ).load( "/samsung/cs-sam.html #sam_2-4" );
        $( "#sam_2-5" ).load( "/samsung/cs-sam.html #sam_2-5" );
    $( "#sam_3-0" ).load( "/samsung/cs-sam.html #sam_3-0" );
        $( "#sam_3-1" ).load( "/samsung/cs-sam.html #sam_3-1" );
        $( "#sam_3-2" ).load( "/samsung/cs-sam.html #sam_3-2" );
        $( "#sam_3-3" ).load( "/samsung/cs-sam.html #sam_3-3" );
        $( "#sam_3-4" ).load( "/samsung/cs-sam.html #sam_3-4" );
        $( "#sam_3-5" ).load( "/samsung/cs-sam.html #sam_3-5" );

   // $( "#axs_1-0" ).load( "/axs/cs-axs.html #axs_1-0" );

   // $( "#twc_1-0" ).load( "/twc/cs-twc.html #twc_1-0" );
});

var $stopAnimation = false;   

//	Menu item nav...
jQuery('#navigation').singlePageNav({
	offset: 0,
    // offset: jQuery('#nav').outerHeight(),
	filter: ':not(.external)',
	speed: 1000,
	currentClass: 'current',
	updateHash: false,
    threshold: 600,
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
        $stopAnimation = true;
        $("#navigation").removeClass("animated-header");
    } else {
        $stopAnimation = false;
        $("#navigation").addClass("animated-header");
    }

    var bottom_of_object = $('.text').offset() + $('.text').innerHeight(),
        bottom_of_window = $(window).scrollTop();
    // console.log('stopAnimation is ' + $stopAnimation);
    // console.log('object-btm is ' + bottom_of_object);
    // console.log('scroll is ' + bottom_of_window);

    // if ( bottom_of_object >= bottom_of_window )
    //     { $stopAnimation = false; }
    // else 
    //     { $stopAnimation = true; }

// var element = $('footer');
// console.log('footer position is ' + element.position());
// console.log('footer offset is ' + element.offset());
// console.log('footer dist to top is ' + element.offset().top + ' window bottom is at ' +bottom_of_window + 'px');

}); // end scroll function  

/////////////////////////////
// poggs does ani
// $('#navigation>*').on('click', function (event) {  
//   if (('.navbar-collapse.in') && ($stopAnimation == false)) {
//     console.log('stop ani');
//     $stopAnimation = true;
//   }
//   else {
//     console.log('restart ani');
//     $stopAnimation = false;
//   }
// }); 

// $('#navigation>*').on('click', function (event) {  
//   if ('.navbar-collapse.in') {
//     console.log('stop ani');
//     $stopAnimation.toggle;
//   }
// });
//////////////////////////////

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

// TEMP DISABLED...
var wow = new WOW ({
	offset:       0,
	mobile:       false,       // trigger animations on mobile devices
});
wow.init();

var sayit = document.getElementById("huth"); 
function playAudio() { 
  sayit.play(); 
} 

// fade transition - reload
// var speed = 'slow';
// $('html, body').hide();
// $(document).ready(function() {
//     $('html, body').fadeIn(speed, function() {
//         $('a[href], button[href]').click(function(event) {
//             var url = $(this).attr('href');
//             if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
//             event.preventDefault();
//             $('html, body').fadeOut(speed, function() {
//                 window.location = url;
//             });
//         });
//     });

// has FOUC
// $(window).on('load', function(){
//     $("body").css("display", "none");
//     $("body").fadeIn(1000);
//     $("a.transition").click(function(event){
//             event.preventDefault();
//             linkLocation = this.href;
//             $("body").fadeOut(500, redirectPage);      
//     });    
//     function redirectPage() {
//         window.location = linkLocation;
//     }
// });

    // $('.ajax-popup-link').magnificPopup({
    //     type: 'ajax',
    //     mainClass: 'mfp-folio',
    //     closeBtnInside: true,
    //     closeMarkup: '<button class="mfp-close" href="#"></button>'
    // });

//$(function() {
// $(document).ready(function(){
// $(window).on('load', function(){});
$('a.transition').each(function() { /* [1] */
     if ( location.hostname === this.hostname || !this.hostname.length ) { /* [1] */
        var link = $(this).attr("href"); /* [2] */
            $(this).click(function(e) {
                e.preventDefault(); /* [7] */ 
                $('body').addClass('fadeSiteOut'); /* fadeSiteOut[8] */ 
                setTimeout(function() { /* [9] */
                    window.location = link; /* [9] */
                }, 800); /* [9] */
            });
        }
    })
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};


$(document).ready(function(){
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    var arr = ['assets/img/bg/13_insta@_poggs.jpg', 'assets/img/bg/canarywharf_insta@_poggs.jpg', 'assets/img/bg/gourock_insta@_poggs.jpg', 'assets/img/bg/londonbridge_insta@_poggs.jpg', 'assets/img/bg/myrkdalen_insta@_poggs.jpg', 'assets/img/bg/palmsprings_insta@_poggs.jpg', 'assets/img/bg/takethat_insta@_poggs.jpg'];
    arr = shuffle(arr);
    // console.log("1st of arr is " + arr[1]);
    $("#home-slider").css("background-image", "url(" + arr[1] + ")");
});

$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})

