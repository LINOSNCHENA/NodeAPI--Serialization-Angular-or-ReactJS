use presly;

 DROP TABLE IF EXISTS BOOKS;
 DROP TABLE IF EXISTS AUTHORS;
 DROP TABLE IF EXISTS AUTHORBOOK;

CREATE TABLE Books(
    BookID SMALLINT NOT NULL PRIMARY KEY,
    BookTitle VARCHAR(60) NOT NULL,
    Copyright YEAR NOT NULL
) ENGINE = INNODB;
INSERT INTO Books
VALUES (12786, 'Java', 1934),
    (13331, 'MySQL', 1919),
    (14356, 'PHP', 1966),
    (15729, 'PERL', 1932),
    (16284, 'Oracle', 1996),
    (17695, 'Pl/SQL', 1980),
    (19264, 'JavaScript', 1992),
    (19354, 'www.java2s.com', 1993);

CREATE TABLE Authors(
    AuthID SMALLINT NOT NULL PRIMARY KEY,
    AuthFN VARCHAR(20),
    AuthMN VARCHAR(20),
    AuthLN VARCHAR(20)
) ENGINE = INNODB;
INSERT INTO Authors
VALUES (1006, 'H', 'S.', 'T'),
    (1007, 'J', 'C', 'O'),
    (1008, 'B', NULL, 'E'),
    (1009, 'R', 'M', 'R'),
    (1010, 'J', 'K', 'T'),
    (1011, 'J', 'G.', 'N'),
    (1012, 'A', NULL, 'P'),
    (1013, 'A', NULL, 'W'),
    (1014, 'N', NULL, 'A');

CREATE TABLE AuthorBook(
    AuthID SMALLINT NOT NULL,
    BookID SMALLINT NOT NULL,
    PRIMARY KEY (AuthID, BookID),
    FOREIGN KEY (AuthID) REFERENCES Authors (AuthID),
    FOREIGN KEY (BookID) REFERENCES Books (BookID)
) ENGINE = INNODB;

INSERT INTO AuthorBook
VALUES (1006, 14356),
    (1008, 15729),
    (1009, 12786),
    (1010, 17695),
    (1011, 15729),
    (1012, 19264),
    (1012, 19354),
    (1014, 16284);

SELECT BookTitle, AuthID FROM Books INNER JOIN AuthorBook;

SELECT BookTitle,
    Copyright,
    CONCAT_WS(' ', AuthFN, AuthMN, AuthLN) AS Author
FROM Books AS b
    LEFT JOIN AuthorBook AS ab ON b.BookID = ab.BookID
    LEFT JOIN Authors AS a ON ab.AuthID = a.AuthID
ORDER BY BookTitle