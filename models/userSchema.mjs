import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },

});

userSchema.index({email:1})


export default mongoose.model("User",userSchema);