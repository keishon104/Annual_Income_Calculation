const assert = require('assert');
const check = require('../models/checks');

// Describes tests
describe('Deletes records', function(){

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
  it('Deletes a record from database', function(done){
    check.findOneAndRemove({first: 'Keishon'}).then(function(result){
      check.findOne({first:'Keishon'}).then(function(result){
        assert(result === null);
      done();
    });
    });

  });

});
