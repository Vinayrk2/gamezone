<?php

$name = isset($_POST['name']) ? $_POST['name'] : ""; 
$lastname = isset($_POST['lastname']) ? $_POST['lastname'] : ""; 
$email = isset($_POST['email']) ? $_POST['email'] : ""; 
$password = isset($_POST['password']) ? $_POST['password'] : ""; 

header("Access-Control-Allow-Origin: * ");

function getConnection(){
    $host = "localhost:3306";
    $username = "root";
    $password = "";
    $db = "zoneofgame";

    $conn = new Mysqli($host,$username,$password,$db);
    return $conn;
}

function getUser(){
    global $name,$lastname,$email;
    $user = new stdClass();
        $user->name = $name;
        $user->lastname = $lastname;
        $user->email = $email;
        $user->res = true;
    return $user;
}


    // Sign up code
    if($name != "" and $lastname != "" && $email != "" and $password != ""){
        $conn = getConnection();
        $query = "INSERT INTO `users`(`NAME`, `LASTNAME`, `EMAIL`, `PASSWORD`) VALUES ('$name','$lastname', '$email', '$password')";
        $result = $conn->query($query);
        
        if($result){
            $user = getUser();
            $user->message = "Account Created Successfully !!";
            $user->res = 1;
            echo json_encode($user);
        }
        else{
            $user = new stdClass();
            $user->message = "Couldn't create an account !!";
            $user->res = 0;
            echo json_encode($user);
        }
        $conn->close();
    }

    //Login Code
    else if($email != "" and $password != ""){
        $conn = getConnection();
        $query = "select `name`,`lastname`,`email` from `users` where `EMAIL` = '$email' && `PASSWORD` = '$password'";
        $result = $conn->query($query);
        if(mysqli_num_rows($result)){
        $row = $result->fetch_array(MYSQLI_NUM);
        $name = $row[0];
        $lastname = $row[1];
        
        if($result)
            $user = getUser();
            $user->message = "Logged in successfully";
            $user->res = 1;
        }
        else{
            $user = new stdClass();
            $user->res = 0;
            $user->message = "User Does Not Exists";
        }
        echo json_encode($user);
        $conn->close();
    }

    //Update Profile Code
    else if($email != "" and $name != "" and $lastname != ""){
        $conn = getConnection();
        $query = "UPDATE `users` SET `NAME`='$name',`LASTNAME`='$lastname' WHERE `EMAIL` = '$email'";
        $result = $conn->query($query);
        $user = new stdClass();

        if($result)
        $user->message =  "Updated Successfully";
        else 
        $user->message =  "Failed To Update";

        echo json_encode($user);
        $conn->close();
    }
?>
