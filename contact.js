var express = require('express');  // Function requiring the express module
var bodyParser = require('body-parser') // Requiring body-parser to read input from forms
var app = express();  // Setup express app

var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log("the Process is working!!!");
