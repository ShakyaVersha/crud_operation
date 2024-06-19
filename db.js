
const mongoose = require('mongoose');
require('dotenv').config();


const mongoURL = "mongodb+srv://varsha:varsha1234@cluster0.qgdjfy6.mongodb.net/crud_node"
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('connected',()=>{
  console.log("connected to mongodb server!")
})
db.on('error',(err)=>{
  console.log("mongodb connection erroe!",err)
})
db.on('disconnected',()=>{
  console.log("mongodb disconnected")
})


module.exports = db;




 