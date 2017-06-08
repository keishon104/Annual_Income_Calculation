const http = require('http'); // requiring http module
const express = require('express');  // Function requiring the express module
const bodyParser = require('body-parser'); // Requiring body-parser to read input from forms
const Check = require('./models/checks.js'); // imports the check models file
const app = express();  // Setup express app
const mongoose = require('mongoose');



// Connect to MongoDB
mongoose.connect('mongodb://localhost/checks');

// ES6 Promise
mongoose.Promise = global.Promise;

// Connection test to database
mongoose.connection.once('open',function(){
  console.log("Connection to database has been established.");
}).on('error', function(error){
  console.log("connection error", error);
});

// Data Parserer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Upload index file when home page is requested
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("The Home Page has been loaded");
});


// function called once the submit button is pressed
app.post('/myaction', function(req, res) {
  console.log(req.body);

var myData = new Check(req.body);

myData.save()
    .then(item => {
      res.sendFile(__dirname + '/final.html');
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
    console.log("Data successfully saved to database");

});


// Creation of server and port listening
http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});
