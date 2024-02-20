const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  note: { type: Number, required: true },
  commentaire: { type: String, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);
