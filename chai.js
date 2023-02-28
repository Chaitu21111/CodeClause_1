const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const timeDisplay = document.getElementById("time");

let intervalId;
let time = 0;
let running = false;

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    return minutes + ":0" + seconds;
  } else {
    return minutes + ":" + seconds;
  }
}

function updateTime() {
  time++;
  timeDisplay.innerHTML = formatTime(time);
}

startButton.addEventListener("click", function() {
  if (!running) {
    intervalId = setInterval(updateTime, 1000);
    running = true;
  }
});

stopButton.addEventListener("click", function() {
  if (running) {
    clearInterval(intervalId);
    running = false;
  }
});

resetButton.addEventListener("click", function() {
  clearInterval(intervalId);
  running = false;
  time = 0;
  timeDisplay.innerHTML = formatTime(time);
});