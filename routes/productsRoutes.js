const express = require("express");
const router = express.Router();
const { Products } = require("../models");
const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
router.get("/:id", productsController.show);
router.post("/", productsController.store);
router.patch("/:id", productsController.update);
router.delete("/:id", productsController.destroy);

module.exports = router;
