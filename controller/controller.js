// Express Router

// requires
const express = require('express');
const burgerSQL = require('../model/burger')

// create express router
const router = express.Router();

// routes
router.get('/', (req, resp) => {
    burgerSQL.selectAll((data) => {
        // handlebars object
        var hbsOject = {
            burgers : data
        };
        console.log(hbsObject);
        //resp.render("index", hbsObject);
    });
});

router.post('/api/burgers', (req, resp) => {
    // gets burger's name from request body
    burgerSQL.insertOne(req.body.name, (result) => {
        console.log({ name:  result.burger_name});
        // will need to update page col with this and add devour button
    });
});

router.put('/api/burgers/:burger', (req, resp) => {
    // update burger that has been devoured
    // devour button pass the burger name in URL?????
    burgerSQL.updateOne(req.params.id, (result) => {
        console.log({ devoured: result.devoured})
    });
});

// export the router
module.exports = router;