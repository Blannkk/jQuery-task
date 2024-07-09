$(document).ready(function () {
    // Set the target date and time for the countdown
    var targetDate = new Date("2024-12-31T00:00:00").getTime();

    // Update the countdown every 1 second
    var countdown = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time difference between now and the target date
        var timeRemaining = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        $(".clock-days .val").text(days);
        $(".clock-hours .val").text(hours);
        $(".clock-minutes .val").text(minutes);
        $(".clock-seconds .val").text(seconds);

        // If the countdown is over, clear the interval and show a message
        if (timeRemaining < 0) {
            clearInterval(countdown);
            $(".clock-days .val").text(0);
            $(".clock-hours .val").text(0);
            $(".clock-minutes .val").text(0);
            $(".clock-seconds .val").text(0);
            alert("The event has started!");
        }
    }, 1000);
});
$(document).ready(function () {
    $('#openNav').click(function () {
        $('#mySidenav').css({
            'width': '250px',
            'z-index': '6'
        });
        $('#openNav').css({
            'transform': 'translateX(250px)'
        });
    });

    $('#closeNav').click(function () {
        $('#mySidenav').css({
            'width': '0',
            'z-index': '1'
        });
        $('#openNav').css({
            'transform': 'translateX(0)'
        });
    });
});