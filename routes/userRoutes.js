const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");
require("dotenv").config();

const jwtMiddleware = checkJwt({
  secret: process.env.SECRET_TOKEN || "UnStringMuySecreto",
  algorithms: ["HS256"],
  credentialsRequired: true,
});

const isAuthorizedUser = require("../middleware/isUser");

router.get("/profile", jwtMiddleware, isAuthorizedUser, userController.show);
router.put("/profile", jwtMiddleware, isAuthorizedUser, userController.update);
router.get("/", jwtMiddleware, userController.index);
router.get("/:id", jwtMiddleware, isAuthorizedUser, userController.show);
router.put("/:id", jwtMiddleware, isAuthorizedUser, userController.update);
router.delete("/:id", jwtMiddleware, isAuthorizedUser, userController.destroy);
router.post("/", userController.store);

module.exports = router;
