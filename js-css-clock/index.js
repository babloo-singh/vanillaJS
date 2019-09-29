const secondsHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setTime() {
  let date = new Date();
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hour = date.getHours();
  let secDegree = (sec / 60) * 360 + 90;
  let minDegree = (min / 60) * 360 + 90;
  let hourDegree = (hour / 12) * 360 + 90;
  secondsHand.style.transform = `rotate(${secDegree}deg)`;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setTime, 1000);
