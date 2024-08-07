const Product = require('../models/product');


const  getProducts = async (req, res) => {
    try {
      const products = await Product.find().populate('category').populate('shop');
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }


const  getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate('category').populate('shop');
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  }


const  createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }

  
  const updateProduct= async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }


const  deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }

module.exports={
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
 };

