function calculeWindChill(temperature, windSpeed, units) {
    if (temperature <= 10 && windSpeed > 4.8) {
        if (units === 'C') {
            temperature = (temperature * 9/5) + 32; // Convert to Fahrenheit
        }
        
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        if (units === 'C') {
            windChill = (windChill - 32) * 5/9; // Convert back to Celsius
        }
        
        return windChill;
    } else {
        return null;
    }
}
const temperature = 8;
const windSpeed = 5;
const units = 'C'; 

const windChill = calculeWindChill(temperature, windSpeed, units);

const temperatureElement = document.getElementById('temperature');
const windElement = document.getElementById('wind');
const weatherConditionElement = document.getElementById('weatherCondition');
const windChillElement = document.getElementById('windChill');

temperatureElement.textContent = `Temperature: ${temperature}°${units}`;
windElement.textContent = ` Wind: ${windSpeed} km/h`;
if (windChill !== null) {
    windChillElement.textContent = `WindChill: ${windChill.toFixed(2)}°${units}`;
} else {
    windChillElement.textContent = `Wind Chill cannot be calculated under these conditions.`;
}

const weatherCondition = 'Sunny'; 

weatherConditionElement.textContent = ` Weather Condition :${weatherCondition}`;





var currentYearElement = document.getElementById("currentyear");
var currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
currentYearElement.style.color="var( --text-color)";


var lastModifiedElement = document.getElementById("lastTimeModified");
var lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;
lastModifiedElement.style.color="var( --text-color)";   