var carousel = function carousel() {
    var slidePhoto = document.getElementsByClassName("slide-photo-box");
    var slideMiniature = document.getElementsByClassName('.slider-image');

    function slidePhotos() {
        for (var i = 1; i < slidePhoto.length; i++) {
            slidePhoto[i].style.display = "none";
        }

    }
    slidePhotos();
};

carousel();










// var slideIndex = 1;
// showPhotos(slideIndex);
//
// function currentDiv(num) {
//     showPhotos(slideIndex = num);
// }
//
// function showPhotos(num) {
//     var slidePhoto = document.getElementsByClassName("slide-photo-box");
//     var slideMiniature = document.getElementsByClassName("slider-image");
//     if (num > slidePhoto.length) {slideIndex = 0}
//     if (num < 1) {slideIndex = slidePhoto.length}
//     for (var i = 0; i < slidePhoto.length; i++) {
//         slidePhoto[i].style.display = "none";
//     }
//     for (i = 0; i < slideMiniature.length; i++) {
//         slideMiniature[i].className = slideMiniature[i].className.replace(" slider-image-miniature", "");
//     }
//     slidePhoto[slideIndex-1].style.display = "block";
//     slideMiniature[slideIndex-1].className += " slider-image-miniature";
// }

// carousel();
//
// function carousel() {
//     var slidePhoto = document.getElementsByClassName("slide-photo-box");
//     slideIndex++;
//     for (var i = 0; i < slidePhoto.length; i++) {
//         slidePhoto[i].style.display = "none";
//     }
//     if (slideIndex > slidePhoto.length) {slideIndex = 1}
//     slidePhoto[slideIndex -1].style.display = "block";
//     setInterval(carousel, 5000);
// }




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