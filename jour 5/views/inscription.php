<?php $title = 'Inscription' ?>
<?php require_once('../controllers/user_controller.php') ?>

<?php ob_start(); ?>

    <div class="container-fluid">
        <div class="d-flex flex-column align-items-center justify-content-center p-3 w-100" >
            <p class="h1 mb-4 mt-3 ">Sign Up</p>
            <form id="form" class="col-md-5 shadow-sm bg-light  p-5 border border-light p-2 rounded-2 " method="POST">
                <div class="form-field text-center">
                    <input type="text" id="nom" name="nom" class="p-1 mb-2" placeholder="nom" autocomplete="off"><br>
                    <small></small>
                </div>
                <div class="form-field text-center">
                    <input type="text" id="prenom" name="prenom" class="p-1 mb-2" placeholder="prenom" autocomplete="off"><br>
                    <small></small>
                </div>
                <div class="form-field text-center">
                     <input type="email" id="email" name="email" class="p-1 mb-2" placeholder="email" autocomplete="off"><br>
                    <small></small>
                </div>
                 <div class="form-field text-center">
                     <input type="password" id="password" name="password" class="p-1 mb-2" placeholder="password" autocomplete="off"><br>
                     <small></small>
                 </div>
                 <div class="form-field text-center">
                     <input type="password" id="password_conf" name="password_conf" class="p-1 mb-2" placeholder="confirm password" autocomplete="off"><br>
                     <small></small>
                 </div>
                <div class="form-field text-center">
                  <button type="submit" name="submit_subscription" id="sign_up" class="btn  btn-outline-dark p-1 mt-3">Subscribe</button>
                </div>
            </form>
            <b><?php if(isset($errors)){ foreach($errors as $error){ echo '<p>'.$error.'</p>'; }; } ?></b>
        </div>
    </div>

<?php $content = ob_get_clean();?>

<?php require_once('template.php'); ?>