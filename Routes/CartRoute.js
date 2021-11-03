const express = require("express");
const router = express.Router();
//Importing Cart model here//
const Cart = require("../models/Cart");
//Lets create Routes Now //
// Route for getting items//
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    if (!items) throw Error("Item not found");
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//Router for posting new items//
router.post("/", async (req, res) => {
  const newItem = new Cart({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const item = await newItem.save();
    if (!item) throw new Error("Something went wrong!");
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//Router for deleting Items //
router.delete("/:id", async (req, res) => {
  try {
    const items = await Cart.findByIdAndDelete(req.params.id);
    if (!items) throw Error("Item not found");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
module.exports = router;
