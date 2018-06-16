(function () {
    var allAnchors = document.querySelectorAll('[href^=#]');
    var selector = anchor.getAttribute('href');
    var getElemDistances = [];
    var offsets = [];

    allAnchors.forEach(function () {
        anchor.getAttribute('href');
        var getElemDistance = document.querySelector(selector);
        getElemDistances.push(getElemDistance);
    });


    offsets = getElemDistances.map(function (getElemDistance) {
        return getElemDistance.offsetTop;
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
