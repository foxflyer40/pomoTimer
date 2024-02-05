let timerEl = document.getElementById("timer");
let modeEl = document.getElementById("mode");
const startTime = document.getElementById("start-timer");
const pauseTime = document.getElementById("pause-timer");
const resumeTime = document.getElementById("resume-timer");
const resetTime = document.getElementById("reset-timer")

  const workMinutes = 25;
  const breakMinutes = 5;
  let intervalId;
  let minutes = 0;
  let seconds = "00"
  let workTime = 0;


function timer() {
  startTime.addEventListener("click", startTimer);
  pauseTime.addEventListener("click", pauseTimer);
  resumeTime.addEventListener("click", resumeTimer);
  resetTime.addEventListener("click", resetTimer);  
  
  function initializeTimer() {
    // set interval for the timer to 1 second
    if (!intervalId) {
      intervalId = setInterval(startTimer, 1000)
    }
    // set initial workTime in seconds
    if (workTime === 0) {
      workTime = workMinutes * 60;
    }   
  }

  function countDown() {
    // calculate remainder after dividing workTime by 60 seconds
    seconds = workTime % 60;
    // divide workTime by 60 and round down
    minutes = Math.floor(workTime / 60);
    // decrement workTime by 1
    workTime--
  }
    
  function startTimer() {
    // check if interval is set and if not set to 1 second  This handles Start and Resume conditions
    if (!intervalId) {
      initializeTimer()
    }
    // run through calculate seconds and minutes
    countDown()
    // handles 0-seconds condition to set to 2 digit format
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    // Display mode
    modeEl.innerHTML = "Work"
    // display time
    timerEl.innerHTML = `${minutes}: ${seconds}`;
  }

  function pauseTimer() {
    // stop timer form counting down by removing interval
    intervalId = clearInterval(intervalId)
    // Display mode
    modeEl.innerHTML = "Paused"
  }

  function resumeTimer() {
  // reset interval to 1 second to begin countdown again
    intervalId = setInterval(startTimer, 1000)
  }

  function resetTimer() {
    console.log("reset")
  }






  }



