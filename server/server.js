const express = require("express");
const Pizza = require("./models/PizzaModel");
const db = require("./db");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("server is working");
});
app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
const port = process.env.PORT || 5000;
app.listen(port, () => `Server is running on the port on ${port}`);
