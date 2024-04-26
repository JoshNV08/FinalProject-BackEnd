const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch(error) {
      return res.status(500).json({ error: 'Error loading categories' });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      return res.json(category);
    } catch(error) {
      return res.status(500).json({ error: "Error obtaining category" });
    }
  },
  store: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.create({
        name,
      });
      return res.send("Category created successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error creating category" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      if (name) category.name = name;

      await category.save();

      return res.send("Category updated successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error updating category" });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      await category.destroy();

      return res.send("Category successfully deleted");
    } catch(error) {
      return res.status(500).json({ error: "Error deleting category" });
    }
  },
};

module.exports = categoryController;
