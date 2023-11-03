const express = require('express');
const app = express()
app.use(express.json())
const connectToMongoDB = require('./config');
const cors = require('cors');
app.use(cors({origin:"*"}));

app.use('/inote', require('./routes/index'))
connectToMongoDB();


app.listen(8080, ()=>console.log("Listening on 8080 port"))

