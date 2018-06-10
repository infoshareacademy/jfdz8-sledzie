var cookiesInitialize = function() {
    var container = document.createElement('div');
    var link = document.createElement('a');
    var hulkContainer = document.createElement('div');

    container.id = 'cookies_info';
    container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6>' +
        '<p>Używa informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu ze strony. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';
    hulkContainer.id = 'hulk_container';
    link.href = '#';
    link.title = 'Zamknij';
    link.innerHTML = 'x';

    function clickHandler(e) {

        document.body.removeChild(hulkContainer);
        document.body.removeChild(container);
        localStorage.setItem('marvel-cookies', '1');
    }

    link.addEventListener('click', clickHandler);

    container.appendChild(link);
    document.body.appendChild(container);
    document.body.appendChild(hulkContainer);

    return true;
};

if (!localStorage.getItem('marvel-cookies')) {
    cookiesInitialize();
}
