<?php
// Database connection
$host = 'localhost';
$dbUser = 'root'; // Your MySQL username
$dbPassword = ''; // Your MySQL password, if any
$dbName = 'application'; // Your database name
$port = 3307; // The port for MySQL (use 3307 in your case)

// Create a MySQL connection
$conn = new mysqli($host, $dbUser, $dbPassword, $dbName, $port);

// Check if connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password']; // Store password as plain text

    // Insert data into the "users" table
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    // Execute the query and check if it was successful
    if ($stmt->execute()) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}