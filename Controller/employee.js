var express= require('express');
var db = require('../DataBase/database');
var Employee = require('../Service/routes');
const router = express.Router();

//  #1   http://localhost:1010/employee
router.get("/first", (req, res, next) => {
    db.query(Employee.getEmployees(), (err, data)=> {
    if(!err) {   res.status(200).json({
         message:"Employees listed.",
         data});
         console.log(data);}
    });    
});

//  #2  http://localhost:1010/first/:id
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

//  #3  http://localhost:1010/first/delete
router.delete("/first/delete", (req, res, next) => {
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

//  #4  http://localhost:1010/first/add
router.post("/first/add", (req, res, next) => {
    let data = new Employee(req.body.name, req.body.post,
        req.body.dept,req.body.salary,req.body.status);     
    db.query(Employee.addEmployee(), (err, data)=> {
        res.status(200).json({ 
             message:"Worker added.", 
             data:data });    
      console.log(data);
    });
});   

module.exports = router;