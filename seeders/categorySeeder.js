const { Category } = require("../models");

async function categorySeeder() {
  const category = [
    { id: 1, name: "Burgers" },
    { id: 2, name: "Snacks" },
    { id: 3, name: "Drinks" },
    { id: 4, name: "Desserts" },
    { id: 5, name: "Coffee" },
  ];
  await Category.bulkCreate(category);
  console.log("the seeders of category are running");
}

module.exports = categorySeeder;

