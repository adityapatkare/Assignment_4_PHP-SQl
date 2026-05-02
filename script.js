$(document).ready(function () {

    // Show/Hide Password
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
        let email = $("#email").val().trim();
        let phone = $("#mobile-number").val().trim();
        let password = $("#password").val().trim();

        let message = $("#message");

        // clear previous message
        message.removeClass("error success").hide();

        // check empty fields
        if (name === "") {
    showError("Enter your name");
    return;
}

if (phone === "") {
    showError("Enter mobile number");
    return;
}

if (email === "") {
    showError("Enter email");
    return;
}

if (password === "") {
    showError("Enter password");
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