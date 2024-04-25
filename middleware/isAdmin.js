function isAdmin = (req, res) => {

    if (req.auth.role === "admin") {
next();
    } else {
        return("Creedenciales invalidas")
    }
}


module.exports = isAdmin