import mongoose from "mongoose";
import Author from '../DepricatedScemas/authorSchema.mjs'
const {Schema} = mongoose;




const recipeSchema = new mongoose.Schema({
 _id:Schema.Types.ObjectId,

 recipeCategory:{
  type:String,
  required:true
 },
 recipeName:{
  type:String,
  required:true,

},

ingredients:[
 String
],
description:{
type:String,
required:true
},
// author:[{type:Schema.Types.ObjectId,ref:'Author'}],

});


export default mongoose.model("Recipe",recipeSchema);