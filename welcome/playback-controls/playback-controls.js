import { PlayAudio, PauseAudio } from "./audio-player.js"

export const SetUpPlaybackControls = (container) => {
    const playButton = container.querySelector('[data-action="play"]');
    const playIcon = playButton.querySelector('img')
    const audio = container.querySelector('[data-audio]');

    audio.addEventListener('play', () => {
        playIcon.src = '../assets/icons/pause.png';
        playIcon.alt = 'Pausar';
    })

    audio.addEventListener('pause', () => {
        playIcon.src = '../assets/icons/play.png';
        playIcon.alt = 'Reproducir';
    })

    playButton.addEventListener('click', () => {
        audio.paused ? PlayAudio(audio) : PauseAudio(audio);
    })
}
