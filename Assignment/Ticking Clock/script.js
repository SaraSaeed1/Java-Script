function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600;
}
// setInterval( function() {
//     var time = getSecondsSinceStartOfDay();
//     console.log(time);
//     // your code here
// }, 1000);

function getHourHandAngle(seconds) {
    seconds %= 43200; // seconds in 12 hours
    return (360 * seconds / 43200 + 180) % 360;
}

function getMinuteHandAngle(seconds) {
    seconds %= 3600; // seconds in an hour
    return (6 * seconds / 60 + 180) % 360;
}

function getSecondHandAngle(seconds) {
    seconds %= 60; // seconds in a minute
    return (6 * seconds + 180) % 360;
}

const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
    let time = getSecondsSinceStartOfDay();
    hour.style.transform = `rotate(${getHourHandAngle(time)}deg)`;
    minutes.style.transform = `rotate(${getMinuteHandAngle(time)}deg)`;
    seconds.style.transform = `rotate(${getSecondHandAngle(time)}deg)`;
}, 1000);
