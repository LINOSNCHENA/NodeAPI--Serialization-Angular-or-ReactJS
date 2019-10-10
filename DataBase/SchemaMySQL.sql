---ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

use presly; DROP TABLE IF EXISTS bank1;

CREATE TABLE bank1 (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,  dept VARCHAR(50) NOT NULL,
post VARCHAR(50)NOT NULL, salary int NOT NULL,
status VARCHAR(50) DEFAULT "Temporal",
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank1 ( name, dept, post, salary )
 VALUES
 ("Leon Mavin", "Enginering","Director", 21200 ),   ( "Lorena Marvin", "Admin","Administrator", 18500 ),
 ("Nikolas Marvin", "Engineering","Manager", 18500 ),( "Wendy Marvin", "PoliceWoman","CEO", 32500 );

select* from bank1