let display = document.getElementById("display");
let startbtn = document.getElementById("startbtn");
let pausebtn = document.getElementById("pausebtn");
let resetbtn = document.getElementById("resetbtn");

let milisec = 0;
let interval = null;

function updateDisplay() 
{
    milisec += 1;
    const msec = milisec % 100;
    const totalSeconds = Math.floor(milisec / 100);
    const secs = totalSeconds % 60;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hrs = Math.floor(totalSeconds / 3600);
    display.textContent = String(hrs).padStart(2, '0') + ':' + String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0') + ':' + String(msec).padStart(2, '0');
}

function start() {
if (interval) return;
interval = setInterval( function () {updateDisplay();}, 10);
}

function stop() {
clearInterval(interval);
interval = null;
}

function reset() {
stop();
milisec = -1;
updateDisplay();
}

startbtn.addEventListener("click", start);
pausebtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);