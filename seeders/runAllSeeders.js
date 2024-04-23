require("dotenv").config();
const userSeeder = require("./userSeeder");
const categorySeeder = require("./categorySeeder");
const productsSeeder = require("./productsSeeder");
const adminSeeder = require("./adminSeeder")
const orderSeeder = require("./orderSeeder")


adminSeeder();
userSeeder();
categorySeeder();
productsSeeder();
