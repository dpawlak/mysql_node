const express = require('express')
const mysql = require('mysql')
const app = express()

// dotenv config
require('dotenv/config')
require('./app.js')

// mysql connection with environment variables .env
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

app.get("/", (req, res) => {
 const q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, (error, results) => {
 if (error) throw error;
 const msg = "We have " + results[0].count + " users";
 res.send(msg);
 });
});

app.listen(8080, () => {
    console.log('app listening on port 8080')
})

