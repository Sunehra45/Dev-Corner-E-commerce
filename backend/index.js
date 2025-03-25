const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');


//connect Db :
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceProject")
.then(()=>console.log("mongoDb connected"))
.catch((err)=>console.log('mongoerror',err));


const Router = express.Router();
Router.use(express.static('public'));
Router.get('/',(req,res)=>{
res.sendFile('public')
(console.log('yeah got you'));
})


app.use(Router);
app.listen(port,(err)=>{
    console.log( `App is running on Port${port}`);
    if(err){
        console.log("Error Occured")
    }
});
