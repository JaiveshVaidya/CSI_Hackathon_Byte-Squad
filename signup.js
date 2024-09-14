const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get username, email, and password values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Prepare the data to be sent
  const formData = { username, email, password };

  // Send data to the server
  fetch('http://localhost:3000/signup', { // Ensure this URL is correct
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.text())
  .then(data => {
    alert(data); // Show success or error message
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred during signup.');
  });
});