const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static initModel(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        productName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productCategory: { // Cambia el nombre del atributo 'category' a 'productCategory'
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
        modelName: "Products",
      }
    );
  }
}

module.exports = Products;
