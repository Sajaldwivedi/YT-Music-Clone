document.addEventListener("DOMContentLoaded", function () {
    let currentAudio = null;
    let currentSongIndex = 0;

    const songs = [
        { id: "songplayer1", name: "Uyii Amma (From Azaad)", img: "Images/Uyii Amma.jpg" },
        { id: "songplayer2", name: "Ye Tune Kya Kiya", img: "Images/YE tune kya kiya.jpg" },
        { id: "songplayer3", name: "Taras (From Munjya)", img: "Images/Tarsa.jpg" },
        { id: "songplayer4", name: "Tere Vaaste", img: "Images/Tere Vaaste.jpg" },
        { id: "songplayer5", name: "Tu Hai To Main Hoon", img: "Images/Tu Hai To Main Hoon.jpg" },
        { id: "songplayer6", name: "Husn", img: "Images/Husn.jpg" },
        { id: "songplayer7", name: "Nadaaniyan", img: "Images/Nadaaniyan.jpg" },
        { id: "songplayer8", name: "Naina", img: "Images/Naina.jpg" },
        { id: "songplayer9", name: "O Maahi", img: "Images/O Maahi.jpg" },
        { id: "songplayer10", name: "Pehle Bhi Main", img: "Images/Pehle Bhi Main.jpg" },
        { id: "songplayer11", name: "Sajna Ve Sajna", img: "Images/Sajna Ve Sajna.jpg" },
        { id: "songplayer12", name: "Sajna", img: "Images/Sajna.jpg" },
        { id: "songplayer13", name: "O Saki Saki", img: "Images/O Saki Saki.jpg" },
        { id: "songplayer14", name: "Ishq Hai", img: "Images/Ishq Hai.jpg" },
        { id: "songplayer15", name: "Aaj Ki Raat", img: "Images/Aaj ki Raat.jpg" },
        { id: "songplayer16", name: "Akhiyan Gulaab", img: "Images/Akhiyan Gulaab.jpg" },
        { id: "songplayer17", name: "Apna Bana Le", img: "Images/Apna Bana le.jpg" },
        { id: "songplayer18", name: "Besharam Rang", img: "Images/Besharam Rang.jpg" },
        { id: "songplayer19", name: "Morni", img: "Images/Morni.jpg" },
        { id: "songplayer20", name: "Kissik", img: "Images/Kissik.jpg" },
        { id: "songplayer21", name: "Jhoome Jo Pathan", img: "Images/Jhoome Jo Pathan.jpg" },
        { id: "songplayer22", name: "Mein To Aayi Vrindavan Dhaam", img: "Images/mein to aayi.jpg" },
        { id: "songplayer23", name: "Heeriye", img: "Images/Heeriye.jpg" },
        { id: "songplayer24", name: "Dilbar", img: "Images/Dilbar.jpg" },
        { id: "songplayer25", name: "Chaleya", img: "Images/Chaleya.jpg" },
        { id: "songplayer26", name: "Tauba Tauba", img: "Images/Tauba Tauba.jpg" },
        { id: "songplayer27", name: "Tere Naam", img: "Images/tere naam.jpg" }
    ];

    const songPlayerBar = document.querySelector(".playerbar");
    const playPauseButton = document.querySelector(".playpausebutton img");
    const prevButton = document.querySelector(".prevbutton img");
    const nextButton = document.querySelector(".nextbutton img");
    const songTitle = document.getElementById("songinformation");
    const songImage = document.getElementById("midsongimg");
    const progressBar = document.getElementById("progress-bar");
    const volumeButton = document.querySelector(".volumeimg img");
    const timeDisplay = document.getElementById("time-display");  

    function playSong(index) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentSongIndex = index;
        currentAudio = document.getElementById(songs[index].id);

        if (currentAudio) {
            currentAudio.play();
            songTitle.textContent = songs[index].name;
            songImage.src = songs[index].img;
            playPauseButton.src = "Images/pause_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            songPlayerBar.classList.add("show");

            currentAudio.addEventListener("ended", function () {
                nextSong();
            });

            currentAudio.addEventListener("timeupdate", updateProgress);
        }
    }

    function togglePlayPause() {
        if (currentAudio) {
            if (currentAudio.paused) {
                currentAudio.play();
                playPauseButton.src = "Images/pause_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            } else {
                currentAudio.pause();
                playPauseButton.src = "Images/play_arrow_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            }
        }
    }

    function prevSong() {
        if (currentSongIndex > 0) {
            playSong(currentSongIndex - 1);
        }
    }

    function nextSong() {
        if (currentSongIndex < songs.length - 1) {
            playSong(currentSongIndex + 1);
        }
    }

    function updateProgress() {
        if (currentAudio) {
            const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
            progressBar.value = progress;
            progressBar.style.setProperty("--progress", `${progress}%`);
            updateTimeDisplay();
        }
    }

    function seekSong(event) {
        if (currentAudio) {
            const seekTime = (event.target.value / 100) * currentAudio.duration;
            currentAudio.currentTime = seekTime;
        }
    }

    function updateTimeDisplay() {
        if (currentAudio) {
            const currentTime = formatTime(currentAudio.currentTime);
            const duration = formatTime(currentAudio.duration);
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    function toggleMute() {
        if (currentAudio) {
            if (currentAudio.muted) {
                currentAudio.muted = false;
                volumeButton.src = "Images/volume_up_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            } else {
                currentAudio.muted = true;
                volumeButton.src = "Images/volume_off_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            }
        }
    }

    playPauseButton.addEventListener("click", togglePlayPause);
    prevButton.addEventListener("click", prevSong);
    nextButton.addEventListener("click", nextSong);
    progressBar.addEventListener("input", seekSong);
    volumeButton.addEventListener("click", toggleMute);

    songs.forEach((song, index) => {
        const playButton = document.getElementById(`playbutton${index + 1}`);
        if (playButton) {
            playButton.addEventListener("click", function (event) {
                event.preventDefault();
                playSong(index);
            });
        }
    });

    if (currentAudio) {
        currentAudio.addEventListener("ended", function () {
            songPlayerBar.classList.remove("show");
        });
    }
});
