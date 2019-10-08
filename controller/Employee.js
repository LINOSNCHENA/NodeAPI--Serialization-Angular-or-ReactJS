var express= require('express');
var db = require('../db/Database');
var Employee = require('../service/Routes');
const router = express.Router();

//  #1   http://localhost:3030/employee
router.get("/first", (req, res, next) => {
    db.query(Employee.getEmployees(), (err, data)=> {
    if(!err) {   res.status(200).json({
         message:"Employees listed.",
         data});
         console.log(data);}
    });    
});

//  #2  http://localhost:3030/employee/:id
router.get("/first/:employeeId", (req, res, next) => {
    let EmployeeX2 = req.params.employeeId;
    db.query(Employee.getEmployee(EmployeeX2), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {
            res.status(200).json({
            message:"Employee found.", 
            data});
            console.log(data);
            } else {
                res.status(200).json({ message:"Employee Not found." });
            }} 
    });    
});

//  #3  http://localhost:3030/employee/delete
router.post("/first/delete", (req, res, next) => {
    //var pid = req.body.employeeId;
    //let pid = req.body.employeeId;
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

//  #4  http://localhost:3030/employee/add
router.post("/employee/add", (req, res, next) => {
    let employee = new Employee(req.body.name, req.body.dept,
        req.body.post,req.body.salary,req.body.status);     
    db.query(employee.addEmployee(), (err, data)=> {
        res.status(200).json({ 
             message:"Worker added.", 
             data:data });    
      console.log(data);
    });
});   

module.exports = router;