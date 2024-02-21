const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  fournisseur: { type: String, required: true },
  stock: { type: Number, required: true },
  images: [String],
  note: { type: Number, default: 0 },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true } // Ajout d'une référence à Category
});

module.exports = mongoose.model('Product', productSchema);
