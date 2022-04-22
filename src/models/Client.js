//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../database');

var Client = sequelize.define('clientbuy', {
  id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  id_user: {
    type: Sequelize.INTEGER
  },
  id_product: {
    type: Sequelize.INTEGER
  },
  cantidad: {
    type: Sequelize.INTEGER
  },
  id_parent: {
    type: Sequelize.INTEGER
  },
  precio: {
    type: Sequelize.FLOAT
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = Client