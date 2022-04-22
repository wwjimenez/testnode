const jwt = require('jsonwebtoken');


auth = async(req,res,next) => {

  if(typeof req.headers.authorization !== "undefined"){
      try {
         let token = req.headers['authorization'].split(" ")[1];
         let decoded = await jwt.verify(token,process.env.SECRET);
          req.user = decoded;
         return next();
        } catch(err){
          res.status(401).json({"msg":"Not Authenticate"});
        }
  }
 else{
   res.json({ error: "No Authorization header" });
   }

}

module.exports = auth;