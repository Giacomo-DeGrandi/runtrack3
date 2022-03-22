<?php

require_once 'Model/Model.php';

Class User extends Model
{
    public  $prenom, 
            $nom, 
            $email, 
            $password;

    function __construct(){}

}