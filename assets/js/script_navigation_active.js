(function() {
    var section = document.querySelectorAll("section");
    var sections = {};
    var i = 0;

    section.forEach(function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.addEventListener("scroll", function(e) {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    });
}) ();
