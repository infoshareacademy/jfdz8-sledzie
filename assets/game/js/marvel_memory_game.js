var appNode = document.getElementById('app');
var cardsNode;
var cards = 'hulk spiderman thor punisher flash deadpool ironman captainamerica wolverine '.repeat(2).split(' ');
cards.pop();
var cardElements;
var numberOfCards = cards.length;
var clickedCard = '';
var selectedCards = [];
var eliminated;
var numberOfPairsCards = numberOfCards / 2;
var setStartTimer = new Date().getTime();
var gameResult = 0;
var timeResult;

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

    if (selectedCards.length === 0) {
        selectedCards[0] = clickedCard;
        return
    } else {
        cardElements.forEach(function (cardElements) {
            cardElements.removeEventListener('click', showCard);
            selectedCards[1] = clickedCard;
        })
    }

    compareCards();

    function compareCards() {
        setTimeout(function () {
            if (selectedCards[0].className === selectedCards[1].className) {
                console.log('właściwa para');
                selectedCards.forEach(function (clickedCard) {
                    clickedCard.classList.add('outOfGame');
                    eliminated = document.createElement('div');
                    clickedCard.appendChild(eliminated);
                    eliminated.classList.add('eliminated');
                });
                gameResult = gameResult + 1;
                gameOver();
                playerResult();
            } else {
                console.log('pudło');
                selectedCards.forEach(function (clickedCard) {
                    clickedCard.classList.add('cardObverse');
                })
            }
            clickedCard = '';
            selectedCards = [];
            cardElements.forEach(function(cardElement) {
                cardElement.addEventListener('click', showCard);
            })
        }, 1000)
    }
}

function gameOver() {
    if (gameResult === numberOfPairsCards) {
        console.log('GAME OVER');
    }
}

function playerResult() {
    var gameOverTime = new Date().getTime();
    var gameTime = (gameOverTime - setStartTimer)/1000;
    timeResult = 'Twój wynik to: ' + gameTime;
    console.log(timeResult);
    alert('Czas gry ' + gameTime);
}





