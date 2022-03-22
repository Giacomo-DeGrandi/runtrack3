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

// In database my user has a constraint on the email column ALTER TABLE utilisateurs ADD CONSTRAINT email UNIQUE (email);


if(isset($_POST['submit_subscription'])){

    echo 'hello PHP';

    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = htmlspecialchars($_POST['password']);
    $password_conf = htmlspecialchars($_POST['password_conf']);
    $user = new User();

    $errors=array();

    // check for errors in user inputs and push it in array to display later
    if(empty($_POST['prenom'])){ array_push($errors,'please insert your prenom'); }
    if(empty($_POST['nom'])){ array_push($errors,'please insert your nom'); }
    if(empty($_POST['email'])){ array_push($errors,'please insert your email');   }
    if (!preg_match('/^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/', $email))
    { array_push($errors, "Email format is wrong"); }
    if(empty($_POST['password'])){ array_push($errors,'please insert your password'); }
    if(empty($_POST['password_conf'])){ array_push($errors,'please confirm your password');   }
    if ($password !== $password_conf) { array_push($errors, "The two passwords do not match"); }
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/', $password)) { array_push($errors, "Password format is wrong");}

    //check if user exists
    $chkExists = $user->chkExists($email);
    var_dump($errors);
    if ( gettype($chkExists) == "array" ) {array_push($errors, "User already exists"); }

    // Finally, register user if there are no errors in the form
    if ( count($errors) == 0)
    {
        $user->subscribeUser($prenom, $nom, $email, $password);

        //récupère toutes les informations pour avoir l'id qui vient d'être créé
        $userInfos = $user->chkExists($email);

       // header('location: ./connexion.php');
        echo 'SUCCESS';
    }
}

// Connect______________________________________________________________________________________________________________

if( isset($_POST['submit_connection'])){

    $errors=array();

    // check for errors in user inputs and push it in array to display later
    if(empty($_POST['email'])){ array_push($errors,'please insert your email'); }
    if(empty($_POST['password'])){ array_push($errors,'please insert your password'); }

    // div for alert
    $tmp= '<div class="border border-secondary rounded-2 px-4 mb-2 mt-2 ml-2" >';

    //check for errors

    foreach($errors as $error => $value){
        if(count($errors)>1) {
            $tmp.= 'remplir tous les champs svp';
            break;
        } else {
            $tmp.=$value;
        }
    }

    //if there aren't errors
    if(empty($errors)){

        //instantiate new user
        $user= new User();
        //get hash to test
        $myhash= $user->getHash($_POST['email']);
        // if there is a hash in a row
        if(!empty($myhash)) {
            // test the hash if valid
            if( (password_verify($_POST['password'],$myhash['password'])) ){
                // validate connection
                $test=$user->validateUserConnection($_POST['email'],$myhash['password']);
                // get id
                $myid=$user->getId($_POST['email']);


                // for this test there are 2 functions added to User class in Model/User.php

                // this is needed to check if there is eventually a cart already open
                // or if create a new one in Db.
                // to perform so, orders has to be called to check if the last
                // cart fetched had been paid.

                //check cart existence
                $cart_exist=$user->checkCartExist($myid['id_utilisateur']);
                //if exists check if paid
                $pay_check=$user->checkPaymentLastCart(intval($cart_exist['id_panier']));

                var_dump($cart_exist);
                if(empty($cart_exist)){
                    // instatiate a new cart
                    $cart=new Cart();
                    // create a new cart in Db
                    $cart->insertCart(intval($myid['id_utilisateur']));
                }


                // get cart id          LEGERE MODIF TO HAVE THE LAST CART IN USER MODEL ___________>>>>>>>>CHECK
                $mycartid = $user->getCartId($myid['id_utilisateur']);
                var_dump( $mycartid);
                // assign sessions

                $_SESSION['connected'] = $_POST['email'];
                $_SESSION['cart'] = $mycartid['id_panier'];
                // get all user infos
                $_SESSION['infos'] = $user->getAllUserInfos($_POST['email']);
                // assign them
                $_SESSION['id'] = $_SESSION['infos']["id_utilisateur"];
                $_SESSION['prenom'] = $_SESSION['infos']["prenom"];
                $_SESSION['nom'] = $_SESSION['infos']["nom"];
                $_SESSION['email'] = $_SESSION['infos']["email"];
                $_SESSION['password'] = $_SESSION['infos']["password"];
                $_SESSION['address'] = $_SESSION['infos']["address"];
                $_SESSION['zipCode'] = $_SESSION['infos']["code_postal"];
                $_SESSION['droits'] = $_SESSION['infos']["id_droit"];

                // redirect to profil
                // header('location:profil.php');
                // exit();


            } else {
                $tmp .= 'email ou password erroné';
            }
        } else {
            $tmp .= 'email ou password erroné';
        }
    }
    $tmp.='</div>';
}
