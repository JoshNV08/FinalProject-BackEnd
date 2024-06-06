const products = [
  {
    name: "Burger Sencilla",
    description: "Pan, carne y lechuga.",
    categoryId: 1,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/BurgerSencilla.webp",
    price: 400,
    stock: 10,
    feature: true,
  },
  {
    name: "Burger Doble",
    description: "Pan, carne x2, tomate y lechuga.",
    categoryId: 1,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/BurgerDobleEspecial.webp",
    price: 600,
    stock: 10,
    feature: true,
  },
  {
    name: "Burger Pollo",
    description: "Pollo, lechuga y tomate.",
    categoryId: 1,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/BurgerPollo.webp",
    price: 700,
    stock: 10,
    feature: false,
  },
  {
    name: "Burger Random",
    description: "Carne, pepino, y tomate.",
    categoryId: 1,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/BurgerPepino.webp",
    price: 800,
    stock: 10,
    feature: false,
  },
  {
    name: "Egg Burger",
    description: "Como la de Mcdonalds pero mejor.",
    categoryId: 1,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/burgerhuevo.webp",
    price: 700,
    stock: 10,
    feature: true,
  },
  {
    name: "Burger Veggie",
    description: "Hamburguesa vegetariana.",
    categoryId: 1,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/BurgerVeggie.webp",
    price: 550,
    stock: 10,
    feature: false,
  },
  {
    name: "Papas con Bacon",
    description: "Papas fritas con bacon.",
    categoryId: 2,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/PapasBacon.webp",
    price: 250,
    stock: 10,
    feature: true,
  },
  {
    name: "Papas Comunes",
    description: "Papas fritas comunes.",
    categoryId: 2,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/PapasComunes.webp",
    price: 300,
    stock: 10,
    feature: false,
  },
  {
    name: "Papas Rusticas",
    description: "Papas fritas rústicas.",
    categoryId: 2,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/PapasRusticas.webp",
    price: 350,
    stock: 10,
    feature: false,
  },
  {
    name: "Papas Especiales",
    description: "Papas fritas especiales.",
    categoryId: 2,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/PapasEspeciales.webp",
    price: 300,
    stock: 10,
    feature: false,
  },
  {
    name: "Ensalada",
    description: "Ensalada fresca.",
    categoryId: 2,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Ensalada.webp",
    price: 400,
    stock: 10,
    feature: false,
  },
  {
    name: "Doble Cola Cola",
    description: "Contiene 15kilos de azúcar",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Coca.webp",
    price: 70,
    stock: 10,
    feature: false,
  },
  {
    name: "Zup",
    description: "Contiene 7up y sprite pero es Zup",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Zup.webp",
    price: 30,
    stock: 10,
    feature: true,
  },
  {
    name: "Moñster",
    description: "Bebida energetica",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Monster.webp",
    price: 45,
    stock: 10,
    feature: false,
  },
  {
    name: "Agua",
    description: "Esta agua la toma Cristiano Ronaldo, es purificada.",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Agua.webp",
    price: 70,
    stock: 10,
    feature: false,
  },
  {
    name: "Rud Bell",
    description: "Bebida energetica la cual no te provee alas",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/RedBull.webp",
    price: 41,
    stock: 10,
    feature: false,
  },
  {
    name: "Nix",
    description: "Recomendada para fin de mes",
    categoryId: 3,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Nix.webp",
    price: 25,
    stock: 10,
    feature: false,
  },
  {
    name: "Helado Seba",
    description: "Es un cono",
    categoryId: 4,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/HeladoCono.webp",
    price: 350,
    stock: 10,
    feature: true,
  },
  {
    name: "Helado Grande",
    description: "Helado grande.",
    categoryId: 4,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/HeladoGrande.webp",
    price: 250,
    stock: 10,
    feature: false,
  },
  {
    name: "Flan",
    description: "Flan con caramelo.",
    categoryId: 4,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Flan.webp",
    price: 200,
    stock: 10,
    feature: false,
  },
  {
    name: "MilkShake Frutilla",
    description: "Milkshake de frutilla.",
    categoryId: 4,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/MilkshakeFrutilla.webp",
    price: 350,
    stock: 10,
    feature: false,
  },
  {
    name: "MilkShake Vainilla",
    description: "Milkshake de vainilla.",
    categoryId: 4,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/MilkshakeVainilla.webp",
    price: 345,
    stock: 10,
    feature: false,
  },
  {
    name: "MilkShake Chocolate",
    description: "Milkshake de chocolate.",
    categoryId: 4,
    photo:
      "https://goodburgeruy.s3.sa-east-1.amazonaws.com/MilkshakeChocolate.webp",
    price: 250,
    stock: 10,
    feature: false,
  },
  {
    name: "Café Expresso",
    description: "Es expresso",
    categoryId: 5,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/CoffeeExpresso.webp",
    price: 145,
    stock: 10,
    feature: false,
  },{
    name: "Capuccino",
    description: "Con leche",
    categoryId: 5,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Cappuchino.webp",
    price: 165,
    stock: 10,
    feature: false,
  },{
    name: "Descafeinado",
    description: "No tiene café",
    categoryId: 5,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/Descafeinado.webp",
    price: 160,
    stock: 10,
    feature: false,
  },{
    name: "Expresso Doble",
    description: "Es doblemente expresso",
    categoryId: 5,
    photo: "https://goodburgeruy.s3.sa-east-1.amazonaws.com/ExpressoDoble.webp",
    price: 150,
    stock: 10,
    feature: false,
  },
];

const { Product } = require("../models");

async function productsSeeder() {
  try {
    await Product.bulkCreate(products);
    console.log("the seeders of products are running");
  } catch (error) {
    console.error("Error al ejecutar el seeder de productos:", error);
  }
}

module.exports = productsSeeder;
