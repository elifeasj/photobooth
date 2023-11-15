// photobooth.js
document.addEventListener("DOMContentLoaded", function () {
    startCamera();
});

let capturedImageSrc;

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById('cameraFeed');
            video.srcObject = stream;
        })
        .catch(function (err) {
            console.error("Error accessing the camera: " + err);
        });
}

function capturePhoto() {
    const video = document.getElementById('cameraFeed');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Store the captured image source
    capturedImageSrc = canvas.toDataURL('image/jpeg');

    // Start the countdown after capturing the photo
    startCountdown();
}

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
