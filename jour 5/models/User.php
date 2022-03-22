<?php

require_once 'Model.php';

Class User extends Model
{
    public  $prenom, 
            $nom, 
            $email, 
            $password;

    function __construct(){}

    public function chkExists($email)
    {
        $params = array($email);

        $sql = "SELECT * FROM `utilisateurs` 
                        WHERE `email` LIKE ?";

        $checkQuery = $this->selectQuery($sql,$params);

        $infos = $checkQuery->fetch(PDO::FETCH_ASSOC);

        $count = $checkQuery->rowCount();

        if ($count > 0)
        {
            return $infos;
        }
        else
        {
            return false;
        }

    }

    public function subscribeUser($prenom, $nom, $email, $password)
    {
        $sql = "INSERT INTO utilisateurs (prenom, nom, email,
                                            password) 
                        VALUES (:prenom, :nom, :email,
                                :password)";
        $params = ([':prenom' => $prenom, ':nom' => $nom, ':email' => $email,
            ':password' => password_hash($password, PASSWORD_DEFAULT)]);
        $this->selectQuery($sql, $params);
    }


}