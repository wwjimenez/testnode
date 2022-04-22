var express = require('express');
var route = express();
// import controller
const controller = require('./controller');
const controllerUser = require('./controllerUser');
const controllerClient = require('./controllerClient');
var User = require('./models/Users');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const auth = require('./auth');
const role = require('./role');
require("dotenv").config();

//const dotenv = require('dotenv');
// create route
route.get('/products/index',auth,role,controller.index);
route.get('/products/list',auth,role,controller.list);
route.get('/products/create',auth,role,controller.create);
route.get('/products/update/:id',auth,controller.update);
route.get('/products/get/:id',auth,role,controller.get);
route.get('/products/delete/:id',auth,role,controller.delete);


route.get('/user/index',auth,role,controllerUser.index);
route.get('/user/list',auth,role,controllerUser.list);
route.get('/user/create',controllerUser.create);
route.get('/user/update/:id',auth,role,controllerUser.update);
route.get('/user/get/:id',auth,role,controllerUser.get);
route.get('/user/delete/:id',auth,role,controllerUser.delete);


route.get('/client/buy',auth,role,controllerClient.buy);
route.get('/client/view',auth,role,controllerClient.view);
route.get('/client/history',auth,role,controllerClient.history);


route.post('/login',async(req,res,next)=>{
 const user = await User.findOne({ where : {email : req.body.email }});
 if(user){
    const password_valid = await bcrypt.compare(req.body.password,user.password);
    if(password_valid){
        token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
        res.status(200).json({ token : token });
    } else {
      res.status(400).json({ error : "Password Incorrect" });
    }
  
  }else{
    res.status(404).json({ error : "User does not exist" });
  }
  
  });
// exprot route
module.exports = route;