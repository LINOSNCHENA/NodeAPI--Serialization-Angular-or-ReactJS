var express = require('express');
var bodyparser = require('body-parser');
var rusanguLtD = require('./Controller/employee');
var http = require("http");

//Use system configuration for port or use 1010 by default.
const port = process.env.port || 8080;
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const allowlist = ['http://localhost:4200', 'http://localhost:54938'];
app.use(cors(allowlist));

 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({ extended: false }));
 app.use("/", rusanguLtD);

//if we are here then the specified request is not found
//app.use((req, res, next) => {   const err = new Error("Not Found");   err.status = 404; next(err);});

//all other requests are not implemented.
app.use((err, req, res, next) => {
   res.status(err.status || 501);
   res.json({ error: { code: err.status || 501, message: err.message } });
});

server.listen(port)
console.log("Backend #5 an MySQL-API is serving on port : " + port)
module.exports = app;