function calculate(operator) {
    const inputs = document.querySelectorAll("section .container input");
    const num1 = parseFloat(inputs[0].value);
    const num2 = parseFloat(inputs[1].value);
    const resultField = inputs[2];
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        resultField.value = "Введи числа!";
        return;
    }
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Ділення на 0!";
            break;
        default:
            result = "Помилка";
        }
        resultField.value = result;
}
