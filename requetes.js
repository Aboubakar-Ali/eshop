require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User'); 
const Product = require('./models/Product'); 
const Review = require('./models/Review'); 
const Category = require('./models/Category'); 
const Order = require('./models/Order'); 

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie.');
    executeRequetes().then(() => mongoose.disconnect());
  })
  .catch(err => console.error('Échec de connexion à MongoDB', err));

async function executeRequetes() {
  //  Insérer un nouvel utilisateur
  await new User({ name: "John Doe", nbrDeProduitAcheter: 3 }).save();
  console.log('Nouvel utilisateur inséré');

  // Trouver tous les produits d'un fournisseur spécifique (adidas)
  const produitsAdidas = await Product.find({ fournisseur: "jordan" });
  console.log('Produits Jordan trouvés:', produitsAdidas);

  // Mettre à jour le stock d'un produit spécifique par son nom
  await Product.updateOne({ nom: "Product 1" }, { $set: { stock: 95 } });
  console.log('Stock du produit 1 mis à jour');

  // Supprimer un utilisateur par son nom
  await User.deleteOne({ name: "User 10" });
  console.log('Utilisateur "User 10" supprimé');

  
  mongoose.connection.close();
}
