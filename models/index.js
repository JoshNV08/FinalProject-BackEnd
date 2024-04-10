const { sequelize, Model, DataTypes } = require("sequelize");

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

User.hasMany(Order)
Order.belongsTo(User)


module.exports = {
  sequelize,
  User,
  Category,
  Order,
  Admin,
};
