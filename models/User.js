const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  nbrDeProduitAcheter: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
