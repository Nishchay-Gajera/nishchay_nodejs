//require depedencies

const express = require("express")
const mysql = require("mysql")
const app = express();
const bodyparser = require("body-parser")

app.use(bodyparser.json())

//creating connections

var mysqlconnection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'Admin@123',
    database: 'employeedb',
    multipleStatements: true
});
mysqlconnection.connect((err)=>{
    if(!err){
      console.log("Db connected successfully...")  
    }
    else{
        console.log(err)
    }
})

//Get data

app.get('/employees',function (req,res){
    mysqlconnection.query('SELECT * FROM employee',function (err,rows,fields){
        if(!err){
            res.send(rows)
        }
        else{
            res.send(err)
        }
    });
});

//get by id

app.get('/employees/:id',function (req,res){
    mysqlconnection.query('SELECT * FROM employee WHERE EmpID = ?',[req.params.id],function (err,rows,fields){
        if(!err){
            res.send(rows)
        }
        else{
            res.send(err)
        }
    });
});

//delete by id

app.delete('/employees/:id',function (req,res){
    mysqlconnection.query('DELETE FROM employee WHERE EmpID = ?',[req.params.id],function (err,rows,fields){
        if(!err){
            res.send('deleted successfully')
        }
        else{
            res.send(err)
        }
    });
});

//post request

app.post("/employees", (req, res) => {

    let post = { name: req.body.Name, empcode: req.body.EmpCode, salary: req.body.Salary};
  
    let sql = "INSERT INTO employee SET ?";
  
   mysqlconnection.query(sql, post, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee 1 added");
  
    });
  
  });

//Update request

app.put("/employees",(req,res)=>{
    let sql = "UPDATE employee SET Name = ? WHERE EmpID = ?";
    mysqlconnection.query(sql,[req.body.Name , req.body.EmpID],(err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Updated")
        }
    })
})

//server started

app.listen(3400,()=>{
    console.log("Server started successfully")
})