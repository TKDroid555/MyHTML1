document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let seconds = 0;
    let controlState = 0; // 0=Start, 1=Stop, 2=Reset
    const timerDisplay = document.getElementById('timer');
    const controlBtn = document.getElementById('controlBtn');

    function updateTimer() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function handleControl() {
        switch(controlState) {
            case 0: // Start
                timer = setInterval(() => {
                    seconds++;
                    updateTimer();
                }, 1000);
                controlBtn.textContent = 'Stop';
                controlState = 1;
                controlBtn.style.backgroundColor = '#dc3545'; // Red
                break;
                
            case 1: // Stop
                clearInterval(timer);
                controlBtn.textContent = 'Reset';
                controlState = 2;
                controlBtn.style.backgroundColor = '#ffc107'; // Yellow
                break;
                
            case 2: // Reset
                seconds = 0;
                updateTimer();
                controlBtn.textContent = 'Start';
                controlState = 0;
                controlBtn.style.backgroundColor = '#28a745'; // Green
                break;
        }
    }

    controlBtn.addEventListener('click', handleControl);
    updateTimer();
});