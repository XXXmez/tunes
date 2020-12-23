export const musicPlayerInit = () => {
    const audioCover = document.querySelector(".audio-cover"),
        audioButtonPrev = document.querySelector(".audio-button__prev"),
        audioButtonPlay = document.querySelector(".audio-button__play"),
        audioButtonNext = document.querySelector(".audio-button__next"),
        audioTimePassed = document.querySelector(".audio-time__passed"),
        audioProgressTiming = document.querySelector(".audio-progress__timing"),
        audioTimeTotal = document.querySelector(".audio-time__total");
    const audioVolume = document.querySelector(".audio-volume");
    const audioPlayer = document.querySelector(".audio-player");

    audioVolume.addEventListener("input", () => {
        audioPlayer.volume = audioVolume.value / 100;
        console.log(audioPlayer.volume);
    });

    audioPlayer.volume = 0.5;

    audioVolume.value = audioPlayer.volume * 100;
}