const assert = require('assert');
const check = require('../models/checks');


describe('Deleting records', function(){

var incomingData;
  beforeEach(function(done){
         incomingData = new check({
          first: 'Keishon'
        });
        incomingData.save().then(function(){
          done();
        });
  });

// Deletes record from database with properties
  it('Deletes a record by name from database.', function(done){
    check.findOneAndRemove({first: 'Keishon'}).then(function(result){
      check.findOne({first:'Keishon'}).then(function(result){
        assert(result === null);
      done();
      });
    });
  });

});
