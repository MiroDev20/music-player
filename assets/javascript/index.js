// 🏙️ ARCH: Todos los elementos relacionados están juntos, lo que refleja su relación en la interfaz.
/**
 * Objeto que contiene referencias a elementos del DOM relacionados con el reproductor de audio.
 * @namespace
 * @property {HTMLAudioElement} audio - Elemento de audio, seleccionado por el atributo `[data-audio]`.
 * @property {HTMLElement} bar - Barra de progreso, seleccionada por el atributo `[data-progression]`.
 * @property {HTMLElement} repeat - Botón de repetición, seleccionado por el atributo `[data-action="repeat"]`.
 * @property {HTMLElement} back - Botón de anterior canción, seleccionado por el atributo `[data-action="previous"]`.
 * @property {HTMLElement} play - Botón de reproducir/pausar, seleccionado por el atributo `[data-action="play"]`.
 * @property {HTMLElement} next - Botón de siguiente canción, seleccionado por el atributo `[data-action="next"]`.
 * @property {HTMLElement} shuffle - Botón de mezcla aleatoria, seleccionado por el atributo `[data-action="shuffle"]`.
 */
const items = {
    audio   : document.querySelector('[data-audio]'),
    bar     : document.querySelector('[data-progression]'),
    repeat  : document.querySelector('[data-action="repeat"]'),
    back    : document.querySelector('[data-action="previous"]'),
    play    : document.querySelector('[data-action="play"] img'),
    next    : document.querySelector('[data-action="next"]'),
    shuffle : document.querySelector('[data-action="shuffle"]')
}

// 🔧 REFACTOR: mantener lógica condicional, pero con operadores ternarios
items.play.addEventListener(
    "click", () => {
        if (items.audio.paused) {
            items.audio.play();
            items.play.src="assets/icons/pause.png";
        }
        else {
            items.audio.pause();
            items.play.src="assets/icons/play.png"; 
        }
    }
);
