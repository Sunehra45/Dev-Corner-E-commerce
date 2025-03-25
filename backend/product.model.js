const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{
        type: String,
        required : true,
        },
        price :{
            type : Number,
            required : true
        },
        image :{
            type : String,
        },
        category :{
            type : String,
            required : true
        },
        description :{
            type: String,
            required : true,  
        }
    } , {timestamps:true}
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;