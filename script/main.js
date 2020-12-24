import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll(".player-btn"),
      playerBlock = document.querySelectorAll(".player-block"),
      audioPlayer = document.querySelector(".audio-player"),
      videoPlayer = document.querySelector(".video-player"),
      audio = document.querySelector(".audio"),
      audioButtonPlay = document.querySelector(".audio-button__play");



const temp = document.querySelector(".temp");

const deactivationPlayer = () => {
    temp.style.display = "none";
    playerBtn.forEach(item => item.classList.remove("active"));
    playerBlock.forEach(item => item.classList.remove("active"));
    
}


playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add("active");
        playerBlock[i].classList.add("active");
        console.log("Музыка " + audioPlayer.paused);
        console.log(audioPlayer.paused==false);
        console.log("Видео" + videoPlayer.paused);
        console.log(videoPlayer.paused==false);
        if (videoPlayer.paused==false || audioPlayer.paused==false) {
            videoPlayer.pause();
            audioPlayer.pause();
            audio.classList.remove("play");
            audioButtonPlay.classList.add("fa-play");
            audioButtonPlay.classList.remove("fa-pause");
        }
        
        
    })
});

musicPlayerInit();
videoPlayerInit();
radioPlayerInit();