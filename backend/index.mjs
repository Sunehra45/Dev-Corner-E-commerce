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

async function  connectDB(){
    try {
        await  mongoose.connect("mongodb://127.0.0.1:27017/ecommerceProject") 
        console.log("mongodb connected") ;
    } catch (error) {
        if(error) console.log( "Problem in Db connection", error);
        process.exit(1);
    }
};
connectDB();

Router.get('/products', async (req,res)=>{
    try {
        const  productdata = await product.find();  
        res.json(productdata)  
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
        console.log(error);
    }
})


product.insertMany(productInfo)
.then(() => {
    console.log('Data inserted successfully');
})
.catch(err => console.error('Insert failed', err));

app.use(Router);
app.listen(port,(err)=>{
    console.log( `App is running on Port${port}`);
    if(err){
        console.log("Error Occured")
    }
});