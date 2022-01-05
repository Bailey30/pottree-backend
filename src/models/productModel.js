const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
    },
    color: {
        type: Array,
    },
    price: {
        type: Number,
    },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product