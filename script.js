document.addEventListener("DOMContentLoaded", function () {
    function setupAudio(playButtonId, audioId) {
        const playButton = document.getElementById(playButtonId);
        const audio = document.getElementById(audioId);

        if (playButton && audio) {
            playButton.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        }
    }

    setupAudio("playbutton1", "songplayer1");
    setupAudio("playbutton2", "songplayer2");
    setupAudio("playbutton3", "songplayer3");
    setupAudio("playbutton4", "songplayer4");
    setupAudio("playbutton5", "songplayer5");
    setupAudio("playbutton6", "songplayer6");
    setupAudio("playbutton7", "songplayer7");
    setupAudio("playbutton8", "songplayer8");
    setupAudio("playbutton9", "songplayer9");
    setupAudio("playbutton10", "songplayer10");
    setupAudio("playbutton11", "songplayer11");
    setupAudio("playbutton12", "songplayer12");
    setupAudio("playbutton13", "songplayer13");
    setupAudio("playbutton14", "songplayer14");
    setupAudio("playbutton15", "songplayer15");
    setupAudio("playbutton16", "songplayer16");
    setupAudio("playbutton17", "songplayer17");
    setupAudio("playbutton18", "songplayer18");
    setupAudio("playbutton19", "songplayer19");
    setupAudio("playbutton20", "songplayer20");
    setupAudio("playbutton21", "songplayer21");
    setupAudio("playbutton22", "songplayer22");
    setupAudio("playbutton23", "songplayer23");
    setupAudio("playbutton24", "songplayer24");
    setupAudio("playbutton25", "songplayer25");
    setupAudio("playbutton26", "songplayer26");
    setupAudio("playbutton27", "songplayer27");
});
