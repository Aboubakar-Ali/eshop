// routes/products.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//Get all products
router.get('/', productsController.getAllProducts);

// Post a product
router.post('/', productsController.createProduct);

module.exports = router;
