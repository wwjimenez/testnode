//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../database');

var Productos = sequelize.define('productos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero_lote: Sequelize.INTEGER,
  nombre: Sequelize.STRING,
  precio: Sequelize.BIGINT,
  cantidad_disponible: Sequelize.INTEGER,
  fecha_ingreso: Sequelize.DATE
});

module.exports = Productos