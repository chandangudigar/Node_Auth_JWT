const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Accesss Denied");

    try {
        const verfied = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verfied._id;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};
