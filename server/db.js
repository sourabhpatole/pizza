const mongoose = require("mongoose");
let mongoURL =
  "mongodb+srv://sourabh:.Sourabh1@cluster0.jluxa.mongodb.net/pizza";
mongoose.connect(mongoURL);
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongodb connection successful");
});
db.on("error", () => {
  console.log("Mongodb connection failed");
});
module.exports = mongoose;
