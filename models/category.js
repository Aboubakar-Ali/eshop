const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: false } 
});

module.exports = mongoose.model('Category', categorySchema);
