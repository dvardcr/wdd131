const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
lastModifiedElement.style.color = "gold";
lastModifiedElement.style.fontSize = "0.75em";

// Function to calculate wind chill factor in Celsius
function calculateWindChill(temperatureCelsius, windSpeedKmph) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmph, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmph, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
    const temperatureCelsius = 5;  // Temperature in °C
    const windSpeedKmph = 10;     // Wind speed in km/h

    const windChillElement = document.querySelector('#wind-chill-value');
    let result = "";

    if (temperatureCelsius <= 10 && windSpeedKmph > 4.8) {
        const windChillCelsius = calculateWindChill(temperatureCelsius, windSpeedKmph);
        result = `${windChillCelsius.toFixed(1)} °C`;
    } else {
        result = "N/A";
    }

    windChillElement.innerHTML = `<span class="wind-chill">${result}</span>`;
});