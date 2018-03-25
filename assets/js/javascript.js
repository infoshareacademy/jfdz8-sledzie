function handleNavigationEffect() {
    const scrollThreshold = 50;
    const $navigation = $('.navigation');

    $(this).scrollTop() > scrollThreshold ?
        $navigation.addClass('navigation-scroll') :
        $navigation.removeClass('navigation-scroll');
}

$(window).on('scroll', handleNavigationEffect);

var handlersAreSet = false;

var setHandlers = function() {
    if ($(window).width() < 961) {
        $(".hamburger").click(function () {
            $('.navigation-items-list').slideToggle().addClass('navigation-expanded');
            $(".hamburger").hide();
            $(".cross").show();
        });

        $(".cross").click(function () {
            $('.navigation-items-list').slideUp().removeClass('navigation-expanded');
            $(".cross").hide();
            $(".hamburger").show();
        });

        $('.navigation-items-list li').click(function () {
            if ($(window).width() < 961) {
                $('.navigation-items-list').slideUp().removeClass('navigation-expanded');
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
        $(".navigation-items-list").show().unbind('click');
    }
});

setHandlers();
