use presly;

DROP TABLE IF EXISTS bank1;
DROP TABLE IF EXISTS banker;
DROP TABLE IF EXISTS books;

CREATE TABLE bank1
(   id SERIAL PRIMARY KEY,
    name1 VARCHAR(50) NOT NULL,
    dept VARCHAR(50) NOT NULL,
    post VARCHAR(50)NOT NULL,
    salary int NOT NULL,
    published boolean DEFAULT "1"
);

INSERT INTO bank1  ( name1, dept, post, salary )
VALUES
    ("Mav1x", "Enginering", "Backend5", 21200 ),
    ( "Lorx", "MySQL-ReactJS", "Administrator", 18500 ),
    ("Nikox", "Engineering", "Manager", 18500 ),
    ("Louis1x", "Enginering", "Backend5", 21200 );


CREATE TABLE banker
(   id SERIAL PRIMARY KEY,
    name1 VARCHAR(50) NOT NULL,
    dept VARCHAR(50) NOT NULL,
    post VARCHAR(50)NOT NULL,
    salary int NOT NULL,
    published boolean DEFAULT "1"
);

INSERT INTO banker ( name1, dept, post, salary )
VALUES
    ("Mav1x", "Enginering", "Backend5", 21200 ),
    ( "Lorx", "MySQL-ReactJS", "Administrator", 18500 ),
    ( "Banker", "MySQL-Angular", "CEO", 32500 ),
    ("Louis1x", "Enginering", "Backend5", 21200 );

CREATE TABLE `books` (  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `books` ADD PRIMARY KEY (`id`);
ALTER TABLE `books` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

select * from bank1, banker, books