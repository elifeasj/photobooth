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

    // Display a countdown after capturing the photo
    displayCountdown(3); // Adjust the countdown duration (in seconds)

    // Redirect to the preview page
    setTimeout(() => {
        window.location.href = `preview.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
    }, 3000); // Adjust the redirect delay (in milliseconds)
}

function displayCountdown(seconds) {
    let counter = seconds;

    const countdownInterval = setInterval(function () {
        console.log(counter); // You can replace this with updating a countdown display on your page

        if (counter <= 0) {
            clearInterval(countdownInterval);
        }

        counter--;
    }, 1000); // Update every 1000 milliseconds (1 second)
}
