let express = require('express')
let app = express();
let dotenv=require('dotenv').config()
let morgan=require('morgan')
let cors = require('cors')
let mongoose=require('mongoose');
const { Router } = require('express');

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.connection_url)
.then(()=>{
    console.log("Databse connection is done...")
})
.catch((err)=>{
    console.log(err)
})



//schema

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

//Mode 1

const Product =mongoose.model('Product',productSchema);

app.post('/',(req,res)=>{
    const product =new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock:req.body.countInStock.type,
    });
    product
        .save()
        .then((createdProduct)=>{
            res.status(201).json(createdProduct);
        })
        .catch((err)=>{
            res.status(500).json({
                error:err,
                success:false,
            });
        });
});


app.get('/',(req,res)=>{
    product.find().then((products)=>{
        res.status(200).json(products);
    }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false 
        })
    })
})

//server
app.listen(process.env.port, ()=> console.log(`APP listening on port ${process.env.port}`))