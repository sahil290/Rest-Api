const express = require("express");
const router = express.Router();
//Importing Cart model here//
const Menu = require("../Models/Menu");
//Lets create Routes Now //
// Route for getting items//
router.get("/", async (req, res) => {
    try {
        const items = await Menu.find();
        if (!items) throw Error("Item not found");
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});
//Router for posting new items//
router.post("/", async (req, res) => {
    try {
        const menuItem = new Menu({
            name: req.body.name,
            image: req.body.image,
            subItems: req.body.subItems.map(item => {
                return {
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    description: item.description,
                };
            }),
        });
        await menuItem.save();
        res.json(menuItem);
    } catch (error) {
        res.send("Error" + error);
    }
});
//Router for deleting Items //
router.delete("/:id", async (req, res) => {
    try {
        const items = await Menu.findByIdAndDelete(req.params.id);
        if (!items) throw Error("Item not found");
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ message: err });
    }
});
module.exports = router;
