const express = require("express");
const app = express();
const port = 3000;

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
