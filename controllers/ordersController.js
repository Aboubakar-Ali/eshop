// controllers/productsController.js
const category = require('../models/category');
const order = require('../models/order');

exports.getAllOrder = (req, res) => {
    order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(500).json({ message: "Erreur lors de la récupération des produits" }));
};

exports.createOder = (req, res) => {
  const newOrder = new Product(req.body);
  newOrder.save()
    .then(order => res.status(201).json(order))
    .catch(err => res.status(500).json({ message: "Erreur lors de la création du produit" }));
};
