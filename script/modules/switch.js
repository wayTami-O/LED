export function switch_toggle() {
    let score = 0
    let firstClick = false
    // Button
    const heroButton = document.getElementById('button_switch')
    // Blocks
    const circle = document.getElementById('circle')
    const heroBlock = document.getElementById('hero_block')
    const text = document.getElementById('ter_text')
    // Costil'
    setTimeout(() => {
        firstClick = true
        heroButton.classList.toggle('container_input_active')
        circle.classList.toggle('active_circle')
        heroBlock.classList.toggle('hero-block_bg_non')
        text.classList.toggle('active_text_non')
    }, 1500)
    heroButton.onclick = function() {
        if (firstClick) {
            heroButton.classList.toggle('container_input_active')
            circle.classList.toggle('active_circle')
            circle.classList.toggle('non_active_circle')
            heroBlock.classList.toggle('hero-block_bg_non')
            text.classList.toggle('active_text_non')
        }
    }
}