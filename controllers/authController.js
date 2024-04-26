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

    if (user.role === "Admin") {
      const token = jwt.sign(
        { sub: user.id, role: "Admin" },
        process.env.DB_TOKEN_SECRET
      );
      return res.json({ token });
    } else {
      return res.json({ message: "Credenciales inválidas." });
    }
  },
};
module.exports = authController;
