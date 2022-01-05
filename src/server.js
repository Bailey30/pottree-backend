require("./db/connection")
const express = require('express');
const app = express()
const userRouter = require("./routes/userRoutes.js")
const basketRouter = require("./routes/basketRoutes")
const productRouter = require("./routes/productRoutes")
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/baskets", basketRouter)
app.use("/products", productRouter)


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})