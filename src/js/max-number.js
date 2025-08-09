const maxNumberInputEl = document.querySelectorAll(".max-number-input")

function getValues() {
    const values = Array.from(maxNumberInputEl).map(input => Number(input.value));
    return values;
}

maxNumberInputEl.forEach(input => {
    input.addEventListener("input", () => {
        const numbers = getValues();
        const biggest = Math.max(...numbers);
        document.querySelector(".biggest-number").textContent = biggest;
    });
});