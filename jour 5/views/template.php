<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?></title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="../script.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <style>
        .is_valid {
            text-align: center!important;
            color:royalblue;
        }
        .not_valid {
            text-align: center!important;
            color:crimson;
        }
    </style>
</head>
<body>
<main>

    <?php echo $content ?>

</main>
</body>
</html>