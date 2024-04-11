require("dotenv").config();
const userSeeder = require("./userSeeder");
const categorySeeder = require("./categorySeeder");
const productsSeeder = require("./productsSeeder");
const orderSeeder = require("./orderSeeder")
const AdminSeeder = require("./AdminSeeder")

AdminSeeder = require("./AdminSeeder")
userSeeder();
categorySeeder();
productsSeeder();
orderSeeder();