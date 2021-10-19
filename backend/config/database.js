// get the client
const mysql = require('mysql2');
require('dotenv').config();
// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected!:)');
    }
});

module.exports = {
    database: connection
}