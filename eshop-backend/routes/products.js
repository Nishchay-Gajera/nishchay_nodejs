let {Product}= require("../models/product")
let express = require("express");
let router = express.Router();

router.get('/',async(req,res)=>{

    let productList = await Product.find();

    if(!productList){
        res.status(500).json({success: false})
    }

    res.send(productList)

})


router.post('/',(req,res)=>{
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

module.exports=router;