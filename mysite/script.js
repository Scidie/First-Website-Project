let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

let dateFormatted = hours + ":" + minutes;


document.getElementById("header-date-holder").innerText = dateFormatted;