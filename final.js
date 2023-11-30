// final.js
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the captured image source from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');
    

    // Set the source of the final image element
    const finalImageElement = document.getElementById('finalImage');
    finalImageElement.src = capturedImageSrc;
});
