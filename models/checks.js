const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Stores Schema class

// Create Schema and Model
const checkSchema = new Schema({
  first: {
    type: String,
    required: [true, 'Name field is required']
  },

  last: {
    type: String
  },
  month1: {
    type: Number},
});

const check = mongoose.model('check', checkSchema);

module.exports = check;
