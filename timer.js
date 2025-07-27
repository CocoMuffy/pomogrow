//pulling variables from html/css
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const progressbar = document.querySelector(".progressbar");
const progressbarNumber = document.querySelector(".progressbar .progressbar-number");
const workButton = document.getElementById("workPomo");
const sbButton = document.getElementById("sbButton");
const lbButton = document.getElementById("lbButton");
const pomCount = document.querySelector(".pomdoro-count");

// making variables
let pomodoroCount = 0;
const pomodoroTilLB = 4;
const wTime = 1500;
const sbTime = 300;
const lbTime = 900;
// 25 minutes, 5 minutes, 15 minutes in secs
let timerValue = wTime;
const multiplierValue = 360 /timerValue;
let progressInt;
let pomoType = "WORK";

// various event listeners for html buttons
startButton.addEventListener("click", () =>{
    startTimer();
});
stopButton.addEventListener("click", (), =>{
    pause();
});
workButton.addEventListener("click", () =>{
    setTimeType("WORK");
});
sbButton.addEventListener("click", () =>{
    setTimeType("SHORT")
});
lbButton.addEventListener("click", ()=>{
    setTimeType("LONG");
});
resetButton.addEventListener("click", () =>{
    resetTimer();
});

// functions for event listeners

function startTimer(){
    progressInterval = setInterval(() => {
    timerValue--;
    console.log(timerValue);
    setProgressInfo();
        if (timerValue == 0){
            clearInterval(progressInterval);
            pomodoroCount++;
            pomCount.style.display = "block";
            pomCount.style.color = "white";
            pomCount.style.fontSize = "30px";
            pomCount.textContent = `Pomodoro Count ${pomodoroCount}`;
        }
        if (pomodoroCount % pomodoroTilLB==0){
            lbButton.style.display = "flex";
        }
        setTimeType(pomoType);
    }, 1000);
}

function setProgressInfo(){
    progressbarNumber.textContent = `${numtoString(timerValue)}`;
    progressbar.style.background = `conic-gradient(rgb(243,2,109) ${timerValue*multiplierValue} deg, crimson, odeg)`;
}

function numtoString(){
    const minutes = Math.trunc(number/60).toString()
        .padStart(2,"0");
    const seconds = Math.trunc(number % 60).toString()
        .padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function pause(){
    clearInterval(progressInt);
}

function setTimeType(type){
    pomoType = type;
        if (type == "WORK"){
            workButton.classList.add("active");
            sbButton.classList.remove("active");
            lbButton.classList.remove("active");
        }
         if (type == "SHORT"){
            workButton.classList.remove("active");
            sbButton.classList.add("active");
            lbButton.classList.remove("active");
        }
         if (type == "LONG"){
            workButton.classList.remove("active");
            sbButton.classList.remove("active");
            lbButton.classList.add("active");
        }
    resetTimer();
}

function resetTimer(){
    clearInterval(progressInt);
    timerValue = 
    pomodoroType == "WORK"
    ? wTime
    : pomodoroType == "SHORT"
    ? sbTime
    : lbTime;
    multiplierValue = 360/timerValue;
    setProgressInfo();
}
