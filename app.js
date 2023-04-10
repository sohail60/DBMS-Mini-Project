const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');

app.get("/",function(req,res){
    console.log("working");
    res.render("index.ejs");
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});