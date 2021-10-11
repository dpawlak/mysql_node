const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true}))

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
            const count = results[0].count
            res.render('home',{data: count});
    });
});

app.post("/register", (req, res) => {
    const email = req.body.email
    const person = {
      email: req.body.email
    }
    connection.query("INSERT INTO users SET ?", person,
      (err, result) => {
        if (err) throw err;
        res.redirect("/")
      })
    console.log("Post sent to register, email is " + req.body.email)
})
app.listen(8080, () => {
    console.log('app listening on port 8080')
})
