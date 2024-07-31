document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', (event) => {
            event.preventDefault();

            // Удаление класса font-size_active у всех контролов
            fontSizeControls.forEach(control => control.classList.remove('font-size_active'));

            // Добавление класса font-size_active текущему контролу
            control.classList.add('font-size_active');

            // Смена класса book в зависимости от выбранного размера шрифта
            if (control.dataset.size === 'small') {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if (control.dataset.size === 'big') {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        });
    });
});