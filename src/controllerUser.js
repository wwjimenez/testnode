//import sequelize
var Sequelize = require('sequelize');
//imporconst controller = {}
const controller = {}
const bcrypt = require("bcrypt");

// import model
var Users = require('./models/Users');


controller.index = (req,res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  res.json(data);
};

//

controller.list = async (req, res) => {

  const response = await Users.findAll()
  .then(function(data){
    const res = { success: true, data: data }
    return res;
  })
  .catch(error =>{
    const res = { success: false, error: error }
    return res;
  })
  res.json(response);

}

controller.create = async ( req, res) =>{

  try {
    let datos = req.body;
    const salt = await bcrypt.genSalt(10);
    console.log(datos);
    datos.password=await bcrypt.hash(datos.password, salt)
    const response = await Users.create(datos)
    .then(function(data){
      const res = { success: true, data: data, message:"created successful" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}

controller.update = async ( req, res) =>{

  try {

    const { id } = req.params;
    let datos = req.body;
    const response = await Users.update(datos,{
      where: { id: id}
    })
    .then(function(data){
      const res = { success: true, data: data, message:"updated successful" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}

controller.get = async ( req, res) =>{

  try {

    const { id } = req.params;

    const response = await Users.findAll({
      where: { id: id}
    })
    .then( function(data){
      const res = { success: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}


controller.delete = async ( req, res) =>{

  try {

    const { id } = req.params;

    const response = await Users.destroy({
      where: { id: id }
    })
    .then( function(data){
      const res = { success: true, data: data, message:"Deleted successful" }
      return res;
    })
    .catch(error => {
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}

module.exports = controller;

var sequelize = require('./database');

module.exports = controller
