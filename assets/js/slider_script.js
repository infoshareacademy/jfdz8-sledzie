var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var slideFoto = document.getElementsByClassName("slide-photo-box");
    var dots = document.getElementsByClassName("slider-image");
    if (n > slideFoto.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slideFoto.length}
    for (i = 0; i < slideFoto.length; i++) {
        slideFoto[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-image-miniature", "");
    }
    slideFoto[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider-image-miniature";
}


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