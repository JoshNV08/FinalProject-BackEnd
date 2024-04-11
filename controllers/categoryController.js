const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    const categories = await Category.findAll();
    return res.json(categories);
  },
  show: async (req, res) => {
    const { id } = req.params;
    np;
    const category = await Category.findByPk(id);
    return res.json(category);
  },

  store: async (req, res) => {
    const { firstname } = req.body;
    await Category.create({
      firstname,
    });
    return res.send("El usuario fue creado con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname } = req.body;

    const category = await Category.findByPk(id);

    if (firstname) category.firstname = firstname;

    await category.save();

    return res.send("Usuario modificado con éxito!");
  },
  destroy: async (req, res) => {},
};

module.exports = categoryController;
