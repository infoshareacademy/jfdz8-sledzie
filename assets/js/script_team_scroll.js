
var windowDistance;
var team = document.querySelector("#team");
var teamPhotos = document.querySelectorAll(".team__photo");
var topDistance = team.offsetTop;
console.log(topDistance);

window.addEventListener("scroll", sectionAnimation);

function sectionAnimation () {
    if (windowDistance === topDistance) {
        teamPhotos.forEach(function (element) {
            element.classList.add("active--agata", "active--piotrek", "active--magda")
        })
    }
}
