const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
lastModifiedElement.style.color = "gold";
lastModifiedElement.style.fontSize = "0.75em";


/* Hamburguer Menu */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Header 2 - Menu Link
document.addEventListener('DOMContentLoaded', function() {
    const dynamicHeader = document.getElementById('dynamicHeader');

    const defaultHeaderText = 'Home';
    
    if (dynamicHeader.textContent.trim() === '') {
        dynamicHeader.textContent = defaultHeaderText;
    }

    const menuItems = document.querySelectorAll('.navigation ul li');

    function handleMenuItemClick(event) {
        event.preventDefault();

        const menuItemText = event.target.textContent.trim();

        dynamicHeader.textContent = menuItemText;
    }

    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
});