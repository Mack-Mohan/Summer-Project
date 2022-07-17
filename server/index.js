const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const port = process.env.PORT || 5000;
const app = express()
const cors = require('cors');
const path = require("path")

//------------------->Mongoose parameters<----------------------------------//

const MONGOURI = process.env.MONGOURI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS:  90000000,
	socketTimeoutMS: 90000000,
};




//-------------------------------->Connecting to database<---------------------//

const conn = mongoose.connect(MONGOURI,options);



app.use(express.json());
app.use(cors());
app.use('/media',express.static("media"));
require('./models/signUp');
app.use('/auth',require('./routes/user.routes'))
app.use('/app',require('./routes/routes'))
__dirname = path.resolve();

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname,'../client/build')))
app.get('/*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
})
 }//else{
//   app.get("/",(req,res)=>{
//     res.send("I am on!!")});


// }

//---------------------->root routes<------------------------//






//------------------------>listening on port<----------------------//


 app.listen(port, () => console.log(`app listening on port ${port}!`));