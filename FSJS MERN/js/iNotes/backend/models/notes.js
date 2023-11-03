const mongoose = require('mongoose');

const notes = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
     type:String,
     required:[true, "Title is required"]
    },
    description:{
        type:String,
        required:[true, "Title is required"]
    }
}, {
    timeStamp: true
});
module.exports = mongoose.model('notes', notes);