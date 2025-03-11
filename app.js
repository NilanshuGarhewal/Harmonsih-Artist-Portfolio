// require stuff
const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");

// database setup

const mongoose = require("mongoose");
const { log } = require("console");

const MONGO_URL = "mongodb://127.0.0.1:27017/harmonish";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    log("Connected to database.");
  })
  .catch((err) => console.log(err));

// nn

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//   Creating API

app.get("/", (req, res) => {
  res.render("page/home.ejs");
});

app.get("/browse", (req, res) => {
  res.render("page/browse.ejs");
});

app.listen("8080", (req, res) => {
  log("Server is running on port 8080.");
});
