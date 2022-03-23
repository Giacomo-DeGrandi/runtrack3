
$(document).ready( function () {

    $('#update').on('submit', function (event) {
        event.preventDefault()

        // my ajax request to get all my users
            $.ajax( 'user.php', "post", {
                'update': true,
            }, function (data) {
                if (data == 'FAIL') {
                    return false;
                } else {
                    return data;
                }
            });

    })

})