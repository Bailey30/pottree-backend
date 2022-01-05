const {Router} = require("express")
const { createBasket , addToBasket, getBasket, removeFromBasket} = require("../controllers/basketControllers")
const basketRouter = Router()
const {verifyToken} = require("../middleware/auth")





///CREATE BASKET

basketRouter.post("/create", verifyToken, createBasket )


///ADD TO BASKET

basketRouter.put("/add",addToBasket)

//REMOVE FROM BASKET

basketRouter.put("/remove", removeFromBasket)

///GET BASKET

basketRouter.post("/getbasket", getBasket)

module.exports = basketRouter