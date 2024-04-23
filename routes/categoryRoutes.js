const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { Category } =  require("../models/");
const categoryController = require("../controllers/categoryController");

router.get("/",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  categoryController.index);
router.get("/:id",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  categoryController.show);
router.post("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  categoryController.store);
router.patch("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  categoryController.update);
router.delete("/:id",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), categoryController.destroy);

module.exports = router;
