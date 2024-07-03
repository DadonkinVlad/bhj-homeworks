const image = document.getElementById('cookie')
const counter = document.getElementById('clicker__counter');
let clickCount = 0;

image.onclick = function() {
    clickCount++;
    counter.textContent = clickCount;

    if (clickCount % 2) {
        image.width = 300;

    } else {
        image.width = 200;
    }
}


