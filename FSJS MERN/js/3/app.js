const express = require('express');
const app = express()
app.use(express.json())
const connectToMongoDB = require('./config');
const user = require('./model/user')
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
    if(myNewData){return res.json({msg:"Data added successfully", data:myNewData});}
    return res.json({msg:"Sorry incorrect password"});
  } catch (error) {
    
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

app.listen(3000, ()=>{console.log("Server is created successfully on you computer PORT:3000")})