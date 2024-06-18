// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
        ],
    };

    document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");

    document.querySelector("#places-lived").innerHTML = myInfo.placesLived
    .map((place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`)
    .join("");