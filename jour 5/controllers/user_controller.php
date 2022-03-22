<?php

// Models : User  ____________________________________________________________________________________________
require_once('../models/User.php');

// sec functions _______________________________________________________________________________________________________

// foreach $_POST of any key --->>> pass it through htmlspecialchars

foreach ($_POST as $key => $value) {
    $_POST[$key] = htmlspecialchars((string)$value, ENT_NOQUOTES | ENT_HTML5 | ENT_SUBSTITUTE,
        'UTF-8', /*double_encode*/false );
}


// Subscribe____________________________________________________________________________________________________________

// In database my user has a constraint on the email column
// ALTER TABLE utilisateurs ADD CONSTRAINT email UNIQUE (email);

// initialise new User
$user = new User();


if(isset($_POST['submit_subscription'])){

    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = htmlspecialchars($_POST['password']);
    $password_conf = htmlspecialchars($_POST['password_conf']);
    $errors=0;

    // check for errors in user inputs and count them
    if(empty($_POST['prenom'])){$errors++; }
    if(empty($_POST['nom'])){ $errors++;}
    if(empty($_POST['email'])){ $errors++; }
    if (!preg_match('/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/', $email)){ $errors++;}
    if(empty($_POST['password'])){ $errors++;}
    if(empty($_POST['password_conf'])){$errors++;}
    if ($password !== $password_conf) { $errors++; }
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/', $password)) { $errors++;}

    //check if user exists
    $chkExists = $user->chkExists($email);

    if ( gettype($chkExists) == "array" ) {$errors++; }

    // Finally, register user if there are no errors in the form
    if ( $errors == 0) {
        $user->subscribeUser($prenom, $nom, $email, $password);

        $userInfos = $user->chkExists($email);
         header('location: ../views/connexion.php');
    } else {
        echo 'FAIL';
    }
}

// Connect______________________________________________________________________________________________________________

if( isset($_POST['submit_connection'])) {

    $errors=array();

    // receive all input values from the form
    $password = htmlspecialchars($_POST['password_con']);
    $email = htmlspecialchars($_POST['email_con']);
    $errorsX = 0;
    // form validation:
    // counr errors
    if(empty($_POST['email_con'])){ $errorsX++; }
    if(empty($_POST['password_con'])){ $errorsX++; }

    // check the database to make sure
    // a user does exist with the same login and password
    $checkExists = $user->chkExists($email);

    if ( !$checkExists ) {$errorsX++;}

    if ($errorsX === 0) {
        if ( password_verify($password, $checkExists['password'])) {
            header('location:../index.php');
        } else {
            echo 'FAIL';
        }
    }
}
