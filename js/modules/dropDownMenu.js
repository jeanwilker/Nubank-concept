export default function initDropDownMenu() {

	const menuDesktopItem1 = document.getElementById('menu-desktop__item-1');
	const menuDesktopItem2 = document.getElementById('menu-desktop__item-2');
	const menuDesktopItem3 = document.getElementById('menu-desktop__item-3');

	const dropdownMenu1 = document.getElementById('dropdown-item-1');
	const dropdownMenu2 = document.getElementById('dropdown-item-2');
	const dropdownMenu3 = document.getElementById('dropdown-item-3');

	function showDropdown1(event) {
		event.preventDefault();
		dropdownMenu1.classList.toggle('dropdown-menu__active');
		dropdownMenu2.classList.remove('dropdown-menu__active');
		dropdownMenu3.classList.remove('dropdown-menu__active');
	}

	function showDropdown2(event) {
		event.preventDefault();
		dropdownMenu1.classList.remove('dropdown-menu__active');
		dropdownMenu2.classList.toggle('dropdown-menu__active');
		dropdownMenu3.classList.remove('dropdown-menu__active');
	}

	function showDropdown3(event) {
		event.preventDefault();
		dropdownMenu1.classList.remove('dropdown-menu__active');
		dropdownMenu2.classList.remove('dropdown-menu__active');
		dropdownMenu3.classList.toggle('dropdown-menu__active');
	}

	menuDesktopItem1.addEventListener('click', showDropdown1);
	menuDesktopItem2.addEventListener('click', showDropdown2);
	menuDesktopItem3.addEventListener('click', showDropdown3);

	function removeDropdown() {
		dropdownMenu1.classList.remove('dropdown-menu__active');
		dropdownMenu2.classList.remove('dropdown-menu__active');
		dropdownMenu3.classList.remove('dropdown-menu__active');
	}

	dropdownMenu1.addEventListener('mouseleave', removeDropdown);
	dropdownMenu2.addEventListener('mouseleave', removeDropdown);
	dropdownMenu3.addEventListener('mouseleave', removeDropdown);
}
