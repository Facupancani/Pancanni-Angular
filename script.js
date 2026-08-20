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
        burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        menuText.textContent = open ? 'cerrar' : 'menu';
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
