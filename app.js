const express = require("express");
const bodyParser = require("body-parser");
// import con from './database'
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "student_registration",
    // host:process.env.MYSQL_HOST,
    // user:process.env.MYSQL_USER,
    // password:process.env.MYSQL_PASSWORD,
    // database:process.env.MYSQL_DATABASE
  });

  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Inside /");
      const sql = "SELECT * FROM student";
      con.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.render("index.ejs", { list: result });
        }
      });
    }
  });
});

// INSERT

app.post("/submit", function (req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "student_registration",
    // host:process.env.MYSQL_HOST,
    // user:process.env.MYSQL_USER,
    // password:process.env.MYSQL_PASSWORD,
    // database:process.env.MYSQL_DATABASE
  });

  const name = req.body.name;
  const roll = req.body.roll;
  const branch = req.body.branch;
  const year = req.body.year;

  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Inside insert");
      const sql =
        "INSERT INTO student (name, roll, branch, year) VALUES (?, ?, ?, ?)";
      const values = [name, roll, branch, year];
      con.query(sql, values, function (err, result) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.redirect("/");
        }
      });
    }
  });
});

// DELETE

app.post("/delete", function (req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "student_registration",
    // host:process.env.MYSQL_HOST,
    // user:process.env.MYSQL_USER,
    // password:process.env.MYSQL_PASSWORD,
    // database:process.env.MYSQL_DATABASE
  });

  const id = req.body.delete;
  console.log("printing");
  console.log(id);
  console.log(req.body);
  console.log("printing");

  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Inside Delete");
      const sql = "DELETE from student WHERE Roll=?";
      const values = [id];
      con.query(sql, values, function (err, result) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.redirect("/");
        }
      });
    }
  });
});

// UPDATE

app.post("/update", function (req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "student_registration",
    // host:process.env.MYSQL_HOST,
    // user:process.env.MYSQL_USER,
    // password:process.env.MYSQL_PASSWORD,
    // database:process.env.MYSQL_DATABASE
  });

  const name = req.body.name;
  const roll = req.body.roll;
  const branch = req.body.branch;
  const year = req.body.year;
  console.log(req.body);

  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Inside Update");

      const sql =
        "REPLACE INTO student (Name,Roll,Branch,Year) VALUES (?,?,?,?)";
      const values = [name, roll, branch, year];
      con.query(sql, values, function (err, result) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.redirect("/");
        }
      });
    }
  });
});

// LISTENING
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});
