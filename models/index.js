require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

if (process.env.DB_CONNECTION === "postgres") {
  sequelize.dialecModule = require("pg")
}

const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const Category = require("./Category");
const Admin = require("./Admin");

User.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
Admin.initModel(sequelize);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Category,
  Order,
  Product,
  Admin,
};
