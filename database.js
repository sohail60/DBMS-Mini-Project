const mysql=require("mysql2");

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"sohail05",
    database: "student_registration"
}).promise()

