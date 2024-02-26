// routes/products.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Route pour récupérer tous les produits
router.get('/', productsController.getAllProducts);

// Route pour créer un nouveau produit
router.post('/', productsController.createProduct);

// Autres routes (par ID, etc.) ici...

module.exports = router;
