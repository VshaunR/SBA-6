import mongoose from "mongoose";
import Recipe from '../models/recipeSchema.mjs';
import Author from '../models/authorSchema.mjs';



async function postRecipe(req,res){

  try {
      const newRecipe = new Recipe()
        newRecipe._id =new mongoose.Types.ObjectId();
        newRecipe. authorName=req.body.authorName;
         newRecipe.recipeName=req.body.recipeName;
        //  console.log(req.body)
         req.body.ingredients.forEach((ing)=>{
          newRecipe.ingredients.push(ing)
         })
          // newRecipe.ingredients.push(req.body.ingredients);
          newRecipe.description=req.body.description ;


      // const newAuthor = new Author({
      //   name:newRecipe.authorName,
      //   recipe:newRecipe._id
      // })
      const newAuthor = new Author();
      newAuthor.name= newRecipe.authorName;
      newAuthor.recipes.push(newRecipe._id)
      newRecipe.author =newAuthor._id
      await newRecipe.save();
      await newAuthor.save();
      res.status(200).json(newAuthor)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};

async function getAllRecipe(req,res){

  try {
    let allRecipes= await Recipe.find({});
    console.log(allRecipes)
    res.status(200).json(allRecipes)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};
async function editRecipe(req,res){

  try {
    let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedRecipe)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};
async function deleteRecipe(req,res){

  try {
    let deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
    res.json(deleteRecipe)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};








export default {postRecipe,getAllRecipe,editRecipe,deleteRecipe};