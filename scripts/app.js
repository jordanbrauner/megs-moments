$(document).ready(function() {
  "use strict";

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


});
