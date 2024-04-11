const { faker } = require("@faker-js/faker")
const { Category } = require("../models")


async function categorySeeder() {

const category = [
{
  name: "Pizza"
},
{
  name: "Burga"
},
];
await category.bulkCreate(Category);
console.log("the seeders of category are running")
}

module.exports = categorySeeder;