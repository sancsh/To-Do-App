var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var config = require('./config');
var mongoose = require('mongoose');
var app = express();
var setup = require('./controller/setupController');


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname+ '/public'));

mongoose.connect(config.getDBConnectionString(), {useMongoClient:true});
setup(app);
console.log("connected");
app.listen(port);