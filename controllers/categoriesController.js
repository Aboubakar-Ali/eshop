// controllers/productsController.js
const category = require('../models/category');
const Product = require('../models/category');

exports.getAllCategory = (req, res) => {
  Product.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json({ message: "Erreur lors de la récupération des produits" }));
};

exports.createCategory = (req, res) => {
  const newCategory = new Product(req.body);
  newCategory.save()
    .then(category => res.status(201).json(category))
    .catch(err => res.status(500).json({ message: "Erreur lors de la création du produit" }));
};
