const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { Order } = require("../models/");
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post("/", orderController.store);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);
router.get("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), (req, res) => {
  return res.send("You have a token")
})

module.exports = router;
