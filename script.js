const daysEl = document.getElementById('daysElement');
const hoursEl = document.getElementById('hoursElement');
const minutesEl = document.getElementById('minutesElement');
const secondsEl = document.getElementById('secondsElement');


const newYears = '1 jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();


    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


// initial call
countdown();

setInterval(countdown, 1000);
