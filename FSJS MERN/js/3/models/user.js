const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "User name must be provided"]
        },
        email:{
            type:String,
            required:[true, "Email name must be provided"]
        },
        password:{
            type:String,
            required:[true, "Password name must be provided"]
        },
        status:{
            type:Boolean,
            default:false
           
        }
    }
)
const builedTable = mongoose.model('user', userSchema);
module.exports = builedTable