<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Materialize</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <!-- Icons from Google Fonts -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<header>
    <nav class="pink">
        <a href="index.php">Accueil</a>
        <a href="index.php">Inscription</a>
        <a href="index.php">Connexion</a>
        <a href="index.php">Rechercher</a>
    </nav>
</header>
<main>
    <form action="" class="container center-align">
        <div class="row">
            <div class="left-align col s6">
                <label>
                    <input type="radio">
                    <span>Mme</span>
                </label>
            </div>
            <div class="left-align col s6">
                <label>
                    <input type="radio">
                    <span>Mr</span>
                </label>
            </div>
        </div>
        <div class="left-align">
            <i class="material-icons prefix">account_circle</i>
            <label for="icon_prefix">Last Name</label>
            <input id="icon_prefix" type="text" class="validate">

            <i class="material-icons prefix">account_circle</i>
            <label for="icon_prefix">First Name</label>
            <input id="icon_prefix" type="text" class="validate">

            <i class="material-icons prefix">home</i>
            <label for="icon_prefix">Adress</label>
            <input id="icon_prefix" type="text" class="validate">

            <i class="material-icons prefix">alternate_email</i>
            <label for="icon_prefix">Email</label>
            <input id="icon_prefix" type="email" class="validate">

            <i class="material-icons prefix">lock</i>
            <label for="icon_prefix">Password</label>
            <input id="icon_prefix" type="password" class="validate">

            <i class="material-icons prefix">lock_outlined</i>
            <label for="icon_prefix">Password Confirmation</label>
            <input id="icon_prefix" type="password" class="validate">
        </div>
        <div class="row">
            <div class="col s3">
                <label>
                    <input type="checkbox" checked>
                    <span>Informatique</span>
                </label>
            </div>
            <div class="col s3">
                <label>
                    <input type="checkbox" >
                    <span>Voyage</span>
                </label>
            </div>
            <div class="col s3">
                <label>
                    <input type="checkbox" >
                    <span>Sport</span>
                </label>
            </div>
            <div class="col s3">
                <label>
                    <input type="checkbox" >
                    <span>Lecture</span>
                </label>
            </div>
        </div>
            <input type="submit" id="submit" value="register">
    </form>
</main>
<footer>
    <nav class="black">
        <a href="index.php">Accueil</a>
        <a href="index.php">Inscription</a>
        <a href="index.php">Connexion</a>
        <a href="index.php">Rechercher</a>
    </nav>
</footer>
</body>
</html>