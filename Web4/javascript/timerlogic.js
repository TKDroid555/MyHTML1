let editTimeBtn = document.getElementById('edit-time-btn');
let editBoxArray = document.querySelectorAll("input[name=time-input]");
let timeTextArray = document.querySelectorAll('span.time-text.text');

console.log(editBoxArray.length);
console.log(timeTextArray.length);

editTimeBtn.addEventListener("click" ,toggleEditTime);

let editBoxisOn = false;
let totalSec = 0;


function toggleEditTime() {
    editBoxisOn = !editBoxisOn;
    console.log(editBoxisOn);

    for (let input of editBoxArray) {

        console.log(input);
        input.classList.toggle("hidden");
    }
}