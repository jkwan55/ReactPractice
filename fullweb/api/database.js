
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DatabasePassword123!',
    database: 'mydb'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    // connection.query('create database mydb', function (err, result) {
    //     if (err) throw err;
    //     console.log('Database created');
    // });
});

module.exports = connection;