const { User } = require("../models");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    const users = await User.findAll({ include });
    return res.json(users);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password, address, numberphone } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password , 10);

    await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      address,
      numberphone,
    });

    return res.send("El usuario fue creado con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, address, numberphone } = req.body;
    const user = await User.findByPk(id);


    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    if (address) user.address = address;
    if (numberphone) user.numberphone = numberphone;

    await user.save();

    return res.send("Usuario modificado con éxito!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    await user.destroy();

    return res.send("Usuario eliminado");
  },
};

module.exports = userController;
