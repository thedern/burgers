// Database Connection

// create DB connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: localhost,
    port: 3306,
    user: "root",
    database: "burgers_db",
    password: process.env.mysql_passwd
})

// test DB connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as Id ' ${connection.threadId}`);
})

// export the connection for use
module.exports = connection;