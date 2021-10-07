$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

  $('.mobile-menu a').click(function(){
    $('.mobile-menu').fadeOut(100);
    $(".hamburger-button").removeClass('active');
  });