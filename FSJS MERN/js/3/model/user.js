const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true, "Name is required"]
       
    },
    email:{
        type:String,
        unique:true,
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, "Passowrd is required"]
    }
});
module.exports = mongoose.model('user', userSchema);