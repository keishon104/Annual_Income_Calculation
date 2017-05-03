const assert = require('assert');
const check = require('../models/checks');

// Describes tests
describe('Runs specified tests', function(){

// Create specified test
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
