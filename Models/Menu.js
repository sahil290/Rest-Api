const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MenuSchema = new Schema({
  name: String,
  image: String,
  subItems: [
    {
      name: String,
      image: String,
      price: Number,
      description: String,
    },
  ],
});
module.exports = mongoose.model("Menu", MenuSchema);
