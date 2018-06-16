(function () {
    var navSections = document.querySelectorAll('section');
    var navItems = document.querySelectorAll('li');
    var navBar = document.querySelector('.navigation');

    function getElemDistance(navSections) {
        var location = 0;
        if (navSections.offsetParent) {
            do {
                location += navSections.offsetTop;
                navSections = navSections.offsetParent;
            } while (navSections);
        }
        return location >= 0 ? location : 0;
    }


    function navHighlight() {

    }
    navHighlight();

}());
