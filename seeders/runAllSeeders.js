require("dotenv").config();
const userSeeder = require("./userSeeder");
const categorySeeder = require("./categorySeeder");
const productsSeeder = require("./productsSeeder");
const adminSeeder = require("./adminSeeder");
const orderSeeder = require("./orderSeeder");

async function runAllSeeders() {
  try {
    await adminSeeder();
    
    await userSeeder();

    await categorySeeder();
    
    await productsSeeder();
    
    await orderSeeder();
    
  } catch (error) {
    console.error("Error executing seeders:", error);
  }
}

runAllSeeders();
