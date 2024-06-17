const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Admin } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        const admin = await Admin.findOne({ where: { email } });
        if (admin) {
          if (await bcrypt.compare(password, admin.password)) {
            const token = jwt.sign(
              { sub: admin.id, role: "Admin" },
              process.env.DB_TOKEN_SECRET
            );
            return res.json({token});
          } else {
            return res.status(401).json({ error: "Credenciales inválidas." });
          }
        } else {
          return res.status(401).json({ error: "Problemas con el usuario." });
        }
      } else {
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            { sub: user.id, role: "User" },
            process.env.DB_TOKEN_SECRET
          );
          return res.json({ token });
        } else {
          return res.status(401).json({ error: "Credenciales inválidas." });
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      return res.status(500).json({ error: "Error durante la autenticación." });
    }
  },
};

module.exports = authController;
