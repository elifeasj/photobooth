// number.js
document.addEventListener("DOMContentLoaded", function () {
    const numberLinks = document.querySelectorAll('.number');
    numberLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedNumber = this.innerText;
            const capturedImageSrc = getParameterByName('capturedImageSrc');
            redirectToPage(selectedNumber, capturedImageSrc);
        });
    });
});

function redirectToPage(selectedNumber, capturedImageSrc) {
    let nextPage;

    // Adjust the condition based on your requirements
    switch (selectedNumber) {
        case '1':
            nextPage = 'one.html';
            break;
        case '2':
            nextPage = 'two.html';
            break;
        case '3':
            nextPage = 'three.html';
            break;
        case '4':
            nextPage = 'four.html';
            break;
        case '5':
            nextPage = 'five.html';
                break;
        case '6':
            nextPage = 'six.html';
                break;
        case '7':
            nextPage = 'seven.html';
            break;
        case '8':
            nextPage = 'eight.html';
                break;
        default:
            nextPage = 'number.html';
            break;
    }

    window.location.href = `${nextPage}?selectedNumber=${selectedNumber}&capturedImageSrc=${encodeURIComponent(capturedImageSrc)}`;
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
