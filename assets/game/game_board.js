var container = document.getElementById("board");

for (var i = 0; i < 16; i++) {
    var boardElements = document.createElement("div");
    boardElements.classList.add("board-element");
    container.appendChild(boardElements);
}

var cardsColors = ["grey", "grey","red", "red", "blue", "blue",
    "yellow", "yellow", "pink", "pink", "green", "green", "violet", "violet", "orange", "orange"];

var cards = document.querySelectorAll(".board-element");

function shuffle () {
    cards.forEach(function (card) {
        var position = Math.floor(Math.random() * cardsColors.length);
        card.classList.add(cardsColors[position]);
        cardsColors.splice(position, 1);
    })
}
//
// function clickCard () {
//     cards.forEach(function (card) {
//         card.classList.remove("hidden")
//     });
// }
//
// function onClick() {
//     cards.addEventListener("click", clickCard)
// }
//

function reverseCards () {
    cards.forEach(function (card) {
        card.classList.add("hidden")
    });
}

shuffle();
reverseCards();
onClick();