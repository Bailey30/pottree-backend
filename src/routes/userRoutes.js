const {Router} = require("express")
const userRouter = Router()
const {hashPassword, decryptPassword, registerDecrypt, verifyToken} = require("../middleware/auth")
const {addUser, login} = require("../controllers/userControllers")


///REGISTER
userRouter.post("/register", hashPassword, addUser, registerDecrypt, login)

///LOGIN
userRouter.post("/login", decryptPassword, login)


///GET USER
userRouter.get("/user", verifyToken, login)

module.exports = userRouter