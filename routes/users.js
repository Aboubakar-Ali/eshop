// routes/products.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

//Get all products
router.get('/', usersController.getAllUser);

// Post a product
router.post('/', usersController.createUser);

module.exports = router;
