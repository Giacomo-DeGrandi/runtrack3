
$(document).ready(function () {
    //  get my vars
    const nom = document.querySelector('#nom').sanitize;
    const prenom = document.querySelector('#prenom').sanitize;
    const myemail = document.querySelector('#email').sanitize;
    const mypassword = document.querySelector('#password').sanitize;
    const passwordConf = document.querySelector('#password_conf').sanitize;
    var myerrors = []
    // my http request
    var httpRequest;


    const form = document.querySelector('#form');

    //simple regex to sanitize inputs
    function sanitize(string) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
    }
    // Also see OWASP XSS Prevention Cheat Sheet.

    // validation TESTS_______________________________-
    const isRequired = value => value === '' ? false : true;
    // longueur
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    // email regex
    const validateEmail = (email) => {
        const re = /^[a-z0-9._-]+[@]+[a-zA-Z0-9._-]+[.]+[a-z]{2,3}$/    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // password regex
    const validatePassword = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        return re.test(password);
    };

    // show Functions __________________________________-

    // Error showing function if is invalid remove the valid class and add not_valid
    const showErrors  = (input,value) => {
        const my_form = input.parentElement
        my_form.remove('is_valid')
        my_form.add('not_valid')
        // select the small as containers and insert the error message as content
        const error = my_form.querySelector('small');
        error.textContent = message;
    }
    // Validation showing function if is valid remove the invalid class and add is_valid
    const showValids = (input) => {
        const my_form = input.parentElement
        my_form.remove('not_valid')
        my_form.add('is_valid')
        // select the small as containers and insert the error message as content
        const error = my_form.querySelector('small');
        error.textContent = message;
    }

    // inputs validation_________________________________-
    // test our values for NOM
    const testValidName  = (input,value) => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 3
        // max num of chars
        var max = 15
        // take away spaces
        const nom = nom.value.trim();

        // test if required function is valid else give an error
        if(!isRequired(nom)){
            showErrors(nom,'Nom can\'t be blank')
            // test if the length is at least 3ch and the max is 15ch
        } else if (!isBetween(nom)){
            showErrors(nom, 'Nom has to be between 3 and 15 characters')
            // else validate the input
        } else{
            showValids(nom)
            isValid = true
        }
        return isValid
    }
    // test our values for EMAIL
    const testValidEmail  = (input,value) => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 8
        // max num of chars
        var max = 35
        // test if required function is valid else give an error
        if(!isRequired(myemail)){
            showErrors(myemail,'Email can\'t be blank')
            // test if the length is at least 8ch and the max is 35ch
        }  else if(!validateEmail){
            showErrors(myemail, 'Email can\'t contain (!#$%^&*), it has to be at least 8ch and 35ch')
        } else {
            showValids(nom)
            isValid = true
        }
        return isValid
    }
    // test our values for PASSWORD
    const testValidPassword = (input,value) => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 8
        // max num of chars
        var max = 50
        // test if required function is valid else give an error
        if(!isRequired(mypassword)){
            showErrors(email,'Password can\'t be blank')
            // test if the length is at least 8ch and the max is 50ch
        } else if(!validatePassword) {
            showErrors(email, 'Password has to be at least 1 lowercase, 1 uppercase, 1 number and has to be at least 8ch and at max 50ch')
            // else validate the input
        } else {
            showValids(nom)
            isValid = true
        }
        return isValid
    }
    //test our values for PASSWORD CONFIRMATION
    const testPasswordConfirmation = (input,value) => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 8
        // max num of chars
        var max = 50
        // test if required function is valid else give an error
        if(!isRequired(passwordConf)){
            showErrors(passwordConf,'Password can\'t be blank')
            // test if the length is at least 8ch and the max is 50ch
        } else if( mypassword != passwordConf) {
            showErrors(passwordConf, 'Password has to be at least 1 lowercase, 1 uppercase, 1 number and has to be at least 8ch and at max 50ch')
            // else validate the input
        } else {
            showValids(nom)
            isValid = true
        }
        return isValid
    }

    form.addEventListener('button', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate forms
        let nameV = testValidName(),
            emailV = testValidEmail(),
            passwordV = testValidPassword(),
            confPasswordV = testPasswordConfirmation();

        let isFormValid = nameV && emailV && passwordV && ConfPasswordV
        // submit to the server if the form is valid
        if (isFormValid) {

            // function to post values for PHP
            function submitLogin(enteredNom, enteredPrenom, enteredPassword, enteredEmail) {

                $.post('index_con.php', {

                    nom: enteredNom,
                    prenom: enteredPrenom,
                    password: enteredPassword,
                    email: enteredEmail

                }, function (response) {

                    if (response.result == true) {
                       console.log(response.result)
                    } else {
                        console.log('failed!')
                        // fail code here
                    }

                }, 'json'); // JSON FORMAT
            }
        }

    })
})

