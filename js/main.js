// Add all your JS here
function convert() {
    let celsiusInput = document.getElementById("celsiusInput");
    let fahrenheitOutput = document.getElementById("fahrenheitOutput");
    let fahrenheitInput = document.getElementById("fahrenheitInput");
    let celsiusOutput = document.getElementById("celsiusOutput");
    let resultDiv = document.getElementById("result");

    // Check if both fields are empty
    if (celsiusInput.value === "" && fahrenheitInput.value === "") {
      resultDiv.textContent = "Please enter a temperature";
      return;
    }

    // Conversion from Celsius to Fahrenheit
    if (celsiusInput.value !== "") {
      let celsius = parseFloat(celsiusInput.value);
      let fahrenheit = (celsius * 9/5) + 32;
      fahrenheitOutput.value = fahrenheit;
      resultDiv.textContent = celsius + " degrees Celsius is equivalent to " + fahrenheit + " degrees Fahrenheit.";
    }

    // Conversion from Fahrenheit to Celsius
    if (fahrenheitInput.value !== "") {
      let fahrenheit = parseFloat(fahrenheitInput.value);
      let celsius = (fahrenheit - 32) * 5/9;
      celsiusOutput.value = celsius;
      resultDiv.textContent = fahrenheit + " degrees Fahrenheit is equivalent to " + celsius + " degrees Celsius.";
    }
  }

  function confirmReset() {
    if (confirm("Are you sure you want to reset?")) {
      reset();
    }
  }

  function reset() {
    let celsiusInput = document.getElementById("celsiusInput");
    let fahrenheitOutput = document.getElementById("fahrenheitOutput");
    let fahrenheitInput = document.getElementById("fahrenheitInput");
    let celsiusOutput = document.getElementById("celsiusOutput");
    let resultDiv = document.getElementById("result");

    celsiusInput.value = "";
    fahrenheitOutput.value = "";
    fahrenheitInput.value = "";
    celsiusOutput.value = "";
    resultDiv.textContent = "";
  }