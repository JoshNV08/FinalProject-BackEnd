const { faker } = require("@faker-js/faker")
const { Products } = require("../models")


async function productsSeeder() {

const products = [
{
  name: "x"
},
{
  name: "x"
},
];
await products.bulkCreate(Products);
console.log("the seeders of products are running")
}

module.exports = productsSeeder;