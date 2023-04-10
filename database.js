const mysql=require("mysql2");
const dotenv=require("dotenv");
dotenv.config();

let con =mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'student'
  // host:process.env.MYSQL_HOST,
  // user:process.env.MYSQL_USER,
  // password:process.env.MYSQL_PASSWORD,
  // database:process.env.MYSQL_DATABASE
});

export default con;

// INSERT
// con.connect(function(err) {
//   if (err){
//     console.log(err);
//     return;
//   } else {
//       console.log("Connected!");
//       let sql = "INSERT INTO student VALUES (name,roll,branch,year)";
//       con.query(sql, function (err, result) {
//         if (err){
//           console.log(err);
//           return;
//         } else {
//         console.log("Result: " + result);
//         }
//       });
//     }
// });

// UPDATE
// con.connect(function(err) {
//   if (err){
//     console.log(err);
//     return;
//   } else {
//       console.log("Connected!");
//       let sql = "INSERT INTO student VALUES (name,roll,branch,year)";
//       con.query(sql, function (err, result) {
//         if (err){
//           console.log(err);
//           return;
//         } else {
//         console.log("Result: " + result);
//         }
//       });
//     }
// });


// DELETE

// con.connect(function(err) {
//   if (err){
//     console.log(err);
//     return;
//   } else {
//       console.log("Connected!");
//       let sql = "DELETE FROM student WHERE roll = '--'";
//       con.query(sql, function (err, result) {
//         if (err){
//           console.log(err);
//           return;
//         } else {
//         console.log("Result: " + result);
//         }
//       });
//     }
// });


// async function getNotes(){
//     const [rows]=await pool.query("Select * from course")
//     return rows
// }

// const notes= getNotes()
// console.log(notes)


// const notes= getNotes(id){
//     const [rows2]=await pool.query(`
//     SELECT * 
//     FROM course
//     WHERE id= ?
//     `,[id])
//     return rows2[0]
// }

// console.log(notes)


// async function createNote(title,content){
//     const[result] =await pool.query(`
//     INSERT INTO course (course_id, course_name, semester, branch)
//     VALUES (?,?,?,?)
//     `,[course_id,course_name,semester,branch])
//     const id=result.insertId
//     return getNotes(id);
// }

// const result= createNote('EC102','Microprocessor','4','CSE')
// console.log(result);