const { Admin } = require("../models");

const AdminController = {
  index: async (req, res) => {
    const admins = await Admin.findAll();
    return res.json(admins);
  },
  show: async (req, res) => {
    const { id } = req.params;
    np;
    const admin = await Admin.findByPk(id);
    return res.json(admin);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await Admin.create({
      firstname,
      lastname,
      email,
      password,
    });
    return res.send("El administrador inició con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;

    const admin = await Admin.findByPk(id);

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;
    if (password) user.password = password;

    await admin.save();

    return res.send("Admin modificado con éxito!");
  },
  destroy: async (req, res) => {},
};

module.exports = AdminController;
