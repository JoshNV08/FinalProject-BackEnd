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

const User = require("./User");
const Products = require("./Products");
const Order = require("./Order");
const Category = require("./Category");
const Admin = require("./Admin");

User.initModel(sequelize);
Category.initModel(sequelize);
Products.initModel(sequelize);
Order.initModel(sequelize);
Admin.initModel(sequelize);

Category.hasMany(Products);
Products.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Category,
  Order,
  Products,
  Admin,
};
