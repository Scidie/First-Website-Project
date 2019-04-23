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
updateClock();
setInterval(updateClock, 1000);


var date = new Date();

const CALENDAR_CONTAINER = document.getElementById("calendar-container");
const CALENDAR_BODY = document.getElementById("calendar-body");

// kolumny : 7 (dni tygodnia)
// wiersze : 5 wierszy (dni miesiaca)

// TODO leap month - luty - 28/29
TR = "<tr>";
TD = "<td>";


function insertTD(value) {
    return "<td>" + value + "</td>";
}

// console.log(Month.currentMonth());

// TODO cliking on a date replaces calendar's header with input field to save task, bottom: display task
class Calendar {
    static rows = 5;
    static cols = 7;

    constructor() {
        Calendar.fillDays(Calendar.daysInMonth(date.getFullYear(), date.getMonth()));
        // Calendar.fillDays(Calendar.daysInMonth(date.getFullYear(), date.getMonth() + 1));
    }

    static fillDays(monthDate) {
        console.log(monthDate);
        let markup = "";
        let counter = 1;

        for (let i = 0; i < this.rows; i++) {
            markup += "<tr>";

            for (let j = 0; j < this.cols; j++) {
                if (counter <= monthDate) {
                    if (j < this.firstDay(date.getFullYear(), date.getMonth()+1) && i === 0) {
                        markup += "<td></td>";
                        console.log("inside");
                        // counter++;
                        continue;
                    }
                    markup += insertTD(counter++);
                } else {
                    break;
                }
            }
        }

        CALENDAR_BODY.innerHTML = (markup);
    }

    static daysInMonth(iYear, iMonth) {
        return (32 - new Date(iYear, iMonth, 32).getDate());
    }

    static firstDay(year, month) {
        console.log(new Date(year, month).getDay());
        return (new Date(year, month)).getDay() - 1;
    }
}


let cal = new Calendar();

// console.log(Calendar.daysInMonth(new Date().getFullYear(), new Date().getMonth()));