const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Stores Schema class


module.exports = battery;

var battery = "This is the checks Schema working";

// Create Schema and Model
var CheckSchema = new Schema({
  first: {
    type: String,
    required: [true, 'Name field is required']
  },
  last: {
    type: String
  },
  month1: {
    type: Number},
  month2: Number,
  month3: Number,
  month4: Number,
  month5: Number,
  month6: Number,
  month7: Number,
  month8: Number,
  month9: Number,
  month10: Number,
  month11: Number,
  month12: Number, 
});

var Check = mongoose.model('Check', CheckSchema);


module.exports = Check;
