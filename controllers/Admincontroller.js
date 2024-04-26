const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

const AdminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      return res.json(admins);
    } catch(error) {
      return res.status(500).json({ error: 'Error loading admins' });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
      return res.json(admin);
    } catch(error) {
      return res.status(500).json({ error: "Error obtaining admin" });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      await Admin.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      return res.send("Admin created successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error creating admin" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;

      const admin = await Admin.findByPk(id);

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      if (firstname) admin.firstname = firstname;
      if (lastname) admin.lastname = lastname;
      if (email) admin.email = email;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        admin.password = hashedPassword;
      }

      await admin.save();

      return res.send("Admin updated successfully!");
    } catch(error) {
      return res.status(500).json({ error: "Error updating admin" });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findOne({ where: { id } });

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      await admin.destroy();

      return res.send("Admin successfully deleted");
    } catch(error) {
      return res.status(500).json({ error: "Error deleting admin" });
    }
  },
};

module.exports = AdminController;
