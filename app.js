const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
const register = require("./routes/auth");
app.use("/", register);

//middleware
app.use(express.json());

app.listen(4000, () => {
    console.log("Server is running in 4000");
    mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true }, () => console.log("Database connected"));
});
