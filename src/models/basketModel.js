const mongoose = require("mongoose")

const basketSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        unique: true
    },
    product: [
        {
            productId:{
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, {
    timestamps: true
})

const Basket = mongoose.model("Basket", basketSchema)
Basket.createIndexes()

module.exports = Basket