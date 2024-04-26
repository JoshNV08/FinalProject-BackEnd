const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Credenciales inválidas." });
      }

      if (user.role === "Admin") {
        const token = jwt.sign(
          { sub: user.id, role: "Admin" },
          process.env.DB_TOKEN_SECRET
        );
        return res.json({ token });
      } else {
        return res.status(401).json({ error: "Acceso no autorizado." });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      return res.status(500).json({ error: "Error durante la autenticación." });
    }
  },
};

module.exports = authController;
