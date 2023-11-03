const mongoose =  require('mongoose');
const connectToMongoDB = async ()=>{
    try{
     await mongoose.connect('mongodb+srv://abhai0548:F2fI6SzHniKjgxRC@cluster0.qnkb6gt.mongodb.net/?retryWrites=true&w=majority');
     console.log("Connected to mongoDB")
    }catch(err){
     console.log("Error whiel connecting to mongoDB", err.message)
    }
}

module.exports = connectToMongoDB