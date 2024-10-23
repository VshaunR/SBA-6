import mongoose from "mongoose";
import Recipe from '../models/recipeSchema.mjs';
import Author from '../models/authorSchema.mjs';



async function postRecipe(req,res){

  try {
      const newRecipe = new Recipe(req.body);
      await newRecipe.save();

      const newAuthor = new Author({
        name:"Jack Kapper",
        recipe:newRecipe._id
      })
      await newAuthor.save();
      res.json(newRecipe)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};

async function getAllRecipe(req,res){

  try {
    
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};
async function editRecipe(req,res){

  try {
    
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};
async function deleteRecipe(req,res){

  try {
    
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }

};








export default {postRecipe};