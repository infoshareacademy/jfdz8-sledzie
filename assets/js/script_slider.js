(function () {
    var slideMiniatures = document.querySelectorAll('.slider-item');
    var slidePhotos = document.querySelectorAll('.slide-photo');

    slideMiniatures.forEach(function (item, index) {
        item.addEventListener('click', makeClickHandler(index))
    });

    slideMiniatures[0].click();

    function makeClickHandler(index) {
        return function () {
            slidePhotos.forEach(function (photo) {
                photo.style.display = 'none';
            });

            slidePhotos[index].style.display = 'block';
        }
    }
}());

(function () {
    var slideMiniatures = document.querySelectorAll('.slider-item');
    var index = 0;
    var carouselInterval = setInterval(function () {
        index = (index + 1) % slideMiniatures.length;
        slideMiniatures[index].click()
    }, 5000);

    function stopCarousel () {
        for (var i = 0; i < slideMiniatures.length; i++) {
            slideMiniatures[i].addEventListener('click', function () {
                return clearInterval(carouselInterval);
            })
        }
    }
    stopCarousel();


}());


$(".box1").hover(function() {
    $(".show1").slideDown(500);
}, function() {
    $(".show1").slideUp(500);
});

$(".box2").hover(function() {
    $(".show2").slideDown(500);
}, function() {
    $(".show2").slideUp(500);
});

$(".box3").hover(function() {
    $(".show3").slideDown(500);
}, function() {
    $(".show3").slideUp(500);
});