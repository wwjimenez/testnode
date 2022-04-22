//import sequelize
var Sequelize = require('sequelize');
const bcrypt = require("bcrypt");

//imporconst controller = {}
const controller = {}


// import model
var Productos = require('./models/Productos');
const { Op } = require("sequelize");

controller.index = (req,res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  res.json(data);
};

//console.log(token);

controller.list = async(req,res, next)=>{
  const response = await Productos.findAll()
  .then(function(data){
    const res = { success: true, data: data }
    return res;
  })
  .catch(error =>{
    const res = { success: false, error: error }
    return res;
  })
  res.json(response);


};

controller.create = async ( req, res) =>{

  try {
    let datos = req.body;
    const response = await Productos.create(datos)
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
    const response = await Productos.update(datos,{
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

    const response = await Productos.findAll({
      where: { id: id}
      // where: { id: [ 1, 2, 4 ] }
      // like: { name: "Milan" }
      // where: {
      //   name: {
      //     [Op.like]: '%Milan%'
      //   }
      // }
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

    const response = await Productos.destroy({
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
