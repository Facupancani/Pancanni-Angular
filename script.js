//** ABRIR Y CERRAR MENU DESPLEGABLE */
// Toggle simple por clases: el CSS se encarga de las transiciones
// (antes esto animaba cada barra a mano con keyframes distintas para abrir/cerrar).
(function () {
    var burger = document.getElementById('burgerNav');
    var menu = document.getElementById('menu-desp');
    var menuText = document.getElementById('menu-text1');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('menu-close');
    var isOpen = false;

    function setMenu(open) {
        isOpen = open;
        burger.classList.toggle('is-open', open);
        menu.classList.toggle('is-open', open);
        overlay.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
        menuText.textContent = open ? 'Cerrar' : 'Menu';
        // Mientras el panel está fuera de pantalla, sus botones no deben ser alcanzables con Tab.
        menu.inert = !open;
    }

    function toggleMenu() {
        setMenu(!isOpen);
    }

    burger.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', function () {
        setMenu(false);
    });

    closeBtn.addEventListener('click', function () {
        setMenu(false);
        burger.focus();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen) {
            setMenu(false);
            burger.focus();
        }
    });
})();

//** BUSCADOR */
// El input vive siempre en la nav (icono + placeholder "Buscar"); filtra las
// cards de categorías por coincidencia de texto contra el título de cada una.
(function () {
    var input = document.getElementById('search-input');
    var cards = Array.prototype.slice.call(document.querySelectorAll('#categories-container .categorie-card'));
    var emptyMsg = document.getElementById('search-empty');

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

    input.addEventListener('input', function () {
        filterCards(input.value);
    });

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            input.value = '';
            filterCards('');
            input.blur();
        }
    });
})();

//** POPOVERS DE FAVORITOS / CARRITO / CUENTA */
// Contenido de muestra ("mock"): no hay backend, solo demuestran la interacción.
(function () {
    var popovers = Array.prototype.slice.call(document.querySelectorAll('.nav-popover'));

    function closeAll(exceptPopover) {
        popovers.forEach(function (pop) {
            if (pop === exceptPopover) return;
            pop.querySelector('.icon-btn').setAttribute('aria-expanded', 'false');
            pop.querySelector('.popover-panel').classList.remove('is-open');
        });
    }

    popovers.forEach(function (pop) {
        var trigger = pop.querySelector('.icon-btn');
        var panel = pop.querySelector('.popover-panel');

        trigger.addEventListener('click', function (event) {
            event.stopPropagation();
            var open = !panel.classList.contains('is-open');
            closeAll(open ? pop : null);
            trigger.setAttribute('aria-expanded', String(open));
            panel.classList.toggle('is-open', open);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-popover')) {
            closeAll(null);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeAll(null);
        }
    });
})();
