const textInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimmedInput = event.target.value.trim();
    if (trimmedInput !== "") {
        output.textContent = trimmedInput;
    } else {
        output.textContent = "Anonymous";
    }
});
