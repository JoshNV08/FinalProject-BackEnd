const { Category } = require("../models");

const categoryController = {
   index: async (req, res) => {
     const categories = await Category.findAll();
     return res.json(categories);
   },
   show: async (req, res) => {
     const { id } = req.params;
     const categories = await Category.findByPk(id);

     return res.json(categories);
     
   },

   store: async (req, res) => {
     const { name } = req.body;
     await Category.create({
       name,
     });
     return res.send("La categoría fue creada con éxito!");
   },
   update: async (req, res) => {
     const { id } = req.params;
     const { name } = req.body;

     const category = await Category.findByPk(id);

     if (name) category.name = name;

     await category.save();

     return res.send("category");
   },
   destroy: async (req, res) => {
    const { id } = req.body
    const categories = await Category.findByPk(id);

  await Category.destroy()
  console.log(categories)

  return res.send("Category deleted")
   },
 };

 module.exports = categoryController;
