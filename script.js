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

    // ADDED: helper to mark a field valid or invalid visually
    function highlightField(id, isValid) {
        $("#" + id)
            .toggleClass("invalid", !isValid)
            .toggleClass("valid", isValid);
    }

    // Reset all field highlights before each validation pass
    function resetHighlights() {
        $("input").removeClass("invalid valid");
    }

    // Form Submit
    $("#registration-form").submit(function (e) {
        e.preventDefault();

        let name     = $("#full-name").val().trim();
        let phone    = $("#mobile-number").val().trim();
        let email    = $("#email").val().trim();

        // BUG FIX: do NOT trim password — spaces are valid password characters
        // trimming before validation was silently stripping characters
        let password = $("#password").val();

        $("#message").removeClass("error success").hide();

        // Reset all borders before re-validating
        resetHighlights();

        // ── Name Validation ──────────────────────────────
        if (name === "") {
            highlightField("full-name", false);
            showError("Full name is required");
            return;
        }
        if (name.length < 3) {
            highlightField("full-name", false);
            showError("Name must be at least 3 characters long");
            return;
        }
        let namePattern = /^[A-Za-z ]+$/;
        if (!namePattern.test(name)) {
            highlightField("full-name", false);
            showError("Name can contain only letters and spaces");
            return;
        }
        highlightField("full-name", true);

        // ── Phone Validation ─────────────────────────────
        if (phone === "") {
            highlightField("mobile-number", false);
            showError("Mobile number is required");
            return;
        }
        let phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(phone)) {
            highlightField("mobile-number", false);
            showError("Enter a valid 10-digit mobile number starting with 6–9");
            return;
        }
        highlightField("mobile-number", true);

        // ── Email Validation ─────────────────────────────
        if (email === "") {
            highlightField("email", false);
            showError("Email is required");
            return;
        }
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            highlightField("email", false);
            showError("Enter a valid email address");
            return;
        }
        highlightField("email", true);

        // ── Password Validation ──────────────────────────
        // BUG FIX: validate raw password (not trimmed)
        if (password === "") {
            highlightField("password", false);
            showError("Password is required");
            return;
        }
        if (password.length < 8) {
            highlightField("password", false);
            showError("Password must be at least 8 characters long");
            return;
        }
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
        if (!passwordPattern.test(password)) {
            highlightField("password", false);
            showError("Password must contain uppercase, lowercase, number and special character");
            return;
        }
        highlightField("password", true);

        showSuccess("Form submitted successfully!");
    });

    function showError(message) {
        $("#message")
            .removeClass("success")
            .addClass("error")
            .text(message)
            .show();
    }

    function showSuccess(message) {
        $("#message")
            .removeClass("error")
            .addClass("success")
            .text(message)
            .show();
    }
});