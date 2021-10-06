const mysql = require('mysql')
const faker = require('faker')

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

// Inserting a lot of data
var data = []

// Inserting 500 random users
for(var i = 0; i < 500; i++) {
    data.push([
    faker.internet.email(),
    faker.date.past()
    ])
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end()