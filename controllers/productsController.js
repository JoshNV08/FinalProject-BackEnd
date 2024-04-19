const { Product } = require("../models");

const productController = {
  index: async (req, res) => {
    const products = await Product.findAll();
    return res.json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    return res.json(product);
  },
  store: async (req, res) => {
    const { name, description, photo, price, stock, category, feature } =
      req.body;
    await Product.create({
      name,
      category,
      description,
      photo,
      price,
      stock,
      feature,
    });
    return res.send("El producto existe!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, category, description, photo, price, stock, feature } =
      req.body;

    const products = await Product.findByPk(id);

    if (name) products.productName = productName;
    if (category) products.productCategory = productCategory;
    if (description) products.description = description;
    if (photo) products.photo = photo;
    if (price) products.price = price;
    if (stock) products.stock = stock;
    if (feature) products.feature = feature;

    await products.save();

    return res.send("Usuario modificado con éxito!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const products = await Product.findByPk(id);

    await products.destroy();

    return res.send("Products sucesssfully deleted");
  },
};

module.exports = productController;
