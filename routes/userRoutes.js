const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.patch("/", userController.update);
router.delete("/:id", userController.destroy);
router.get("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), (req, res) => {
  return res.send("You have a token")
})


module.exports = router;
