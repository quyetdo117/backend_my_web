const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    id: ObjectId,
    src: String,
    name: String,
    color: String,
    printing: String,
    material: String,
    size: Array,
    price: Number
});

module.exports = mongoose.model('Product', Product);