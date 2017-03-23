// Requiring libraries/ modules to Create database Schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const checkSchema = new Schema({
  first: String,
  last: String,
  month: Number,
});

const check = mongoose.model('check', checkSchema);

module.exports = check;
