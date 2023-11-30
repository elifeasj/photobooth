// preview.js
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the captured image source from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');

    // Set the source of the captured image element
    const capturedImageElement = document.getElementById('capturedImage');
    capturedImageElement.src = capturedImageSrc;
});

function navigateToFinal() {
    // Retrieve the captured image source from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');

    // Redirect to the final page with the captured image source
    window.location.href = `final.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
}
