// Blood Bank Website JavaScript

// Welcome message
function welcomeMessage() {
    alert("Welcome to Life Savers Blood Bank! 🩸");
}


// Donor Registration
document.addEventListener("DOMContentLoaded", function() {

    var forms = document.querySelectorAll("form");

    forms.forEach(function(form) {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            alert("Thank you! Your form has been submitted successfully. 🩸");

            form.reset();

        });

    });

});