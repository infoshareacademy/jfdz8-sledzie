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

var activeCard = "";
var activeCardsPair = [];
var allCardsPairs = cards.length
var gameResult = 0;
var startTime = new Date().getTime();
var endTime;
var gameTime;

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
        card.addEventListener("click", clickCard);
    });
}


function clickCard () {
    activeCard = this;
    if(activeCard === activeCardsPair[0]) {
        return;
    }
    activeCard.classList.remove("hidden");
    if (activeCardsPair.length === 0) {
        activeCardsPair[0] = activeCard;
    } else {
        cards.forEach(function (card) {
            card.removeEventListener("click", clickCard)
        });
        activeCardsPair[1] = activeCard;
        setTimeout(function(){
            if (activeCardsPair[0].className === activeCardsPair[1].className) {
                activeCardsPair.forEach(function (pairActiveCard) {
                    pairActiveCard.classList.add("pair");
                    gameResult++;
                    activeCardsPair = activeCardsPair.filter(function (pairActiveCard) {
                        !pairActiveCard.classList.contains("pair")
                    });

                    if (gameResult === allCardsPairs) {
                        alert("You are the master of the Universe!");
                    }
                });
            } else {
                activeCardsPair.forEach(function(pairActiveCard) {
                    pairActiveCard.classList.add("hidden")
                });
            }
            activeCard = "";
            activeCardsPair.length = 0;
            cards.forEach(function(card) {
                card.addEventListener("click", clickCard)
            });
        }, 1000);
    }
}