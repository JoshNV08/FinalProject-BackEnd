const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes")



router.use("/admin", checkJwt({secret: process.env.SECRET_TOKEN, algorithms: ["HS256"], adminRoutes }));

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);
router.use("/tokens", authRoutes);



module.exports = router;
