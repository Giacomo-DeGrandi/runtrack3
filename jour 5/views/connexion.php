<?php $title = 'Connexion' ?>
<?php require_once('../controllers/user_controller.php') ?>

<?php ob_start(); ?>
    <div class="container-fluid">
        <div class="d-flex flex-column align-items-center justify-content-center p-3 w-100" >
            <p class="h1 mb-4 mt-3 ">Log In</p>
            <form id="form" class="col-md-5 shadow-sm bg-light p-5 " method="POST">
                <div class="form-field text-center">
                    <input type="email" id="email_con" name="email_con" class="p-1 mb-2" placeholder="email" autocomplete="off"><br>
                    <small></small>
                </div>
                <div class="form-field text-center">
                    <input type="password" id="password_con" name="password_con" class="p-1 mb-2" placeholder="password" autocomplete="off"><br>
                    <small></small>
                </div>
                <div class="form-field text-center">
                    <button type="submit" name="submit_connection" id="sign_in" class="btn-outline-dark p-1 mt-3">Connect</button>
                </div>
            </form>
            <b><?php if(isset($errors)){ foreach($errors as $error){ echo '<p>'.$error.'</p>'; }; } ?></b>
        </div>
    </div>

<?php $content = ob_get_clean();?>

<?php require_once('template.php'); ?>