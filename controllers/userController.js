const { User } = require("../models");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: "Error loading users" });
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error obtaining user" });
    }
  },

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password, address, phoneNumber } =
        req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        address,
        phoneNumber,
      });

      return res.send("User created successfully!");
    } catch (error) {
      return res.status(500).json({ error: "Error creating user" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password, address, phoneNumber } =
        req.body;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (firstname) user.firstname = firstname;
      if (lastname) user.lastname = lastname;
      if (email) user.email = email;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
      if (address) user.address = address;
      if (phoneNumber) user.phoneNumber = phoneNumber;

      await user.save();

      return res.send("User updated successfully!");
    } catch (error) {
      return res.status(500).json({ error: "Error updating user" });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.destroy();
      return res.send("User deleted successfully!");
    } catch (error) {
      return res.status(500).json({ error: "Error deleting user" });
    }
  },
  getProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error obtaining user" });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const { id } = req.auth;
      const { firstname, lastname, email, currentPassword, newPassword, address, phoneNumber } = req.body;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (firstname) user.firstname = firstname;
      if (lastname) user.lastname = lastname;
      if (email) user.email = email;
      if (address) user.address = address;
      if (phoneNumber) user.phoneNumber = phoneNumber;

      if (currentPassword && newPassword) {
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: "Current password is incorrect" });
        }
        user.password = await bcrypt.hash(newPassword, 10);
      }

      await user.save();
      return res.json({ message: "Profile updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating profile" });
    }
  }};

module.exports = userController;
