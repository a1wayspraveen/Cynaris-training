<?php
session_start();

echo "<h2>Session Data</h2>";

if(isset($_SESSION["username"])){
    echo "Logged User: " . $_SESSION["username"];
}else{
    echo "No session found";
}
?>