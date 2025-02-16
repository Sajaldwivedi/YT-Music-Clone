document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playbutton2");
    const audio = document.getElementById("songplayer2");

    playButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
