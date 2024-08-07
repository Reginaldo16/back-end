const Cart = require("../models/Cart");

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate("customer")
      .populate("items.product");
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch carts" });
  }
};

const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate("customer")
      .populate("items.product");
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

const createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to create cart" });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cart" });
  }
};

module.exports = {
  deleteCart,
  updateCart,
  createCart,
  getCarts,
  getCartById,
};
