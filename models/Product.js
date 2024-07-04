const { Model, DataTypes } = require("sequelize");
const Category = require('./Category');

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
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
        }, 
        categoryId: {
          type: DataTypes.BIGINT,  // Changed from INTEGER to BIGINT
          references: {
            model: Category,
            key: 'id'
          }
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        feature: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        modelName: "product",
      }
    );
    Product.belongsTo(Category, { foreignKey: 'categoryId' });
    return Product;
  }
}

module.exports = Product;
