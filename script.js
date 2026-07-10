function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        if (display.value.trim() === "") {
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
        display.value = "";
    }
}
