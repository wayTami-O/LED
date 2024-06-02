export function burger() {
    // Buttons
    const burgerButton = document.getElementById('burger_button')
    const burgerClose = document.getElementById('close_burger')
    // Menu
    const burgerMenu = document.getElementById('burger_menu')
    burgerButton.onclick = function () {
        burgerMenu.classList.toggle('active')
    }
    burgerClose.onclick = function () {
        burgerMenu.classList.toggle('active')
    }
};