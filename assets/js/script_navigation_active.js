(function () {
    var allAnchors = document.querySelectorAll('.navigation-list [href^="#"]');
    var sections = [];

    allAnchors.forEach(function (anchor) {
        var selector = anchor.getAttribute('href');
        try {
            var section = document.querySelector(selector);
            sections.push(section);
        } catch (e) {
            //skip
        }
    });

    window.addEventListener('scroll', function() {
        var offset = window.pageYOffset;
        sections.forEach(function (section, index) {
            var classList = allAnchors[index].classList;
            if (getElemDistance(section) <= offset) {
              classList.add('active');
            } else {
                classList.remove('active');
            }
        });

        document.querySelectorAll('.active').forEach(function (element, index, allElements) {
            if (index === allElements.length - 1) {
                return;
            }
            element.classList.remove('active');
        })
    });

    function getElemDistance( elem ) {
        var location = 0;
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop;
                elem = elem.offsetParent;
            } while (elem);
        }
        return location >= 0 ? location : 0;
    }


}());
