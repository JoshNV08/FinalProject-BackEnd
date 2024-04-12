const { Category } = require("../models");

async function categorySeeder() {
  const category = [
    {
      name: "Pizza",
    },
  ];
  await Category.bulkCreate(category);
  console.log("the seeders of category are running");
}

module.exports = categorySeeder;


