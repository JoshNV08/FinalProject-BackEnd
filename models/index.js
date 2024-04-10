const { Sequelize } = require("sequelize");

const User = require("./User");
const Products = require("./Products"); 
const Order = require("./Order");
const User = require("./User")
const Category = require("./Category");


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

User.initModel(sequelize);
Category.initModel(sequelize);

User.hasMany(Article);
Category.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Category,
};
