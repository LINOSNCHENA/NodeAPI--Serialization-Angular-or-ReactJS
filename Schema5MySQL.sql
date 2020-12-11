drop database presly;
create database presly;
-- ==================================================================
use presly;
DROP TABLE IF EXISTS bank1;
CREATE TABLE bank1
(
    id SERIAL PRIMARY KEY,
    name1 VARCHAR(50) NOT NULL,
    dept VARCHAR(50) NOT NULL,
    post VARCHAR(50)NOT NULL,
    salary int NOT NULL,
    published boolean DEFAULT "1",
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bank1
    ( name1, dept, post, salary )
VALUES
    ("Mavin1x", "Enginering", "Backend5", 21200 ),
    ( "Lorena1x", "MySQL-ReactJS", "Administrator", 18500 ),
    ("Nikolas1x", "Engineering", "Manager", 18500 ),
    ( "Wendy1x", "MySQL-Angular", "CEO", 32500 ),
    ("Louis1x", "Enginering", "Backend5", 21200 );

select*
from bank1