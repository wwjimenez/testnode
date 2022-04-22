const jwt = require('jsonwebtoken');

var Users = require('./models/Users');


role = async(req,res,next) => {

  if(typeof req.user !== "undefined"){
      try {
          
          const id = req.user.id;
          const response = await Users.findOne({
            where: { id: id}
          })
          .then( function(data){
            const res = { success: true, data: data.rol }
            return res;
          })
          .catch(error => {
            const res = { success: false, error: error }
            return res;
          })
          if(!response.success || (req.url.indexOf("/products")!=-1 && response.data !=1) ){
            return res.status(403).json({"msg":"Not permision"});
          }
          return next();
        } catch(err){
          res.status(403).json({"msg":"Not permision"});
        }
  }
 else{
   res.json({ error: "Not user" });
   }

}

module.exports = role;