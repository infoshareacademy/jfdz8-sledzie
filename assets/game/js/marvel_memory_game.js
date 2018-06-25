var appNode = document.getElementById('app');
var cardsNode;
var cards = 'hulk spiderman thor punisher flash deadpool ironman captainamerica wolverine '.repeat(2).split(' ');
cards.pop();
var cardElements;
var numberOfCards = cards.length;
var numberOfPairsCards = numberOfCards/2;
var timer = new Date().getTime();
var selectedCards = [];
var gameResult = 0;

function createBoard() {
    for (var i = 0; i < numberOfCards; i += 1) {
        cardsNode = document.createElement('div');
        cardBonus = document.createElement('img');

        appNode.appendChild(cardsNode);
        cardsNode.classList.add('card');
        cardsNode.appendChild(cardBonus);
    }
    shuffleCards(cards);
    assignHeroesClasses(cards);

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

function assignHeroesClasses(classesArray) {
    cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function (cardElement, index) {
        cardElement.classList.add(classesArray[index]);
    });

    setTimeout(function () {
        cardElements.forEach(function (cardElement) {
            cardElement.classList.add('cardObverse');
            showCard();
        })
    }, 2000)
}

function showCard() {
    cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function (cardElement) {
        cardElement.addEventListener("click", function () {
            cardElement.classList.remove('cardObverse');
        })
    })
}

function compareCard() {

}
compareCard();


if(selectedCards.length === 0) {
    selectedCards[0] = showCard();
} else {
    cardElements.forEach(function () {
        cardElements.removeEventListener('click', showCard());
    })
}