// Requiring libraries/ modules to Create database Schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const checkSchema = new Schema({
  first: string,
  last: string,
  month1: number,
  month2: number,
  month3: number,
  month4: number,
  month5: number,
  month6: number,
  month7: number,
  month8: number,
  month9: number,
  month10: number,
  month11: number,
  month12: number
});

const check = mongoose.model('check',checkSchema);

module.exports = check;
