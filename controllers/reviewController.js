// controllers/productsController.js
const Review = require('../models/review');

exports.getAllreview = (req, res) => {
    Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(500).json({ message: "Erreur lors de la récupération des produits" }));
};

exports.createreview = (req, res) => {
  const newreview = new Product(req.body);
  newreview.save()
    .then(review => res.status(201).json(review))
    .catch(err => res.status(500).json({ message: "Erreur lors de la création du produit" }));
};
