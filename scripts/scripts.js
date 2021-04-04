function currentTime() {
  var date = new Date(); // creating object of Date class
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  if (
    (document.getElementById('clock').innerText =
      hour + ' : ' + min + ' : ' + sec)
  ); // adding time to the div */
  var t = setTimeout(function () {
    currentTime();
  }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return '0' + k;
  } else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */

function currentDay() {
  const now = new Date();
  const dayOfYear = (date) =>
    Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  document.getElementById('daysCounter').innerText = 'Day ' + day + ' from 365';
}
currentDay();




function coolDown(){
  // Set the date we're counting down to
  var countDownDate = new Date('Jul 30, 2021 10:30:00').getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById('demo').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // If the count down is over, write some textw
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('demo').innerText = 'EXPIRED';
    }
  }, 1000);
}

coolDown();