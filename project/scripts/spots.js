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

    const foodSpots = [
        {
            name: "El Chato Taco Truck",
            type: "Tacos",
            country: "Mexico",
            image: "path/to/taco-image.jpg",
            description: "Authentic Mexican street tacos with a variety of fillings.",
            map: "https://www.google.com/maps/embed?pb=...mexico"
        },
        {
            name: "Jianbing",
            type: "Chinese Pancakes",
            country: "China",
            image: "path/to/jianbing-image.jpg",
            description: "Traditional Chinese savory crepe with various fillings.",
            map: "https://www.google.com/maps/embed?pb=...china"
        },
        {
            name: "Omoide Yokocho",
            type: "Yakitori",
            country: "Japan",
            image: "path/to/yakitori-image.jpg",
            description: "Skewered chicken grilled to perfection in Tokyo's famous alley.",
            map: "https://www.google.com/maps/embed?pb=...japan"
        },
        {
            name: "Pork Roll Stall",
            type: "Banh Mi",
            country: "Vietnam",
            image: "path/to/banhmi-image.jpg",
            description: "Crispy baguette sandwich filled with savory meats and pickled veggies.",
            map: "https://www.google.com/maps/embed?pb=...vietnam"
        },
        {
            name: "Bhel Puri Wala",
            type: "Bhel Puri",
            country: "India",
            image: "path/to/bhelpuri-image.jpg",
            description: "A savory snack made with puffed rice, vegetables, and tamarind sauce.",
            map: "https://www.google.com/maps/embed?pb=...india"
        },
        {
            name: "Crepes Suzette",
            type: "Crepes",
            country: "France",
            image: "path/to/crepes-image.jpg",
            description: "Delicate French crepes served with a variety of sweet toppings.",
            map: "https://www.google.com/maps/embed?pb=...france"
        },
        {
            name: "Poffertjes Stand",
            type: "Mini Pancakes",
            country: "Netherlands",
            image: "path/to/poffertjes-image.jpg",
            description: "Small, fluffy pancakes typically served with powdered sugar and butter.",
            map: "https://www.google.com/maps/embed?pb=...netherlands"
        },
        {
            name: "Arepa Truck",
            type: "Arepas",
            country: "Venezuela",
            image: "path/to/arepa-image.jpg",
            description: "Delicious cornmeal cakes stuffed with a variety of fillings.",
            map: "https://www.google.com/maps/embed?pb=...venezuela"
        },
        {
            name: "Churros Cart",
            type: "Churros",
            country: "Spain",
            image: "path/to/churros-image.jpg",
            description: "Fried dough pastry dusted with sugar and often dipped in chocolate.",
            map: "https://www.google.com/maps/embed?pb=...spain"
        }
    ];

    const container = document.getElementById('food-spots-container');

    foodSpots.forEach(spot => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-flip">
                <div class="card-front">
                    <img src="${spot.image}" loading="lazy" alt="${spot.name}">
                    <div class="card-content">
                        <h2>${spot.name}</h2>
                        <h3>"Front"</h3>
                        <p>${spot.type}</p>
                        <p>${spot.country}</p>
                    </div>
                </div>
                <div class="card-back">
                    <iframe src="${spot.map}" loading="lazy"></iframe>
                    <h3>"BACK"</h3>
                    <p>${spot.description}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        container.appendChild(card);
    });
});
