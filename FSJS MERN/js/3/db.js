const mongoose  = require('mongoose');

const connectToMongoDb = async ()=>{
  try {
    await mongoose.connect('mongodb+srv://abhai0548:GeqY0G3BCSOq3ugn@cluster0.qnkb6gt.mongodb.net/?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to MongodDB")
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectToMongoDb