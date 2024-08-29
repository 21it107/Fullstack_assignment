const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
