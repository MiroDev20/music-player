export const PlayAudio = (audio) => {
    return audio.play();
};

export const PauseAudio = (audio) => {
    audio.pause();
};

export const ChangeAudio = (audio, track) => {
    audio.src = track.audio;
};
