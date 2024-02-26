// controllers/productsController.js
const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ message: "Erreur lors de la récupération des produits" }));
};

exports.createProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save()
    .then(product => res.status(201).json(product))
    .catch(err => res.status(500).json({ message: "Erreur lors de la création du produit" }));
};
