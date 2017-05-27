var http = require('http'); // requiring http module
var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser'); // Requiring body-parser to read input from forms
var logic = require('./models/checks'); // imports the check models file
var app = express();  // Setup express app

// Allow data to be parsed from input
app.use(bodyParser.urlencoded({ extended: true }));

// Upload index file when home page is requested
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// function called once the submit button is pressed
app.post('/myaction', function(req, res) {
  console.log(req.body);
  new check ({
    first: req.body.first,
    last: req.body.last,
    month1: req.body.month1
  }).save(function(err, doc){
  });
  res.send("Your data was successfully sent to the database.");
});

// Creation of server and port listening
http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});
