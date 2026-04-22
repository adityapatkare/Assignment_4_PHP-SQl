$(document).ready(function () {

    // Show/Hide Password
    $("#toggle-password").click(function () {
        let passwordField = $("#password");
        let type = passwordField.attr("type");

        if (type === "password") {
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
        let email = $("#email").val().trim();
        let phone = $("#mobile-number").val().trim();
        let password = $("#password").val().trim();

        let message = $("#message");

        // Clear previous message
        message.removeClass("error success").hide();

        // Validation
        if (name === "" || email === "" || phone === "" || password === "") {
            showError("Enter a valid name");
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("Invalid email format");
            return;
        }

        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            showError("Phone must be 10 digits");
            return;
        }

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordPattern.test(password)) {
            showError("Password must contain uppercase, lowercase, number and be 6+ chars");
            return;
        }

        showSuccess("Form submitted successfully!");
    });

    function showError(msg) {
        $("#message").addClass("error").text(msg).show();
    }

    function showSuccess(msg) {
        $("#message").addClass("success").text(msg).show();
    }

});