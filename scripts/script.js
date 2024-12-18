// script.js

// Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const packageType = document.getElementById("package").value;
    const guests = document.getElementById("guests").value;

    let errorMessage = "";

    if (!name) {
        errorMessage += "Name is required.\n";
    }
    if (!email || !validateEmail(email)) {
        errorMessage += "Valid email is required.\n";
    }
    if (!packageType) {
        errorMessage += "Please select a package.\n";
    }
    if (!guests || guests <= 0) {
        errorMessage += "Number of guests must be greater than 0.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert(`Thank you for booking!\nName: ${name}\nEmail: ${email}\nPackage: ${packageType}\nGuests: ${guests}`);
    }
}

// Helper function to validate email
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}
