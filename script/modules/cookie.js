export function cookie() {
    // Buttons
    const buttonGood = document.getElementById('good_cookie');
    const buttonBad = document.getElementById('bad_cookie');
    // Block
    const block = document.getElementById('block_cookie');

    buttonGood.onclick = function () {
        block.classList.toggle('close')
    }
    buttonBad.onclick = function () {
        block.classList.toggle('close')
    }
}