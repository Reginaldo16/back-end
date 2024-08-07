const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: { type: Number, required: true },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
