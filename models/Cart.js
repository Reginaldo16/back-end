const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
