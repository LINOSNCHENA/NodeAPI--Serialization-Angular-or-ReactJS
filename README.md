#  NodeJS, Serialization -and-MySQL

The API is processing data in the engine of the database. Therefore, the usage is split with much of the processing done in the database engine. The middle-ware constructs statements and then these constructed statements are transported to the database where the database engine execute them. 
Therefore, the computational load in mostly on the database engine.

## Technology stack used

The developmental stack of the application consist of;

1. FrontEnd  (Angular+9)
2. Server    (ExpresJS)
3. JavaScript(NodeJS)
4. Database  (MySQL)

## Execution commands

Enter the following commands to execute the application

```
cd BackEnd 5/6
--------------------------------------------------------------
npm install
npm install express sequelize  --save
npm install mysql2 body-parser cors --save
npm START

cd FrontEnd 4
--------------------------------------------------------------
npm install bootstrap --save
npm START

```

## Links for the frontend endpoints and backend endpoints

- Open [http://localhost:4200/](http://localhost:4200/employees) in browser to see the frontend of the application.
- Open [http://localhost:8080/](http://localhost:8080/employees) in browser to see the backend of the application.

## Interface U-Xperience
 Below are some screens shots from the application console

![ AppMuntu #1 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page1.png)
![ AppMuntu #2 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page2.png)
![ AppMuntu #3 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page3.png)
![ AppMuntu #4 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page4.png)
![ AppMuntu #5 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page5.png)
![ AppMuntu #6 ](https://github.com/LINOSNCHENA/NodeAPI-Without-Model-Mysql-implementaion-FS4/blob/master/uxViews/page6.png)
