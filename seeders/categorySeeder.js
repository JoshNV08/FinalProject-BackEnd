const { Category } = require("../models");

async function categorySeeder() {
  const category = [
    {
      name: "Pizza",
    },
  ];
  await category.bulkCreate(Category);
  console.log("the seeders of category are running");
}

module.exports = categorySeeder;


