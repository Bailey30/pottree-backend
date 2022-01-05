const Product = require("../models/productModel")
const User = require("../models/userModel")

exports.createProduct = async(req,res)=>{
    const newProduct = new Product({
        userId: req.body.userId,
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        categories: req.body.catergories,
        color: req.body.color,
        price: req.body.price
    })
    try {
        const savedProduct = await newProduct.save()
        res.status(200).send(savedProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

exports.getProducts = async(req,res)=> {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        // res.status(500).json(error)
    }
}

