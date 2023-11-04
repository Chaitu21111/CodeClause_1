document.getElementById("temperatureInput").addEventListener("input", function () {
  var temperatureInput = parseFloat(this.value);
  var convertButton = document.getElementById("convertButton");

  if (!isNaN(temperatureInput) || isNaN(temperatureInput)) {
    convertButton.disabled = false;
  } else {
    convertButton.disabled = true;
  }
});

function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperatureInput").value);
  var convertFrom = document.getElementById("convertFrom").value;
  var convertTo = document.getElementById("convertTo").value;

  var convertedTemperature;

  if (convertFrom === "celsius") {
    if (convertTo === "fahrenheit") {
      convertedTemperature = (temperature * 9 / 5) + 32;
    } else if (convertTo === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (convertFrom === "fahrenheit") {
    if (convertTo === "celsius") {
      convertedTemperature = (temperature - 32) * 5 / 9;
    } else if (convertTo === "kelvin") {
      convertedTemperature = (temperature + 459.67) * 5 / 9;
    } else {
      convertedTemperature = temperature;
    }
  } else if (convertFrom === "kelvin") {
    if (convertTo === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (convertTo === "fahrenheit") {
      convertedTemperature = (temperature * 9 / 5) - 459.67;
    } else {
      convertedTemperature = temperature;
    }
  }

  document.getElementById("convertedTemperature").innerHTML = "Converted Temperature: " + convertedTemperature + " " + convertTo;
}
