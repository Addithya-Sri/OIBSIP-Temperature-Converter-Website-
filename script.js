document.querySelector('button').addEventListener('click', function() {
    const inputTemperature = document.querySelector('input').value;
    const temperatureType = document.querySelector('#Temperature-type').value;

    let result;
    if (temperatureType === 'Celsius') {
        result = `Fahrenheit: ${(inputTemperature * 9/5) + 32}°F<br>Kelvin: ${parseFloat(inputTemperature) + 273.15}K`;
    } else if (temperatureType === 'Fahrenheit') {
        result = `Celsius: ${(inputTemperature - 32) * 5/9}°C<br>Kelvin: ${((inputTemperature - 32) * 5/9) + 273.15}K`;
    } else if (temperatureType === 'Kelvin') {
        result = `Celsius: ${inputTemperature - 273.15}°C<br>Fahrenheit: ${(inputTemperature - 273.15) * 9/5 + 32}°F`;
    }

    document.getElementById('result').innerHTML = result;
});
