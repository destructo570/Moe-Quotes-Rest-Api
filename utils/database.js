const Sequelize = require("sequelize");

const sequelize = new Sequelize("moe_quotes_sql", "root", "sql.hsa123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
