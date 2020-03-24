
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
})

function navSearch() {
  $(".nav-item").on("click", function () {
    $(this).toggleClass("active");

  });
}

$(document).on('click', 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top -100;

  // animated top scrolling
  $('body, html').animate({ scrollTop: pos }, 950);
});

$(document).ready(function() {
  resize_all_parallax();
});

$(window).on('resize', function(){
  resize_all_parallax();
});
function resize_all_parallax() {
  var div_class = 'parallaxBody'; /* the ID of the div that you're resizing */
  var img_w = 1000; /* the width of your image, in pixels */
  var img_h = 864; /* the height of your image, in pixels */
  resize_parallax(div_id,img_w,img_h);
}
function resize_parallax(div_id,img_w,img_h) {
  var div = $('#' + div_id);
  var divwidth = div.width();
  if (divwidth < 769) { var pct = (img_h/img_w) * 105; } /* show full image, plus a little padding, if on static mobile view */
  else { var pct = 60; } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
  var newheight = Math.round(divwidth * (pct/100));
  newheight = newheight  + 'px';
  div.height(newheight);
}


