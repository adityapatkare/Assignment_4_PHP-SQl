$(document).ready(function () {

    // show and hide password
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


    // form submit
    $("#registration-form").submit(function (e) {

        e.preventDefault();

        let name = $("#full-name").val().trim();
        let phone = $("#mobile-number").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        $("#message").removeClass("error success").hide();


        // empty fields check
        if (name === "" || phone === "" || email === "" || password === "") {

            showError("All fields are required");
            return;
        }


        // email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {

            showError("Enter valid email");
            return;
        }


        // phone validation
        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            showError("Phone number must be 10 digits");
            return;
        }


        // password validation
        let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

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