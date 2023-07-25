const { Client } = require("pg");

module.exports = async function dbConnection() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "internship",
    password: "admin",
    port: 5432,
  });
};



