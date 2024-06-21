const {expressjwt: checkJwt} = require("express-jwt")
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const userController = require("../controllers/userController");


router.post("/",  userController.store);

router.get("/users", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), userController.index );
router.get("/users/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), userController.getUser);
router.put("/users/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), userController.updateUser);

router.use(checkJwt({secret: process.env.SECRET_TOKEN, algorithms: ["HS256"] }));

router.get("/",userController.index);
router.get("/:id", userController.show);
router.patch("/:id",  userController.update);
router.delete("/:id",userController.destroy);


module.exports = router;
