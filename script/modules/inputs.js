export function check_input() {
    // Inputs
    const name = document.getElementById('name_input')
    const phone = document.getElementById('phone_input')
    const buttonCheck = document.getElementById('input_check_button')
    // Clicks
    buttonCheck.onclick = function() {
        if (name.value == "" || phone.value == "") {
            alert("Вы не заполнили форму ввода!")
            name.value = ""
            phone.value = ""
        } else {
            window.location.href = './successfully.html'
        }
    }
}