export default function initMenuMobile() {
    const toggleButton = document.getElementById('bx');
    const menuMobile = document.getElementById('menu-mobile');

    toggleButton.addEventListener('click', showMenu);

    function showMenu() {
        toggleButton.classList.toggle('active-bx');
        menuMobile.classList.toggle('menu-mobile__active');
    }
}
