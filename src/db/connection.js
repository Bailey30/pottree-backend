const mongoose = require('mongoose');
require("dotenv").config()

///.env needs to be in root folder

const connection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        // .then(console.log("connected to db"))
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}
connection()