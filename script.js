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

        $("#message").removeClass("error success").hide();


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
            return;
        }


        // Phone Validation
        if (phone === "") {

            showError("Please enter mobile number");
            return;
        }

        // only numbers and exactly 10 digits
        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            showError("Mobile number must be 10 digits");
            return;
        }


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
        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordPattern.test(password)) {

            showError(
                "Password must contain uppercase, lowercase, number and minimum 6 characters"
            );

            return;
        }


        // Success
        showSuccess("Form submitted successfully");

    });


    // Error Message Function
    function showError(message) {

        $("#message")
            .addClass("error")
            .text(message)
            .show();
    }


    // Success Message Function
    function showSuccess(message) {

        $("#message")
            .addClass("success")
            .text(message)
            .show();
    }

});
