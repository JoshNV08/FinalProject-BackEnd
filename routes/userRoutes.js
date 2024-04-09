const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  await User.create({ firstname, lastname, email, password });
  return res.send("El usuario fue creado con éxito!");
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;np
  const user = await User.findByPk(id);
  return res.json(user);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email, password, address, numberphone } = req.body;

  const user = await User.findByPk(id);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (email) user.email = email;
  if (password) user.password = password;
  if (address) user.address = address;
  if (numberphone) user.numberphone = numberphone;

  await user.save();

  return res.send("Usuario modificado con éxito!");
});

module.exports = router;
