const Sequelize = require("sequelize")
const sequelize = require("../utils/database");

const Quote = sequelize.define('quote', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quote: {
    type: Sequelize.STRING,
    allowNull: false
  },
  anime: {
    type: Sequelize.STRING,
    autoIncrement: false
  },
  character: {
    type: Sequelize.STRING,
    autoIncrement: false
  },
});

module.exports = Quote;