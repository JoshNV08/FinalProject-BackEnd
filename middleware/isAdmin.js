const isAdmin = (req, res, next) => {
  if (!req.auth || !req.auth.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

module.exports = isAdmin;
