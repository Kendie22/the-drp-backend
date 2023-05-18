const db = require('../db/dbConfig.js');

const Clothing = require('../models/clothing.js');
const Designer = require('../models/designer.js');



const getAllClothing = async (req, res) => {
    try {
        const allClothing = await db.any(
            "SELECT * FROM clothing");
        return allClothing;
    } catch (error) {
        return { error };
    }
};

const getClothingById = async (clothing_id) => {
    try {
        const oneClothingItem = await db.one(
            "SELECT * FROM clothing WHERE clothing_id = $1", [clothing_id]
        );
        return oneClothingItem;
    } catch (error) {
        return { error: error };
    }
};


const createClothing = async (clothing) => {
    try {

        const newClothing = await db.one(
            "INSERT INTO clothing (designer_id, style, color, size, is_recycled_item, material, price, ranking, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [
                clothing.designer_id,
                clothing.style,
                clothing.color,
                clothing.size,
                clothing.is_recycled_item,
                clothing.material,
                clothing.price,
                clothing.ranking,
                clothing.image
            ]
        );
        return newClothing;
    } catch (error) {
        return { error: error };
    }
};

const updateClothing = async (clothing_id, clothing) => {
    try {
        const updatedClothing = await db.one(
            "UPDATE clothing SET designer_id = $1, style = $2, color = $3, size = $4, is_recycled_item = $5, material = $6, price = $7, ranking = $8, image = $9 WHERE clothing_id = $10 RETURNING *",
            [
                clothing.designer_id,
                clothing.style,
                clothing.color,
                clothing.size,
                clothing.is_recycled_item,
                clothing.material,
                clothing.price,
                clothing.ranking,
                clothing.image,
                clothing_id
            ]
        );
        return updatedClothing;
    } catch (error) {
        return { error: "server error" };
    }
};


const deleteClothingByDesignerId = async (designer_id) => {
    try {
        const deletedClothing = await db.none(
            "DELETE FROM clothing WHERE designer_id = $1",
            designer_id
        );
        return "Clothing items deleted successfully";
    } catch (error) {
        return { error: error };
    }
};

const getAllDesignersByClothing = async (clothing_id) => {
    try {
        const designers = await db.any(
            "SELECT designer.* FROM designer INNER JOIN clothing ON designer.id = clothing.designer_id WHERE clothing.id = $1",
            clothing_id
        );
        return designers;
    } catch (error) {
        return { error: error };
    }
};



const deleteClothing = async (clothing_id) => {
    try {
        const deletedClothing = await db.one(
            "DELETE FROM clothing WHERE clothing_id = $1 RETURNING *",
            clothing_id
        );
        return deletedClothing;
    } catch (error) {
        return { error: "server error" };
    }
};



module.exports = {
    getAllClothing,
    getClothingById,
    createClothing,
    updateClothing,
    deleteClothing,
    deleteClothingByDesignerId,
    getAllDesignersByClothing,
};
