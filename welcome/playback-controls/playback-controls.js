import { MusicLibrary } from "../../music/music-library.js";
import {
    TogglePlay,
    NextTrack,
    PreviousTrack,
    ListenPlayback,
    ListenPause
} from "./playback-actions.js";

export const SetUpPlaybackControls = (container) => {
    const playButton = container.querySelector('[data-action="play"]');
    const playIcon = playButton.querySelector("img");
    const audio = container.querySelector("[data-audio]");
    const nextButton = container.querySelector('[data-action="next"]');
    const prevButton = container.querySelector('[data-action="previous"]');

    const tracks = MusicLibrary[0].tracks;
    let currentTrackIndex = 0;

    audio.addEventListener("play", () => {
        ListenPlayback(playIcon);
    });

    audio.addEventListener("pause", () => {
        ListenPause(playIcon);
    });

    playButton.addEventListener("click", () => {
        TogglePlay(audio);
    });

    nextButton.addEventListener("click", () => {
        currentTrackIndex = NextTrack(
            audio,
            tracks,
            currentTrackIndex
        );
    });

    prevButton.addEventListener("click", () => {
        currentTrackIndex = PreviousTrack(
            audio,
            tracks,
            currentTrackIndex
        );
    });
};
