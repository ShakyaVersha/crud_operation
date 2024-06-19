const mongoose = require('mongoose')
const { type } = require('os')
const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  phoneNo:{
    type: Number,
    required:true
  }, 
  address:{
    type: String,
    required:true
  }
})

const user = mongoose.model('user',userSchema);

module.exports = user;