import  express from "express" ;
import mongoose from 'mongoose' ;

import productInfo from './productsinfo.mjs';
import product from './db.mjs';

const Router = express.Router();
const app = express();
const port = 3000;

Router.use(express.static('frontend'));  // serve static frontend files

Router.get('/',(req,res)=>{
    res.sendFile(__dirname + "/../frontend/index.html")
    (console.log('yeah got you'));
})

// Database Connection 
async function  connectDB(){
    try {
        await  mongoose.connect("mongodb://127.0.0.1:27017/ecommerceProject") ;
        console.log("mongodb connected") ;
    } catch (error) {
        if(error) console.log( "Problem in Db connection", error);
        process.exit(1);
    }
};
async function insertData (){
   try{
       const count = product.countDocuments();
       if(count === 0){
           product.insertMany(productInfo);
           console.log("Documents Inserted in MongoDb")
       }
       else{
           console.log("This data already exists")
       }
   }
  catch{
   console.log("some erro occured")
  }
}
connectDB();
insertData();

//Handling Routes
Router.get('/products', async (req,res)=>{
    try {
        const  productdata = await product.find();  
        console.log("products fetched from database")
        res.json(productdata)  
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
        console.log(error);
    }
})
Router.get('/filter', async (req,res)=>{
    console.log(req.headers['product-category']);
    let query = req.headers['product-category'];
    try {
        const productdata = await product.find({"category" : {$eq : `${query}`}}); 
        console.log(`${query}fetched from database`);
        res.json(productdata)  
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
        console.log(error);
    }
})

app.use(Router);
app.listen(port,(err)=>{
    console.log( `App is running on Port${port}`);
    if(err){
        console.log("Error Occured")
    }
});