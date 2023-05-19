  var defaults = {  
  // $("[data-fancybox]").fancybox({
  closeExisting: true,
  arrows: true,
  preload: true,
  toolbar: false,
  idleTime: 0,
  animationEffect: 'zoom-in-out',
  transitionEffect: 'slide',
  clickOutside: 'close',
  loop: true,
  wheel: false,
  clickContent : false,
  lock: true,
  baseTpl:
    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      '</div>' +
    '</div>',
  spinnerTpl : '<div class="fancybox-loading"></div>',
  parentEl: '#gallery',
  overlay : {
      locked : true,
      css : {
        'background' : 'rgba(0, 0, 0, 0.8);'
      }
  },
  thumbs : {
      autoStart : true,
      axis : 'x',
      parentEl : '.fancybox-inner'
  },
  slideClass: "", //ph-fancybox-slide Custom CSS class for slide element
  baseClass: "", //ph-fancybox-base Custom CSS class for layout

  caption : function(fancybox, item) {
    var caption = $(this).data('caption') || '';
      return '<h3>' + $(this).find('figcaption > h3').html() + '</h3>' 
      + '<p>' + $(this).find('figcaption > p').html() + '</p>'
  },
  beforeShow: function() {
        $('.caption--image').remove();
    },
  afterShow: function() {
        var caption = $(".fancybox-caption"),
            innerCaption = caption.clone().addClass('caption--image');
        $(".fancybox-slide--current .fancybox-content").append(innerCaption);
        caption.not('.caption--image').addClass('caption--bottom');
  },
  btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="Previous">' +
        '<div><i class="fal fa-angle-double-left"></i></div>' +
        "</button>",
      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="Next">' +
        '<div><i class="fal fa-angle-double-right"></i></div>' +
        "</button>"
  } //end fancybox

// $("select").change(function() {
//   var opt = $(this).attr("id");
//   var val = $(this).val();

//   $.fancybox.defaults[ opt ] = val === "" ? false : val;
// // Make "fade" transiton faster than others
//   if ( opt === 'transitionEffect' ) {
//     $.fancybox.defaults[ 'transitionDuration' ] = opt === 'fade' ? 330 : 550;
//   }

//add this class to fixed navbar in html, if it jumps when fancybox opens...
//compensate-for-scrollbar
};
(document, jQuery);