const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designerSchema = new Schema({
    designer_id: { type: Schema.Types.ObjectId, required: true },
    first_name: { type: String, maxlength: 100 },
    last_name: { type: String, maxlength: 100 },
    brand_name: { type: String },
    years_in_industry: { type: Number },
    is_sustainable: { type: Boolean },
    country: { type: String },
    price_point: { type: String },
    image: { type: String }
});

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;