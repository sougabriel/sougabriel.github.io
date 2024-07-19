$(document).ready(function () {

    $("html").keydown(function (event) {
        if (event.which == 37) {
            $("#ship").css("transform", "rotate(-0.25turn)");
        } else if (event.which == 38) {
            $("#ship").css("transform", "rotate(0deg)");
        } else if (event.which == 39) {
            $("#ship").css("transform", "rotate(0.25turn)");
        } else if (event.which == 40) {
            $("#ship").css("transform", "rotate(0.50turn)");
        } else if (event.which == 32) {

        } else {

        }
    });

});
