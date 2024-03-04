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

async function insererDonneesFictives() {
  try {
    // Insert categories
    const categoriesData = ["Tenis", "Basket", "Airforce", "Jordan"].map(categoryName => ({
      nom: categoryName,
      description: `Description pour ${categoryName}.`
    }));
    const savedCategories = await Category.insertMany(categoriesData);
    console.log('Catégories insérées', savedCategories);

    // Define suppliers
    const fournisseurs = ["adidas", "nike", "noctar", "jordan", "vans"];

    for (let i = 1; i <= 10; i++) {
      // Insert user
      const user = new User({
        name: `User ${i}`,
        nbrDeProduitAcheter: Math.floor(Math.random() * 10)
      });
      const savedUser = await user.save();
      console.log(`Utilisateur ${i} inséré`, savedUser);

      // Randomly select a category and a supplier for the product
      const randomCategoryIndex = Math.floor(Math.random() * savedCategories.length);
      const selectedCategory = savedCategories[randomCategoryIndex];
      const randomSupplierIndex = Math.floor(Math.random() * fournisseurs.length);
      const selectedSupplier = fournisseurs[randomSupplierIndex];

      // Insert product with randomly selected category ID and supplier
      const product = new Product({
        nom: `Product ${i}`,
        description: `Description for product ${i}.`,
        prix: Math.floor(Math.random() * 100) + 50,
        fournisseur: selectedSupplier,
        stock: Math.floor(Math.random() * 50) + 1,
        images: [`/images/product${i}.jpg`],
        note: Math.floor(Math.random() * 5) + 1,
        categoryId: selectedCategory._id
      });
      const savedProduct = await product.save();
      console.log(`Produit ${i} inséré`, savedProduct);
  
      // Insert review
      const review = new Review({
        produitId: savedProduct._id,
        userId: savedUser._id,
        note: Math.floor(Math.random() * 5) + 1,
        commentaire: `Commentaire pour le produit ${i}.`
      });
      await review.save();
      console.log(`Avis ${i} inséré`);
  
      // Insert order
      const order = new Order({
        userId: savedUser._id,
        produits: [{ produitId: savedProduct._id, quantite: Math.floor(Math.random() * 5) + 1 }],
        total: savedProduct.prix * (Math.floor(Math.random() * 5) + 1)
      });
      await order.save();
      console.log(`Commande ${i} insérée`);
    }
  } catch (err) {
    console.error('Erreur lors de l\'insertion:', err);
  }
}
