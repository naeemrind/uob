
$(window).on('load', function(){





  var hamburger = $('.hamburger');
  var navbar = $('.navbar');
  var plusSymbol = $('.plus');
  var search = $('.search');
  var searchBarDesktop = $('.search-bar-desktop');
  var searchBarMobile = $('.search-bar-mobile');
  var moreLinksBtn = $('.more-links-btn');
  var slideOver = $('.slideover-menu');
  var slideOverItem = $('.slideover-item');




// =========  Toggle the Navigation in Mobile
hamburger.click(function() {
  navbar.toggleClass('slideToggle');
  $(this).toggleClass("is-active");
  $('.navbar>ul>li').toggleClass('reset-padding');
});




// =========  Toggle the Serach Bar in Desktop
search.click(function() {
  searchBarDesktop.toggleClass('show');
});



// =========  Toggle the Serach Bar in Mobile
$('.search-icon').click(function() {
  searchBarMobile.toggleClass('show-search');
});



// =========  Toggle the SlideOver Menu
moreLinksBtn.click(function() {
  slideOver.toggleClass('open');
  slideOverItem.toggleClass('openli');
});



// =========  Close the SlideOver on outside click
$('.wrapper').click(function() {
  slideOver.removeClass('open');
  slideOverItem.removeClass('openli');
});


// ================ Slider Start ======================
      function slider() {
        var current = $('.slider img.active');
        var crnt = $('.indicator li.highlight');
        if (current.length == 0) {
          $('.slider img:first-child').addClass('active');
          $('.indicator li:first-child').addClass('highlight');
        } else {
          var next = current.removeClass('active').next();
          var nxt = crnt.removeClass('highlight').next();
          if (next.length == 0) {
            $('.slider img:first-child').addClass('active');
            $('.indicator li:first-child').addClass('highlight');
          } else {
            next.addClass('active');
            nxt.addClass('highlight');
          }
        }
      }

      setInterval(slider, 6000);
// ================ Slider End ======================


// ============== Change Quick Links' Icon BG
$('.quick-links span').hover(function() {
  $(this).parent('a').children('.icon').toggleClass('change-bg');
});


// ============== Toggle Study Area Children
plusSymbol.click(function() {
  $(this).parent('li').children('ul').stop().slideToggle(400);
  $(this).toggleClass('minus');
});



// =========  Prevent Hash Anchors from Default action on click
(function($) {
  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });
})(jQuery);






// ==========  Reset navbar ul Height on Resize  ===================
var id; $(window).resize(function() {
  clearTimeout(id);
  id = setTimeout(doneResizing, 100);
});


function doneResizing() {

  var width = $(window).outerWidth();

  if (width < 992) {
    $('.reset-height').css('height', '100%');
  }

  if (width > 991) {
    $('.reset-height').css('height', 'auto');
    $('.navbar').css('display', 'block');
  }


}









});// Document.Ready End

// ==========  For Touoch enabled Devices  ===================
window.addEventListener('load', function() {
  document.body.addEventListener('touchstart', function(e) {
    $('*').css('cursor', 'default');
  }, false)
}, false)



// ==========  Disable Hover on Scroll  ===================
var body = document.body;
var timer;
window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if (!body.classList.contains('disable-hover')) {
    $('body').css('pointer-events', 'none');
  }
  timer = setTimeout(function() {
    $('body').css('pointer-events', 'auto');
  }, 50);
}, false);


