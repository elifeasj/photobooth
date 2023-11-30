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
    console.log('Capture Photo button clicked'); // Add this line

    const video = document.getElementById('cameraFeed');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');


    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

     // Apply the frame
     const frame = new Image();
     frame.src = "/frame1.png"; // Replace with the path to your frame image
     context.drawImage(frame, 0, 0, canvas.width, canvas.height);

    // Store the captured image source
    capturedImageSrc = canvas.toDataURL('image/jpeg');

    console.log('Captured Image Source:', capturedImageSrc); // Add this line
    console.log('Frame drawn on canvas:', frame.width, frame.height);



    // Ensure the countdown overlay is displayed
    displayCountdown(3);
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
            redirectToNumber(); // Assuming you want to redirect after the countdown
        }

        counter--;
    }, 1000); // Update every 1000 milliseconds (1 second)
}

function redirectToNumber() {
    console.log('Redirecting to number.html'); // Add this line
    window.location.href = `number.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
}


