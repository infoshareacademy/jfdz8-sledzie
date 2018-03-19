$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.dynamic-nav').addClass('navigation-scroll');
        $('.dynamic-nav').removeClass('desktop-navigation');
        $('.dynamic-item').addClass('nav-item-scroll');
        $('.dynamic-item').removeClass('nav-item');
    } else {
        $('.dynamic-nav').removeClass('navigation-scroll');
        $('.dynamic-nav').addClass('desktop-navigation');
        $('.dynamic-item').removeClass('nav-item-scroll');
        $('.dynamic-item').addClass('nav-item');
    }
});