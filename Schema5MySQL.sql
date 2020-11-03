drop database presly;
create database presly;

use presly;
DROP TABLE IF EXISTS bank1;
CREATE TABLE bank1
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    dept VARCHAR(50) NOT NULL,
    post VARCHAR(50)NOT NULL,
    salary int NOT NULL,
    status VARCHAR(50) DEFAULT "*five",
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bank1
    ( name, dept, post, salary )
VALUES
    ("Mavin", "Enginering", "Backend5", 21200 ),
    ( "Lorena", "Admin", "Administrator", 18500 ),
    ("Nikolas", "Engineering", "Manager", 18500 ),
    ( "Wendy", "PoliceWoman", "CEO", 32500 ),
    ("Louis", "Enginering", "Backend5", 21200 );

select*
from bank1