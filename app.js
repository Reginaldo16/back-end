const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectedDB = require('./db/db')

const cartRoutes = require('./Routes/cartRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');
const customerRoutes = require('./Routes/customerRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const ownerRoutes = require('./Routes/ownerRoutes');
const productRoutes = require('./Routes/productRoutes');
const shopRoutes = require('./Routes/shopRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING , {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

app.use('/api/carts', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/owners', ownerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shops', shopRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port localhost:${PORT}`);
});
