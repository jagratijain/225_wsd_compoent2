// Select form elements and error spans
const form = document.getElementById("feedbackForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");


const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const feedbackError = document.getElementById("feedbackError");

// Event listeners for real-time validation
fullName.addEventListener("input", validateFullName);
email.addEventListener("input", validateEmail);
feedback.addEventListener("input", validateFeedback);


// Event listener for form submission
form.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Validation functions
function validateFullName() {
    const fullNameValue = fullName.value.trim();
    const isValid = /^[a-zA-Z\s]{3,}$/.test(fullNameValue);
    fullNameError.textContent = isValid ? "" : "Full Name is invalid";
    return isValid;
}

function validateEmail() {
    const emailValue = email.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    emailError.textContent = isValid ? "" : "Email is invalid";
    return isValid;
}

function validateFeedback() {
    const feedbackValue = feedback.value.trim();
    const isValid = feedbackValue.length >= 10;
    feedbackError.textContent = isValid ? "" : "Feedback must be at least 10 characters long";
    return isValid;
}



// Overall form validation function
function validateForm() {
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidFeedback = validateFeedback();
   
    
    // Enable or disable the submit button based on overall validity
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = !(isValidFullName && isValidEmail && isValidFeedback );
    
    // Return true if the form is valid
    return isValidFullName && isValidEmail && isValidFeedback;
}
