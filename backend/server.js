const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller/ApiController');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.post('/signup', (req , res) => {
    controller.register(req, res, db)
})

app.post('/login', (req , res) => {
    controller.login(req, res, db)
})

app.post('/addbook', (req , res) => {
    controller.addbook(req, res, db)
})

app.get('/getBooks', (req , res) => {
    controller.getBooks(req, res, db)
})

app.listen(process.env.PORT, () =>{
    console.log("listening");
})