// Burger Ajax
$(document).ready(function () {
    // insert into database
    $('#submit-burger').on('click', (event) => {
        event.preventDefault();
        console.log('clicked');

        var newBurger = $('#burger-name').val().trim()
        var burgerObj = {
            name: newBurger
        };
        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: "POST",
            data: burgerObj
        }).then(
            function() {
                console.log('new burger submitted')
            }
        );
        // clear text box
        // reload page
        location.reload(true);
    });

});