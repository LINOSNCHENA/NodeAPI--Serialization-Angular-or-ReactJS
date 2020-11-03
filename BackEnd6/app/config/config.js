module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Monze@2019",
    DB: "presly",
    dialect: "mysql",
  
    
    pool: {
      max: 7,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  