$(document).ready(function() {
  "use strict";

  // Nav bar scroll links
  $('#nav-about').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-about").offset().top
      }, 400);
  });

  $('#nav-gallery').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 400);
  });

  $('#nav-contact').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-contact").offset().top
      }, 400);
  });

  // Section title scroll arrows

  $('#scroll-to-about').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-about").offset().top
      }, 400);
  });

  $('#scroll-to-gallery').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 400);
  });

  $('#scroll-to-contact').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-contact").offset().top
      }, 400);
  });

  // Scroll to top

  $('#scroll-to-top').click(function(){
      $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 400);
  });

  $("nav").css("opacity", "1");
  $(".title-container").css("opacity", "1");

});
