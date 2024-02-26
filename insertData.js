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
  // Insert category first
  const category = new Category({
    nom: "Tenis",
    description: "Avec des Tenis de qualité."
  });

  category.save().then((savedCategory) => {
    console.log('Catégorie insérée', savedCategory);

    // Insert user 
    const user = new User({
      name: "Abdel London",
      nbrDeProduitAcheter: 5
    });

    user.save().then((savedUser) => {
      console.log('Utilisateur inséré', savedUser);
  
      // Insert product witch categorie ID 
      const product = new Product({
        nom: "Tn Adidas",
        description: "Tn Adidas Bleu et Blan.",
        prix: 150,
        fournisseur: "Adidas",
        stock: 100,
        images: ["/images/tn.jpg"],
        note: 4,
        categoryId: savedCategory._id // used saved categorie ID
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
  
        //Insert order
        const order = new Order({
          userId: savedUser._id,
          produits: [{ produitId: savedProduct._id, quantite: 3 }],
          total: 450 
        });
  
        order.save().then(() => console.log('Commande insérée'));
      });
    });
  }).catch(err => console.error('Erreur lors de l\'insertion:', err));
}
