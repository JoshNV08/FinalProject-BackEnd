const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const jwtMiddleware = checkJwt({
  secret: process.env.SECRET_TOKEN || "UnStringMuySecreto",
  algorithms: ["HS256"],
});

router.get("/", jwtMiddleware, userController.index);
router.get("/:id", jwtMiddleware, userController.show);
router.put("/:id", jwtMiddleware, userController.update);
router.delete("/:id", jwtMiddleware, userController.destroy);
router.put("/profile/:id", jwtMiddleware, userController.update);
router.get("/profile/:id", jwtMiddleware, userController.show);

router.post("/", userController.store);

module.exports = router;
