// ORM  Object Relational Mapping

/*
    required query functions
    selectAll()
    insertOne()
    updateOne()
    ?? and ? are to assist in protecting agains SQL injection
*/

// requre DB connection
const connection = require('./connection.js');

const orm = {

    // select all burgers
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            } // end condtional
        }); // end query
    },

    // insert one burger
    insertOne: function(table, col, val, cb) {
        // insert into burgers (burger_name, devoured) values ('burger of truth', true);
        // console.log('in insertOne');
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString,[table, col, val], (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            } // end condtional
        }); // end query
    },

    // update one burger
    updateOne: function(table, col1, val1, col2, val2, cb) {
        //update burgers set devoured = true where burger_name = "burger of death";
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[table, col1, val1, col2, val2], (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            } // end condtional
        }); // end query
    }


}

// export the orm for use
module.exports = orm;