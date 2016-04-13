$(document).ready(function() {

  "use strict";

  //////////////////////////////////////////////////////////////////
  // Animation: Fade In
  //////////////////////////////////////////////////////////////////

  // Fade in logo and header title on page load
  $(".fade-in").css("opacity", "1");

  // Fade in gallery on page load (and after images have loaded)
  $("#photo-gallery").css("opacity", "1");

  //////////////////////////////////////////////////////////////////
  // Animation: Scroll In
  //////////////////////////////////////////////////////////////////

  var $animationElements = $('.scroll-in');
  var $window = $(window);

  var scrollAnimate = function() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function() {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top + 130;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      // check to see if this current container is within viewport
      if ((elementBottomPosition >= windowTopPosition) &&
          (elementTopPosition <= windowBottomPosition)) {
        $element.addClass("in-view");
      } else {
        // $element.removeClass("in-view");
      }
    });
  };

  // Listen for scroll as well as window resize
  $window.on("scroll resize", scrollAnimate);

  // Trigger in case the element is in view on page load
  $window.trigger("scroll");

  //////////////////////////////////////////////////////////////////
  // Scroll to sections on click
  //////////////////////////////////////////////////////////////////

  // Nav bar scroll links
  $('#nav-about, #scroll-to-about, #footer-about').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-about").offset().top
      }, 500);
  });

  $('#nav-gallery, #scroll-to-gallery, #footer-gallery').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 500);
  });

  $('#nav-contact, #scroll-to-contact').click(function(){
      $('html, body').animate({
          scrollTop: $("#section-contact").offset().top + 3
      }, 500);
  });

  // Scroll to top
  $('#scroll-to-top').click(function(){
      $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 500);
  });

  //////////////////////////////////////////////////////////////////
  // Photo Gallery
  //////////////////////////////////////////////////////////////////

  $("#full-image img").hide();

  // Set Maximize Event Listeners
  $("#photo-gallery img").on("click", function(evt) {

    $("#full-image").css("display", "flex");

    var image = $("#full-image img");
    var url = $(evt.target).attr("src");
    // Set image url and click listener to minimize
    $(image).attr("src", url);
    fullImageClick();

    // Scroll to top of gallery when user clicks thumbnail
    $('html, body').animate({
        scrollTop: $("#full-image").offset().top - 25
    }, 500);

    // Show image
    $(image).show();
    setTimeout(function() {
      $(image).css("opacity", "1");
    }, 150 );

  }); // end on click

  // On Click of Maximized Photo
  var fullImageClick = function() {
    $("#full-image img").on("click", function() {

      $(this).css("opacity", "0");
      $(this).off("click");
      setTimeout(function() {
        $("#full-image img").hide();
        $("#full-image").css("display", "none");
      }, 250);

      // Scroll to top of gallery page when user minimizes photo
      $('html, body').animate({
          scrollTop: $("#section-gallery").offset().top
      }, 500);

    }); // end on click
  }; // end fullImageClick()

  // Key press listener
  $('html').on("keydown keyup", function(evt) {
    if (evt.which == 39) {
      // TODO next image
    } else if (evt.which == 37) {
      // TODO previous image
    }
  });

});
