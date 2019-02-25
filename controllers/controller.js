// Express Router

// requires
const express = require('express');
const burgerSQL = require('../models/burger')

// create express router
const router = express.Router();

// routes
router.get('/', (req, resp) => {
    burgerSQL.selectAll((data) => {
        // handlebars object
        var hbsObject = {
            // this worked all data pulled 2/25!!!
            burgers : data
        };
        console.log(hbsObject);
        resp.render("index", hbsObject);
    });
});

router.post('/api/burgers', (req, resp) => {
    console.log(req.body.name);
    //gets burger's name from request body
    burgerSQL.insertOne(req.body.name, (result) => {
        console.log(result);
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