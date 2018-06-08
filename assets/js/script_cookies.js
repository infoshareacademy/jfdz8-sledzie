(function() {
    var container = document.createElement('div'),
        link = document.createElement('a'),
        hulkContainer = document.createElement('div');


    container.setAttribute('id', 'cookies_info');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6>' +
        '<p>Używa informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu ze strony. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';
    hulkContainer.setAttribute('id', 'hulk_container');

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        document.body.removeChild(hulkContainer);
        document.body.removeChild(container);

    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);
    document.body.appendChild(hulkContainer);

    return true;
})();