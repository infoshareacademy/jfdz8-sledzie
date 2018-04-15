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
    var slideFoto = document.getElementsByClassName("slide-photo-box");
    var dots = document.getElementsByClassName("slider-image");
    if (n > slideFoto.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slideFoto.length}
    for (i = 0; i < slideFoto.length; i++) {
        slideFoto[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-image-miniature", "");
    }
    slideFoto[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider-image-miniature";
}
