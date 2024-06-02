export function mask() {
    IMask(
        document.getElementById('phone_input'),
        {
        mask: '+{7} (000) 000-00-00'
        }
    )
}