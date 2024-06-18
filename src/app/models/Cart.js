const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cart = new Schema({
    _id: ObjectId,
    src: String,
    name: String,
    color: String,
    size: String,
    quantity: Number,
    idProduct: String,
    price: Number
});

module.exports = mongoose.model('Cart', Cart);