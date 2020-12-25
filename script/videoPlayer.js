export const videoPlayerInit = () => {
    let videoPlayer = document.querySelector(".video-player"),
        cardTitle = document.querySelectorAll(".card-title");
    const videoButtonPlay = document.querySelector(".video-button__play"),
        videoButtonStop = document.querySelector(".video-button__stop"),
        videoTimePassed = document.querySelector(".video-time__passed"),
        videoProgress = document.querySelector(".video-progress"),
        videoTimeTotal = document.querySelector(".video-time__total"),
        videoFullScreen = document.querySelector(".video-full-screen"),
        videoVolume = document.querySelector(".video-volume"),
        videoNzt = document.querySelectorAll(".video-nzt"),
        videoContainer = document.querySelector(".video-container");

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoContainer.classList.add("pause");
            videoButtonPlay.classList.remove("fa-pause");
            videoButtonPlay.classList.add("fa-play");
        } else {
            videoContainer.classList.remove("pause");
            videoButtonPlay.classList.add("fa-pause");
            videoButtonPlay.classList.remove("fa-play");
        }
    }

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        
        toggleIcon();
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    const addZero = n => n < 10 ? "0" + n : n;

    videoPlayer.addEventListener("click", togglePlay);
    videoButtonPlay.addEventListener("click", togglePlay);

    videoPlayer.addEventListener("play", toggleIcon);
    videoPlayer.addEventListener("pause", toggleIcon);

    videoButtonStop.addEventListener("click", stopPlay);
    

    videoPlayer.addEventListener("timeupdate", () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);
        
        videoTimePassed.textContent = addZero(minutePassed) + ":" + addZero(secondsPassed);
        videoTimeTotal.textContent = addZero(minuteTotal) + ":" + addZero(secondsTotal);
    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

    videoFullScreen.addEventListener("click", () => {
        videoPlayer.requestFullscreen();
    });

    videoPlayer.addEventListener("fullscreenchange", () => {
        if (document.fullscreen) {
            videoPlayer.controls = true;
        } else {
            videoPlayer.controls = false;
        }
    });

    videoVolume.addEventListener("input", () => {
        videoPlayer.volume = videoVolume.value / 100;
        console.log(videoPlayer.volume);
    });

    videoPlayer.volume = 0.5;
    videoVolume.value = videoPlayer.volume * 100;

    videoNzt.forEach((item, i)=> {
        item.addEventListener("click", (event) => {
            let target = event.target;
            let parrent = target.dataset.videoStatic;
            let videoPlayerSrc = videoPlayer;
            let cardImgTop = document.querySelectorAll(".card-img-top");
            item.dataset.videoStatic = videoPlayerSrc.attributes[0].value;
            videoPlayerSrc.attributes[0].value = parrent;
            videoPlayer.play();

            let imgVideo = videoPlayerSrc.poster;
            let imgCard = cardImgTop[i].src;
            videoPlayerSrc.poster  = imgCard;
            cardImgTop[i].src = imgVideo;
            
            let nameVideo = videoPlayerSrc.dataset.videoName;
            let nameCardvideo = cardTitle[i].innerHTML;
            videoPlayerSrc.dataset.videoName = nameCardvideo;
            cardTitle[i].innerHTML = nameVideo;
        })
    });
}