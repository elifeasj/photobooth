// three.js
document.addEventListener("DOMContentLoaded", function () {
    initializeAgeDisplays();
});

let ageDisplays = [0, 0, 0, 0, 0];

function countUp(ageDisplayNumber) {
    ageDisplays[ageDisplayNumber - 1]++;
    updateAgeDisplay(ageDisplayNumber);
}

function countDown(ageDisplayNumber) {
    if (ageDisplays[ageDisplayNumber - 1] > 0) {
        ageDisplays[ageDisplayNumber - 1]--;
        updateAgeDisplay(ageDisplayNumber);
    }
}

function updateAgeDisplay(ageDisplayNumber) {
    const ageDisplay = document.getElementById(`ageDisplay${ageDisplayNumber}`);
    ageDisplay.innerText = ageDisplays[ageDisplayNumber - 1];
}

function initializeAgeDisplays() {
    for (let i = 1; i <= ageDisplays.length; i++) {
        updateAgeDisplay(i);
    }
}

function navigateToPreview() {
    // Retrieve the captured image source from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const capturedImageSrc = urlParams.get('capturedImageSrc');

    // Redirect to the preview page
    window.location.href = `preview.html?capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
}
