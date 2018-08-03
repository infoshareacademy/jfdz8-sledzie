var appNode = document.getElementById('app');
var thanos = document.createElement('div');
var cards = 'hulk spiderman thor punisher flash deadpool ironman captainamerica wolverine '.repeat(2).split(' ');
cards.pop();
var cardElements;
var numberOfCards = cards.length;
var clickedCard = '';
var selectedCards = [];
var eliminated;
var setStartTimer = new Date().getTime();
var gameResult = 0;
var timeResult;
var instructionPopUp = document.createElement('div');

addExtraHeroesToChangeGameDifficulty();
helpThanos();
startGame();
initResetGameControls();

function startGame() {
    var playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.addEventListener('click', function () {
        thanos.classList.remove('welcomeThanos');
        appNode.removeChild(instructionPopUp);

        if (cardElements === undefined) {
            createBoard();
            shuffleCards(cards);
            assignHeroesClasses(cards);
            bindListenersToCards();
        } else {
            return alert('Jeśli chcesz zagrać od nowa, kliknij przycisk "RESET"');
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
    numberOfCards = addExtraHeroesToChangeGameDifficulty().length;
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
    var numberOfPairsCards = numberOfCards / 2;
    if (gameResult === numberOfPairsCards) {
        console.log('GAME OVER');
        playerResult();
    }
}

function playerResult() {
    var gameOverTime = new Date().getTime();
    var gameTime = (gameOverTime - setStartTimer) / 1000;
    timeResult = 'Twój wynik to: ' + gameTime + ' sekund!' + '\n'+ 'Kliknij RESET, aby zagrać jeszcze raz.';
    showPopUp();
}

function showPopUp() {
    var popUp = document.createElement('div');
        popUp.classList.add('popup-visible');
        appNode.appendChild(popUp);

    var resultInfo = document.createElement('p');
        popUp.appendChild(resultInfo);
        resultInfo.innerText = timeResult;

    var resetPopUpBtn = document.createElement('button');
        resetPopUpBtn.classList.add('popup-reset-btn');
        resetPopUpBtn.innerText = 'RESET';
        popUp.appendChild(resetPopUpBtn);

    resetPopUpBtn.addEventListener('click', function() {
        location.reload()
    })
}

function helpThanos() {
        appNode.appendChild(thanos);
        thanos.classList.add('welcomeThanos');
        var thanosWords = document.createElement('div');
            thanos.appendChild(thanosWords);
            thanosWords.classList.add('thanosGreeting');
            thanosWords.innerHTML = 'Jestem przeokrutny i super pancerny Thanos! Jednak pomimo swojej zajebistości czasem ' +
              'i ja potrzebuje pomocy. Zostań moim wiernym sługą i pomóż mi zgładzić ziemskich herosów, a w zamian uczynię Ciebie ' +
              'bogatym i sławnym. Kliknij "PLAY" i rozwal ich wszystkich znajdując pary tych słabełuszy!';
        var readMoreBtn = document.createElement("button");
            readMoreBtn.classList.add('read-more');
            readMoreBtn.innerText = 'Jak grać';
            thanos.appendChild(readMoreBtn);

        var instructionTxt =
            'Cieszymy się, że poświęciłeś swój czas na zapisanie się na premierę naszej aplikacji, która ruszy już niebawem!\n' +
            'Do tego czasu zapraszamy Cię do SuperMemoGame!\n' +
            '\n' +
            'Jak zacząć?\n' +
            'To proste! Kliknij przycisk PLAY znajdujący się u góry ekranu.\n' + '\n' +
            'Na ekranie pojawi się plansza z kartami wyglądającymi identycznie, ale... tak naprawdę musisz znaleźć pary Superbohaterów.\n' +
            'Pamiętaj, że w jednym ruchu odsłaniasz dwie karty. Jeśli znajdziesz te same pary, zostaną one odkryte, a Ty zaczniesz szukać nowej pary.\n' +
            'Nie zawsze udaje się szybko łączyć karty ale dobrze wiesz, że nie od razu Mediolan zbudowano :) \n' + '\n' +
            'Im więcej prób tym lepiej radzisz sobie z zapamiętywaniem.\n' +
            '\n' +
            'Gdy zbierzesz wszystkie karty dowiesz się, w jakim czasie udało Ci się znaleźć wszystkich superbohaterów. Zmotywuje Cię to do bycia coraz lepszym!\n' +
            'Możesz także wybrać poziom gry łatwiejszy lub trudniejszy.\n' +
            '\n' +
            'Pamiętaj karty rozmieszczane są losowo, z każdym rozpoczęciem gry w innej kombinacji, zatem możesz ćwiczyć swoją pamięć bez końca! ' + '\n' + 'Powodzenia!';

        appNode.appendChild(instructionPopUp);
        instructionPopUp.classList.add('instruction-popup');
        instructionPopUp.innerText = instructionTxt;

          var exitBtn = document.createElement('button');
          instructionPopUp.appendChild(exitBtn);
          exitBtn.classList.add('exit-btn');
          exitBtn.innerText = 'ZAMKNIJ';

        readMoreBtn.addEventListener('click', function () {
          instructionPopUp.classList.toggle('instruction-popup-fade');
          appNode.removeChild(thanos)
        });

        exitBtn.addEventListener('click', function () {
          instructionPopUp.classList.remove('instruction-popup-fade');
          instructionPopUp.classList.add('instruction-popup')
          appNode.appendChild(thanos)
        });
}

function addExtraHeroesToChangeGameDifficulty() {
    var gameDifficulty = document.querySelector('select[name="select-difficulty"]');
    gameDifficulty.addEventListener('change', function() {
        if (gameDifficulty.options[gameDifficulty.selectedIndex].value === 'hard') {
        cards.push('antman', 'doctorstrange', 'blackpanther', 'antman', 'doctorstrange', 'blackpanther');
        }
    }); return cards;
}






