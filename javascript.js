$(document).ready(function () {

    // ===== Starting the Game ===== //

    var count = 30;
    let clockRunning = false;
    var intervalId;

    var stopWatch = function () {
        $("#startbutton").on("click", start);
    };

    function start() {

        if (!clockRunning) {
            intervalId = setTimeout(count, 1000);
            console.log(intervalId);
        }
    }















});





























