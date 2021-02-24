const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// db.sequelize.sync();
 // drop the table if it already exists
 db.sequelize.sync({ force: true }).then(() => {console.log("Drop and re-sync db.");});
 var blacklist = ['http://localhost:4200','http://localhost:4600','http://example2.com','http://localhost:4800','http://localhost:8081']
 const corsOption = {
  origin: blacklist,
};

app.use(cors(corsOption));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server #6 is running on port ${PORT}.`);
});
