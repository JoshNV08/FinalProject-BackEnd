function isAdmin(req, res, next) {
  if (req.auth.role === "Admin") {
    next();
  } else {
    return "Creedenciales invalidas";
  }
}

module.exports = isAdmin;
