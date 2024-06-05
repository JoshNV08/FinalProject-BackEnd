const { Category } = require("../models");

async function categorySeeder() {
  const category = [
    { id: 1, name: 'Categoria 1' },
    { id: 2, name: 'Categoria 2' },
    { id: 3, name: 'Categoria 3' },
    { id: 4, name: 'Categoria 4' },
    { id: 5, name: 'Categoria 5' }

  ];
  await Category.bulkCreate(category);
  console.log("the seeders of category are running");
}

module.exports = categorySeeder;

