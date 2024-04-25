const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes")
const isAdmin = require ("../middleware/isAdmin")



router.use("/tokens", authRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);



module.exports = router;
