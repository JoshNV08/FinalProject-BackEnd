const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

const isAdmin = require("../middleware/isAdmin");

router.get("/profile", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.getProfile);
router.put("/profile", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.updateProfile);

router.post("/login", adminController.login);


router.get("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.index);
router.get("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.show);
router.post("/", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.store);
router.patch("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.update);
router.delete("/:id", checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }), isAdmin, adminController.destroy);

module.exports = router;
