document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом dropdown
    const dropdowns = document.querySelectorAll('.dropdown');

    // Добавляем обработчик события для каждого dropdown
    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

        // Обработчик для сворачивания/разворачивания списка
        dropdownValue.addEventListener('click', () => {
            dropdownList.classList.toggle('dropdown__list_active');
        });

        // Обработчик для выбора пункта меню
        dropdownItems.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault(); // Запрещаем переход по ссылке
                dropdownValue.textContent = item.textContent.trim(); // Устанавливаем новое значение
                dropdownList.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });

    // Обработчик для закрытия списка при клике вне dropdown
    document.addEventListener('click', event => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
            }
        });
    });
});
