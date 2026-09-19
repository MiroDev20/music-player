import {
    PlayAudio,
    PauseAudio,
    ChangeAudio
} from "./audio-player.js";

export const TogglePlay = (audio) => {
    if (audio.paused) {
        PlayAudio(audio);
    } else {
        PauseAudio(audio);
    }
};

export const NextTrack = (audio, tracks, currentIndex) => {
    const nextIndex = (currentIndex + 1) % tracks.length;

    ChangeAudio(audio, tracks[nextIndex]);
    PlayAudio(audio);

    return nextIndex;
};

export const PreviousTrack = (audio, tracks, currentIndex) => {
    const previousIndex =
        (currentIndex - 1 + tracks.length) % tracks.length;

    ChangeAudio(audio, tracks[previousIndex]);
    PlayAudio(audio);

    return previousIndex;
};

export const ListenPlayback = (playIcon) => {
    playIcon.src = "../assets/icons/pause.png";
    playIcon.alt = "Pausar";
};

export const ListenPause = (playIcon) => {
    playIcon.src = "../assets/icons/play.png";
    playIcon.alt = "Reproducir";
};
