document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    function checkVisibility() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('reveal_active');
            } else {
                el.classList.remove('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility()
});