function validateForm() {
    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const resume = document.getElementById("resume");
    const jobTitle = document.getElementById("job-title");
    const location = document.getElementById("location");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");

    // Validate required fields
    if (name.value === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.value === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!isValidEmail(email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone.value === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (resume.value === "") {
        alert("Please upload your resume.");
        return false;
    }

    if (jobTitle.value === "") {
        alert("Please enter the job title.");
        return false;
    }

    if (location.value === "") {
        alert("Please enter the location.");
        return false;
    }

    if (experience.value === "") {
        alert("Please select your experience level.");
        return false;
    }

    if (skills.value === "") {
        alert("Please enter your skills.");
        return false;
    }

    // Additional validation (optional)
    // ...

    // Submit form
    document.getElementById("myForm").submit();
    return true;
}

function isValidEmail(email) {
    // Basic email validation (you can use a more robust regex if needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Attach event listener to the form submit button
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        // Handle form submission (e.g., send data to server)
        // ...
    }
});