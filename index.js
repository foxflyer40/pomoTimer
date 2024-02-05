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
    if (!intervalId) {
      intervalId = setInterval(startTimer, 1000)
    }
    if (workTime === 0) {
      workTime = workMinutes * 60;
    }

   
  }

  function countDown() {

    seconds = workTime % 60;
    minutes = Math.floor(workTime / 60);
    workTime--
  }

  
  function startTimer() {
    // set interval for the timer to 1 second
    // set initial workTime in seconds
    // 
    initializeTimer()
    // console.log("start")
    countDown()
    if (seconds < 10) {
      seconds = "0" + seconds
    }
  
    console.log(minutes);
    console.log(seconds);

    modeEl.innerHTML = "Work"
    timerEl.innerHTML = `${minutes}: ${seconds}`;

  }


  function pauseTimer() {
    console.log("pause")
    intervalId = clearInterval(intervalId)
    console.log(intervalId)
  }

  function resumeTimer() {
    console.log("resume")
    intervalId = setInterval(startTimer, 1000)
  }

  function resetTimer() {
    console.log("reset")
  }






  }



