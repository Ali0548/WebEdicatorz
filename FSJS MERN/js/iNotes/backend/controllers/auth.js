const user = require("../models/user");
const jwt = require('jsonwebtoken')


const authentication = {
 
  registration: async (req,res)=>{
   try {
      const newMember = await user.create(req.body);
      return res.json({status:true, msg:"You are register successfully", data:newMember})
   } catch (error) {
      return res.json({status:false, msg:"Something Went Wrong", data:null})
   }
  },
  login: async (req,res)=>{
   try {
      const details = await user.findOne({email:req.body.email});
      if(details){
         if(details.password===req.body.password){
            const data = {
               name:details.name,
               email:details.email
            }
            const token = jwt.sign(data, "MAMIR$123", {
               expiresIn: "2h",
             });
            return res.json({status:true, msg:token, data:token})
         } else {
           
            return res.json({status:false, msg:"Invalid Credentails", data:null})
         }
      }
      return res.json({status:false, msg:"Invalid Credentails", data:null})
   } catch (error) {
      console.log(error.message)
      return res.json({status:false, msg:"Something Went Wrong", data:null})
   }
  }

}



module.exports  = authentication;