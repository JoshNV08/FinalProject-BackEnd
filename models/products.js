const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static initModel(sequelize) {
    Products.init(
      {
        id: {
          type: DataTypes.BIGINT, // Notar que si bien esto en BD se guarda como BIGINT (8 bytes), Sequelize lo retorna como String, ya que JavaScript no lo puede representar.
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
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
          unique: true,
        },
      
    
        sequelize,
        modelName: "products",
      }
    );
    return Products;
  }
}

module.exports = Products;
