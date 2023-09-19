const express = require("express");
const cors = require("cors");
var productdb = require("./productdb.json");
var userdb = require("./userdb.json");

const app = express();
app.use(cors());
app.use(express.json());

const portNumber = 5000;

app.get("/get_products", (req, res) => {
  res.json(productdb);
});
app.post("/signin", (req, res) => {
  const { email, name } = req.body;
  const user = userdb.find(
    (user) => user.email === email && user.name === name
  );
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("No user found");
  }
});

app.listen(portNumber, () => {
  console.log("listening to port " + portNumber);
});
