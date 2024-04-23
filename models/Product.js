const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        price: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: true,
        },
        stock: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: true,
        },
        feature: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "product",
      }
    );
  }
}

module.exports = Product;