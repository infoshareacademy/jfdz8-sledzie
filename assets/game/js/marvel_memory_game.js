var appNode = document.getElementById('app');
var cardsNode;
var cardBonus;
var cards = 'hulk spiderman batman superman flash deadpool ironman captainamerica wolverine '.repeat(2).split(' ');
var numberOfCards = numberOfCards = cards.length;


function createBoard() {
    for (var i = 0; i < numberOfCards; i += 1) {
        cardsNode = document.createElement('div');
        cardBonus = document.createElement('img');

        appNode.appendChild(cardsNode);
        cardsNode.classList.add('card', 'cardObverse');
        cardsNode.appendChild(cardBonus);

        }
    }

createBoard();

function shuffleCards(cardsToShuffle) {
    for (var i = cardsToShuffle.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var cardsAfterShuffle = cardsToShuffle[i];
        cardsToShuffle[i] = cardsToShuffle[j];
        cardsToShuffle[j] = cardsAfterShuffle;
    }
    return cardsToShuffle;
}
shuffleCards(cards);

function firstDraw() {
    cardsNode.forEach(function() {
        cardsNode.addEventListener("click", function() {
            cardsNode.classList.remove('cardObverse');
            return cards[Math.floor(Math.random()*cards.length)];

        })
    })
    }

firstDraw();

function secondDraw(cards) {
    return cards[Math.floor(Math.random()*cards.length)];
}
secondDraw(cards);


