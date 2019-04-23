var updateClock = function () {
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

const CALENDAR_CONTAINER = document.getElementById("calendar-container");
const CALENDAR_BODY = document.getElementById("calendar-body");

// TODO leap month - luty - 28/29


// console.log(Month.currentMonth());

// TODO cliking on a date replaces calendar's header with input field to save task, bottom: display task
// or current row gets replaced with text input
// TODO clicking on month name gives month choice view
class Calendar {
    /* 1 extra row so that when 1st day of month is sunday, last days get displayed too */
    // TODO automate it - 6 rows only if needed!
    static rows = 6;
    static cols = 7;


    constructor() {
        Calendar.fillCalendar(new Date())
    }

    static fillCalendar(currentDate) {
        let firstDay = Calendar.firstDay(currentDate.getFullYear(), currentDate.getMonth());
        let daysInMonth = Calendar.daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
        let markup = "";
        let counter = 1;

        for (let i = 0; i < this.rows; i++) {
            markup += "<tr>";

            for (let j = 0; j < this.cols; j++) {
                if (counter <= daysInMonth) {
                    if (j < firstDay && i === 0) {
                        markup += "<td></td>";
                        continue;
                    }
                    markup += insertTD(counter++);
                }
            }
        }
        CALENDAR_BODY.innerHTML = (markup);
    }

    static daysInMonth(iYear, iMonth) {
        return (32 - new Date(iYear, iMonth, 32).getDate());
    }

    static firstDay(year, month) {
        let temp = new Date(year, month).getDay();

        if (temp === 0) {
            return 6;
        }
        return temp - 1;
    }
}

function insertTD(value) {
    return "<td>" + value + "</td>";
}

const leftButton = document.getElementById("calendar-header-button-left");
const rightButton = document.getElementById("calendar-header-button-right");
const monthId = document.getElementById("calendar-header-month");
const yearId = document.getElementById("calendar-header-year");
const date = new Date();

monthNames = [
    "Styczeń", "Luty", "Marzec", "Kwiecień",
    "Maj", "Czerwiec", "Lipiec", "Sierpień",
    "Wrzesień", "Październik", "Listopad", "Grudzień"];

function handleLeft() {
    date.setMonth(date.getMonth() - 1);
    monthId.innerText = monthNames[date.getMonth()];
    yearId.innerText = date.getFullYear().toString();
    Calendar.fillCalendar(date);
}

function handleRight() {
    date.setMonth(date.getMonth() + 1);
    monthId.innerText = monthNames[date.getMonth()];
    yearId.innerText = date.getFullYear().toString();
    Calendar.fillCalendar(date);
}


/* RUNNING CODE */
updateClock();
setInterval(updateClock, 1000);
cal = new Calendar();

/* EVENT LISTENERS */
leftButton.addEventListener('click', handleLeft);
rightButton.addEventListener('click', handleRight);