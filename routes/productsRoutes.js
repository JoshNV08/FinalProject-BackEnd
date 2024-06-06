const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", productsController.index);
router.get("/featured", productsController.featured);
router.get("/:id", productsController.show);
router.post(
  "/",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.store
);
router.patch(
  "/:id",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.update
);
router.delete(
  "/:id",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  productsController.destroy
);

module.exports = router;
