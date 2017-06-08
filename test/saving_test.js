const assert = require('assert');
const check = require('../models/checks');


describe('Saves data to the database', function(){

// Saves data to database
  it('Saves Data to MongoDB database', function(done){
    var incomingData = new check({
      first: 'Keishon'
    });
    incomingData.save().then(function(){
      assert(incomingData.isNew === false);
      done();
    });
  });
});
