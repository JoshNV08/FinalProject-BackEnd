const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Order = require('./Order');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numberPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        is: /^\+[1-9]\d{1,14}$/
      }
  }
});

User.hasMany(Order);

module.exports = User;
