var appNode = document.getElementById('app');
var cardsNode;
var cards = 'hulk spiderman thor punisher flash deadpool ironman captainamerica wolverine '.repeat(2).split(' ');
cards.pop();
var cardElements;
var numberOfCards = cards.length;
var clickedCard = '';
var selectedCards = [];
var numberOfPairsCards = numberOfCards/2;
var timer = new Date().getTime();
var gameResult = 0;

function createBoard() {
    for (var i = 0; i < numberOfCards; i += 1) {
        cardsNode = document.createElement('div');

        appNode.appendChild(cardsNode);
        cardsNode.classList.add('card');
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
            cardElement.addEventListener('click', showCard);
        })
    }, 2000)
}

function showCard() {
    clickedCard = this;
    clickedCard.classList.remove('cardObverse');

    if(selectedCards.length === 0) {
        selectedCards[0] = clickedCard;
        return
    } else {
        cardElements.forEach(function (cardElements) {
            cardElements.removeEventListener('click', showCard);
        })
    }
}




    // cardElements = document.querySelectorAll('.card');
    // cardElements.forEach(function (cardElement) {
    //     cardElement.addEventListener("click", function () {
    //         cardElement.classList.remove('cardObverse');
    //     })
    // })





