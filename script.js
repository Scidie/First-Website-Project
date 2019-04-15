// var x = document.getElementById("title");

// x.addEventListener("click", function () {
//     x.innerText = "asd";
// });

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

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;


    console.log(now);
}

setInterval(setData, 1000);

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`span[data-key="${e.keyCode}"]`)
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

function removeTransition (e) {
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));