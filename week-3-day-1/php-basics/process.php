<?php
session_start();

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

if(empty($name) || empty($email)){
    die("All fields are required.");
}

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

$_SESSION["username"] = $name;

echo "<h2>Form Submitted Successfully</h2>";
echo "Name: " . $name . "<br>";
echo "Email: " . $email . "<br>";
echo "<a href='session.php'>View Session</a>";
?>