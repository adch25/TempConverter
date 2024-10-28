const temp = document.getElementById("temp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");

const convertTemp = () => {
    const tempValue = parseFloat(temp.value);
    if (isNaN(tempValue)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    let convertedTemp;

    if (fromUnit.value === toUnit.value) {
        result.innerText = "Converted Temperature: " + tempValue + " °" + toUnit.value.charAt(0).toUpperCase();
        return;
    }

    if (fromUnit.value === "celsius") {
        convertedTemp = toUnit.value === "fahrenheit" ? (tempValue * 9) / 5 + 32 : tempValue + 273.15;
    } else if (fromUnit.value === "fahrenheit") {
        convertedTemp = toUnit.value === "celsius" ? (tempValue - 32) * 5 / 9 : (tempValue - 32) * 5 / 9 + 273.15;
    } else if (fromUnit.value === "kelvin") {
        convertedTemp = toUnit.value === "celsius" ? tempValue - 273.15 : (tempValue - 273.15) * 9 / 5 + 32;
    }

    result.innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} °${toUnit.value.charAt(0).toUpperCase()}`;
};