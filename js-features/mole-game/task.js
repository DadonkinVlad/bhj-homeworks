const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let dead = 0;
let lost = 0;

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
    setMole();
}

holes.forEach(hole => {
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }

        if (dead === 10) {
            alert('Вы выиграли!');
            resetGame();
        } else if (lost === 5) {
            alert('Вы проиграли!');
            resetGame();
        } else {
            setMole();
        }
    };
});
