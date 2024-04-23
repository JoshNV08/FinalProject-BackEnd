const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { Admin } =  require("../models/");
const adminController = require("../controllers/adminController");


router.get("/",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  adminController.index);
router.get("/:id",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  adminController.show);
router.post("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  adminController.store);
router.patch("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),  adminController.update);
router.delete("/:id",checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), adminController.destroy);

module.exports = router;
