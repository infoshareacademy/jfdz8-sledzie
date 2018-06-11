function handleNavigationEffect() {
    const scrollThreshold = 50;
    const $navigation = $('.navigation');

    $(this).scrollTop() > scrollThreshold ?
        $navigation.addClass('navigation-scroll') :
        $navigation.removeClass('navigation-scroll');
}



// function handleNavigationEffect() {
//     const scrollThreshold = 50;
//     const navigation = document.querySelector('.navigation');
//
//     // console.log(this.scrollY, $(this).scrollTop());
//     $(this).scrollTop() > scrollThreshold ?
//         navigation.classList.add('navigation-scroll') :
//         navigation.classList.remove('navigation-scroll');
// }

$(window).on('scroll', handleNavigationEffect);

var handlersAreSet = false;

var setHandlers = function() {
    if ($(window).width() < 961) {
        $(".hamburger").click(function () {
            $('.navigation-list').slideToggle().addClass('navigation-expanded');
            $(".hamburger").hide();
            $(".cross").show();
        });

        $(".cross").click(function () {
            $('.navigation-list').slideUp().removeClass('navigation-expanded');
            $(".cross").hide();
            $(".hamburger").show();
        });

        $('.navigation-list li').click(function () {
            if ($(window).width() < 961) {
                $('.navigation-list').slideUp().removeClass('navigation-expanded');
                $(".cross").hide();
                $(".hamburger").show();
            };
        });
        handlersAreSet = true;
    }
};

$(window).resize(function() {
    if (handlersAreSet === false) {
        setHandlers();
    }

    if ($(window).width() > 960) {
        $(".navigation-list").show().unbind('click');
    }
});

setHandlers();

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});