export const Button = ({ action, source, alternative }) => {
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.type = "button";
    button.className = "main__audio-control";
    button.dataset.action = action;

    image.className = "main__control-icon";
    image.src = source;
    image.alt = alternative;

    button.append(image);

    return button;
};
