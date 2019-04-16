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
    console.log(secondsDegrees);
 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours();
    console.log(hours);
    hours = (hours * 10) + ((minutes/60) * minutes);
    console.log(hours);

    const hoursDegrees = ((hours / 120) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setData, 1000);