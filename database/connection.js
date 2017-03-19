//Telling node you will be using mongoose
const mongoose = require('mongoose');

//connection to mongoDB database
mongoose.connect('mongodb://localhost/testing');

//Once connection is made run function once and if error occurs run error function
mongoose.connection.once('open', function(){
  console.log("connection has been made to the database.. Let the party begin ");
}).on('error', function(error){
  console.log('connection error', error);
});
