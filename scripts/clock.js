window.onload = function () {
  DisplayCurrentTime();
};
function DisplayCurrentTime() {
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours == 0 ? "12" : hours;
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var greet = date.getHours() < 12 ? "Good Morning" : greet;
  greet = date.getHours() >= 12 && date.getHours() < 17 ? "Good Afternoon" : greet;
  greet = date.getHours() >= 17 ? "Good Evening" : greet;
  time = greet + " Gangatharan, it's " + hours + ":" + minutes + " " + am_pm;
  var lblEl = document.getElementById("lblGreetings");
  lblEl.innerHTML = time;
};
