var carousel = function carousel() {

    var slideMiniatures = [];
    var slidePhotos = document.getElementsByClassName('slide-photo-box');
    var slidePhoto = document.getElementsByClassName('slide-photo');

    for (var i = 0; i < slidePhotos.length; i++) {
        if (slidePhotos[i].parentNode.className === 'slider-photos') {
                slideMiniatures.push(slidePhotos[i]);
        }
    }

    for (var j = 0; j < slideMiniatures.length; j++) {
        slideMiniatures[j].addEventListener('click', function(event) {
            for (var z = 0; z < slidePhoto.length; z++) {
                slidePhoto[z].style.display = 'none';
            }
            event.target.slidePhoto[z].style.display = 'block';
        })
    }

    slideMiniatures[0].click();

};
carousel();





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