$(document).ready(function() {
  "use strict";


  //////////////////////////////////////////////////////////////////
  // Photo Gallery
  //////////////////////////////////////////////////////////////////

  $("#full-image img").hide();

  // Set Mazimize Event Listeners
  $("#photo-gallery div").on("click", function(evt) {
    var url = $(evt.target).css('background-image');
    var image = $("#full-image img");
    // var newUrl = url.split('');
    // url = newUrl.splice(4, (newUrl.length-5)).join('');

    $(image).css("background-image", url);
    fullImageClick();

    // Show image
    $(image).show();
    setTimeout(function() {
      $(image).css("opacity", "1");
    }, 150);

  });

  // On Click of Maximized Photo
  var fullImageClick = function() {
    $("#full-image img").on("click", function() {
      $(this).css("opacity", "0");
      $(this).off("click");
      setTimeout(function() {
        $("#full-image img").hide();
      }, 250);
    });
  };


  //////////////////////////////////////////////////////////////////
  // Animations
  //////////////////////////////////////////////////////////////////

  // Fade header in on page load
  $("nav").css("opacity", "1");
  $(".title-container").css("opacity", "1");


  //////////////////////////////////////////////////////////////////
  // Scrolling
  //////////////////////////////////////////////////////////////////

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

});
