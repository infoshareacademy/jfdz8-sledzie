var photo = $(".team__photo")
var teamSection = $(".team").offset().top;
var windowPosition;
var teamPosition;

$(window).on('scroll', function() {
    windowPosition = window.pageYOffset;
    teamPosition = teamSection;

    if(windowPosition > teamPosition) {
        photo.addClass("active__team");
    }
    else {
        photo.removeClass("active__team");
    }
});












