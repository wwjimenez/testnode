//import sequelize
var Sequelize = require('sequelize');
//imporconst controller = {}
const controller = {}
const bcrypt = require("bcrypt");

// import model
var Client = require('./models/Client');

controller.buy = async (req, res) => {
  try {
    let datos = req.body;
    //console.log(datos);
    //return res.json({'ss':'sss'});
    var response="";
    if(Array.isArray(datos)){
       response = await Client.bulkCreate(datos)
      .then(function(data){
        const res = { success: true, data: data, message:"created successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      });
    }else{
       response = await Client.create(datos)
      .then(function(data){
        const res = { success: true, data: data, message:"created successful" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      });
    }
    
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}

controller.history = async ( req, res) =>{

 try {
    const { id_user } = req.body;
    const response = await Client.findAll({
      where: { id_user: id_user}
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

controller.view = async ( req, res) =>{

  try {
    const { id_parent, id_user } = req.body;
    console.log(id_parent, id_user);
    const response = await Client.findAll({
      where: { id_parent: id_parent, id_user: id_user}
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



module.exports = controller;

var sequelize = require('./database');

module.exports = controller
