var updateClock = function() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dateFormatted = hours + ":" + minutes + ":" + seconds;

    document.getElementById("header-date-holder").innerText = dateFormatted;
};

setInterval(updateClock, 1000);