var contactSelect = document.getElementById("contactMethod");
var emailField = document.getElementById("emailField");
var phoneField = document.getElementById("phoneField");

// Function to toggle visibility based on selection
function toggleFields() {
    if (contactSelect.value === "email") {
        emailField.style.display = "block";
        phoneField.style.display = "none";
    } else {
        emailField.style.display = "none";
        phoneField.style.display = "block";
    }
}

// Initial call to set the correct field visibility on page load
toggleFields();

// Event listener to handle changes
contactSelect.addEventListener("change", toggleFields);