import { TogglePlay, ListenPlayback, ListenPause } from "./playback-actions.js";

export const SetUpPlaybackControls = (container) => {
    const playButton = container.querySelector('[data-action="play"]');
    const playIcon = playButton.querySelector('img');
    const audio = container.querySelector('[data-audio]');

    audio.addEventListener('play', () => ListenPlayback(playIcon));
    audio.addEventListener('pause', () => ListenPause(playIcon));

    playButton.addEventListener('click', () => {
        audio.paused ? TogglePlay(audio) : TogglePlay(audio);
    });
}
