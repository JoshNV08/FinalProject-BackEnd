const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

const jwtMiddleware = checkJwt({
  secret: process.env.SECRET_TOKEN || "UnStringMuySecreto",
  algorithms: ["HS256"],
});

router.get("/", jwtMiddleware, userController.index);
router.get("/:id", jwtMiddleware, userController.show);
router.put("/:id", jwtMiddleware, userController.update);
router.delete("/:id", jwtMiddleware, userController.destroy);
router.post("/", userController.store);


router.get("/profile", jwtMiddleware, userController.getProfile);
router.put("/profile", jwtMiddleware, userController.updateProfile);

module.exports = router;
