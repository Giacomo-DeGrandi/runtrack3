<?php

// Models : User  ____________________________________________________________________________________________
require_once('models/User.php');

// foreach $_POST of any key --->>> pass it through htmlspecialchars

foreach ($_POST as $key => $value) {
    $_POST[$key] = htmlspecialchars((string)$value, ENT_NOQUOTES | ENT_HTML5 | ENT_SUBSTITUTE,
        'UTF-8', /*double_encode*/false );
}

$user = new User();

if(isset($_POST['test_me'])){
    $email = filter_var($_POST['test_me'],FILTER_SANITIZE_EMAIL);
    $chkExists = $user->chkExists($email);
    if($chkExists){
        echo 'itexists';
    } else {
        echo 'not_exists';
    }
}