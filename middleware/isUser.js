const { User } = require('../models');

const isAuthorizedUser = async (req, res, next) => {
  try {
    if (!req.auth || !req.auth.id) {
      console.error("Unauthorized: No auth or auth.id found");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findByPk(req.auth.id);

    if (!user) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    if (req.params.id && user.id !== parseInt(req.params.id, 10)) {
      console.error("Forbidden: User ID does not match");
      return res.status(403).json({ error: "Forbidden: You are not authorized to access this resource" });
    }

    next();
  } catch (error) {
    console.error("Error in isAuthorizedUser middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = isAuthorizedUser;
