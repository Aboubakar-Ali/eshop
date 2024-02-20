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
    insererDonneesFictives();
  })
  .catch(err => console.error('Échec de connexion à MongoDB', err));

  function insererDonneesFictives() {
    const user = new User({
      name: "Abdel London",
      nbrDeProduitAcheter: 5
    });
  
    user.save().then((savedUser) => {
      console.log('Utilisateur inséré', savedUser);
  
      // produit
      const product = new Product({
        nom: "Tn Adidas",
        description: "Tn Adidas Bleu et Blan.",
        prix: 150,
        fournisseur: "Adidas",
        stock: 100,
        images: ["/images/tn.jpg"],
        note: 4
      });
  
      product.save().then((savedProduct) => {
        console.log('Produit inséré', savedProduct);
  
        // Review
        const review = new Review({
          produitId: savedProduct._id,
          userId: savedUser._id,
          note: 5,
          commentaire: "Excellent produit !"
        });
  
        review.save().then(() => console.log('Avis inséré'));
  
        // Order
        const order = new Order({
          userId: savedUser._id,
          produits: [{ produitId: savedProduct._id, quantite: 3 }],
          total: 300
        });
  
        order.save().then(() => console.log('Commande insérée'));
      });
    });
  
    // Catégory
    const category = new Category({
      nom: "Tenis",
      description: "Avec des Tenis de qualité."
    });
  
    category.save().then(() => console.log('Catégorie insérée'));

  }
  
