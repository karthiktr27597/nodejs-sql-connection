const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')

const app = express();
dotenv.config()


const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.root,
    password: process.env.password,
    database: 'webinar'
})

connection.query('select * from topic where id = ?', [101, 99], (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result)
})


app.use("/", (req, res) => {
    res.send('<h1>Server working good<h1>')
})


app.listen(9000, () => console.log(`Server started in local host: 9000`));