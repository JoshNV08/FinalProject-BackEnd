const { Products } = require("../models");

const productController = {
  index: async (req, res) => {
    const productes = await Products.findAll();
    return res.json(productes);
  },
  show: async (req, res) => {
    const { id } = req.params;
    np;
    const products = await Products.findByPk(id);
    return res.json(products);
  },
  store: async (req, res) => {
    const { name, description, photo, price, stock, category, outstanding } =
      req.body;
    await Products.create({
      name,
      description,
      photo,
      price,
      stock,
      category,
      outstanding, 
    });
    return res.send("El producto existe!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, address, numberphone } =
      req.body;

    const products = await Products.findByPk(id);

    if (firstname) products.firstname = firstname;
    if (lastname) products.lastname = lastname;
    if (email) products.email = email;
    if (password) products.password = password;
    if (address) products.address = address;
    if (numberphone) products.numberphone = numberphone;

    await products.save();

    return res.send("Usuario modificado con éxito!");
  },
  destroy: async (req, res) => {},
};

module.exports = productController;
