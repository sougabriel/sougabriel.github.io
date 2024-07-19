$(document).ready(function () {
    let timer;
    let minutes = 1;
    let seconds = 0;

    function startTimer() {
        timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function updateTimer() {
        if (minutes === 0 && seconds === 0) {
            stopTimer();
            alert("Times Out! \nPoints: " + $("#points").children("span").text());
            window.location.reload();
        }
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }

    function updateDisplay() {
        let timerDisplay = $("#timer span");
        let formattedMinutes = ("0" + minutes).slice(-2);
        let formattedSeconds = ("0" + seconds).slice(-2);
        timerDisplay.text(formattedMinutes + ":" + formattedSeconds);
    }

    $("#dagger, #whisper, #madness").click(function () {
        startTimer();
    });

});
