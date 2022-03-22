
$(document).ready(function () {
    //  get my vars
    const mynom = document.querySelector('#nom');   //.textContent
    const myprenom = document.querySelector('#prenom');
    const myemail = document.querySelector('#email');
    const mypassword = document.querySelector('#password');
    const mypasswordConf = document.querySelector('#password_conf');
    var myerrors = []

    const form = document.querySelector('#form');

// In database my user has a constraint on the email column ALTER TABLE utilisateurs ADD CONSTRAINT email UNIQUE (email);


    // inputs validation_________________________________-
    // test our values for NOM
    const testValidName = () => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 3
        // max num of chars
        var max = 15
        // take away spaces
        const nom = mynom.value.trim();
        console.log(nom)
        // test if required function is valid else give an error
        if (!isRequired(nom)) {
            showErrors(mynom, 'Nom can\'t be blank')
            // test if the length is at least 3ch and the max is 15ch
        } else if (!isBetween(nom.length,min,max)) {
            showErrors(mynom, 'Nom has to be between 3 and 15 characters')
            // else validate the input
        } else {
            showValids(mynom)
            isValid = true
        }
        return isValid
    }
    // test our values for PRENOM
    const testValidPrenom = () => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 3
        // max num of chars
        var max = 15
        // take away spaces
        const prenom = myprenom.value.trim();

        // test if required function is valid else give an error
        if (!isRequired(prenom)) {
            showErrors(myprenom, 'Prenom can\'t be blank')
            // test if the length is at least 3ch and the max is 15ch
        } else if (!isBetween(prenom.length,min,max)) {
            showErrors(myprenom, 'Prenom has to be between 3 and 15 characters')
            // else validate the input
        } else {
            showValids(myprenom)
            isValid = true
        }
        return isValid
    }
    // test our values for EMAIL
    const testValidEmail = () => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 8
        // max num of chars
        var max = 35
        // take away spaces
        const emailX = myemail.value.trim();

        // test if required function is valid else give an error
        if (!isRequired(emailX)) {
            showErrors(myemail, 'Email can\'t be blank')
            // test if the length is at least 8ch and the max is 35ch
        } else if (!validateEmail(emailX)||!isBetween(emailX.length,min,max)) {
            showErrors(myemail, 'Email can\'t contain (!#$%^&*), it has to be at least 8ch and 35ch')
        } else {
            showValids(myemail)
            isValid = true
        }
        return isValid
    }
    // test our values for PASSWORD
    const testValidPassword = () => {
        // initialise my valide condition to false to test the errors
        var isValid = false
        // min num of chars
        var min = 8
        // max num of chars
        var max = 50
        // take away spaces
        const passwordX = mypassword.value.trim();
        // test if required function is valid else give an error
        if (!isRequired(passwordX)) {
            showErrors(mypassword, 'Password can\'t be blank')
            // test if the length is at least 8ch and the max is 50ch
        } else if (!validatePassword(passwordX)||!isBetween(emailX.length,min,max)) {
            const myval = 'Password has to be at least 1 lowercase, 1 uppercase,1 number and has to be between a minimum of 8ch and at max 50ch'
            showErrors(mypassword, myval)
            // else validate the input
        } else {
            showValids(mypassword)
            isValid = true
        }
        return isValid
    }
    //test our values for PASSWORD CONFIRMATION
    const testPasswordConfirmation = () => {
        // initialise my valide condition to false to test the errors
        var isValid = false

        // take away spaces
        const passwordConf = mypasswordConf.value.trim();        // take away spaces
        const password = mypassword.value.trim();
        // test if required function is valid else give an error
        if (!isRequired(passwordConf)) {
            showErrors(mypasswordConf, 'Password Confirmation can\'t be blank')
            // test if the length is at least 8ch and the max is 50ch
        } else if (password != passwordConf) {
            showErrors(mypasswordConf, 'Password and its confirmation \n have to be identical')
            // else validate the input
        } else {
            showValids(mypasswordConf)
            isValid = true
        }
        return isValid
    }


    // validation TESTS_______________________________-
    const isRequired = (value) => {
        if(value === '') {
            return false
        } else {
            return true
        }
    }
    // longueur
    const isBetween = (length, min , max) => {
        if(length < min || length > max){
            return false
        } else {
            return true
        }
    }
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

    // Validation showing function if is valid remove the invalid class and add is_valid
    const showValids = (input) => {
        const my_form = input.parentElement
        console.log(my_form)
        my_form.classList.remove('not_valid')
        my_form.classList.add('is_valid')
        // select the small as containers and insert the error message as content
        const error = my_form.querySelector('small');
        error.textContent = '';
    }


    // Error showing function if is invalid remove the valid class and add not_valid
    const showErrors = (input, value) => {
        const my_form = input.parentElement
        console.log(my_form)
        my_form.classList.remove('is_valid')
        my_form.classList.add('not_valid')
        // select the small as containers and insert the error message as content
        const error = my_form.querySelector('small');
        error.textContent = value;
    }


    // LISTEN TO MY EVENTS


    form.addEventListener('input', function (e) {
        switch (e.target.id) {
            case 'nom':
                testValidName();
                break;
            case 'prenom':
                testValidPrenom();
                break;
            case 'email':
                testValidEmail();
                break;
            case 'password':
                testValidPassword();
                break;
            case 'password_conf':
                testPasswordConfirmation();
                break;
        }
    })
    $('#form').on('input', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate forms
        let nameV = testValidName(),
            prenomV = testValidPrenom(),
            emailV = testValidEmail(),
            passwordV = testValidPassword(),
            confPasswordV = testPasswordConfirmation();

        let isFormValid = nameV && emailV && passwordV && confPasswordV
        // submit to the server if the form is valid
        console.log(isFormValid)
        if (isFormValid) {
            form.setAttribute("method", "POST");
        }

    })

})

/*


 */


