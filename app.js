const express=require('express');
const bodyParser=require('body-parser');
// import con from './database'

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');

const mysql=require("mysql2");
const dotenv=require("dotenv");
dotenv.config();

app.get("/",function(req,res){
    console.log("working");
    res.render("index.ejs");
})

app.post('/insert',function(req,res){
    var con =mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'student_registration'
  // host:process.env.MYSQL_HOST,
  // user:process.env.MYSQL_USER,
  // password:process.env.MYSQL_PASSWORD,
  // database:process.env.MYSQL_DATABASE
});

    console.log('hi')
    const name=req.body.name;
    const roll=req.body.roll;
    const branch=req.body.branch;
    const year=req.body.year;

    con.connect(function(err) {
        if (err){
          console.log(err);
          return;
        } else {
            console.log("Connected!");
            const sql = "INSERT INTO student (name, roll, branch, year) VALUES (?, ?, ?, ?)";
            const values = [name, roll, branch, year];
            con.query(sql, values, function (err, result) {
              if (err){
                console.log(err);
                return;
              } else {
              console.log("Result: " + result);
              res.redirect('/');
              }
            });
          }
      });
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});