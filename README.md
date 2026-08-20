# Pancanni

Landing de e-commerce de moda hecha como pieza de UI para portfolio: HTML, CSS y JavaScript vanilla, sin frameworks ni build step. Nació como trabajo de facultad y se retomó para pulirla — no vende nada ni tiene backend, es una demo visual.

## Ver en vivo

`https://<tu-usuario>.github.io/Pancanni-Angular/` (GitHub Pages, sirve `index.html` desde la raíz).

## Correr en local

No requiere instalación ni dependencias. Cualquier servidor estático sirve, por ejemplo:

```bash
npx serve .
```

o abrir `index.html` con la extensión Live Server de VS Code. (Abrir el archivo directo con doble click también funciona, salvo que las fuentes `@font-face` no cargarán por la política de `file://` de algunos navegadores.)

## Stack

- HTML5 semántico
- CSS3 (Grid, Flexbox, `clamp()`, `aspect-ratio`, custom properties, `:focus-visible`)
- JavaScript vanilla (un único módulo IIFE en `script.js`, sin dependencias)
- Fuentes: Google Fonts (Playfair Display SC) + Futura self-hosted (`resources/fonts`)
- Imágenes en WebP, optimizadas

## Estructura

```
index.html
style.css
script.js
resources/
  fonts/    → familia Futura (8 pesos/itálicas)
  icos/     → íconos de la nav + favicon
  media/    → imágenes de categorías y hero, en .webp
```

## Decisiones de diseño / qué se pulió

Este proyecto arrancó como TP de facultad y tenía varios problemas reales que se corrigieron en esta pasada:

- **Grid de categorías que se cortaba**: las cards usaban un ancho fijo de 920px con `overflow-x: hidden` en el body, así que en pantallas de notebook (~1366px) la mitad de las categorías quedaba invisible sin scroll para llegar. Ahora el grid es `auto-fit` con `aspect-ratio`, responsive de verdad.
- **Menú hamburguesa reescrito**: la versión original animaba cada barra con `@keyframes` distintos para abrir/cerrar seteados a mano desde JS (y tenía un typo — `unrote3` vs `unrota3` — que rompía la animación de cierre). Ahora es un toggle de clase CSS con `transition`, más prolijo y sin el bug.
- **Accesibilidad básica**: el botón de menú, buscar y los íconos de la nav ahora son `<button>` reales con `aria-label`/`aria-expanded`, navegables por teclado, con cierre por `Escape` y estilos de foco visibles. Antes eran `div`s con `onclick`, invisibles para teclado y lectores de pantalla.
- **Cursor `pointer`** en todo lo clickeable (no había ninguna declaración `cursor` en el CSS original).
- **Tipografía Futura**: solo había un `@font-face` registrando el peso "Regular", aunque el proyecto trae 8 archivos de la familia (Light, Regular, Medium, Bold + itálicas) sin usar. Ahora los 8 pesos están declarados y aplicados donde corresponde.
- **Responsive real**: el sitio original era 100% a píxeles fijos (nav, menú, cards, footer) y se rompía por completo por debajo de ~1850px. Se agregaron `clamp()`, unidades relativas y un breakpoint mobile.
- **Rutas de fuentes**: `@font-face` usaba una ruta absoluta (`/resources/...`), que se rompe si el sitio se publica en un subdirectorio (como GitHub Pages de proyecto). Ahora son relativas.
- **Imágenes optimizadas**: las 6 imágenes usadas pasaron de ~9 MB combinados a ~680 KB convirtiéndolas a WebP y redimensionando al tamaño real de despliegue. También se eliminaron archivos sin referenciar en ningún lado del código: 3 imágenes de archivo (`LouisVGIANT.jpg`, `prada_destacada-3.jpg`, `HeroPancanni1_LE_auto_x2.jpg`, ~2.3 MB) que además eran fotos publicitarias reales de terceros y no correspondía dejarlas en un repo de portfolio, y 2 íconos muertos (`close.png`, `menu.png`) que no se usaban en ninguna vista.

## Alcance intencional (qué falta y por qué)

Es una pieza de **UI únicamente** — los botones "Explorar selección", el carrito, los íconos de nav y los ítems del menú no tienen funcionalidad ni ruteo real, y el copy (teléfono, mail, CUIT/VAT) es de relleno. Se mantiene así a propósito: el objetivo es mostrar maquetado y estilos, no un e-commerce funcional.
