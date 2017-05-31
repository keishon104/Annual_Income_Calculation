//Telling node you will be using mongoose
const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promose = global.Promise;

//connection to database before tests
before(function(done){
  mongoose.connect('mongodb://localhost/testing');
  mongoose.connection.once('open', function(){
    console.log("connection has been made to the database.. Let the party begin ");
    done();
  }).on('error', function(error){
    console.log('connection error', error);
  });
});
