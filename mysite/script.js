var updateClock = function() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let dateFormatted = hours + ":" + minutes + ":" + seconds;

    document.getElementById("header-date-holder").innerText = dateFormatted;
};
updateClock();
setInterval(updateClock, 1000);


let date = new Date();

const CALENDAR_CONTAINER = document.getElementById("calendar-container");
const CALENDAR_BODY = document.getElementById("calendar-body");

let currentMonth = date.getMonth();



// kolumny : 7 (dni tygodnia)
// wiersze : 5 wierszy (dni miesiaca)

const markup = `

`;


function fillDays() {

}

