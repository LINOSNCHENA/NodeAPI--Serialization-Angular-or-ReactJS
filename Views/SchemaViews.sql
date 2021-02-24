
-- ||===================================================================||

DROP VIEW IF EXISTS myView;
CREATE VIEW myView AS
     SELECT employee.first_name,job.title, employee.id, 
 FROM employee join job using (id) ;

select * from myView;

-- ||===================================================================||
SELECT C.First_Name, C.Last_Name, O.title
FROM Employee as C, job as O;

SELECT C.First_Name, C.Last_Name, O.title
FROM Employee as C
CROSS JOIN Job as O;
-- ||====================================================================||

SELECT employee.first_name, employee.city, job.title
FROM   employee, job
WHERE (employee.ID = job.ID);


SELECT employee.first_name, job.title, duty.task
FROM employee, job, duty
WHERE (employee.ID = job.ID AND employee.ID = duty.ID);