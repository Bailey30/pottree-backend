////register and login
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        // const token = jwt.sign({id: user._id}, process.env.JWT_SEC)
        // res.status(200).send({user:user.username, token: token})
        if(user){
            next()
        }
    } catch (error) {
        console.log(error);
    }
}

exports.login = async(req,res)=> {
    try {
        console.log(req.user);
        const token = jwt.sign({id: req.user._id}, process.env.JWT_SEC)
        res.status(200).send({user:req.user.username, token: token, userId: req.user._id})
    } catch (error) {
        console.log(error);
    }
}