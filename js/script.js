function calculatePercentage() {
    const numberInput = document.getElementById('numberInput');
    const percentInput = document.getElementById('percentInput');
    const resultDiv = document.getElementById('result');

    const number = parseFloat(numberInput.value);
    const percent = parseFloat(percentInput.value);

    if (isNaN(number) || isNaN(percent)) {
        resultDiv.textContent = "Please enter valid numbers.";
    } else {
        const result = (number / 100) * percent;
        resultDiv.textContent = "Result: " + result;
    }
}
