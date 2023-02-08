const log = console.log;
const express = require('express');
const PORT = 5000 || process.env;
const mysql = require('mysql');
const pwd = require('./password');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : pwd.dbPassword,
    // database : 'my_db'
});
db.connect((err) => {
    if (err) throw err;
    log('Connected....');
});
const app = express();
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE my_db';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('DB created...');
        log(result);
    })
});
app.listen(PORT, () => {
    log(`Server is running on port ${PORT}...`);
});