$(document).ready(function () {
    
    $("#dagger").click(function () {
        $("#selectship").toggle();
        $("#space").css("display", "flex");
        $("#ship").attr("src", "./assets/images/ships/ship3.png");
        $("#nameship").children("span").text("Dagger");
    });

    $("#whisper").click(function () {
        $("#selectship").toggle();
        $("#space").css("display", "flex");
        $("#ship").attr("src", "./assets/images/ships/ship6.png");
        $("#nameship").children("span").text("Whisper");
    });

    $("#madness").click(function () {
        $("#selectship").toggle();
        $("#space").css("display", "flex");
        $("#ship").attr("src", "./assets/images/ships/ship2.png");
        $("#nameship").children("span").text("Madness");
    });
});
