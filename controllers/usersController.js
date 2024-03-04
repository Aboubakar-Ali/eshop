// controllers/productsController.js
const category = require('../models/category');
const user = require('../models/User');

exports.getAllUser = (req, res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ message: "Erreur lors de la récupération des produits" }));
};

exports.createUser = (req, res) => {
  const newUser = new user(req.body);
  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ message: "Erreur lors de la création du produit" }));
};
