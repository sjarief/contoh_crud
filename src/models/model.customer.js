const mongoose = require("mongoose")

mongoose.connect('mongodb://bejo:abc123@ds363996.mlab.com:63996/konsumen_db',  { useNewUrlParser: true }, () => {
    console.log("berhasil konek ke mlab")
})


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    }
  })
  
  module.exports = mongoose.model('Customer', CustomerSchema)