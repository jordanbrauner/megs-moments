$(document).ready(function() {
  "use strict";

  // Nav bar scroll links
  $('#nav-about').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-about").offset().top
      }, 500);
  });

  $('#nav-gallery').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 500);
  });

  $('#nav-contact').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-contact").offset().top
      }, 500);
  });

  // Section title scroll arrows

  $('#scroll-to-about').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-about").offset().top
      }, 500);
  });

  $('#scroll-to-gallery').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 500);
  });

  $('#scroll-to-contact').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-contact").offset().top
      }, 500);
  });

  // Scroll to top

  $('#scroll-to-top').click(function(){
      $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 500);
  });

  // Fade header in on page load
  $("nav").css("opacity", "1");
  $(".title-container").css("opacity", "1");

});
