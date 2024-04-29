const { Product } = require("../models");

const productsController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch(error) {
      return res.status(500).json({ error: 'Error loading products' });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.json(product);
    } catch(error) {
      return res.status(500).json({ error: "Error obtaining product" });
    }
  },
  store: async (req, res) => {
    try {
      const { name, description, photo, price, stock, category, feature } = req.body;
      await Product.create({
        name,
        category,
        description,
        photo,
        price,
        stock,
        feature,
      });
      return res.send("Product created successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error creating product" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, description, photo, price, stock, feature } = req.body;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      if (name) product.name = name;
      if (category) product.category = category;
      if (description) product.description = description;
      if (photo) product.photo = photo;
      if (price) product.price = price;
      if (stock) product.stock = stock;
      if (feature) product.feature = feature;

      await product.save();

      return res.send("Product updated successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error updating product" });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id } });
  
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      await product.destroy();
  
      return res.send("Product successfully deleted");
    } catch(error) {
      return res.status(500).json({ error: "Error deleting product" });
    }
  },
  
};

module.exports = productsController;
