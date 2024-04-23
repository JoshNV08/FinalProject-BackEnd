const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.json({ message: "Credenciales inválidas." });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({ message: "Credenciales inválidas." });
    }

    const token = jwt.sign({ sub: user.id }, "UnStringMuySecreto");

    return res.json({ token });
  },
};

module.exports = authController;
