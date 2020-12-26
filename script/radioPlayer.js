export const radioPlayerInit = () => {
    const radio = document.querySelector(".radio");
    const radioCoverImg = document.querySelector(".radio-cover__img");
    const radioNavigation = document.querySelector(".radio-navigation");
    const radioHeaderBig = document.querySelector(".radio-header__big");
    const radioItem = document.querySelectorAll(".radio-item");
    const radioStop = document.querySelector(".radio-stop");
    const radioVolume = document.querySelector(".radio-volume");
    const radioPlayer = document.querySelector(".radio-player");
    const playerBtn = document.querySelectorAll(".player-btn");
    const volumeMute = document.querySelector(".volume-mute");
    const currentVolume = document.querySelector(".current-volume");

    const audio = new Audio();
    audio.type = "audio/acc";

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add("fa-play");
            radioStop.classList.remove("fa-stop");
        } else {
            radio.classList.add('play');
            radioStop.classList.add("fa-stop");
            radioStop.classList.remove("fa-play");
        }
    };
    
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add("select");
    };
    
    radioNavigation.addEventListener("change", event => {
        const target = event.target;
        const parrent = target.closest(".radio-item");
        selectItem(parrent);

        const title = parrent.querySelector(".radio-name").textContent;
        radioHeaderBig.textContent = title;

        const img = parrent.querySelector(".radio-img").src;
        radioCoverImg.src = img;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener("click", async () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    radioVolume.addEventListener("input", () => {
        audio.volume = radioVolume.value / 100;
        //console.log("a " +audio.volume);
        console.log(radioVolume.value);
        if (audio.volume > 0.70) {
            currentVolume.classList.add("fa-volume-up");
            currentVolume.classList.remove("fa-volume");
        } else if (audio.volume > 0.40 ) {
            currentVolume.classList.add("fa-volume");
            currentVolume.classList.remove("fa-volume-down");
            currentVolume.classList.remove("fa-volume-up");
        } else if (audio.volume > 0.01 ) {
            currentVolume.classList.add("fa-volume-down");
            currentVolume.classList.remove("fa-volume-mute");
            currentVolume.classList.remove("fa-volume");
            volumeMute.classList.add("fa-volume-mute");
            volumeMute.classList.remove("fa-volume-up");
            volumeMute.classList.remove("none");
        } else if (audio.volume < 0.01 && radioVolume.value < 10) {
            currentVolume.classList.add("fa-volume-mute");
            currentVolume.classList.remove("fa-volume-down");
            volumeMute.classList.add("none");
        }
    });

    audio.volume = 0.5;

    radioVolume.value = audio.volume * 100;

    if (audio.volume > 0.70) {
        currentVolume.classList.add("fa-volume-up");
        currentVolume.classList.remove("fa-volume");
    } else if (audio.volume > 0.40 ) {
        currentVolume.classList.add("fa-volume");
        currentVolume.classList.remove("fa-volume-down");
        currentVolume.classList.remove("fa-volume-up");
    } else if (audio.volume > 0.01 ) {
        currentVolume.classList.add("fa-volume-down");
        currentVolume.classList.remove("fa-volume-mute");
        currentVolume.classList.remove("fa-volume");
        volumeMute.classList.add("fa-volume-mute");
        volumeMute.classList.remove("fa-volume-up");
        volumeMute.classList.remove("none");
    } else if (audio.volume < 0.01 && radioVolume.value < 10) {
        currentVolume.classList.add("fa-volume-mute");
        currentVolume.classList.remove("fa-volume-down");
        volumeMute.classList.add("none");
    }

    playerBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (radio.classList.contains("active")==false) {
                audio.pause();
                radio.classList.remove('play');
                radioStop.classList.add("fa-play");
                radioStop.classList.remove("fa-stop");
            }
        })
    });
    function volumeMutes (){
        if (audio.volume < 0.01 && radioVolume.value < 10) {
            
        } else {
            
        }
    };
    volumeMutes();
    volumeMute.addEventListener("click", () => {
        let currentSound;
        if (audio.muted != true) {
            radioVolume.value = 0;
            audio.muted = true;
            volumeMute.classList.remove("fa-volume-mute");
            volumeMute.classList.add("fa-volume-up");
            currentVolume.classList.add("fa-volume-mute");
        } else {
            audio.muted = false;
            radioVolume.value = audio.volume * 100;
            volumeMute.classList.add("fa-volume-mute");
            volumeMute.classList.remove("fa-volume-up");
            currentVolume.classList.remove("fa-volume-mute");
        }
    });
}