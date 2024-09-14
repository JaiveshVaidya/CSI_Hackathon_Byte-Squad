<?php
session_start();

// Database connection
$host = 'localhost';
$dbUser = 'root'; // Your MySQL username
$dbPassword = ''; // Your MySQL password (empty if no password)
$dbName = 'application'; // Your database name
$port = 3307; // MySQL port

$conn = new mysqli($host, $dbUser, $dbPassword, $dbName, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Admin credentials (can be stored in the database for more security)
    $adminUsername = "adminhr";
    $adminPassword = "adminhr";

    // Check if admin login
    if ($username === $adminUsername && $password === $adminPassword) {
        // Redirect to admin page
        header("Location: admin.html");
        exit;
    } else {
        // Regular user login (check against database)
        $sql = "SELECT * FROM users WHERE BINARY username = ? AND BINARY password = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // User found, login successful
            $_SESSION['username'] = $username;
            echo "Login successful! Redirecting...";
            header("refresh:2; url=details.html");
        } else {
            // Invalid login
            echo "Invalid username or password!";
        }

        $stmt->close();
    }
}

$conn->close();