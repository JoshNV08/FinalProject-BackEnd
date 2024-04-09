const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes")


router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/order", orderRoutes)
router.use("/category", categoryRoutes)

module.exports = router;