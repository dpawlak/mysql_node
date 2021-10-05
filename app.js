const mysql = require('mysql')

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

const q = 'SELECT COUNT(*) AS total FROM users'

connection.query(q,  (error, results, fields) => {
    if (error) throw error
    console.log(results)
})

connection.end()