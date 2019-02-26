require('dotenv').config();
const mysql = require('mysql');
var connection;

// create DB connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.mysql_passwd,
    database: "burgers_db"
    });
}

// test DB connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as Id ' ${connection.threadId}`);
})

// export the connection for use
module.exports = connection;