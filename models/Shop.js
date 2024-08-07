const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
