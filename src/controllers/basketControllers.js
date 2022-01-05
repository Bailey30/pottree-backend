const Basket = require("../models/basketModel")
const User = require("../models/userModel")
const Product = require("../models/productModel")

exports.createBasket = async (req, res) => {
    const newBasket = new Basket({ userId: req.id })
    try {
        const savedBasket = await newBasket.save()
        res.status(200).json(savedBasket)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.addToBasket = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        console.log(user);
        const basket = await Basket.findOneAndUpdate({ userId: user._id }, {
            $push: {
                product: [{
                    productId: req.body.productId,
                    quantity: req.body.quantity
                }
                ]
            }
        })
        console.log(user);
        res.status(204).json({ basket, user })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

}

exports.getBasket = async (req, res) => {
    try {
        const basket = await Basket.findOne({ userId: req.body.userId })
        const productIds = []
        for (const prod of basket.product) {
            productIds.push(prod.productId)
        }
        const products = await Product.find({
            "_id": { $in: productIds }
        })

        res.status(200).send(products)

    } catch (error) {
        console.log(error);
    }
}
exports.removeFromBasket = async (req, res) => {
    try {
        console.log(req.body.userId);
        const basket = await Basket.findOneAndUpdate({ userId: req.body.userId }, {
            $pull: {
                product: {
                    productId: req.body.productId,
                
                }
            }
        }
        )
        res.status(200).send( {basket})
        console.log("item removed from basket");
    } catch (error) {
        console.log(error);
    }
}