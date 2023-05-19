// JavaScript Document

jQuery(document).ready(function($) {
   'use strict';
    document.getElementById('current-year').innerHTML = new Date().getFullYear();
    $('#status').fadeOut(); // will first fade out the loading animation
    
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    $('.ajax-popup-link').magnificPopup({
        type: 'ajax',
        mainClass: 'mfp-fade',
        closeBtnInside: true,
        closeMarkup: '<button class="mfp-close" href="#"></button>'
    });

    // back to top
    var $offset = 300,
        $offset_opacity = 400,
        $scroll_top_duration = 800,
        $back_to_top = $('.cd-top');

        $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
             scrollTop: 0,
        }, $scroll_top_duration );
        });


    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > $offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    });
 })