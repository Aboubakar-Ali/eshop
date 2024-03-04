// routes/products.js
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

//Get all products
router.get('/', categoriesController.getAllCategory);

// Post a product
router.post('/', categoriesController.createCategory);

module.exports = router;
