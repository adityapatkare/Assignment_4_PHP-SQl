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

<<<<<<< HEAD
=======

>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
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

<<<<<<< HEAD
        // Name Validation
        if (name === "") {
            showError("Please enter your full name");
=======

        // Name Validation
        if (name === "") {

            showError("Please enter your full name");
            return;
        }

        // only letters and spaces
        let namePattern = /^[A-Za-z ]+$/;

        if (!namePattern.test(name)) {

            showError("Name should contain only letters");
            return;
        }

        // minimum name length
        if (name.length < 3) {

            showError("Name should be at least 3 characters");
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
            return;
        }

        let namePattern = /^[A-Za-z ]+$/;

<<<<<<< HEAD
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
=======
        // Phone Validation
        if (phone === "") {

            showError("Please enter mobile number");
            return;
        }

        // only numbers and exactly 10 digits
        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            showError("Mobile number must be 10 digits");
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
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

<<<<<<< HEAD
=======
        // Email Validation
        if (email === "") {

            showError("Please enter email");
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showError("Please enter valid email");
            return;
        }


        // Password Validation
        if (password === "") {

            showError("Please enter password");
            return;
        }

        // strong password check
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordPattern.test(password)) {
            showError(
                "Password must contain uppercase, lowercase, number and minimum 6 characters"
            );
            return;
        }

<<<<<<< HEAD
=======

        // Success
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
        showSuccess("Form submitted successfully");
    });

<<<<<<< HEAD
=======

    // Error Message Function
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
    function showError(message) {

        $("#message")
            .addClass("error")
            .text(message)
            .show();
    }

<<<<<<< HEAD
=======

    // Success Message Function
>>>>>>> 00e1b0120a828bfcb9e47be1261ce67714c0bb95
    function showSuccess(message) {

        $("#message")
            .addClass("success")
            .text(message)
            .show();
    }

});
