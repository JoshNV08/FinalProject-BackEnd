const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const userController = require("../controllers/userController");

router.get("/",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  userController.index);
router.get("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), userController.show);
router.post("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  userController.store);
router.patch("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  userController.update);
router.delete("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  userController.destroy);


module.exports = router;
