<?php

$name = isset($_POST['name'])?$_POST['name'] : NULL ;
$lastname = isset($_POST['lastname'])?$_POST['lastname'] : NULL ;
$email = isset($_POST['email'])?$_POST['email'] : NULL ;
$password = isset($_POST['password'])?$_POST['password'] : NULL ;
 
header("Access-Control-Allow-Origin: * ");

function getConnection(){
    $host = "localhost:3306";
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
        $result = $conn->query($query);
        $user = new stdClass();
        $user->name = $name;
        $user->lastname = $lastname;
        $user->email = $email;
        if($result){
            echo json_encode($user);
        }
        else{
            echo 0;
        }
        $conn->close();
    }
    else if(isset($_POST['email']) && isset($_POST['password'])){
        $conn = getConnection();
        $query = "select `name`,`lastname`,`email` from `users` where `EMAIL` = '$email' && `PASSWORD` = '$password'";
        $result = $conn->query($query);
        if($result){
        $row = $result->fetch_array(MYSQLI_NUM);
        $user = new stdClass();
        $user->name = $row[0];
        $user->lastname = $row[1];
        $user->email = $row[2];
            echo json_encode($user);
        }
        else{
            echo 0;
        }
        $conn->close();
    }
?>
