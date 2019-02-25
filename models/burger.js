// Data controller that interfaces with the ORM

const orm = require('../config/orm.js');

const burgerSQL = {
    selectAll : function(cb) {
        // pass in table name
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    // burger's name
    insertOne : function(name, cb) {
        orm.insertOne('burgers', 'burger_name', name, (res) => {
            cb(res);
        });
    },

    // burger's name
    updateOne : function(name, cb) {
        orm.updateOne('burgers', 'devoured', false, 'burger_name', name, (res) => {
            cb(res);
        });
    }

};

// export db functions for controller, controller.js
module.exports = burgerSQL;