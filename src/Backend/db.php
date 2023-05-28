<?php

        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        
function getConnection(){
    $host = "localhost:8080";
    $username = "root";
    $password = "";
    $db = "zoneofgame";

    $conn = new Mysqli($host,$username,$password,$db);
    return $conn;
}

    // Sign up code
    if(isset($_POST['name']) and isset($_POST['lastname']) and isset($_POST['email']) and isset($_POST['password'])){
        $conn = getConnection();
        $query = "INSERT INTO `users`(`NAME`, `LASTNAME`, `EMAIL`, `PASSWORD`) VALUES ('$name','$lastname', '$email', '$password')";
        $conn->query($query);
        
    }
?>