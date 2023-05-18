const express = require('express');
const clothing = express.Router({ mergeParams: true });

const {

    getAllClothing,
    getClothingById,
    createClothing,
    updateClothing,
    deleteClothing,
    getDesignerByClothingId,

} = require("../queries/clothing.js");

// Get all clothing
clothing.get("/", async (req, res) => {
    const allClothing = await getAllClothing();
    res.json(allClothing);
});

// Get one clothing
clothing.get("/:clothing_id", async (req, res) => {
    const { clothing_id } = req.params;
    const clothingItem = await getClothingById(clothing_id);
    res.json(clothingItem);
});

// Route to get the designer of a specific clothing item
clothing.get("/:clothingId/designer", async (req, res) => {
    const { clothingId } = req.params;
    const designerByClothingId = await getDesignerByClothingId(clothingId);
    res.json(designerByClothingId);
});

// Create new clothing item
clothing.post("/", async (req, res) => {
    const newClothing = await createClothing(req.body);
    res.json(newClothing);
});

// Update clothing
clothing.put("/clothing_id", async (req, res) => {
    const { clothing_id } = req.params;
    const updatedClothing = await updateClothing(clothing_id, req.body);
    res.json(updatedClothing);
});

// Delete clothing
clothing.delete("/:clothing_id", async (req, res) => {
    const { clothing_id } = req.params;
    const deletedClothing = await deleteClothing(clothing_id);
    if ({ error }) {
        console.log(error);
        return res.status(500).json({ error: "server error" });
    } else {
        return res.status(200).json({ deletedClothing })
    }
});

module.exports = clothing;

