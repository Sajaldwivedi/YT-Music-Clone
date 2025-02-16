document.addEventListener("DOMContentLoaded", function () {
    const playerBar = document.querySelector(".playerbar");
    const playPauseButton = document.querySelector(".playpausebutton img");
    const songImg = document.getElementById("midsongimg");
    const songInfo = document.getElementById("songinformation");
    let currentAudio = null;

    function setupAudio(playButtonId, audioId, songName, songImgSrc) {
        const playButton = document.getElementById(playButtonId);
        const audio = document.getElementById(audioId);

        if (playButton && audio) {
            playButton.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (currentAudio && currentAudio !== audio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }

                if (audio.paused) {
                    audio.play();
                    showPlayer(songName, songImgSrc, audio);
                } else {
                    audio.pause();
                    hidePlayer();
                }

                currentAudio = audio;
            });

            audio.addEventListener("ended", function () {
                hidePlayer();
            });
        }
    }

    function showPlayer(songName, songImgSrc, audio) {
        playerBar.classList.add("show");
        songInfo.textContent = songName;
        songImg.src = songImgSrc;
        playPauseButton.src = "Images/pause_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";

        playPauseButton.onclick = function () {
            if (audio.paused) {
                audio.play();
                playPauseButton.src = "Images/pause_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            } else {
                audio.pause();
                playPauseButton.src = "Images/play_arrow_24dp_FFFF_FILL0_wght400_GRAD0_opsz24.svg";
            }
        };
    }

    function hidePlayer() {
        playerBar.classList.remove("show");
    }

    setupAudio("playbutton1", "songplayer1", "Uyii Amma (From Azaad)", "Images/Uyii Amma.jpg");
    setupAudio("playbutton2", "songplayer2", "Ye Tune Kya Kiya", "Images/YE tune kya kiya.jpg");
    setupAudio("playbutton3", "songplayer3", "Taras (From Munjya)", "Images/Tarsa.jpg");
    setupAudio("playbutton4", "songplayer4", "Tere Vaaste", "Images/Tere Vaaste.jpg");
    setupAudio("playbutton5", "songplayer5", "Tu Hai To Main Hoon", "Images/Tu Hai To Main Hoon.jpg");
    setupAudio("playbutton6", "songplayer6", "Husn", "Images/Husn.jpg");
    setupAudio("playbutton7", "songplayer7", "Nadaaniyan", "Images/Nadaaniyan.jpg");
    setupAudio("playbutton8", "songplayer8", "Naina", "Images/Naina.jpg");
    setupAudio("playbutton9", "songplayer9", "O Maahi", "Images/O Maahi.jpg");
    setupAudio("playbutton10", "songplayer10", "Pehle Bhi Main (From Animal)", "Images/Pehle Bhi Main.jpg");
    setupAudio("playbutton11", "songplayer11", "Sajna Ve Sajna", "Images/Sajna Ve Sajna.jpg");
    setupAudio("playbutton12", "songplayer12", "Sajna", "Images/Sajna.jpg");
    setupAudio("playbutton13", "songplayer13", "O Saki Saki", "Images/O Saki Saki.jpg");
    setupAudio("playbutton14", "songplayer14", "Ishq Hai", "Images/Ishq Hai.jpg");
    setupAudio("playbutton15", "songplayer15", "Aaj Ki Raat (From Stree 2)", "Images/Aaj ki Raat.jpg");
    setupAudio("playbutton16", "songplayer16", "Akhiyan Gulaab", "Images/Akhiyan Gulaab.jpg");
    setupAudio("playbutton17", "songplayer17", "Apna Bana Le (From Bhediya)", "Images/Apna Bana le.jpg");
    setupAudio("playbutton18", "songplayer18", "Besharam Rang (From Pathaan)", "Images/Besharam Rang.jpg");
    setupAudio("playbutton19", "songplayer19", "Morni", "Images/Morni.jpg");
    setupAudio("playbutton20", "songplayer20", "Kissik", "Images/Kissik.jpg");
    setupAudio("playbutton21", "songplayer21", "Jhoome Jo Pathaan", "Images/Jhoome Jo Pathan.jpg");
    setupAudio("playbutton22", "songplayer22", "Mein To Aayi Vrindavan Dhaam", "Images/mein to aayi.jpg");
    setupAudio("playbutton23", "songplayer23", "Heeriye", "Images/Heeriye.jpg");
    setupAudio("playbutton24", "songplayer24", "Dilbar", "Images/Dilbar.jpg");
    setupAudio("playbutton25", "songplayer25", "Chaleya", "Images/Chaleya.jpg");
    setupAudio("playbutton26", "songplayer26", "Tauba Tauba (From Bad Newz)", "Images/Tauba Tauba.jpg");
    setupAudio("playbutton27", "songplayer27", "Tere Naam", "Images/tere naam.jpg");
});
