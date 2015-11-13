var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var connections = require('./config/connections');
var routes = require('./routes/routes');

var db = mongoose.connect(connections.url);

db.connection.on('connected', function() {
  console.log('Mongoose default connection open to ' + connections.url);
  app.use(express.static(__dirname + "/public"));
  app.use(bodyParser.json());
  routes(app);
  app.listen(connections.appPort);
  console.log("Express server running on port " + connections.appPort);
});

db.connection.on('error', function(err) {
  console.log('Error connecting to: ' + connections.url + " " + err);
});

db.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});