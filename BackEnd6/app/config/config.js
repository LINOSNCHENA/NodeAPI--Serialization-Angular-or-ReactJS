module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Monze@2018",
    DB: "presly",
    dialect: "mssql",
    //  dialect: "mysql",
  
    
    pool: {
      max: 8,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  