document.addEventListener('DOMContentLoaded', () => {
    // Footer JS
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

    // Form Select 'Countries'
    const countrySelect = document.getElementById('country');
    const countries = ['USA', 'Mexico', 'Italy', 'France', 'Japan', 'India', 'Thailand', 'Brazil', 'Morocco', 'Greece'];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Submission counter
    const form = document.querySelector('.wf1');
    form.addEventListener('submit', () => {
        let submissionCount = localStorage.getItem('submissionCount');

        if (submissionCount === null) {
            submissionCount = 0;
        } else {
            submissionCount = parseInt(submissionCount, 10);
        }

        submissionCount++;

        localStorage.setItem('submissionCount', submissionCount);
    });
});


// Food Spot Cards
document.addEventListener('DOMContentLoaded', () => {
    const foodSpots = [
        {
            name: "El Gran Abanico",
            type: "Tacos",
            country: "Mexico",
            image: "images/taco.webp",
            description: "Tacos and tortilla soup with a range of sides and salsas at a spacious, no-frills fast-food cantina.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.735202114843!2d-99.130241!3d19.4149633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fec3ed4c314b%3A0x5c8f3bc85c987efb!2sTaqueria%20El%20Gran%20Abanico!5e0!3m2!1sen!2scr!4v1721506989081!5m2!1sen!2scr"
        },
        {
            name: "Sangucheria El Chinito",
            type: "Traditional Sandwich",
            country: "Peru",
            image: "images/sandwich.webp",
            description: "Traditional Peruvian sadwiches made since 1960.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62431.24996652702!2d-77.07159193046874!3d-12.0467464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b67d6a5eb3%3A0x87e02360c42ef1da!2sSangucheria%20El%20Chinito!5e0!3m2!1sen!2scr!4v1721515881491!5m2!1sen!2scr"
        },
        {
            name: "Yau Wun Roast Meat",
            type: "Roast Pork",
            country: "Hong Kong",
            image: "images/pork.webp",
            description: "The Cantonese are masters at roasting meats, and at Yau Wun Roast Meat in Quarry Bay, you'll find an amazing selection of roast pork, chicken, char siu, and an exceptional ginger scallion sauce to accompany them.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.47232225879424!2d114.21094959999999!3d22.2863759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404010c73896f4b%3A0xda5aef38a8e2d6b5!2z5pyJ6YGL54eS5ZGz6aOv5bqX!5e0!3m2!1sen!2scr!4v1721517312706!5m2!1sen!2scr"
        },
        {
            name: "Gado Gado Ibu Lulu",
            type: "Mixed Salad",
            country: "Indonesia",
            image: "images/gadogado.webp",
            description: "The name of this salad, which translates to 'mix mix' in English, reflects its nature as a mixed vegetable-based dish. It is made from scratch with a variety of blanched vegetables such as cabbage, green beans, carrots, and fresh lettuce. Each vendor creates their own peanut satay sauce and includes selected sides like fried tofu, tempeh, boiled egg, and chicken. For added crunch, gado gado is enjoyed with various types of crackers called krupuk.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.203974041431!2d115.16594829999998!3d-8.672143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24740235a194d%3A0xb5427f16b3b3f498!2sGado%20Gado%20Ibu%20Lulu!5e0!3m2!1sen!2scr!4v1721518095043!5m2!1sen!2scr"
        },
        {
            name: "Haemul Pajeon",
            type: "Egg Pancake",
            country: "South Korea",
            image: "images/haemulpajeon.webp",
            description: "Serving traditional Korean meals.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.64572578895024!2d127.00820602132029!3d37.570808313328456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e6fb16eb4f%3A0x2bcb8884dbbe8ea7!2sBongjassi!5e0!3m2!1sen!2scr!4v1721519672351!5m2!1sen!2scr"
        },
        {
            name: "Doña Luisa Xicotencatl",
            type: "Frijoles & Eggs",
            country: "Guatemala",
            image: "images/frijoleshuevos.webp",
            description: "An iconic place to eat very tradicional food located in Antigua Guatemala.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.4325833196181!2d-90.7318793!3d14.5574076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1b94f5fae91%3A0x6d94186c7bdacad9!2sDo%C3%B1a%20Luisa%20Xicotencatl!5e0!3m2!1sen!2scr!4v1721520236931!5m2!1sen!2scr"
        },
        {
            name: "Sorbetera de Lolo Mora",
            type: "Artisanal Ice Cream",
            country: "Costa Rica",
            image: "images/sorbetera.webp",
            description: "The specialty of Lola Mora is a delicious spiced vanilla ice cream with hints of cinnamon and clove.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9932159368095!2d-84.08184998488173!3d9.93452181431584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e35e6ead5791%3A0x8451615af917dd6!2sLolo%20Mora&#39;s%20Ice%20Cream!5e0!3m2!1sen!2scr!4v1721520826611!5m2!1sen!2scr"
        },
        {
            name: "Ng Soon Kee",
            type: "Fish & Duck Porridge",
            country: "Singapore",
            image: "images/porridge.webp",
            description: "Serving traditional duck and fish porridge.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.5947706856587!2d103.88666789482886!3d1.320855597664165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1823c1c10c4f%3A0xa920f772f6de7a6a!2zTmcgU29vbiBLZWUgRmlzaCAmIER1Y2sgUG9ycmlkZ2Ug6buE6aCG6KiY6a2a57Oc44O76bSo57Oc!5e0!3m2!1sen!2scr!4v1721521310866!5m2!1sen!2scr"
        },
        {
            name: "Trattoria Vecchia Roma",
            type: "Traditional Italian",
            country: "Italy",
            image: "images/pizza.webp",
            description: "A traditionally cozy trattoria and pizzeria featuring frescoes on burgundy walls and bare-brick arches.",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11879.849751200027!2d12.502362999999999!3d41.8936649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61bc8af49cfd%3A0xdb173fd38c57770a!2sTrattoria%20Vecchia%20Roma!5e0!3m2!1sen!2scr!4v1721521852406!5m2!1sen!2scr"
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
                        <p>${spot.type} - <span class="country">${spot.country}</span></p>
                    </div>
                </div>
                <div class="card-back">
                    <h2>${spot.name}</h2>
                    <iframe src="${spot.map}" loading="lazy"></iframe>
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
