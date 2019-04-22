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
var CALENDAR_BODY = document.getElementById("calendar-body");

// kolumny : 7 (dni tygodnia)
// wiersze : 5 wierszy (dni miesiaca)

// TODO leap month - luty - 28/29
TR = "<tr>";
TD = "<td>";


// TODO cliking on a date replaces calendar's header with input field to save task, bottom: display task
class Calendar {
    currentMonth = date.getMonth();
    monthDaysAmount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    rows = 5;
    cols = 7;


    constructor() {
        this.fillDays(this.monthDaysAmount[this.currentMonth]);
    }

    // td - poziomo

    fillDays(monthDays) {
        // date = new Date();

        let markup = "";
        let days = monthDays;
        let counter = 1;


        for (let i = 0; i < this.rows; i++) {
            markup += "<tr>";
            for (let j = 0; j < this.cols; j++) {
                if (j > this.firstDayOfWeek(date)) {
                    console.log("first day of week: " + this.firstDayOfWeek(date));
                    markup += insertTD();
                    continue;
                }

                if (counter <= this.monthDaysAmount[this.currentMonth - 1]) {
                    markup += insertTD(counter++);
                }
            }
        }
        // console.log(markup);
        CALENDAR_BODY.innerHTML = (markup);
    }

    firstDayOfWeek(date) {
        date.setDate(1);
        console.log(date.getDay());
        // return new Date((new Date(2019, Month, 1)) - date.days);
    }
}

function insertTD(value) {
    return "<td>" + value + "</td>";
}


let cal = new Calendar();
cal.fillDays();


class Month {
    constructor(days) {
        this._days = days;
    }

    get days() {
        return this._days;
    }
}
