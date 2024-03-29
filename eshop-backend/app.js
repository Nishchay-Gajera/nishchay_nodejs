const express = require('express')
const app = express();
const dotenv=require('dotenv').config()
const morgan=require('morgan')
const cors = require('cors')
const mongoose=require('mongoose');
const bodyParser = require("body-parser")
const authJwt = require("./helpers/jwt")
require('dotenv/config')

//MIDDLEWARE
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json())
app.use(authJwt())

//routes
const productsRoutes = require("./routes/products")
const categoriesRoutes = require("./routes/categories")
const usersRoutes = require("./routes/users")
const ordersRoutes = require("./routes/orders")
app.use('/products',productsRoutes)
app.use('/categories',categoriesRoutes)
app.use('/users',usersRoutes)
app.use('/orders',ordersRoutes)


mongoose.connect(process.env.connection_url)
.then(()=>{
    console.log("Databse connection is done...")
})
.catch((err)=>{
    console.log(err)
})

//server
const  PORT = process.env.port||3300;
app.listen(PORT,()=> console.log(`APP listening on port ${req.protocol}://${req.get("host")}/${PORT}`))