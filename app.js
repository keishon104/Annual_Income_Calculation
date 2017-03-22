var http = require('http'); // requiring http module
var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser'); // Requiring body-parser to read input from forms
//var logic = require('../models/check');
var app = express();  // Setup express app

// Allow data to be parsed from input
app.use(bodyParser.urlencoded({ extended: true }));

// Upload index file when home page is requested
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// function called once the submit button is pressed
app.post('/myaction', function(req, res) {
  res.send("Your data is being processed and will be sent back to you momentarily.");
});

// Creation of server and port listening
http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});
