$(document).ready(function () {

    // Show / Hide Password
    $("#toggle-password").click(function () {

        let passwordField = $("#password");

        if (passwordField.attr("type") === "password") {
            passwordField.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordField.attr("type", "password");
            $(this).text("Show");
        }
    });

    // Form Submit
    $("#registration-form").submit(function (e) {

        e.preventDefault();

        let name = $("#full-name").val().trim();
        let phone = $("#mobile-number").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        $("#message")
            .removeClass("error success")
            .hide();

        // Name Validation
        if (name === "") {
            showError("Please enter your full name");
            return;
        }

        let namePattern = /^[A-Za-z ]+$/;

        if (!namePattern.test(name)) {
            showError("Name should contain only letters");
            return;
        }

        if (name.length < 3) {
            showError("Name must be at least 3 characters");
            return;
        }

        // Phone Validation
        if (phone === "") {
            showError("Please enter mobile number");
            return;
        }

        // Indian mobile validation
        let phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone)) {
            showError("Enter a valid 10-digit mobile number");
            return;
        }

        // Email Validation
        if (email === "") {
            showError("Please enter email");
            return;
        }

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError("Enter a valid email address");
            return;
        }

        // Password Validation
        if (password === "") {
            showError("Please enter password");
            return;
        }

        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordPattern.test(password)) {
            showError(
                "Password must contain uppercase, lowercase and number"
            );
            return;
        }

        showSuccess("Form submitted successfully");
    });

    function showError(message) {

        $("#message")
            .addClass("error")
            .text(message)
            .show();
    }

    function showSuccess(message) {

        $("#message")
            .addClass("success")
            .text(message)
            .show();
    }

});