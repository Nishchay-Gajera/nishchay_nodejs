const {Category} = require("../models/category");
const express = require("express");
const router = express.Router();

//GET
router.get('/',async(req,res)=>{
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({success: false});
    }
    res.status(200).send(categoryList)
})

//GETBY ID
router.get('/:id',async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res
        .status(500)
        .json({message:"This Category with id not found"})
    }
    res.status(200).send(category)
})

//POST
router.post('/',async (req,res)=>{
    let category =new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    });
    category = await category.save();
    if(!category) return res.status(400).send("The category cannot be created")
    res.send(category);
});

module.exports = router;