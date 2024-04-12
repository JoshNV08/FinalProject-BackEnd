const { Products } = require("../models");

const productController = {
  index: async (req, res) => {
    const products = await Products.findAll();
    return res.json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const products = await Products.findByPk(id);
    return res.json(products);
  },
  store: async (req, res) => {
    const { productName, description, photo, price, stock,productCategory, feature } =
      req.body;
    await Products.create({
      productName,
      productCategory,
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
    const { productName, productCategory, description, photo, price, stock, feature } =
      req.body;

    const products = await Products.findByPk(id);

    if (productName) products.productName = productName;
    if (productCategory) products.productCategory = productCategory;
    if (description) products.description = description;
    if (photo) products.photo = photo;
    if (price) products.price = price;
    if (stock) products.stock = stock;
    if (feature) products.feature = feature;

    await products.save();

    return res.send("Usuario modificado con éxito!");
  },
  destroy: async (req, res) => {},
};

module.exports = productController;
