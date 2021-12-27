const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
//middleware
app.use(express.json());

const register = require("./routes/auth");
app.use("/api/user", register);

const posts = require("./routes/posts");
app.use("/api/posts", posts);

app.listen(4000, () => {
    console.log("Server is running in 4000");
    mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true }, () => console.log("Database connected"));
});
