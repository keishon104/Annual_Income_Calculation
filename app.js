var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser'); // Requiring body-parser to read input from forms




var app = express();  // Setup express app

// middleware used to parse post data.
var urlencodedParser = app.use(bodyParser.urlencoded({ extended: false }));

// Loads the home screen index.html
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
   console.log("Home page requested");

});

// Function handling data sent after submit button is pressed
app.post('/myaction',  function(req, res) {
  console.log("The form has been submitted");
  console.log(req.body);
  return (true);
});



// Server Setup and testing
app.listen (8080);    // Listens to port 3000
console.log("You are now listening to port: 8080");
