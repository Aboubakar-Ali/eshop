require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Category = require('./models/Category');
const Order = require('./models/Order');

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connexion à MongoDB réussie.');
    insererDonneesFictives();
  })
  .catch(err => console.error('Échec de connexion à MongoDB', err));

function insererDonneesFictives() {
  // Insérez d'abord la catégorie
  const category = new Category({
    nom: "Tenis",
    description: "Avec des Tenis de qualité."
  });

  category.save().then((savedCategory) => {
    console.log('Catégorie insérée', savedCategory);

    // Ensuite, insérez l'utilisateur
    const user = new User({
      name: "Abdel London",
      nbrDeProduitAcheter: 5
    });

    user.save().then((savedUser) => {
      console.log('Utilisateur inséré', savedUser);
  
      // Puis, insérez le produit avec l'ID de la catégorie
      const product = new Product({
        nom: "Tn Adidas",
        description: "Tn Adidas Bleu et Blan.",
        prix: 150,
        fournisseur: "Adidas",
        stock: 100,
        images: ["/images/tn.jpg"],
        note: 4,
        categoryId: savedCategory._id // Utilisez l'ID de la catégorie sauvegardée
      });
  
      product.save().then((savedProduct) => {
        console.log('Produit inséré', savedProduct);
  
        // Insérez ensuite l'avis
        const review = new Review({
          produitId: savedProduct._id,
          userId: savedUser._id,
          note: 5,
          commentaire: "Excellent produit !"
        });
  
        review.save().then(() => console.log('Avis inséré'));
  
        // Et enfin, insérez la commande
        const order = new Order({
          userId: savedUser._id,
          produits: [{ produitId: savedProduct._id, quantite: 3 }],
          total: 450 // Corrigé pour correspondre au total attendu (150 * 3)
        });
  
        order.save().then(() => console.log('Commande insérée'));
      });
    });
  }).catch(err => console.error('Erreur lors de l\'insertion:', err));
}
