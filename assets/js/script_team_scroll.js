var photo = Array.from($(".team__photo"));
var teamSection = $(".team").offset().top;
var teamMemberName = $(".team__name");
var socialSection = $(".team__social");
var windowPosition;
var teamPosition;


$(window).on('scroll', function() {
    windowPosition = window.pageYOffset;
    teamPosition = teamSection;

    if(windowPosition > teamPosition) {
        ($(photo[0]).css('backgroundImage','url(assets/img/magda_img.jpg)') &&
        $(photo[1]).css('backgroundImage','url(assets/img/agata_img.jpg)') &&
        $(photo[2]).css('backgroundImage','url(assets/img/piotrek_img.jpg)')) &&
        $(teamMemberName).addClass("width");

       }

    else {
        ($(photo[0]).css('backgroundImage','url(assets/img/Magda.png)') &&
        $(photo[1]).css('backgroundImage','url(assets/img/Agata.png)') &&
        $(photo[2]).css('backgroundImage','url(assets/img/Piotrek.png)')) &&
        $(teamMemberName).removeClass("width");
    }
});

$(socialSection).hover(function() {
    $(this).fadeTo("slow", 1);
}, function() {
    $(this).fadeTo("slow", 0)
});








