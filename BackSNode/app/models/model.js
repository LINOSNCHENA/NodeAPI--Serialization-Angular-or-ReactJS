module.exports = (sequelize, Sequelize) => {
  const Bank = sequelize.define("bank", {

    name: { type: Sequelize.STRING },
    dept: { type: Sequelize.STRING },
    post: { type: Sequelize.STRING },
    salary: { type: Sequelize.STRING },
    published: { type: Sequelize.BOOLEAN }
  });

  return Bank;
};
