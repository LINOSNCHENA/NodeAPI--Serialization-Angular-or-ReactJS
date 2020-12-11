use presly;
DROP TABLE IF EXISTS bank1;
CREATE TABLE bank1
(
    id SERIAL PRIMARY KEY,
    name1 VARCHAR(50) NOT NULL,
    dept VARCHAR(50) NOT NULL,
    post VARCHAR(50)NOT NULL,
    salary int NOT NULL,
    published boolean DEFAULT "1"
);

INSERT INTO bank1
    ( name1, dept, post, salary )
VALUES
    ("Mav1x", "Enginering", "Backend5", 21200 ),
    ( "Lorx", "MySQL-ReactJS", "Administrator", 18500 ),
    ("Nikox", "Engineering", "Manager", 18500 ),
    ( "Wen", "MySQL-Angular", "CEO", 32500 ),
    ("Louis1x", "Enginering", "Backend5", 21200 );

select*
from bank1