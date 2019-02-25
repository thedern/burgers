// Burger Ajax
$(document).ready(function () {

    // insert into database
    $('#submit-burger').on('click', (event) => {
        event.preventDefault();
        console.log('clicked');

        var newBurger = $('#burger-name').val().trim()
        if (newBurger.length > 0) {
            // only passing in burger name, do not require a json oject so passing via URL
            $.ajax('/api/burgers/' + newBurger, {
                type: "POST"
            }).then(
                function() {
                    console.log('new burger submitted')
                }
            );
            // clear text box
            // reload page
            location.reload(true);
        } else {
            console.log('burger was not entered');
        }
    });

    
    // event bubbling: listening on parent for event on child object due to being added dynamically
    $('.ordered-burgers').on('click', (event) => {
        event.preventDefault();
        if (event.target.parentElement.classList.contains('ordered-burgers')) {
            // get list item's innerText which is burger name
            updateBurger = event.target.textContent;

            //only passing in burger name, do not require a json oject so passing via URL
            $.ajax('/api/burgers/' + updateBurger, {
                type: "PUT"
            }).then(
                function() {
                    console.log('burger devoured');
                }
            );
        }
        // reload page
        location.reload(true);
    });

    

}); // end document on-ready