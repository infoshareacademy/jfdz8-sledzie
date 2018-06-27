var appNode = document.getElementById('app');
var thanos = document.createElement('div');
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

addExtraHeroesToChangeGameDifficulty();
helpThanos();
startGame();
initResetGameControls();

function startGame() {
    var playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.addEventListener('click', function () {
        thanos.classList.remove('welcomeThanos');
        thanos.innerHTML = 'Eliminuj bohaterów znajdując te same pary kart!';
        if (cardElements === undefined) {
            createBoard();
            shuffleCards(cards);
            assignHeroesClasses(cards);
            bindListenersToCards();
        } else {
            return alert('Jeśli chcesz zagrać od nowa, naciśniej przycisk "RESET"');
        }
    });

}

function initResetGameControls() {
    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        location.reload();
    })
}

function createBoard() {
    var cardsNode;
    for (var i = 0; i < numberOfCards; i += 1) {
        cardsNode = document.createElement('div');
        appNode.appendChild(cardsNode);
        cardsNode.classList.add('card');
    }
}

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
}

function bindListenersToCards() {
    setTimeout(function () {
        cardElements.forEach(function (cardElement) {
            cardElement.classList.add('cardObverse');
            cardElement.addEventListener('click', showCards);
        })
    }, 2000)
}

function showCards() {
    clickedCard = this;

    if (clickedCard === selectedCards[0]) return;
    clickedCard.classList.remove('cardObverse');

    if (selectedCards.length === 0) {
        selectedCards[0] = clickedCard;
        return
    } else {
        cardElements.forEach(function (cardElements) {
            cardElements.removeEventListener('click', showCards);
            selectedCards[1] = clickedCard;
        })
    }
    compareCards();
}

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
            cardElements = Array.from(cardElements).filter(function (cardElement) {
                return !cardElement.classList.contains('outOfGame');
            });
            gameOver();
        } else {
            console.log('pudło');
            selectedCards.forEach(function (clickedCard) {
                clickedCard.classList.add('cardObverse');
            })
        }
        clickedCard = '';
        selectedCards = [];
        cardElements.forEach(function (cardElement) {
            cardElement.addEventListener('click', showCards);
        })
    }, 1000)
}

function gameOver() {
    if (gameResult === numberOfPairsCards) {
        console.log('GAME OVER');
        playerResult();
    }
}

function playerResult() {
    var gameOverTime = new Date().getTime();
    var gameTime = (gameOverTime - setStartTimer) / 1000;
    timeResult = 'Twój wynik to: ' + gameTime;
    console.log(timeResult);
    alert('Czas gry ' + gameTime);
}

function helpThanos() {
        appNode.appendChild(thanos);
        thanos.classList.add('welcomeThanos');
        var thanosWords = document.createElement('div');
        thanos.appendChild(thanosWords);
        thanosWords.classList.add('thanosGreating');
        thanosWords.innerHTML = 'Jestem przeokrutny i super pancerny Thanos! Jednak pomimo swojej zajebistości czasem i ja potrzebuje pomocy. Zostań moim wiernym sługą i pomóż mi zgładzić ziemskich herosów, a w zamian uczynię Ciebie bogatym i sławnym. Naciśnij "PLAY" i rozwal ich wszystkich znajdując pary tych słabełuszy!';
}

function addExtraHeroesToChangeGameDifficulty() {
    var gameDifficulty = document.querySelector('select[name="select-difficulty"]');
    gameDifficulty.addEventListener('change', function() {
        if (gameDifficulty.options[gameDifficulty.selectedIndex].value === 'hard') {
        cards.push('antman', 'doctorstrange', 'blackpanther');
        }
    }); return cards;
}






