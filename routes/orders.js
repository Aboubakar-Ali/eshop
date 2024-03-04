// routes/products.js
const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

//Get all products
router.get('/', ordersController.getAllOrder);

// Post a product
router.post('/', ordersController.createOder);

module.exports = router;
