const db = require('../db/dbConfig.js');
const Clothing = require('../models/clothing.js');
const Designer = require('../models/designer.js');


// get all designer
const getAllDesigners = async (req, res) => {
    try {
        const allDesigners = await db.any("SELECT * FROM designers")
        return { allDesigners };
    } catch (error) {
        return { error }
    }
};

// get one designer by Id
const getDesignerById = async (designers_id) => {
    try {
        const oneDesigner = await db.one(
            "SELECT * FROM designers WHERE designer_id = $1",
            [designers_id]
        );
        return oneDesigner;
    } catch (error) {
        return { error: error };
    }
};

const createNewDesigner = async (designer) => {
    try {
        const newDesigner = await db.one(
            "INSERT INTO designers (first_name, last_name, brand_name, years_in_industry, is_sustainable, country, price_point, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [
                designer.first_name,
                designer.last_name,
                designer.brand_name,
                designer.years_in_industry,
                designer.is_sustainable,
                designer.country,
                designer.price_point,
                designer.image
            ]
        );
        return newDesigner;
    } catch (error) {
        return { error: error };
    }
};

const updateDesigner = async (designer_id, designer) => {
    try {
        const updatedDesigner = await db.one(
            "UPDATE designers SET first_name = $1, last_name = $2, brand_name = $3, years_in_industry = $4, is_sustainable = $5, country = $6, price_point = $7,  image = $8 WHERE designer_id = $9 RETURNING *",
            [
                designer.first_name,
                designer.last_name,
                designer.brand_name,
                designer.years_in_industry,
                designer.is_sustainable,
                designer.country,
                designer.price_point,
                designer.image,
                designer_id,
            ]
        );
        return updatedDesigner;
    } catch (error) {
        return { error: error };
    }
};

const deleteDesigner = async (designer_id) => {
    try {
        const deletedDesigner = await db.one(
            "DELETE FROM designers WHERE designer_id = $1 RETURNING *", designer_id
        );
        return deletedDesigner;
    } catch (error) {
        return { error: error };
    }
};

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
        const oneClothing = await db.one(
            "SELECT * FROM clothing WHERE id = $1", clothing_id
        );
        return oneClothing;
    } catch (error) {
        return { error: error };
    }
};

const createClothing = async (clothing) => {
    try {
        if (!clothing.style) {
            throw new Error("You must specify a style for the clothing item");
        }
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
                clothing.image,
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
            "UPDATE clothing SET style = $1, color = $2, size = $3, is_recycled_item = $4, material = $5, price = $6, ranking = $7, image = $8 WHERE id = $9 RETURNING *",
            [
                clothing.style,
                clothing.color,
                clothing.size,
                clothing.is_recycled_item,
                clothing.material,
                clothing.price,
                clothing.ranking,
                clothing.image,
                clothing_id,
            ]
        );
        return updatedClothing;
    } catch (error) {
        return { error: error };
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
            "DELETE FROM clothing WHERE id = $1 RETURNING *",
            clothing_id
        );
        return deletedClothing;
    } catch (error) {
        return { error: error };
    }
};

module.exports = {
    getAllDesigners,
    getAllClothing,
    getClothingById,
    createClothing,
    updateClothing,
    deleteClothing,
    deleteClothingByDesignerId,
    getAllDesignersByClothing,
    getDesignerById,
    createNewDesigner,
    updateDesigner,
    deleteDesigner,
};
