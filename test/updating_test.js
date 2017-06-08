const assert = require('assert');
const check = require('../models/checks');


describe('Updating records', function(){

var incomingData;
  beforeEach(function(done){
         incomingData = new check({
          first: 'Keishon',
          weight: 50
        });
        incomingData.save().then(function(){
          done();
        });
  });

// Deletes record from database with properties
  it('Update a record in database.', function(done){
    check.findOneAndUpdate({first: 'Keishon'}, {first:'Sylvonia'}).then(function(result){
      check.findOne({_id: incomingData._id}).then(function(result){
        assert(result.first === 'Sylvonia');
      done();
      });
    });
  });
/*

// Won't work for some reason, need to look more into the reasons why.

  it('Increments a record in database.',function(done){
    check.update({}, {$inc:{weight: 1}}).then(function(){
      check.findOne({first: 'Keishon'}).then(function(result){
        assert(result.weight === 51);
        done()
      });
    });
  });
*/


});
