let editbutton = document.getElementById('edit-time-btn');
let inputArray = document.getElementsByClassName("time-input");
let display = document.getElementById('display');

let startbtn = document.getElementById("startbtn");
let pausebtn = document.getElementById("pausebtn");
let resetbtn = document.getElementById("resetbtn");

let sec = 0;
let min = 0;
let hrs = 0;
let totalsec = 0;

let elapsed = 0;
let remain = 0;

let interval = null;

let isrunning = false;
let started = false;

let editing = false;

editbutton.addEventListener("click" ,toggleEditTime);

function toggleEditTime() {
    if (!started) {editing = !editing;}

    if (editing && !started)
    {
        inputArray[0].value = hrs;
        inputArray[1].value = min;
        inputArray[2].value = sec;

        for (let i = 0; i < inputArray.length; i++)
        {
            inputArray[i].classList.remove("hidden");
        }
        editbutton.classList.add("is-green");
        inputArray[0].focus();
    }
    else if (!started)
    {
        hrs = parseInt(inputArray[0].value) || 0;
        if (hrs > 99) {hrs = 99;} else if (hrs < 0) {hrs = 0;}
        min = parseInt(inputArray[1].value) || 0;
        if (min > 59) {min = 59;} else if (min < 0) {min = 0;}
        sec = parseInt(inputArray[2].value) || 0;
        if (sec > 59) {sec = 59;} else if (sec < 0) {sec = 0;}
        totalsec = (hrs * 3600) + (min * 60) + sec;

        display.textContent = hrs.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');

        for (let i = 0; i < inputArray.length; i++)
        {
            inputArray[i].value = "";
            inputArray[i].classList.add("hidden");
        }
        editbutton.classList.remove("is-green");
    }
}

function update()
{
    elapsed += 1;
    remain = totalsec - elapsed;

    const currsec = remain % 60;
    const currmin = Math.floor(remain / 60) % 60;
    const currhrs = Math.floor(remain / 3600);

    if (remain >= 0) display.textContent = currhrs.toString().padStart(2, '0') + ":" + currmin.toString().padStart(2, '0') + ":" + currsec.toString().padStart(2, '0');
    else display.textContent = "Times Up!";

    if (remain <= -3)
    { reset(); }
}

function start()
{
    display.classList.remove("gray-text");

    if (interval) return;

    if (!started) {remain = totalsec;}
    if (editing) {toggleEditTime();}
    
    started = true;
    isrunning = true;

    interval = setInterval(function (){
        update();
    }, 1000);
}

function pause()
{
    if (isrunning) { display.classList.add("gray-text"); }

    clearInterval(interval);
    isrunning = false;
    interval = null;
}

function reset()
{

    started = false;
    pause();

    display.classList.remove("gray-text");

    elapsed = 0;
    remain = totalsec - elapsed;

    display.textContent = hrs.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
}

startbtn.addEventListener("click", start);
pausebtn.addEventListener("click", pause);
resetbtn.addEventListener("click", reset);