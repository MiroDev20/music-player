export const Header = () => {
    const header = document.createElement("header");

    header.className = "header";
    header.innerHTML = `
        <figure class="header__logo-container">
            <img
                class="header__isotype"
                src="../assets/icons/wave-sound.png"
                alt="Isotipo de la marca">
            <figcaption class="header__logotype">Music Player</figcaption>
        </figure>
        <button
            class="header__button"
            type="button"
            aria-label="Mostrar lista de reproducción">
            <img
                class="header__playlist-icon"
                src="../assets/icons/playlist.png"
                alt="Icono de playlist">
        </button>
    `;

    return header;
};
