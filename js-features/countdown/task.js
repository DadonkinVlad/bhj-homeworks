const output = document.getElementById("timer");
    let currentValue = parseInt(output.textContent, 10);

    const countDown = function() {
        if (currentValue > 0) {
            currentValue -= 1;
            output.textContent = currentValue;
        } else {
            clearInterval(intervalId);
            alert("Вы победили в конкурсе!");
        }
    };

const intervalId = setInterval(countDown, 1000);