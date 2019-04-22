var updateClock = function() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let dateFormatted = hours + ":" + minutes + ":" + seconds;

    document.getElementById("header-date-holder").innerText = dateFormatted;
};
updateClock();
setInterval(updateClock, 1000);