const notes = require("../models/notes");
const jwt = require('jsonwebtoken')


const notesController = {
 
   addNote: async (req,res)=>{
      try {
         const createNote = await notes.create(req.body);
         if(notes){
            return res.json({status:true, msg:"Notes submited", data:createNote})
         }
         return res.json({status:false, msg:"Sorry Something Went Wrong", data:null})
      } catch (error) {
         console.log(error.message)
         return res.status(500).json({status:false, msg:"Sorry Something Went Wrong", data:null})
      }
   },
   getAllNotes: async (req,res)=>{
      try {
         const allNotes = await notes.find();
         return res.json({status:true, msg:"All Notes", data:allNotes})
      } catch (error) {
         console.log(error.message)
         return res.status(500).json({status:false, msg:"Sorry Something Went Wrong", data:null})
      }
   }

}



module.exports  = notesController;