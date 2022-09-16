const express = require('express')
const app = express();
const dotenv=require('dotenv').config()
const morgan=require('morgan')
const cors = require('cors')
const mongoose=require('mongoose');
const bodyParser = require("body-parser")
require('dotenv/config')

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json())

//routes
const productsRoutes = require("./routes/products")
const categoriesRoutes = require("./routes/categories")
app.use('/products',productsRoutes)
app.use('/categories',categoriesRoutes)


mongoose.connect(process.env.connection_url)
.then(()=>{
    console.log("Databse connection is done...")
})
.catch((err)=>{
    console.log(err)
})

//server
app.listen(process.env.port, ()=> console.log(`APP listening on port ${process.env.port}`))