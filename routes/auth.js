const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res, next) => {
    console.log(req.body);
    const user = new User({
        // name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
    // response.send(JSON.stringify(request));
});

router.post("/login", (req, res) => {});

module.exports = router;
