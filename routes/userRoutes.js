const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const jwtMiddleware = checkJwt({
  secret: process.env.SECRET_TOKEN || "UnStringMuySecreto",
  algorithms: ["HS256"],
});

// Rutas protegidas con JWT
router.get("/users", jwtMiddleware, userController.index);
router.get("/users/:id", jwtMiddleware, userController.show);
router.put("/users/:id", jwtMiddleware, userController.update);
router.delete("/users/:id", jwtMiddleware, userController.destroy);

// Rutas públicas
router.post("/users", userController.store);

module.exports = router;
