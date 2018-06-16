(function () {
    var allAnchors = document.querySelectorAll('.navigation-list [href^="#"]');
    var getElemDistances = [];

    allAnchors.forEach(function (anchor) {
        var selector = anchor.getAttribute('href');
        try {
            var getElemDistance = document.querySelector(selector);
            getElemDistances.push(getElemDistance);
        } catch (e) {
            //skip
        }
    });

    window.addEventListener('scroll', function() {
        var offset = window.pageYOffset;
        getElemDistances.forEach(function (getElemDistance, index) {
            var classList = allAnchors[index].classList;
            if (getElemDistance.offsetTop <= offset) {
              classList.add('active');
            } else {
                classList.remove('active');
            }
        });

        document.querySelectorAll('.active').forEach(function (element, index, allElements) {
            if (index === allElements.length - 1) {
                return;
            }
            element.classList.remove('active')
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
