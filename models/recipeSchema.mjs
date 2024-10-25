import mongoose from "mongoose";
// import Author from '../DepricatedScemas/authorSchema.mjs'
const {Schema} = mongoose;




const recipeSchema = new mongoose.Schema({
 

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

recipeSchema.index({recipeCategory:1})
export default mongoose.model("Recipe",recipeSchema);