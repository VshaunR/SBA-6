import express from 'express';
import mongoose from 'mongoose';
import recipeCTL from '../controllers/recipeController.mjs'
const router = express.Router();



//posting new recipe

router.post('/',recipeCTL.postRecipe);


//getting all the recipes
router.get('/',recipeCTL.getAllRecipe);


//edit recipe by id
router.put('/:id',recipeCTL.editRecipe);

//delete recipe by id
router.delete('/:id',recipeCTL.deleteRecipe)
export default router;