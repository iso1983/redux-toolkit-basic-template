const express = require("express");
const cors = require("cors");
var db = require("./db.json");


const app = express();
app.use(cors());
const portNumber = 5000;

app.get("/", (req, res) => {
  res.json(db)
});

app.listen(portNumber, () => {
  console.log("listening to port " + portNumber);
});
