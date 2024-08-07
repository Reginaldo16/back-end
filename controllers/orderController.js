const Order = require("../models/order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer")
      .populate("items.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer")
      .populate("items.product");
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
