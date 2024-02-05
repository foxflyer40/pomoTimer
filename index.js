let timerEl = document.getElementById("timer");
let modeEl = document.getElementById("mode");
const startTime = document.getElementById("start-timer");
const pauseTime = document.getElementById("pause-timer");
const resumeTime = document.getElementById("resume-timer");
const resetTime = document.getElementById("reset-timer")

  const workMinutes = 25;
  const breakMinutes = 5;
  let seconds = "00"
  let pMinutes = 0
  let pSeconds = 0
  let intervalId;



function timer() {


  startTime.addEventListener("click", startTimer);
  pauseTime.addEventListener("click", pauseTimer);
  resumeTime.addEventListener("click", resumeTimer);
 resetTime.addEventListener("click",resetTimer);  

  function startTimer() {
    console.log("start")
  }


  function pauseTimer() {
    console.log("pause")
  }

  function resumeTimer() {
    console.log("resume")
  }

  function resetTimer() {
    console.log("reset")
  }


    // if (!intervalId) {
    //   intervalId = setInterval(startTimer, 1000)
    // }

    // function startTimer() {
    //   console.log("start")
    // }
    // let workTime = workMinutes * 60;
    // let breakTime = breakMinutes * 60;

    // const minutes = Math.floor(workTime / 60);
 
    // let seconds = workTime % 60;
    // if (seconds < 10) {
    //   seconds = "0 + seconds"
    // }
  
    // let pMinutes = minutes;
    // let pSeconds = seconds;

    // console.log(minutes);
    // console.log(seconds);

    // console.log(pMinutes);
    // console.log(pSeconds);

    // modeEl.innerHTML = "Work"
    // timerEl.innerHTML = `${minutes}: ${seconds}`;
    // workTime--
  }


