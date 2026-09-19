import { PlayAudio, PauseAudio } from "./audio-player.js";

export const TogglePlay = (audio) => {
    audio.paused ? PlayAudio(audio) : PauseAudio(audio);
}

export const ListenPlayback = (playIcon) => {
    playIcon.src = '../assets/icons/pause.png';
    playIcon.alt = 'Pausar';
};

export const ListenPause = (playIcon) => {
    playIcon.src = '../assets/icons/play.png';
    playIcon.alt = 'Reproducir';
};
