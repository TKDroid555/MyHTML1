document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let seconds = 0;
    let controlState = 0; // 0=Start, 1=Stop, 2=Reset
    const timerDisplay = document.getElementById('timer');
    const controlBtn = document.getElementById('controlBtn');
    const catGif = document.getElementById('catGif'); // Changed from 'Catgif' to 'catGif'

    function updateTimer() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
        if (seconds === 1500 ) {
            const currentTokens = parseInt(tokenDisplay.textContent);
            tokenDisplay.textContent = currentTokens + 40;
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
                catGif.src = 'cat-ruffles.gif';
                break;
                
            case 1: // Stop
                clearInterval(timer);
                controlBtn.textContent = 'Reset';
                controlState = 2;
                catGif.src = 'cat-hungry.gif';
                break;
                
            case 2: // Reset
                clearInterval(timer); // Added to clear any existing interval
                seconds = 0;
                updateTimer();
                controlBtn.textContent = 'Start';
                controlState = 0;
                catGif.src = 'cat-hungry.gif';
                break;
        }
    }

    controlBtn.addEventListener('click', handleControl);
    updateTimer(); // Initialize timer display
});