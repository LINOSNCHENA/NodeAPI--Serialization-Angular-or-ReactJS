const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
var blacklist = [
  "http://localhost:4200",
  "http://localhost:4400",
  "http://localhost:4600",
  "http://localhost:4800",
  // Angular-ReactJS
  "http://localhost:8081",
  "http://localhost:8082",
  "http://localhost:8083",
];
const corsOption = {
  origin: blacklist,
};

app.use(cors(corsOption));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mexico application." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server #6 is running on port ${PORT}.`);
});
