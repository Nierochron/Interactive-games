document.querySelector('[data-btnYear]').addEventListener('click', function() {
    const year = parseInt(document.getElementById('yearInput').value, 10);
    const result = document.getElementById('result');

    if (!year) {
        result.textContent = "Введіть рік!";
        result.style.color = "red";
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    if (isLeap) {
        result.textContent = "Ви народилися у високосний рік!";
        result.style.color = "green";
    } else {
        result.textContent = "Ви народилися у невисокосний рік!";
        result.style.color = "red";
    }
});