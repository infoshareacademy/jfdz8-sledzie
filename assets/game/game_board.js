var container = document.getElementById("board");

for (var i = 0; i < 16; i++) {
    var boardElement = document.createElement("div");
    boardElement.classList.add("board-element");
    container.appendChild(boardElement);
}

var cards = document.querySelectorAll(".board-element");

var cardIndex;
var cardsColors = ["grey", "grey","red", "red", "blue", "blue",
    "yellow", "yellow", "pink", "pink", "green", "green", "violet", "violet", "orange", "orange"];

shuffle();
hideCards();
showCard();

function shuffle () {
    cards.forEach(function (card) {
        cardIndex = Math.floor(Math.random() * cardsColors.length);
        card.classList.add(cardsColors[cardIndex]);
        cardsColors.splice(cardIndex, 1);
    })
}

function hideCards () {
    cards.forEach(function (card) {
        card.classList.add("hidden")
    });
}

function showCard () {
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.remove("hidden");
        })
    })
}


