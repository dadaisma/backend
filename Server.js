
//install the dependencie: npm i express cors mongoose dotenv
// during installation specify-> entry point: (index.js) Server.js
// modify package.json as:  "scripts": {"start": "node Server.js"},
const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors")
const bcrypt = require ('bcrypt')
//const bodyParser= require('body-parser')
//const path= require('path')

//we redirect to our route manager
const routes = require('./routes/ToDoRoute');

//test
// const routes2 = require('./routes/UserRoute')

//will hide data we want
require("dotenv").config();

//we set the server listening to port 5000
const app = express();
const PORT = process.env.PORTSERVER || 5000;

//It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())

//to avoid issue working in locale
app.use(cors())

//userauth
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}))

//app.use(express.static(path.join(__dirname,'public')))


//mongo connection
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));




//communication with express
app.use(routes)
// app.use(routes2)
app.listen(PORT, ()=>console.log(`listening on:${PORT}`))
