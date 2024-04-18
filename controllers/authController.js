const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    console.log("hola");
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.json({ message: "Credenciales invalidas." });
    if (user.password !== password)
      return res.json({ message: "Credenciales invalidas." });

    const token = jwt.sign({ sub: "user123" }, "UnStringMuySecreto");

    return res.json(token);
  },
};

module.exports = authController;
