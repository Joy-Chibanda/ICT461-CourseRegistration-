const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = "";

    const fullName = document.getElementById("fullName");
    const studentId = document.getElementById("studentId");
    const email = document.getElementById("email");
    const programme = document.getElementById("programme");
    const studyMode = document.getElementById("studyMode");
    const confirmation = document.getElementById("confirmation");

    if (fullName.value.trim() === "") {
        message.textContent = "Please enter your full name.";
        fullName.focus();
        return;
    }

    if (studentId.value.trim().length < 6) {
        message.textContent = "Student ID must contain at least 6 characters.";
        studentId.focus();
        return;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        message.textContent = "Please enter a valid email address.";
        email.focus();
        return;
    }

    if (programme.value === "") {
        message.textContent = "Please select your programme.";
        programme.focus();
        return;
    }

    if (studyMode.value === "") {
        message.textContent = "Please select your study mode.";
        studyMode.focus();
        return;
    }

    if (!confirmation.checked) {
        message.textContent = "Please confirm that your information is correct.";
        confirmation.focus();
        return;
    }

    message.textContent =
        "Registration successful! You have successfully registered for ICT461 - Web Systems.";
});

form.addEventListener("reset", function () {
    message.textContent = "";
});