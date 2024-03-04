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

const categoryRoutes = require('./routes/categories');
app.use('/api/categories', categoryRoutes);

const ordersRoutes = require('./routes/orders');
app.use('/api/orders', ordersRoutes);

const UsersRoutes = require('./routes/users');
app.use('/api/users', UsersRoutes);

const reviewRoutes = require('./routes/review');
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Le serveur est opérationnel !');
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
