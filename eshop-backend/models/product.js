const mongoose=require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true, 
    },
    richDescription:{
        type: String,
        default: "",
    },
    image:{
        type: String,
        default: "",
    },
    imags:[
        {
            type: String,
        },
    ],
    brand:{
        type: String,
        default: "",
    }
})

exports.Product = mongoose.model('Product',productSchema)
