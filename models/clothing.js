const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothingSchema = new Schema({
    designer_id: { type: Schema.Types.ObjectId, ref: 'Designer' },
    style: { type: String, required: true },
    color: String,
    size: String,
    is_recycled_item: Boolean,
    material: String,
    price: Number,
    ranking: Number,
    image: String
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
