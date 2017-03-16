var http = require('http');
var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser'); // Requiring body-parser to read input from forms
//var logic = require('./logic');
var app = express();  // Setup express app

// Allow data to be parsed from input
app.use(bodyParser.urlencoded({ extended: true }));

// Upload index file when home page is requested
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.post('/myaction', function(req, res) {
  res.send('You sent the number "' + req.body.month1 + '"" Check your message to begin' +  '.');


});

http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});
