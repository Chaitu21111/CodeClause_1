// get elements
const fromInput = document.getElementById("from-input");
const fromUnit = document.getElementById("from-unit");
const toInput = document.getElementById("from-input2");
const toUnit = document.getElementById("to-unit");
const convertBtn = document.getElementById("convert-btn");
// const resultDiv = document.getElementById("result");

// add event listener to convert button
convertBtn.addEventListener("click", () => {
  // get values
  const fromValue = Number(fromInput.value);
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;

  // convert units
  let result;
  switch (fromUnitValue) {
    case "milli":
      result = convertFromMilli(fromValue, toUnitValue);
      break;
    case "centi":
      result = convertFromCenti(fromValue, toUnitValue);
      break;
    case "meters":
      result = convertFromMeters(fromValue, toUnitValue);
      break;
    case "kilometers":
      result = convertFromKilometers(fromValue, toUnitValue);
      break;
    default:
      result = "Invalid from unit";
  }

  // display result
  toInput.value =`${result}`;
});

// conversion functions
function convertFromMilli(value, toUnit) {
  switch (toUnit) {
    case "milli":
      return value;
    case "centi":
      return value / 10;
    case "meters":
      return value / 1000;
    case "kilometers":
      return value / 1000000;
    default:
      return "Invalid to unit";
  }
}

function convertFromCenti(value, toUnit) {
  switch (toUnit) {
    case "milli":
      return value * 10;
    case "centi":
      return value;
    case "meters":
      return value / 100;
    case "kilometers":
      return value / 100000;
    default:
      return "Invalid to unit";
  }
}

function convertFromMeters(value, toUnit) {
  switch (toUnit) {
    case "milli":
      return value * 1000;
    case "centi":
      return value * 100;
    case "meters":
      return value;
    case "kilometers":
      return value / 1000;
    default:
      return "Invalid to unit";
  }
}

function convertFromKilometers(value, toUnit) {
  switch (toUnit) {
    case "milli":
      return value * 1000000;
    case "centi":
      return value * 100000;
    case "meters":
      return value * 1000;
    case "kilometers":
      return value;
    default:
      return "Invalid to unit";
  }
}