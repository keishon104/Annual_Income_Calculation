const assert = require('assert');
const check = require('../models/checks');

// Describes tests
describe('locates records', function(){

var incomingData;

  beforeEach(function(done){
         incomingData = new check({
          first: 'Keishon'
        });
        incomingData.save().then(function(){
          done();

        });
  });

// Create specified test
  it('finds a record from database', function(done){
    check.findOne({first: 'Keishon'}).then(function(result){
      assert(result.first === 'Keishon');
      done();
    });

  });


  it('finds a record by ID from database', function(done){
    check.findOne({_id: incomingData._id}).then(function(result){
      assert(result._id.toString() === incomingData._id.toString());
      done();
    });

  });
});
