$(function () {
  $('#drawer-course').click(function(){
    $('#drawer-list').slideToggle();
  });
});

$(function(){
  var pagetop = $('#page_top');

  pagetop.hide();

  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          pagetop.fadeIn(300);
     } else {
          pagetop.fadeOut(300);
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

$(function(){
  $('.course-item').click(function() {
    var imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false
  });

  $('.modal').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false
  });

  $('.course-item').hover(
    function() {
      $(this).css('opacity','0.7');
    },
    function() {
      $(this).css('opacity','1');
    }
  );
});