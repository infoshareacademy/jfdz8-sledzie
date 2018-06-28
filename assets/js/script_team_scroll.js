var photo = Array.from($(".team__photo"));
var teamSection = $(".team").offset().top;
var windowPosition;
var teamPosition;


$(window).on('scroll', function() {
    windowPosition = window.pageYOffset;
    teamPosition = teamSection;

    if(windowPosition > teamPosition) {
        $(photo[0]).addClass("active__team--magda") &&
        $(photo[1]).addClass("active__team--agata") &&
        $(photo[2]).addClass("active__team--piotrek");
    }
    else {
        $(photo[0]).removeClass("active__team--magda") &&
        $(photo[1]).removeClass("active__team--agata") &&
        $(photo[2]).removeClass("active__team--piotrek");
    }
});












