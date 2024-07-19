$(document).ready(function () {
    const arrow = [
        "arrow-up.png",
        "arrow-right.png",
        "arrow-down.png",
        "arrow-left.png",
    ];
    let points = 0;

    function setArrow(arrow) {
        let randomIndex = Math.floor(Math.random() * arrow.length);
        let result = arrow[randomIndex];
        $("#key").attr("src", "./assets/images/arrows/" + result);
        return result;
    }

    function updatePointsDisplay() {
        let pointsDisplay = $("#points span");
        let formattedPoints = ("000" + points).slice(-3);
        pointsDisplay.text(formattedPoints);
    }

    $("html").keydown(function (event) {
        let result = setArrow(arrow);
        if (event.which == 37 && result == "arrow-left.png") {
            points++;
            updatePointsDisplay();
        } else if (event.which == 38 && result == "arrow-up.png") {
            points++;
            updatePointsDisplay();
        } else if (event.which == 39 && result == "arrow-right.png") {
            points++;
            updatePointsDisplay();
        } else if (event.which == 40 && result == "arrow-down.png") {
            points++;
            updatePointsDisplay();
        } else {
        }
    });
});
