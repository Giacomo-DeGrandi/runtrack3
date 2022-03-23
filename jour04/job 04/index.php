<?php require_once('user.php'); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?></title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
</head>
<body>
<main>
    <div class="d-flex flex-column align-items-center justify-content-center mt-5 py-5">
        <p class="h1">USERS</p>
        <?php

        if(isset($infos)){
            echo "<table>";
            foreach($infos as $ind){
                foreach($ind as $k => $v){
                    echo "<tr>";
                    echo "<td><b>$k</b></td>";
                    echo "<td>$v</td>";
                    echo "</tr>";
                }
            }
            echo "</table>";

        }
        ?>
        <form method="post">
            <button type="submit" id="update" class="btn btn-outline-dark p-1 mt-3">update</button>
        </form>
    </div>
</main>
</body>
</html>
