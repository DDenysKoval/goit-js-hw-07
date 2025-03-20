const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const data = {};
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        data.email = email.trim();
        data.password = password.trim();
        console.log(data);
        form.reset();
    }
});

