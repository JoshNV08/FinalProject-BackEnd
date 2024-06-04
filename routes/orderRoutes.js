const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();
const { Order } = require("../models/");
const orderController = require("../controllers/orderController");

router.get(
  "/",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.index
);
router.get(
  "/:id",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.show
);
router.post(
  "/",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.store
);
router.patch(
  "/:id",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.update
);
router.delete(
  "/:id",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  orderController.destroy
);

module.exports = router;
