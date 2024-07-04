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

    // Check localStorage for saved header text
    const savedHeaderText = localStorage.getItem('dynamicHeaderText');

    if (savedHeaderText) {
        dynamicHeader.textContent = savedHeaderText;
    } else {
        dynamicHeader.textContent = defaultHeaderText;
    }

    const menuItems = document.querySelectorAll('.navigation ul li a');

    function handleMenuItemClick(event) {
        event.preventDefault(); // Prevent default navigation for now

        const menuItemText = event.target.textContent.trim();
        dynamicHeader.textContent = menuItemText;

        // Save the header text in localStorage
        localStorage.setItem('dynamicHeaderText', menuItemText);

        // Navigate to the link after a short delay
        const href = event.target.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 100); // Adjust the delay as needed
    }

    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
});
