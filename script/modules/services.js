export function services() {
    const first = document.getElementById('s_item_0')
    first.onclick = function () {
        first.classList.toggle('active_mobile')
    }
    const second = document.getElementById('s_item_1')
    second.onclick = function () {
        second.classList.toggle('active_mobile')
    }
    const thred = document.getElementById('s_item_2')
    thred.onclick = function () {
        thred.classList.toggle('active_mobile')
    }
    const four = document.getElementById('s_item_3')
    four.onclick = function () {
        four.classList.toggle('active_mobile')
    }
    const five = document.getElementById('s_item_4')
    five.onclick = function () {
        five.classList.toggle('active_mobile')
    }
}