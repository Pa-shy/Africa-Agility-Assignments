const express = require('express');
const app = express();
var router = require('./router');
var path = require('path');
const port = 3000;

const dburl = 'mongodb+srv://Patience:Patience1999*@nodejs.kdcts3b.mongodb.net/?retryWrites=true&w=majority';
app.listen(port,(req,res) =>{
    console.log('server is running on port 3000');
});
app.set("view engine","ejs");

app.use(express.static('views'));

//Routing
app.get("/", (req,res) =>{
    res.render("index");
});

app.get("/login", (req,res) =>{
    res.render("login");
});

app.get("/logout", (req,res) =>{
    res.render("logout");
});