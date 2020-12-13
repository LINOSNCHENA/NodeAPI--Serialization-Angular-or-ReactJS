const db = require("../models");
const Bank = db.bankers;
const Op = db.Sequelize.Op;

// Create and Save a new Bank
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({message: "Content can not be empty!" });
    return;
  }
  // Create a Bank
  const bank = {
    name: req.body.name,
    dept: req.body.dept,
    post: req.body.post,
    salary: req.body.salary,
    published: req.body.published ? req.body.published : false
  };

  // Save Bank in the database
  Bank.create(bank)
    .then(data => { res.send(data);
      console.log(data); console.log("xzambia");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bank."
      });
    });
};

// Retrieve all Banks from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Bank.findAll({ where: condition })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Bankers."
      });
    });
};

// Find a single Bank with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bank.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bank with id=" + id
      });
    });
};

// Update a Bank by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bank.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bank was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bank with id=${id}. Maybe Bank was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bank with id=" + id
      });
    });
};

// Delete a Bank with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bank.destroy({  where: { id: id }  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bank was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bank with id=${id}. Maybe Bank was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bank with id=" + id
      });
    });
};

// Delete all Banks from the database.
exports.deleteAll = (req, res) => {
  Bank.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Banks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Bankers."
      });
    });
};

// find all published Bank
exports.findAllPublished = (req, res) => {
  Bank.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Bankers."
      });
    });
};
