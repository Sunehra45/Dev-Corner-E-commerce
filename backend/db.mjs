import mongoose from 'mongoose'
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
const product = mongoose.model('product', productSchema);
export default product ;
