var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var config = require('./config');
var mongoose = require('mongoose');
var app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname+ '/public'));


app.get('/', function(req, res){
    console.log("got a hit");
    res.send("hello world");
});

mongoose.connect(config.getDBConnectionString());

app.listen(port);