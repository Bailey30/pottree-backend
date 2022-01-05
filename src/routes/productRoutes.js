const {Router} = require("express")
const productRouter = Router()
const {createProduct, getProducts}= require("../controllers/productControllers")

productRouter.post("/add", createProduct)

productRouter.get("/", getProducts)

module.exports = productRouter