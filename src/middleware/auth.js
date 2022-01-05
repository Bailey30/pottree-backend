///password hashing and decrypting, token decoding
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.actualPassword = req.body.password
        
        req.body.password = await bcrypt.hash(req.body.password, 8)
        // console.log(req.body.actualPassword);
        // console.log(req.body.password);
        next()
    } catch (error) {
        console.log(error);
    }
}

exports.registerDecrypt = async(req,res,next) => {
    try {
        req.user = await User.findOne({ username: req.body.username })
        !req.user && res.status(401).json("wrong credentials")
        console.log(req.body.actualPassword);
        console.log(req.body.password);
        if (await bcrypt.compare(req.body.actualPassword, req.user.password)) {
            next()
            // console.log(req.user);
        } else {
            res.status(401).json("wrong credentials (password)")
            throw new Error()
        }
    } catch (error) {
        console.log(error);
    }
}


exports.decryptPassword = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username })
        !req.user && res.status(401).json("wrong credentials")
        if (await bcrypt.compare(req.body.password, req.user.password)) {
            next()
            // console.log(req.user);
        } else {
            res.status(401).json("wrong credentials (password)")
            throw new Error()
        }
    } catch (error) {
        console.log(error);
    }
}

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        console.log(token);
        // console.log(authHeader);
        if (token) {
            // const token = authHeader.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SEC)
            // req.id = decodedToken.id 
            req.user = await User.findById(decodedToken.id)
            decodedToken && next();
        }
    }

    catch (error) {
        console.log(error);
    }

}