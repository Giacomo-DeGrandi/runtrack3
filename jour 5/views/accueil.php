<?php $title = 'Accueil' ?>

<?php ob_start(); ?>
<div class="container-fluid d-flex flex-row align-items-center justify-content-center">
    <div class="display-1">
        <a href="views/inscription.php" class="btn btn-outline-dark p-3 h-2">SIGN UP</a>
        <a href="views/connexion.php" class="btn btn-outline-dark p-3 h-2">LOG IN</a>
    </div>
</div>
<?php $content = ob_get_clean();?>

<?php require_once('template.php'); ?>