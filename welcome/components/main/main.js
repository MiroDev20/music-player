import { Button } from "../button/button.js";

export const Main = () => {
    const main = document.createElement("main");

    main.className = "main";
    main.innerHTML = `
        <section
            class="main__player-container"
            aria-label="Reproductor de audio">
            <figure class="main__audio-figure">
                <img
                    class="main__audio-mask"
                    src="../assets/images/ame.jpeg"
                    alt="Carátula del álbum Ame">
                <figcaption class="main__album-name">Ame</figcaption>
            </figure>
            <figure>
                <audio
                    class="main__audio"
                    data-audio
                    preload="metadata"
                    src="../assets/audios/everything-is-cold.mpeg">
                </audio>
                <input
                    class="main__progress-bar"
                    aria-label="Barra de progreso de audio"
                    data-progression
                    min="0"
                    max="100"
                    type="range"
                    value="0">
                <figcaption>
                    <h1 class="main__audio-name">Everything is Cold</h1>
                </figcaption>
            </figure>
            <fieldset
                class="main__audio-controls"
                data-audio-controls>
                <legend class="main__control-description">
                    Controles de reproducción
                </legend>
            </fieldset>
        </section>
    `;

    const controls = main.querySelector("[data-audio-controls]");
    const buttons = [
        ["repeat", "../assets/icons/repeat.png", "Activar repetición"],
        ["previous", "../assets/icons/back.png", "Canción anterior"],
        ["play", "../assets/icons/play.png", "Reproducir"],
        ["next", "../assets/icons/next.png", "Canción siguiente"],
        ["shuffle", "../assets/icons/shuffle.png", "Activar modo aleatorio"]
    ];

    buttons.forEach(([action, source, alternative]) => {
        controls.append(Button({ action, source, alternative }));
    });

    return main;
};
