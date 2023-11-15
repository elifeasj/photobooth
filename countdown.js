// countdown.js
let capturedImageSrc;

function startCountdown() {
    displayCountdown(3); // Start the countdown from 3 seconds
}

function displayCountdown(seconds) {
    let counter = seconds;

    const countdownDisplay = document.getElementById('countdownDisplay');

    // Set up the countdown overlay
    const countdownOverlay = document.getElementById('countdownOverlay');
    countdownOverlay.style.display = 'block';

    const countdownInterval = setInterval(function () {
        countdownDisplay.innerText = counter;

        if (counter <= 0) {
            clearInterval(countdownInterval);
            redirectToPreview();
        }

        counter--;
    }, 1000); // Update every 1000 milliseconds (1 second)
}

function redirectToPreview() {
    // Hide the countdown overlay
    const countdownOverlay = document.getElementById('countdownOverlay');
    countdownOverlay.style.display = 'none';

    // Redirect to the preview page
    window.location.href = `preview.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
}
