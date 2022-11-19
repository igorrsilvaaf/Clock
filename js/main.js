const deg = 6;
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {

let day = new Date();
let hrs = getHours() * 30;
let mms = getMinute() * deg;
let sec = getSeconds() * deg;

hour.style.transform = `rotateZ(${(hrs) + (mms/12)}deg)`;
minute.style.transform = `rotateZ(${mms}deg)`;
second.style.transform = `rotateZ(${sec}deg)`;
});