require("dotenv").config();
const userSeeder = require("./userSeeder");
const categorySeeder = require("./categorySeeder");
const productsSeeder = require("./productsSeeder");
const AdminSeeder = require("./AdminSeeder")

AdminSeeder();
userSeeder();
categorySeeder();
productsSeeder();