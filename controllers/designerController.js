const express = require('express');
const designers = express.Router();

const clothingControllers = require("./clothingControllers");

const {
    // getAllDesignersByClothing,
    getAllDesigners,
    getDesignerById,
    createNewDesigner,
    updateDesigner,
    deleteDesigner,
    getDesignerByClothingId,
} = require("../queries/designers.js");

designers.use("/clothing", clothingControllers);

// Get all designers
designers.get("/", async (req, res) => {
    const allDesigners = await getAllDesigners();
    res.json(allDesigners);
});

// // Get one designer
designers.get("/:designer_id", async (req, res) => {
    const { designer_id } = req.params;
    const designer = await getDesignerById(designer_id);
    res.json(designer);
});

// // Create new designer
designers.post("/", async (req, res) => {
    const newDesigner = await createNewDesigner(req.body);
    res.json(newDesigner);
});

// // Update designer
designers.put("/:designer_id", async (req, res) => {
    const { designer_id } = req.params;
    const updatedDesigner = await updateDesigner(designer_id, req.body);
    res.json(updatedDesigner);
});

// // Delete designer
designers.delete("/:designer_id", async (req, res) => {
    const { designer_id } = req.params;
    const removedDesigner = await deleteDesigner(designer_id);
    res.json(removedDesigner);
});

// // Get designer by clothing id
// designers.get("/clothing/:clothing_id", async (req, res) => {
//     const { clothing_id } = req.params;
//     const designerByClothingId = await getDesignerByClothingId(clothing_id);
//     res.json(designerByClothingId);
// });







module.exports = designers;



