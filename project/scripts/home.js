document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');

    // Hamburger Menu functionality
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('header nav ul');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Close menu when a link is clicked (for mobile)
    document.querySelectorAll('header nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('open');
            hamButton.classList.remove('open');
        });
    });
});
