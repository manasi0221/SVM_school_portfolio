document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateInput(nameInput) && validateInput(emailInput) && validateInput(messageInput)) {
            // Form is valid, you can submit it or perform further actions here
            alert('Form submitted successfully!');
        } else {
            // Form is not valid, display an error message or take appropriate action
            alert('Please fill in all the required fields.');
        }
    });

    // Function to validate input field
    function validateInput(input) {
        return input.value.trim() !== ''; // Simple check for non-empty input
    }
});