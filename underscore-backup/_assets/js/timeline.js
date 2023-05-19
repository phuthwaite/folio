// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 600);
            return false;
        }
    }
});



// // SMOOTH SCROLLING SECTIONS
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {

//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });


// var defaultOptions = {
//   container: document.body,
//   panelSelector: '> section',
//   directionThreshold: 50,
//   delay: 0,
//   duration: 300,
//   easing: function(t) { return t },
// };

// new PanelSnap(options);

// // // ----------------------------------------//
// // //            PANEL SNAP                   //
// // // ----------------------------------------//

// $(function() {
//   $('.wrapper').panelSnap(
//     { 
//     slideSpeed: 400
//     }
//    );
// });


// jQuery(function($) {
//   var options = {
//     panelSelector: '> section',
//     directionThreshold: 5,
//     slideSpeed: 200,
//     navigation: {
//       keys: {
//         nextKey: true,
//         prevKey: true,
//       }
//     }
//   };

//  $('body').panelSnap(options);

// });