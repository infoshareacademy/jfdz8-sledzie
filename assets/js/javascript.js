function handleNavigationEffect() {
    const scrollThreshold = 50;
    const $navigation = $('.desktop-navigation');

    $(this).scrollTop() > scrollThreshold ?
        $navigation.addClass('navigation-scroll') :
        $navigation.removeClass('navigation-scroll');
}

$(window).on('scroll', handleNavigationEffect);

$( ".hamburger" ).click(function() {
    $( ".hamburger" ).hide();
    $( ".navigation-items-list" ).slideToggle( "slow", function() {
        $( ".cross" ).show();
    });
});

$( ".cross" ).click(function() {
    $( ".cross" ).hide();
    $( ".navigation-items-list" ).slideToggle( "slow", function() {
        $( ".hamburger" ).show();
    });
});

$( ".navigation-items-list" ).click(function() {
    $( ".cross" ).hide();
    $( ".navigation-items-list" ).slideToggle( "slow", function() {
        $( ".hamburger" ).show();
    });
});