//load env variable

const dotenv = require("dotenv").config();
const express = require("express");
const db = require("./db");
const bodyparser = require("body-parser");

const app = express();

//connecting database

app.get("/", (req, res) => {
  res.send("hello worls");
});
app.use(bodyparser.json());

const userRout = require("./routes/userRout");
app.use("/user", userRout);

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => {
  console.log("server is runing on port 5000");
});
