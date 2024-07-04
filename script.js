// JavaScript code for handling form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    let formData = new FormData(event.target);

    // Display form data (for demonstration)
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // You can add further processing here, like sending the data to a server via AJAX
    // Example: SendFormDataToServer(formData);
});
