const calculateTemp = () => {
    const numberTemp = document.getElementById('temperature').value;
    // console.log(numberTemp);
    const tempSelect = document.getElementById('temperatureDifference');
    const valueTemp = temperatureDifference.options[tempSelect.selectedIndex].value;
    // console.log(valueTemp);
    const celsiuslToFahrenheit = (celsius) => {
        let fahrenheit = Math.round((celsius * 9/5) + 32);
        return fahrenheit;
    }

    const fahrenheitToCelsius = (fahrenheit) => {
        let celsius = Math.round((fahrenheit - 32) * 5 /9 );
        return celsius;
    }

    let result;
    if (valueTemp == 'celsius'){
        result = celsiuslToFahrenheit(numberTemp);
        document.getElementById('resultStore').innerHTML = `= ${result} °Fahrenheit`;
    } else{
        result = fahrenheitToCelsius(numberTemp);
        document.getElementById('resultStore').innerHTML = `= ${result} °Celsius`;
    }

}