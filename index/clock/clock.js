let secondsHand = document.querySelector('.seconds-hand');
let minutesHand = document.querySelector('.minutes-hand');
let hoursHand = document.querySelector('.hours-hand');
let secondsCounter = 0;

function setData() {
    const now = new Date();
    const seconds = now.getSeconds();
    if (secondsCounter === 0) {
        secondsCounter += seconds;
    }
    else {
        secondsCounter++;
    }
    const secondsDegrees = ((secondsCounter / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`; 
 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours();
    hours = hours + (minutes/60);

    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setData, 1000);