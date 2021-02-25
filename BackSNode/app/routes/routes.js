module.exports = app => {
    const banked = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bank
    router.post("/", banked.create);
  
    // Retrieve all Bankers present
    router.get("/", banked.findAll);
  
    // Retrieve all published banked
    router.get("/published", banked.findAllPublished);
  
    // Retrieve a single Bank with id
    router.get("/:id", banked.findOne);
  
    // Update a Bank with id
    router.put("/:id", banked.update);
  
    // Delete a Bank with id
    router.delete("/:id", banked.delete);
  
    // Delete all Bankers present
    router.delete("/", banked.deleteAll);
  
    app.use('/accounts', router);
  };
  