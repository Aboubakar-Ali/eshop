const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  produits: [{
    produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantite: { type: Number, required: true }
  }],
  dateCommande: { type: Date, default: Date.now },
  statut: { type: String, required: true, default: 'en attente' }, // Les statuts peuvent être 'en attente', 'expédiée', 'livrée', etc.
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
