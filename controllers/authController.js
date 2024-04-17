const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    //const  { email, password } = req.body;
    // Lo de arriba es equivalente a las dos líneas siguientes:
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ where: { email } });
    
    if (user === null) return res.json ({message: "Credenciales invalidas."});

    //const token = jwt.sign({sub: "user123"}, "UnStringMuySecreto");

    return res.json("OK OK OK");
  },
};

module.exports = authController;
