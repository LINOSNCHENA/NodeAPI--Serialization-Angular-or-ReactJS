var express= require('express');
var db = require('../DataBase/database');
var Employee = require('../Service/routes');
const router = express.Router();


//  #1  http://localhost:1010/employees/add
router.post("/employees/", (req, res, next) => {
    let data = new Employee(req.body.name, req.body.dept,
        req.body.post,req.body.salary,req.body.published);     
        console.log(this.data);
        console.log("data-11");
    db.query(Employee.addEmployee(), (err, data)=> {
        res.status(200).json({ 
             message:"Worker POST11 added.", 
             data:data });    
      console.log(data);
    });
});  

//  #2A   http://localhost:1010/employee
router.get("/employees", (req, res, next) => {
    db.query(Employee.getEmployees(), (err, data)=> {
    if(!err) {   res.status(200).json({
         message:"Employees 2011 listed.",
         data});
         console.log(data);}
    });    
});

//  #2B  http://localhost:1010/employees/:id
router.get("/employees/:employeeId", (req, res, next) => {
    let EmployeeX2 = req.params.employeeId;
    db.query(Employee.getEmployee(EmployeeX2), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {
            res.status(200).json({
            message:"Employee 2011 found.", 
            data});
            console.log(data);
            } else {
                res.status(200).json({ message:"Employee Not found." });
            }} 
    });    
});

//  #3  http://localhost:1010/employees/delete
router.delete("/employees/:employeeId", (req, res, next) => {
    let pid = req.params.employeeId;
    db.query(Employee.deleteEmployee(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Employee deleted with id = ${pid }.`,
                   affectedRows: data.affectedRows
                 });
            } else { res.status(200).json({ message:"Employee Not found." });  } } 
    });   
});

 

module.exports = router;