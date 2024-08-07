const Owner = require('../models/owner');


 const  getOwners = async (req, res) => {
    try {
      const owners = await Owner.find();
      res.status(200).json(owners);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch owners' });
    }
  }

 
  const getOwnerById = async (req, res) => {
    try {
      const owner = await Owner.findById(req.params.id);
      if (!owner) {
        return res.status(404).json({ error: 'Owner not found' });
      }
      res.status(200).json(owner);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch owner' });
    }
  }


 const createOwner = async (req, res) => {
    try {
      const owner = new Owner(req.body);
      await owner.save();
      res.status(201).json(owner);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create owner' });
    }
  }


 const updateOwner= async (req, res) => {
    try {
      const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!owner) {
        return res.status(404).json({ error: 'Owner not found' });
      }
      res.status(200).json(owner);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update owner' });
    }
  }


 const deleteOwner= async (req, res) => {
    try {
      const owner = await Owner.findByIdAndDelete(req.params.id);
      if (!owner) {
        return res.status(404).json({ error: 'Owner not found' });
      }
      res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete owner' });
    }
  }
module.exports={
  getOwners,
  getOwnerById,
  createOwner,
  updateOwner,
  deleteOwner,
}
