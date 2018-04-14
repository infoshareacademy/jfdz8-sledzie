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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-photo");
    var dots = document.getElementsByClassName("slider-image");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-image-miniature", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider-image-miniature";
}
