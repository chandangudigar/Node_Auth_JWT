const router = require("express").Router();
const User = require("../models/User");
const verfiy = require("./verifyToken");

router.get("/", verfiy, async (req, res) => {
    console.log(req.user);
    const userData = await User.findOne(
        { _id: req.user }
        // , (err, doc) => {
        //     console.log(doc);
        // }
    );
    console.log(userData);
    res.json({
        posts: {
            title: "sample posts",
        },
    });
});

module.exports = router;
