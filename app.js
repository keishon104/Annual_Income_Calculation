var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser') // Requiring body-parser to read input from forms
var app = express();  // Setup express app

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Loads the home screen index.html
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
})

// Function handling data sent after submit button is pressed
app.post('/contact ',  urlencodedParser, function(req, res){
res.sendFilr(__dirname + '/contact.html');

})

// Server Setup and testing
app.listen (3000);    // Listens to port 3000
console.log("You are now listening to port 3000")
