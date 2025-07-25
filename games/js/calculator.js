const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Use eval to calculate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
