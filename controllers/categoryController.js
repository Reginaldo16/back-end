const Category = require("../models/category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};

module.exports ={
  getCategories,deleteCategory,updateCategory,createCategory,getCategories,getCategoryById
}