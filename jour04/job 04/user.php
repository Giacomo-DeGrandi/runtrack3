<?php

abstract Class Model {

    private $conn;

    private function getConn()
    {
        $server="localhost";
        $username="root";
        $password="";
        $database="utilisateurs";

        $dsn = "mysql:host=$server;dbname=$database;charset=UTF8";
        $this->conn = new PDO($dsn, $username, $password);
        return $this->conn;
    }

    public function selectQuery($sql,$params=null)
    {
        if($params===null)
        {
            $result = $this->getConn()->query($sql);
        }
        else
        {
            $result = $this->getConn()->prepare($sql);
            $result->execute($params);
        }
        return $result;
    }
}


class User extends Model
{
    public $prenom,
        $nom,
        $email,
        $password,
        $id;

    function __construct()
    {
    }

    public function getAllUsers()
    {

        $sql = "SELECT * FROM `utilisateurs` ";

        $checkQuery = $this->selectQuery($sql);

        $infos = $checkQuery->fetchAll(PDO::FETCH_ASSOC);

        $count = $checkQuery->rowCount();

        if ($count > 0) {
            return $infos;
        } else {
            return false;
        }

    }
}


$title = 'USERS JSON';

$user = new User();

if(isset($_POST['update'])){

    $infos = $user->getAllUsers();

} else {

    $infos = $user->getAllUsers();

}


$infos = json_encode($infos);
// decode JSON as an assoc array
$infos = json_decode($infos, true);




?>
