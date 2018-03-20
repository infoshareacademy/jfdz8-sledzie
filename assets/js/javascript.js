$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.dynamic-navigation').addClass('navigation-scroll');
        $('.dynamic-navigation').removeClass('desktop-navigation');
        $('.dynamic-item').addClass('nav-item-scroll');
        $('.dynamic-item').removeClass('nav-item');
    } else {
        $('.dynamic-navigation').removeClass('navigation-scroll');
        $('.dynamic-navigation').addClass('desktop-navigation');
        $('.dynamic-item').removeClass('nav-item-scroll');
        $('.dynamic-item').addClass('nav-item');
    }
});


$(window).width(function(){
    if ($(this).width() < 960) {
        $(".cross,.nav-items-list").hide();
        $(".hamburger").click(function () {
            $(".hamburger").hide();
            $(".cross").show();
            $(".nav-items-list").slideToggle("slow", function () {
            });
        });

        $(".cross").click(function () {
            $(".cross").hide();
            $(".nav-items-list").slideToggle("slow", function () {
                $(".hamburger").show();
            });
        });

        $(".nav-items-list").click(function () {
            $(".cross").hide();
            $(".nav-items-list").slideToggle("slow", function () {
                $(".hamburger").show();
            });
        });
    }});