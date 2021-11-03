//Importing dependencies //
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const CartRoutes = require("./Routes/CartRoute.js");
const MenuRoutes = require("./Routes/MenuRoute.js");
const app = express();
//Middle Ware//
app.use(express.json());
//Import Routes//
app.use("/Cart", CartRoutes);
app.use("/Menu", MenuRoutes);
//Set MongoDB connection//
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));
//Connect with the Port//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
