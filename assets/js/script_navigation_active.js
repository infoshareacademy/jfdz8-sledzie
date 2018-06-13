(function () {
    var navSections = document.querySelectorAll('section');

    function getElemDistance(navSections) {
        var location = 0;
        if (navSections.offsetParent) {
            do {
                location = location + navSections.offsetTop;
                navSections = navSections.offsetParent;
            } while (navSections);
        }
        return location >= 0 ? location : 0;
    }





}());
