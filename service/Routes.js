class Employee {
    constructor(name,post,dept,status, salary) 
    {   this.name = name;             this.post = post;
        this.dept = dept;             this.status = status; 
        this.salary = salary; }    

    static getEmployee(id)   {                                                       // GetOne  -1
        let sql = `SELECT * FROM bank1 WHERE id = ${id}`;       
        return sql;  }

    static getEmployees() {                                                         //  GetAll  -2
        let sql = `SELECT * FROM bank1`;        
        return sql;  }    
    
    static deleteEmployee(id) {                                                      // Delete  -3
        let sql = `DELETE FROM bank1 WHERE id = ${id}`;         
        return sql;  }
        
    static addEmployee() {                                                            // PostOne -4
        let sql = `INSERT INTO bank1 (name, post,dept,salary, status)         
        VALUES('${this.name}',${this.post}',${this.dept}',${this.salary}',${this.status})`; 
        return sql; }
}                                    
                                                               
module.exports= Employee;