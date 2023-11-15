document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the captured image source from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');

    // Set the source of the captured image element
    const capturedImageElement = document.getElementById('capturedImage');
    capturedImageElement.src = capturedImageSrc;
});

function submitForm() {
    // Your form submission logic here

    // Redirect to the final page with the captured image source
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');

    window.location.href = `final.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;

    // Clear the form fields after redirecting
    clearForm();
}

function clearForm() {
    // Retrieve and reset the form
    const form = document.querySelector('form');
    form.reset();
}
