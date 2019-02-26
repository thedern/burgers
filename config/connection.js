require('dotenv').config();

// create DB connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.mysql_passwd,
    database: "burgers_db"
});

// test DB connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as Id ' ${connection.threadId}`);
})

// export the connection for use
module.exports = connection;