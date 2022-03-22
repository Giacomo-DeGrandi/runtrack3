<?php $title = 'Inscription' ?>

<?php ob_start(); ?>
    <style>
        .is_valid {
            border: 1px solid crimson!important;
            border-radius: 3px;
        }
        .not_valid {
            border: 1px solid lightseagreen!important;
            border-radius: 3px;
        }
    </style>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="form p-3" >
            <form id="form">
                <div class="form-field">
                    <input type="text" id="nom" class="p-1 mb-2" placeholder="nom" autocomplete="nom"/>
                    <small></small>
                </div>
                <div class="form-field">
                    <input type="text" id="prenom" class="p-1 mb-2" placeholder="prenom" autocomplete="prenom"/>
                    <small></small>
                </div>
                <div class="form-field">
                     <input type="email" id="email" class="p-1 mb-2" placeholder="email" autocomplete="email"/>
                    <small></small>
                </div>
                 <div class="form-field">
                     <input type="password" id="password" class="p-1 mb-2" autocomplete="new-password"/>
                     <small></small>
                 </div>
                 <div class="form-field">
                     <input type="password" id="password_conf" class="p-1 mb-2" autocomplete="new-password-conf"/>
                     <small></small>
                 </div>
                <div class="form-field">
                  <button type="button" id="sign_up" class="btn btn-outline-dark p-3">subscribe</button>
                </div>
            </form>
        </div>
    </div>
<?php $content = ob_end_flush();?>

<?php require ('template.php'); ?>