const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
});
module.exports = mongoose.model("Cart", CartSchema);