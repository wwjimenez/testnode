var Sequelize = require('sequelize');

const database = new Sequelize(
  'testnode', // name database
  'root2', // user database
  'T4ctical', // password database
  {
    host: 'localhost',
    dialect: 'mysql' // mariadb / sqlite / postgres
  }
);

database.sync().then(function(){
  console.log('DB connection sucessful.');
}, function(err){
  // catch error here
  console.log(err);

});

module.exports = database;
