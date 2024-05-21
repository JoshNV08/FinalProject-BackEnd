const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/tokens", authRoutes);
router.use("/admins", adminRoutes);
router.use("/users", userRoutes);
router.use("/products", productsRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
