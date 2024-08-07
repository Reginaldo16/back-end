const Shop = require('../models/shop');

const  getShops = async (req, res) => {
    try {
      const shops = await Shop.find().populate('owner').populate('products');
      res.status(200).json(shops);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch shops' });
    }
  }

 
 const getShopById = async (req, res) => {
    try {
      const shop = await Shop.findById(req.params.id).populate('owner').populate('products');
      if (!shop) {
        return res.status(404).json({ error: 'Shop not found' });
      }
      res.status(200).json(shop);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch shop' });
    }
  }


const  createShop = async (req, res) => {
    try {
      const shop = new Shop(req.body);
      await shop.save();
      res.status(201).json(shop);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create shop' });
    }
  }


const  updateShop = async (req, res) => {
    try {
      const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!shop) {
        return res.status(404).json({ error: 'Shop not found' });
      }
      res.status(200).json(shop);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update shop' });
    }
  }


const  deleteShop = async (req, res) => {
    try {
      const shop = await Shop.findByIdAndDelete(req.params.id);
      if (!shop) {
        return res.status(404).json({ error: 'Shop not found' });
      }
      res.status(200).json({ message: 'Shop deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete shop' });
    }
  }
module.exports={
  getShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
 };

