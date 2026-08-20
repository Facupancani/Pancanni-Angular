//** ABRIR Y CERRAR MENU DESPLEGABLE */
// Toggle simple por clases: el CSS se encarga de las transiciones
// (antes esto animaba cada barra a mano con keyframes distintas para abrir/cerrar).
(function () {
    var burger = document.getElementById('burgerNav');
    var menu = document.getElementById('menu-desp');
    var menuText = document.getElementById('menu-text1');
    var overlay = document.getElementById('overlay');
    var isOpen = false;

    function setMenu(open) {
        isOpen = open;
        burger.classList.toggle('is-open', open);
        menu.classList.toggle('is-open', open);
        overlay.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
        menuText.textContent = open ? 'Cerrar' : 'Menu';
    }

    function toggleMenu() {
        setMenu(!isOpen);
    }

    burger.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', function () {
        setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen) {
            setMenu(false);
            burger.focus();
        }
    });
})();

//** BUSCADOR */
// Filtra las cards de categorías por coincidencia de texto contra el título de cada una.
(function () {
    var wrap = document.querySelector('.search-wrap');
    var btn = wrap.querySelector('.search-btn');
    var input = document.getElementById('search-input');
    var cards = Array.prototype.slice.call(document.querySelectorAll('#categories-container .categorie-card'));
    var emptyMsg = document.getElementById('search-empty');
    var isOpen = false;

    function normalize(text) {
        return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }

    function filterCards(query) {
        var q = normalize(query.trim());
        var visibleCount = 0;
        cards.forEach(function (card) {
            var title = card.querySelector('.card-title');
            var match = !q || normalize(title.textContent).indexOf(q) !== -1;
            card.classList.toggle('is-hidden', !match);
            if (match) visibleCount++;
        });
        emptyMsg.hidden = !q || visibleCount > 0;
    }

    function setSearch(open) {
        isOpen = open;
        wrap.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        input.hidden = !open;
        if (open) {
            input.focus();
        } else {
            input.value = '';
            filterCards('');
        }
    }

    btn.addEventListener('click', function () {
        setSearch(!isOpen);
    });

    input.addEventListener('input', function () {
        filterCards(input.value);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen) {
            setSearch(false);
            btn.focus();
        }
    });
})();
