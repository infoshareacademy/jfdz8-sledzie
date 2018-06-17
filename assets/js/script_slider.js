(function () {
    var slideMiniatures = document.querySelectorAll('.slider-item');
    var slidePhotos = document.querySelectorAll('.slide-photo');
    var index = 0;
    var carouselInterval = setInterval(function () {
        index = (index + 1) % slideMiniatures.length;
        activateSlide(index)
    }, 5000);

    slideMiniatures.forEach(function (item, index) {
        item.addEventListener('click', makeClickHandler(index));
    });

    activateSlide(index);

    function activateSlide(index) {
        slidePhotos.forEach(function (photo) {
            photo.style.display = 'none';
        });

        slidePhotos[index].style.display = 'block';
    }

    function makeClickHandler(index) {
        return function () {
            activateSlide(index);
            clearInterval(carouselInterval);
        }
    }
}());


$(".js-box1").hover(function() {
    $(".js-show1").slideDown(500);
}, function() {
    $(".js-show1").slideUp(500);
});

$(".js-box2").hover(function() {
    $(".js-show2").slideDown(500);
}, function() {
    $(".js-show2").slideUp(500);
});

$(".js-box3").hover(function() {
    $(".js-show3").slideDown(500);
}, function() {
    $(".js-show3").slideUp(500);
});