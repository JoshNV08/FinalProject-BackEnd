const { Products, Category } = require("../models");

async function productsSeeder() {
  try {
    // Supongamos que tienes un método para obtener todas las categorías de tu base de datos
    const category = await Category.findAll();

    // Verifica si hay al menos una categoría en la base de datos
    if (category.length === 0) {
      console.error("No hay categorías en la base de datos. Ejecuta el seeder de categorías primero.");
      return;
    }

    const products = [
      {
        name: "Producto 1",
        description: "Descripción del producto 1",
        category: category[0].id, // Suponiendo que el primer elemento de la lista de categorías es la categoría que deseas asignar al producto
        photo: "url_de_la_imagen_del_producto_1",
        price: 1000,
        stock: 10,
        feature: true,
      },
      // Puedes agregar más productos aquí según sea necesario
    ];

    // Utiliza bulkCreate() en el modelo Products y pasa el array products
    await Products.bulkCreate(products);

    console.log("Los seeders de productos se ejecutaron correctamente.");
  } catch (error) {
    console.error("Error al ejecutar el seeder de productos:", error);
  }
}

module.exports = productsSeeder;
