const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const userSchema = new mongoose.Schema({
    name:{
      type:String,
      require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cPassword:{
      type:String,
      require:true
  }
})
const collection = mongoose.model("users", userSchema)
module.exports = collection
