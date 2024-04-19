const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);
router.use("/tokens", authRoutes);
router.get("/test", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), (req, res) => {
  return res.send("You have a token")
})


module.exports = router;
