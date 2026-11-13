
/* ==============================
   FOOTER DATE INFORMATION
================================= */

const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;

const lastModified = new Date(document.lastModified);

document.querySelector("#last-modified").textContent =
    lastModified.toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

/* ==============================
   WEATHER INFORMATION
================================= */

// Static weather values for Nairobi.
const temperature = 18;
const windSpeed = 10;

// Calculate wind chill using the metric formula.
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Only calculate wind chill when the required conditions are met.
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

// Display the weather information.
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = windChill;
