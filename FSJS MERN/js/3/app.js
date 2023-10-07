const express = require('express');
const app = express()
app.use(express.json())
const connectToMongoDB = require('./config');
const user = require('./model/user')
const cors = require('cors');
app.use(cors({origin:"*"}));
connectToMongoDB();
app.get('/get/user', (req,res)=>{
    const person = {
        userName:"name",
        id:"id",
        isActive:"Booleans",
        status:"a",
        notAvailable:"b"
    }
    const newData  = JSON.stringify(person);
    
    console.log(newData)
    res.json(person)
});
function verifyLogin(userPassword){
    let password = "12344321"
    if(userPassword ===password){
        return true;
    }
    return false;
}
app.post('/login/user', (req,res)=>{
    console.log(req.body)
    if(verifyLogin(req.body.password)){
        return res.json({msg:"You are logged in successfully"});
    }
    return res.json({msg:"Sorry incorrect password"});
})
app.post('/user/add', async (req,res)=>{
  try {
    const myDataToAdd = req.body
    const myNewData = await user.create(myDataToAdd)
    if(myNewData){return res.json({msg:"Data added successfully", data:myNewData, status:true});}
  } catch (error) {
    return res.json({msg:"Something Went Wrong", status:false});
  }
   
})
app.get('/user/get/all', async  (req,res)=>{
  try {
    let allUsers = await user.find()
    return res.json({msg:"Data fetched successfully", data:allUsers});
  } catch (error) {
    return res.json({msg:"Something Went Wrong", error:error.message});
  }
   
})
app.get('/user/get/:name', async (req,res)=>{
  try {
    const allUsers = await user.find({name:req.params.name})
    return res.json({msg:"Data fetched successfully", data:allUsers});
  } catch (error) {
    return res.json({msg:"Something Went Wrong"});
  } 
})
app.get('/user/getById/:id', async (req,res)=>{
  try {
    const allUsers = await user.findById(req.params.id)
    return res.json({msg:"Data fetched successfully", data:allUsers});
  } catch (error) {
    return res.json({msg:"Something Went Wrong"});
  } 
})
app.get('/user/getByCondition/:id', async (req,res)=>{
  try {
    const allUsers = await user.find(
        {
            $or:[
                {
                    email:req.params.id
                },
                {
                    password:"aaaaaa"
                }
            ]
        }
    )
    return res.json({msg:"Data fetched successfully", data:allUsers});
  } catch (error) {
    return res.json({msg:"Something Went Wrong"});
  } 
})
app.put('/update/user', (req,res)=>{
    console.log(req.body)
    if(verifyLogin(req.body.password)){
        return res.json({msg:"You are logged in successfully"});
    }
    return res.json({msg:"Sorry incorrect password"});
})
app.delete('/delete/user', (req,res)=>{
    console.log(req.body)
    if(verifyLogin(req.body.password)){
        return res.json({msg:"You are logged in successfully"});
    }
    return res.json({msg:"Sorry incorrect password"});
})


app.put('/user/edit/:id', async (req,res)=>{
   try {
   const userId = req.params.id;
   const requiredUser = await user.findById(userId);
   if(!requiredUser){
      return res.json({msg:"User not found", status:requiredUser})
   }
   requiredUser.email = "ali0548@gmail.com";
   requiredUser.password = "ali@786123";
   await requiredUser.save()
   return res.json({msg:"Data updated Successfully"})
   } catch (error) {
     return res.json({msg:"Something Went Wrong", status:false, error:error})
   }
});
app.delete('/user/delete/:id', async (req,res)=>{
   try {
   const userId = req.params.id;
    await user.findByIdAndDelete(userId)
   return res.json({msg:"Data deleted Successfully"})
   } catch (error) {
     return res.json({msg:"Something Went Wrong", status:false, error:error})
   }
});





app.listen(5000, ()=>{console.log("Server is created successfully on you computer PORT:5000")})