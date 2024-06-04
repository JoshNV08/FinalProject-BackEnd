const { Product } = require("../models");

async function productsSeeder() {
  try {
    const products = [
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 1,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 2,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 2,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 2,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 3,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 3,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 4 ,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        categoryId: 5,
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
    ];
    await Product.bulkCreate(products);

    console.log("the seeders of products are running");
  } catch (error) {
    console.error("Error al ejecutar el seeder de productos:", error);
  }
}

module.exports = productsSeeder;
