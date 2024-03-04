// routes/products.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

//Get all products
router.get('/', reviewController.getAllreview);

// Post a product
router.post('/', reviewController.createreview);

module.exports = router;
