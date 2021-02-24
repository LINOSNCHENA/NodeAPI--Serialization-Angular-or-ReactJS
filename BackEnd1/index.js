const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const db = require("./queries");
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var blacklist = [
  "http://localhost:4200",
  "http://localhost:4600",
  "http://example2.com",
  "http://localhost:4800",
  "http://localhost:8081",
];
const corsOption = {
  origin: blacklist,
};
app.use(cors(corsOption));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/employees", db.getUsers);
app.get("/employees/:id", db.getUserById);
app.post("/employees", db.createUser);
app.put("/employees/:id", db.updateUser);
app.delete("/employees/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
