require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connexion à MongoDB réussie.'))
  .catch(err => console.error('Échec de connexion à MongoDB', err));


const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Le serveur est opérationnel !');
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
